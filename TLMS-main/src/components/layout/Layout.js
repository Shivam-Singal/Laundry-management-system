import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import EmployeeNav from "./EmployeeNav";

import { useState,useEffect } from "react";
const Layout = (props) => {
  //const [uservalue,setuservalue]=useState();
  
  //setuservalue(localStorage.getItem("userValue"));
  const UserValue=localStorage.getItem("userValue");
  console.log("AGGGGGGGGGGGGGGGGGAAAAAA");
  console.log(UserValue);
  if(UserValue==='Student'){
    //setuservalue(localStorage.getItem("userValue"));
    return (
      <Fragment>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
      </Fragment>
    );
  }
  else
  {
   // setuservalue(localStorage.getItem("userValue"));
    return (
      <Fragment>
        <EmployeeNav />
        <main className={classes.main}>{props.children}</main>
      </Fragment>
    );

  }
};
export default Layout;
