import Promo from "./components/Promo";
import promoImg from "./components/promo-bg.jpg";
import { useNavigate, Routes, Route } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleBuyClick = () => {
    navigate("/buy");
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Promo
            title="Лучший шоколад для вас!"
            description="Побалуйте себя или близких нашим фирменным шоколадом из отборных ингредиентов."
            buttonLabel="Купить"
            onButtonClick={handleBuyClick}
            image={promoImg}
          />
        }
      />
      <Route path="/buy" element={<div style={{padding: 40, fontSize: 24}}>Страница покупки</div>} />
    </Routes>
  );
}

export default App;
