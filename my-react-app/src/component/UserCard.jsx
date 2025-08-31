import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img
        src="https://pbs.twimg.com/media/GVM6KxhXkAAn2iY?format=jpg&name=large"
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #7838a8ff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#000000ff', margin: '10px 0' }}>
        สิปกร บุตรโคตร
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#000000ff', fontSize: '14px' }}>
        นักพัฒนา React มือใหม่ที่กำลังเรียนรู้
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;