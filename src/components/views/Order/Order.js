import React from 'react';
import styles from './Order.module.scss';
import {useParams} from 'react-router-dom';

const Order = () => {
  const {id} = useParams();
  return(
    <div className={styles.component}>
      <h2>Order view</h2>
      <h3>Id: {id}</h3>
    </div>
  );
};


export default Order;
