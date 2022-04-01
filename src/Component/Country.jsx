import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Country(){
    const location =useLocation();
    console.log(location);
    const props=location.state;
    return (
        <ul>
            <li>{props.name.common}</li>
            <li><img src={props.flags.png}/></li>
            <li>{props.capital}</li>
        </ul>
    )
}