import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUsersAPI } from "../services/api.service";
const UsersPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => { loadUsers() }, []);

    const loadUsers = async () => {
        const response = await fetchAllUsersAPI();
        setDataUsers(response.data);
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUsers={loadUsers} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}
export default UsersPage;