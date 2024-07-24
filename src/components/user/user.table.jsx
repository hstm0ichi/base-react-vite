import { Space, Table, Tag } from 'antd';
import { fetchAllUsersAPI } from '../../services/api.service';
import { useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
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
        // setDataUsers(response.data);
    }

    loadUsers();
    return (
        <Table columns={columns} dataSource={dataUsers} />
    )
}

export default UserTable;