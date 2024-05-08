import { Outlet } from "react-router-dom"
import Header from "../layout/Header"

function Applayout(){ 

    return(
    <>
  <Header/>  
  <Outlet/>
    
    </>
    )
  
  }

  export default Applayout;