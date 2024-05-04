import React from 'react';
import style from './Preloader.module.css';
import preloader from '../../../assets/gifts/preload.svg';

let Preloader = () => {
  return <div>
    <img src={preloader} className={style.preload_gift} />
  </div>
}

export default Preloader