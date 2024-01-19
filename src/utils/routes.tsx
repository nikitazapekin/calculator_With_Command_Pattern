import { Route, Routes, Navigate } from "react-router-dom"

import {
 HOME_PAGE_ROUTE,
 SETTINGS_ROUTE
} from "./constants"
import Homepage from "../pages/Homepage"
import SettingsPage from "../pages/Settings";
const publicRoutes=[
   {
      path: HOME_PAGE_ROUTE,
      Component: Homepage
   },
   {
      path: SETTINGS_ROUTE,
      Component: SettingsPage
   },
]
const AppRoutes = (): JSX.Element => {
   return 
      (
         <Routes>
            {publicRoutes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component  />} />)
            )}
         <Route path="*" element={<Navigate replace to={HOME_PAGE_ROUTE} />} /> 

         </Routes>
      )
};
export default AppRoutes
//https://codesandbox.io/p/sandbox/redux-persist-example-5s6yc?file=%2Fpackage.json%3A10%2C3