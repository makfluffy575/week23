import styles from "./cardContainer.module.css";

import Card from "../card/Card";

const CardContainer = () => {

  const rates = [
    { price: 300, 
      speed: 10,
      cardColor: 'blue',
    },
    { price: 450, 
      speed: 50,
      cardColor: 'green',
    },
    { price: 550, 
      speed: 100,
      cardColor: 'red',
    },
    { price: "1 000", 
      speed: 200,
      cardColor: 'black',
    },
  ]

  console.log(rates);
  
  return (
    <div className={styles.cardContainer}>
      {rates.map((rate) => <Card price={rate.price} speed={rate.speed} cardColor={rate.cardColor}/>)}
    </div>
  )

}

export default CardContainer;