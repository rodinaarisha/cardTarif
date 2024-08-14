import React from 'react';

import styles from './Tarif.module.css';
export default function Tarif({ title, price, speed, clarification, isActive, onClick  }) {
    const tarifStyle = {
        backgroundColor: price === 300 ? 'rgb(46, 129, 129)' :
                         price === 450 ? 'green' :
                         price === 550 ? 'rgba(255, 0, 0, 0.8)' : 
                         price === 1000 ? 'black' : 
                         'black',
        boxShadow: price === 550 ? '0 0 10px rgba(255, 0, 0, 0.6)' : 'none',
    //    transform: price === 550 ? 'scale(1.05)' : 'scale(1)', // нужно чтобы выделить тариф 550*/ 
    };
    const activeTarifStyle={
    transform: price === 550 ? 'scale(1.05)' : 'scale(1)'
    }

    return (
        <main
        className={`${styles.tarif} ${isActive ? styles.active : ''}`} // Добавляем класс 'active' если тариф активен
        onClick={onClick}
    >
            <div className={styles.tarif_body} style={{activeTarifStyle}} >
                <div className={styles.tarif_part1} style={tarifStyle}>
                    <h3 className={styles.tarif_title}>{title}</h3>
                    <div className={styles.tarif_price_container}>
                        <span className={styles.currency_symbol}>руб/</span>
                        <h3 className={styles.price}>{price}</h3>
                        <span className={styles.monthly}>/мес</span>
                    </div>
                </div>
                <div className={styles.tarif_part2}>
                    <p className={styles.title_speed}>{speed}</p>
                    <p className={styles.title_clarification}>{clarification}</p>
                </div>
            </div>
        </main>
    );
}