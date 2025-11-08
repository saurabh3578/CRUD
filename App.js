import React from "react"
import ReactDOM from "react-dom/client"

const App=()=>{
    return(
        <div>
            <h1>This is applayout</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)