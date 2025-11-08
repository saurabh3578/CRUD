import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom/dist"

const Home = () => {
    const [userList, setUserList] = useState([])
    const navigate=useNavigate()

    const fetchUser = async () => {
        const response = await axios("http://localhost:8000/Users")
        setUserList(response.data)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const handleDelete=(id)=>{
        fetch("http://localhost:8000/Users/"+id, {
            method:"DELETE"
        })
        .then(()=>{
            alert("User Deleted Successfully")
            fetchUser()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <button onClick={()=>navigate("/create")}>Create</button>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={()=>navigate("/view/"+user.id)}>View</button>
                                    <button onClick={()=>navigate("/update/"+user.id)}>Update</button>
                                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home