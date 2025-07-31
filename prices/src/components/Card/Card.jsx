import styles from "./card.module.css";

const Card = (props) => {

  const { price, speed, cardColor } = props;

  let cardListStyle;
  let cardTitleStyle;

  if (cardColor == "red") {
    cardTitleStyle = `${styles.titleCard} ${styles['titleCard_large']} ${styles[cardColor]}`;
    cardListStyle = `${styles.cardList} ${styles['cardList_chosen']}`;
  } else {
    cardTitleStyle = `${styles.titleCard} ${styles[cardColor]}`;
    cardListStyle = `${styles.cardList}`;
  }

  return (
    <>
      <ul className={cardListStyle}>
        <li className = {cardTitleStyle}>
          <p className={styles.titleText}>Безлимитный {price}</p></li>
        <li className={`${styles.priceInfo} ${styles[cardColor]}`}>
          <p>руб</p> 
          <div className={styles.priceWrap}>
            <p>{price}</p>
            <p>/мес</p>
          </div>
        </li>
        <li className={`${styles.speedInfo} ${styles.lightgrey} ${styles.darkgrey}`}>до {speed} Мбит/сек</li>
        <li className={`${styles.trafficInfo} ${styles.grey} ${styles.darkgrey}`}>Объем включенного трафика не ограничен</li>
      </ul> 
    </>
  
  )
}

export default Card;