import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./CRUD/Home"
import Create from "./CRUD/Create"
import Update from "./CRUD/Update"
import View from "./CRUD/View"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom/dist"

const App=()=>{
    return(
        <div>
            <Outlet/>
        </div>
    )
}

const appRouting=createBrowserRouter([
    {
        element:<App/>,
        path:"/",
        children:[
            {
                element:<Home/>,
                path:"/"
            },
            {
                element:<Create/>,
                path:"/create"
            },
            {
                element:<Update/>,
                path:"/update/:userId"
            },
            {
                element:<View/>,
                path:"/view/:userId"
            }
        ],
        errorElement:<h1>Page not found!</h1>
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouting}/>)