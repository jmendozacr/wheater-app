import React from 'react';
import WheaterDetail from './WheaterDetail';

export default {
    title: "Weather Detail",
    component: WheaterDetail
}

export const WheaterDetailExample = () => (<WheaterDetail humidity={12} wind={78}/>)