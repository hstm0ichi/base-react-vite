import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUsersAPI } from "../services/api.service";
const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);

    //empty array => run once
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await fetchAllUsersAPI()
        setDataUsers(res.data)
    }


    // lift-up state 
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUsers={loadUsers} />
            <UserTable
                dataUsers={dataUsers}
                loadUsers={loadUsers}
            />
        </div>
    )
}

export default UserPage;
