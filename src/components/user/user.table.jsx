import { Space, Table, Tag } from 'antd';
import { fetchAllUsersAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => { loadUsers() }, []);

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        }
    ];

    const loadUsers = async () => {
        const response = await fetchAllUsersAPI();
        setDataUsers(response.data);
    }


    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}

export default UserTable;