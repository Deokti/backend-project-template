import { inject, injectable } from "inversify";
import "reflect-metadata";
import { INVERSIFY_TYPES } from "./config/inversify.types";
import express, { Express } from "express";
import { json } from "body-parser";
import { ILoggerService } from "./logger/logger.service.interface";
import { IConfigService } from "./config/config.service.interface";
import { IDatabaseService } from "./database/database.service.interface";
import { IExeptionFilter } from "./errors/exeption.filter.interface";

@injectable()
export class App {
  app: Express;
  port: number;
  constructor(
    @inject(INVERSIFY_TYPES.Logger) private logger: ILoggerService,
    @inject(INVERSIFY_TYPES.ConfigService) private config: IConfigService,
    @inject(INVERSIFY_TYPES.DatabaseService) private database: IDatabaseService,
    @inject(INVERSIFY_TYPES.ExeptionFilter) private exeption: IExeptionFilter,
  ) {
    this.app = express();
    this.port = Number(this.config.get("PORT")) || 8000;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useRoutes(): void {}

  useMiddleware(): void {
    // Анализирует приходящий запрос от Frontend
    // и помещает данные в request.body. Если это не сделать,
    // никакие данные при отправке с Frontend по API не появятся в body
    this.app.use(json());
  }

  useExeptionFilter(): void {
    // При передаче четырёх параметров интерпретируется как
    // обработчик событий, который получаем ошибки первым аргументов,
    // а вторым, третьим и четвертым получает request response, next
    this.app.use(this.exeption.catch.bind(this.exeption));
  }

  public async init(): Promise<void> {
    this.useMiddleware();
    this.useRoutes();
    this.useExeptionFilter();

    await this.database.connect(); // В базовом шаблоне функция пустая
    this.app.listen(this.port);
    this.logger.info(`Сервер запущен на http://localhost:${this.port}`);
  }
}
