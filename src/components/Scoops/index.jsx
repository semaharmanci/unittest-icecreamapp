import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4577/scoops").then((res) => setData(res.data));
  }, []);

  const addToBasket = (item) => {
    
    const found = basket.find((i) => i.name === item.name);

    if (found) {
      const updated = { ...found, amount: found.amount + 1 };

      const temp = basket.map((i) => (i.name === found.name ? updated : i));

      setBasket(temp);
    } else {

      setBasket([...basket, { ...item, amount: 1 }]);
    }
  };

  const removeFromBasket = (name) => {

    const found = basket.find((i) => i.name === name);

    if (found.amount > 1) {

      const updated = { ...found, amount: found.amount - 1 };

      const temp = basket.map((i) => (i.name === found.name ? updated : i));

      setBasket(temp);
    } else {

      setBasket(basket.filter((i) => i.name !== name));
    }
  };
  
  const total = basket.reduce((total, i) => total + i.amount * 20, 0);

  return (
    <div>
      <h1>Dondurma Cesitleri</h1>
      <p>
        Tanesi <span className="text-success">20</span> ₺
      </p>
      <h3>
        Cesitler Ucreti <span data-testid="total" className="text-success">{total}</span> ₺
      </h3>

      <div className="p-3 row gap-5 mt-4 justify-content-between">
        {data.map((i) => {
          const found = basket.find((item) => item.name === i.name);

          return (
            <Card
              amount={found?.amount || 0}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
              item={i}
              key={i.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;
