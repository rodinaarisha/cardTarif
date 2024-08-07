// TarifList.js
import React from 'react';
import Tarif from './Tarif';

import styles from './TarifList.module.css';

function TarifList() {
    return (
        // Можно использовать React.Fragment
        <React.Fragment>
            <div className={styles.tarif_container}>
            <Tarif
                title="Безлимитный 300"
                price={300}
                speed="до 10 Мбит/сек"
                clarification="Объем включенного трафика не ограничен"
            />
            <Tarif
                title="Безлимитный 450"
                price={450}
                speed="до 50 Мбит/сек"
                clarification="Объем включенного трафика не ограничен"
            />
            <Tarif
                title="Безлимитный 550"
                price={550}
                speed="до 100 Мбит/сек"
                clarification="Объем включенного трафика не ограничен"
            />
            <Tarif
                title="Безлимитный 1000"
                price={1000}
                speed="до 200 Мбит/сек"
                clarification="Объем включенного трафика не ограничен"
            />
            </div>
        </React.Fragment>
    );
}

export default TarifList;