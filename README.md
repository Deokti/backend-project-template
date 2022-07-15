# Backend Project Template

Простой шаблон для создания NodeJS приложений.

## Dependencies (Зависимости)

- [TypeScript](https://www.typescriptlang.org/)
- [express (в будущем следует заменить)](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors)
- [body-parse](https://www.npmjs.com/package/body-parser)
- [class-transformer](https://www.npmjs.com/package/class-transformer)
- [class-validator](https://www.npmjs.com/package/class-validator)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [inversify + reflect-metadata](https://inversify.io/)
- [tslog](https://www.npmjs.com/package/tslog)

## Файловая структура

### В древовидной структуре

```
├── src
│   ├── config
│   │   ├── config.service.interface.ts
│   │   ├── config.service.ts
│   │   ├── inversify.types.ts
│   ├── database
│   │   ├── database.service.interface.ts
│   │   ├── database.service.ts
│   ├── errors
│   │   ├── exeption.filter.interface.ts
│   │   ├── exeption.filter.ts
│   │   ├── http.error.ts
│   ├── interfaces
│   ├── logger
│   │   ├── logger.service.interface.ts
│   │   ├── logger.service.ts
│   ├── models
│   ├── router
│   │   ├── route.interface.ts
│   │   ├── router.controller.ts
│   ├── app.ts
│   └── main.ts
├── dist
├── .env
├── .eslintrc
├── .eslintrc
├── .eslintrc
├── .gitignore
├── .prettierrc
├── nodemon.json
├── package.json
├── README.md
└── tsconfig.json
```

### Подробнее о `src`

Главный файл откуда начинается сорка `main.ts`.

Главный файл приложения откуда запускаются все `app.ts`.

#### config

Конфигурация приложения.

В базовом шаблоне содержит сервис для обращения к `.env` и типы для `inversity`.

#### database

Содержит базовый интерфейс где определяется функция `connect`.

Содержит сервис, который отвечает за подключение к БД.

#### errors

Сервис для отлова ошибок.

#### interfaces

Папка для создания интерфесов

#### logger

Содержит сервис для логгирования, наследуемый от `tslog`.

Имеет несколько функций `info` `warn`, `error`.

#### models

Папка для создания моделей для БД.

#### router

Базовый абстрактный класс для создания роутов в приложении.

Должен наследоваться классом, где логика уже реализуется.
