import { useState } from "react"
import { useNavigate } from "react-router-dom/dist"

const Create=()=>{
    const [id, setId]=useState("")
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const userData={id, name, email}
        fetch("http://localhost:8000/Users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        .then(()=>{
            alert("User added successfully!")
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <h1>Create New User</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">ID:</label>
                <div>
                    <input type="number" value={id} onChange={(e)=>setId(e.target.value)} />
                </div>

                <label htmlFor="">Name:</label>
                <div>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                <label htmlFor="">Email:</label>
                <div>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <button type="submit">Create</button>
                <button onClick={()=>navigate("/")}>Back</button>

            </form>
        </div>
    )
}

export default Create