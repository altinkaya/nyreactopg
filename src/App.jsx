import { BrowserRouter, Outlet, Route, Routes, useParams,useNavigate ,Navigate, NavLink } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "./Util/globalVeribels"
import Applayout from "./layout/AppLayout"
import Home from "./page/Home"
import PageNotFound from "./layout/PageNotFound"
import Header from "./layout/Header"
import MainNav from "./layout/MainNav"
import Login from "./auth/Login"
import ProtectedRoute from "./auth/ProtectedRoute"




const Test = styled.p`
background-color: var(--color-purple-50);
`


function Posts(){
  return(
    <>
    <h1>Posts</h1>
    <Outlet/>
    </>
  )
}

function Post(){
let params = useParams();
  return(
    <h1>Post: {params.postId}</h1>
  )
}



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ roles: [] });

  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}><Applayout setIsAuthenticated={setIsAuthenticated} roles={user.roles}/></ProtectedRoute>}>
          <Route index element={<Navigate to="home"/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="/contact" element={<h1>Contact</h1>}/>
          <Route path="posts" element={<Posts/>}>
            <Route index element={<h1>New Posts</h1>}/> 
            <Route path=":postId" element={<Post/>}/>  
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
