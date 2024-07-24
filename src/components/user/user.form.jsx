import { Input, Button, Flex, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = () => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();

    const handleClick = async () => {
        const response = await createUserAPI(fullName, email, password, phone);
        if (response.data) {
            notification.success({
                message: "Create User Success!",
                description: "Tạo User thành công!"
            })
        }
    }

    return (
        <div className="user-form" style={{ margin: "20px 20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={() => { handleClick() }}
                    >Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;