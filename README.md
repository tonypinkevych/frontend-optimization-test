# Задача

Рабочий файл: `index.tsx`. Проект сделан на nextjs.

Для старта:

`yarn`

`yarn dev`

В браузере ввести `localhost:3000`

## Описание приложения

Представим, что у нас есть страница, которая загружает элементы по сети, парсит их, рендерит на экране и анимирует. За первые 2 шага отвечает функция `heavyCalculations`. Остальное размазано по системе.

Вся конфигурация происходит в 2х файлах:

1. `tailwindcss.config.js` для анимаций;
2. `pages/index.tsx` для всего остального.

## Текущие проблемы

1. Анимация работает медленно;
2. Вызовы `heavyCalculation` продолжаются даже после того, как все элементы загрузились и появились на экране;
3. Некорректно отображается статус загрукзи (`Calculating...`).

## Требования

1. Анимация должна работать плавно, вне зависимости от того, какой у пользователя процессор. Проверять буду так, что в performance вкладке поставлю CPU throttle на 4х;
2. После того как все элементы появятся – не должно быть вызовов коллбэка в интервале. `totalCalls === MAX_CYCLES_COUNT`;
3. Надпись `Calculating...` должна показываться только когда происходит тяжёлое вычисление. И должна пропасть когда пункт №2 будет выполнен;
4. Опционально: переделать `setInterval` на `requestAnimationFrame`, но оставить ту же логику работы.
