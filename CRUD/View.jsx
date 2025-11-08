import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom/dist"

const View=()=>{
    const [userDetails, setUserDetails]=useState({})
    const {userId}=useParams()
    const navigate=useNavigate()

    const fetchUser=async()=>{
        const response=await axios.get("http://localhost:8000/Users/"+userId)
        setUserDetails(response.data)
    }
    useEffect(()=>{
        fetchUser()
    }, [userId])

    console.log(userDetails)

    return(
        <div>
            <h1>User Details</h1>
            <p><strong>ID:</strong>{userDetails.id}</p>
            <p><strong>Name:</strong>{userDetails.name}</p>
            <p><strong>Email:</strong>{userDetails.email}</p>
            <button onClick={()=>navigate("/")}>Back</button>
        </div>
    )
}

export default View