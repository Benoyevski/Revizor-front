import styles from "./info.module.css";
import React from "react";

const Info = () => {
  return (
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Лучшие рестораны</h3>
          <p className={styles.infoText}>
          1,2 милиона ресторанов - от уличной еды до высокой кухни
          </p>
        </div>

        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Свежие отзывы</h3>
          <p className={styles.infoText}>
            Фотографии и отзывы о ресторанах от путешественников нашего
            сообщества
          </p>
        </div>

        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Выбирай то, что ты любишь</h3>
          <p className={styles.infoText}>
          Упрощенный поиск по твоим вкусам.
            Рыба?мясо? мы найдем то, что Вам нужно
          </p>
        </div>
      </div>
  );
};

export default Info;