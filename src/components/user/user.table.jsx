import { Table } from 'antd';


const UserTable = (props) => {
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

    return (
        <Table columns={columns} dataSource={props.dataUsers} rowKey={"_id"} />
    )
}

export default UserTable;