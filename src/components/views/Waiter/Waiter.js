import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => {
  return(
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/order/new`}>Order New</Link>
      <Link to={`${process.env.PUBLIC_URL}/order/order/:id`}>Order Details</Link>
      <Link to={`${process.env.PUBLIC_URL}/events/new`}>Event New</Link>
      <Link to={`${process.env.PUBLIC_URL}/events/event/:id`}>Event Details</Link>
      <Link to={`${process.env.PUBLIC_URL}/booking/new`}>Booking New</Link>
      <Link to={`${process.env.PUBLIC_URL}/booking/booked/:id`}>Booking Details</Link>
    </div>
  );
};


export default Waiter;
