import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${process.env.PUBLIC_URL}/order/new`}>Order New</Link>
      <Link to={`${process.env.PUBLIC_URL}/order/order/:id`}>Order Details</Link>
      <Link to={`${process.env.PUBLIC_URL}/events/new`}>Event New</Link>
      <Link to={`${process.env.PUBLIC_URL}/booking/new`}>Booking New</Link>
    </div>
  );
};

export default Tables;
