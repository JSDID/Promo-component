import Promo from "./components/Promo";
import promoImg from "./components/promo-bg.jpg";

function App() {
  return (
    <Promo
      title="Лучший шоколад для вас!"
      description="Побалуйте себя или близких нашим фирменным шоколадом из отборных ингредиентов."
      buttonLabel="Купить"
      onButtonClick={() => alert("Переход к покупке!")}
      image={promoImg}
    />
  );
}

export default App;
