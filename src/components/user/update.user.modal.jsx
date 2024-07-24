import { Input, Button, notification, Modal } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UpdateUserModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            resetAndCloseModal();
            await loadUsers();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setFullName();
        setEmail();
        setPassword();
        setPhone();
        setIsModalOpen(false);
    }

    return (
        <Modal
            title="Update a User"
            open={isModalOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Save changes"}
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
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
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal;