/* 
  **************************************************************************************************************************
  **************************************************************************************************************************
  ? NOT USTING THIS FILE FOR NOW. JUST KEEPING FOR NOW FOR BACKUP TEMPLATE, IF WE NEED TO CHANGE ROUTING LOGIC
  **************************************************************************************************************************
  **************************************************************************************************************************

*/

import { ErrorPage } from "../error-page";
import { HomeScreen, SettingsScreen } from "../views";

export const ROUTES = [
  {
    path: "/",
    component: <HomeScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/settings",
    component: <SettingsScreen />,
  },
  {
    path: "/*",
    component: <>eljlfsjdlfkjs</>,
  },
];
