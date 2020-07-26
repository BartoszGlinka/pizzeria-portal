import React from 'react';
import styles from './Events.module.scss';
import {useParams} from 'react-router-dom';

const Events = () => {
  const {id} = useParams();
  return(
    <div className={styles.component}>
      <h2>Events view</h2>
      <h3>Id: {id}</h3>
    </div>
  );
};

export default Events;
