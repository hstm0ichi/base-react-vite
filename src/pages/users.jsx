import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUsersAPI } from "../services/api.service";
const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);

    //empty array => run once
    // not empty => next value !== prev value
    useEffect(() => {
        loadUsers();
    }, [current, pageSize]); //[] + condition


    const loadUsers = async () => {
        const response = await fetchAllUsersAPI(current, pageSize)
        if (response.data) {
            setDataUsers(response.data.result);
            setCurrent(response.data.meta.current);
            setPageSize(response.data.meta.pageSize);
            setTotal(response.data.meta.total);
        }

    }


    // lift-up state 
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUsers={loadUsers} />
            <UserTable
                dataUsers={dataUsers}
                loadUsers={loadUsers}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </div>
    )
}

export default UserPage;
