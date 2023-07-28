# Мессенджер

Учебный проект по курсу "Мидл-фронтенд разработчик" от Яндекс.Практикума.

Для начала нужно выполнить команду `npm install`, а после `npm run start`, чтобы запустить проект.

## Команды:

-   Запуск проекта: `npm run start`
-   Запуск проекта в режиме разработки: `npm run dev`
-   Билд: `npm run build`
-   Линтинг: `npm run lint`

[**Прототип мессенджера**](https://www.figma.com/file/p5gFCNuVfzzSKmsuMtIpW1/Practicum-Messenger?node-id=12%3A44&mode=dev)

## Страницы:

-   [Авторизация](https://deploy--illustrious-biscuit-2e7513.netlify.app/sign-in)
-   [Регистрация](https://deploy--illustrious-biscuit-2e7513.netlify.app/sign-up)
-   [Чаты](https://deploy--illustrious-biscuit-2e7513.netlify.app/chats)
-   [Профиль](https://deploy--illustrious-biscuit-2e7513.netlify.app/profile)
-   [Редактирование профиля](https://deploy--illustrious-biscuit-2e7513.netlify.app/profile-edit)
-   [Редактирование пароля](https://deploy--illustrious-biscuit-2e7513.netlify.app/profile-edit-password)
-   [500](https://deploy--illustrious-biscuit-2e7513.netlify.app/500)
-   [404](https://deploy--illustrious-biscuit-2e7513.netlify.app/asdasd)

## Компонентный подход:

Используется `Block`, `EventBus` и `Proxy`.

## Структура

`components` - директория с компонентами (некоторые из них, например формы, вероятно, будут вынесены в отдельную директорию)

`helpers` - содержит в себе вспомогательные модули/сервисы (вероятнее всего будет совмещён с `utils`)

`layouts` - содержит в себе компоненты разметки

`pages` - содержит в себе компоненты страниц

`utils` - различные "утилиты" (вероятнее всего будет совмещён с `helpers`)
