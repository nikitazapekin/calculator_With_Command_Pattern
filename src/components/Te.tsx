import React, {useEffect, useState} from 'react';
//import classes from './App.module.scss';
//import "./test.css"
import {Link, Outlet} from "react-router-dom";
import { fetchOneDevice } from '../http/deviceAPI';

export const Te = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1)
      //  TODO();
    }
    useEffect(()=> {
fetchOneDevice(4)
    }, [])
    return (
        <div data-testid={'App.DataTestId'}>
            
         
           
        
      
         
        </div>
    );
};
