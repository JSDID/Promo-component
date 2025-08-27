import { useNavigate, Routes, Route } from 'react-router-dom';
import Promo from './components/Promo';
import promoImg from './components/trail-lesson.png';

const promoData = {
  title: 'Пробний урок',
  description:
    'Визначивши рівень, щоб оцінити методику, формат навчання, а також познайомитися з викладачем та одногрупниками, ми запрошуємо вас відвідати пробне заняття, яке не потребує оплати.',
  buttonLabel: 'Забронювати',
  image: promoImg,
};

function App() {
  const navigate = useNavigate();

  const handleBuyClick = () => navigate('/buy');

  return (
    <Routes>
      <Route path="/" element={<Promo {...promoData} onButtonClick={handleBuyClick} />} />
      <Route
        path="/buy"
        element={<div style={{ padding: 40, fontSize: 24 }}>Страница покупки</div>}
      />
    </Routes>
  );
}

export default App;
