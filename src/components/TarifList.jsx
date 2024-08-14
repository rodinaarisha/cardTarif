// TarifList.js
import React, { useState } from 'react';
import Tarif from './Tarif';

import styles from './TarifList.module.css';

const tarifData = [{title:"Безлимитный 300", price:300, speed:"до 10 Мбит/сек",
clarification:"Объем включенного трафика не ограничен"},{title:"Безлимитный 450", price:450, speed:"до 50 Мбит/сек",
    clarification:"Объем включенного трафика не ограничен"},{title:"Безлимитный 550", price:550, speed:"до 100 Мбит/сек",
        clarification:"Объем включенного трафика не ограничен"},{title:"Безлимитный 1000", price:1000, speed:"до 200 Мбит/сек",
            clarification:"Объем включенного трафика не ограничен"}]

function TarifList() {

    const [activeTarifIndex, setActiveTarifIndex] = useState(null);

    const handleTarifClick = (index) => {
        // Меняем состояние на текущий индекс или сбрасываем, если он уже активен
        setActiveTarifIndex(activeTarifIndex === index ? null : index);
    };



    return (
        <React.Fragment>
            <div className={styles.tarif_container}>
            {tarifData.map((item,index)=>{
                return (
                    <Tarif
                    key={index} {...item} //запись короче
                    //более объмный вариант
                    /*title={item.title}
                    price={item.price}
                    speed={item.speed}
                    clarification={item.clarification}*/
                    isActive={activeTarifIndex === index} // Передаем активное состояние
                            onClick={() => handleTarifClick(index)} 
                    />

                )
            })}
            </div>
        </React.Fragment>
    );
}

export default TarifList;