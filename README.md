## Promo-component

Промо-компонент для React-приложения, стилизованный под промо-блок Cambridge.ua

<img width="1641" height="562" alt="Screenshot_2025_09_20-9" src="https://github.com/user-attachments/assets/eb6e1245-e0ed-4878-9173-b6f89b2dffa4" />

## Описание

Компонент отображает промо-блок с заголовком, описанием, изображением и кнопкой действия. При нажатии на кнопку происходит переход на страницу покупки.

## Структура

- **src/components/Promo.jsx** — основной компонент Promo
- **src/components/Promo.css** — стили для Promo (градиент, SVG-паттерн, адаптивность)
- **src/components/trail-lesson.png** — изображение для промо
- **src/App.jsx** — пример использования Promo с роутингом

## Быстрый старт

1. Клонируйте репозиторий и установите зависимости:

   ```
   npm install
   ```

2. Запустите приложение:

   ```
   npm start
   ```

3. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Использование

```jsx
import Promo from './components/Promo';
import promoImg from './components/trail-lesson.png';

<Promo
  title="Пробний урок"
  description="Визначивши рівень, щоб оцінити методику, формат навчання, а також познайомитися з викладачем та одногрупниками, ми запрошуємо вас відвідати пробне заняття, яке не потребує оплати."
  buttonLabel="Забронювати"
  onButtonClick={handleBuyClick}
  image={promoImg}
/>
```

## Особенности

- Градиентный фон и SVG-паттерн, как на сайте Cambridge.ua
- Белый текст и светлая кнопка с цветным текстом
- Скругленные углы, тени, плавные анимации
- Полностью адаптивный дизайн
