import React from 'react';
import styles from './Kitchen.module.scss';
import {Link} from 'react-router-dom';

const Kitchen = () => {
  return(
    <div className={styles.component}>
      <h2>Kitchen view</h2>
      <Link to={`${process.env.PUBLIC_URL}/events/new`}>Event New</Link>
      <Link to={`${process.env.PUBLIC_URL}/booking/new`}>Booking New</Link>
    </div>
  );
};


export default Kitchen;
