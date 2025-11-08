import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
    const [userList, setUserList] = useState([])

    const fetchUser = async () => {
        const response = await axios("http://localhost:8000/Users")
        setUserList(response.data)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    console.log(userList)

    return (
        <div>
            <button>Create</button>
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
                                    <button>View</button>
                                    <button>Update</button>
                                    <button>Delete</button>
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