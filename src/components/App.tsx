/*import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import "./styles.css"
import { Te } from './Te';
import { fetchOneDevice } from '../http/deviceAPI';
export const App = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div data-testid={'App.DataTestId'}>
            
            <div className="testt">test</div>
            
            <div className='test'>
             efwwwwwwwwwwwwwwww
               <Te />
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 
            >{count}</h1>
      
         
        </div>
    );
};
 */


import React, { memo } from 'react'
import { ApplicationWrapper } from './ApplicationWrapper/ApplicationWrapper';
import { useTheme } from '../hooks/useTheme';
import { DisablePaddings } from './DisablePaddings/DisablePaddings';
import { Global } from './ApplicationWrapper/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../utils/routes';
export const App = memo(function App(): JSX.Element {
    const {theme, themeOfText} =useTheme()
	return (

<ApplicationWrapper background={theme ? theme : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>
 
</ApplicationWrapper>



	);
});

