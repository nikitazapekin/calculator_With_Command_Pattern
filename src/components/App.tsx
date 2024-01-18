import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import "./styles.css"
export const App = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(prev => prev + 1)
      //  TODO();
    }
   

    return (
        <div data-testid={'App.DataTestId'}>
            
            <div className="testt">test</div>
            
            <div className='test'>
             efwwwwwwwwwwwwwwww
               
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 
            >{count}</h1>
      
         
        </div>
    );
};
