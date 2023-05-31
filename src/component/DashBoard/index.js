import React, { useEffect, useState } from 'react';
import Card from '../Card';

import styles from "./styles.module.css"

const DashBoard = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(3);

    const Calling = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const res = await response.json();
            setData(res);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const deleteCard = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };

    useEffect(() => {
        Calling();
    }, []);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.btnContainer}>
                <button
                    id={styles.addBtn}
                    onClick={() => setCount(count + 1)}
                    disabled={data.length >= 3 ? count >= 10 ? true : false : true}>+&nbsp;Add User</button>
            </div>
            <div className={styles.cardContainer}>
                {data.slice(0, count).map((d, index) => (
                    <Card key={d.id}
                        profile_img={d.id}
                        name={d.name}
                        email={d.email}
                        city={d.address.city}
                        onDelete={() => deleteCard(index)}
                        show={data.length <= 3 ? false : count > 3 ? true : false} />
                ))}
            </div>
        </div>
    )

}

export default DashBoard