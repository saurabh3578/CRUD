import axios from "axios"
import { useEffect, useId, useState } from "react"
import { useNavigate, useParams } from "react-router-dom/dist"

const Update = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const {userId}=useParams()

    const fetchUser=async()=>{
        const response=await axios.get("http://localhost:8000/Users/" + userId)
        setId(response.data.id)
        setName(response.data.name)
        setEmail(response.data.email)
    }

    useEffect(()=>{
        fetchUser()
    },[userId])

    const handleUpdate = (e) => {
        e.preventDefault()
        const userData = { id, name, email }
        fetch("http://localhost:8000/Users/" + userId, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(() => {
                alert("User Updated successfully!")
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <label htmlFor="">ID:</label>
                <div>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} disabled/>
                </div>

                <label htmlFor="">Name:</label>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>

                <label htmlFor="">Email:</label>
                <div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <button type="submit">Update</button>
                <button onClick={() => navigate("/")}>Back</button>

            </form>
        </div>
    )
}

export default Update