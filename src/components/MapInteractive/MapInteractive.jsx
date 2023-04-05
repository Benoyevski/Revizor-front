import React, { useState } from "react";
import styles from "./mapInter.module.css";

const MapInteractive = () => {
  const [mapOpen, setMapOpen] = useState(false);

  const toggleMap = () => {
    setMapOpen(!mapOpen)
  }
  return (
    <div className={styles.mapInter}>
      <button onClick={toggleMap} className={styles.toggleMapBtn}>{mapOpen ? "Скрыть карту" : "Открыть карту"}</button>
      <iframe className={styles.mapFrame}
        title="dinersMap"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A4d70bc60c03110cd1d592db84bb7f29008d789dc484e21d6556492d615571bcc&amp;source=constructor"
        width="100%"
        height={mapOpen ? "450px" : 0}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default MapInteractive;
