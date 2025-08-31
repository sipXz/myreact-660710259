import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#667eea',
                marginBottom: '40px'
            }}>
                My React Components
            </h1>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0055ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Hello!
                </h2>
                <Welcome />
                <Greeting />
            </section>
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0055ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Profile
                </h2>
                <UserCard />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0055ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Time Now
                </h2>
                <Clock />
            </section>


            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0055ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Todo List
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;