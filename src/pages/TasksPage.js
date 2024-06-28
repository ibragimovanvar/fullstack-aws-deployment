import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import Modal from '../components/Modal';

const TasksPage = () => {
    const backend_url = 'http://18.142.240.80:8080/api/v1/tasks';
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        document.title = 'Tasks Page';
        fetch(backend_url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    const handleAdd = (newEntry) => {
        fetch(backend_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(savedEntry => setData([...data, savedEntry])) // This line updates the state with the new entry
            .catch(error => console.error('Fetch error:', error));
    };

    const handleDelete = (id) => {
        fetch(`${backend_url}/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                setData(data.filter(item => item.id !== id));
            })
            .catch(error => console.error('Fetch error:', error));
    };

    return (
        <div>
            <h1>Your Tasks</h1>
            <button onClick={() => setIsModalOpen(true)}>Add New</button>
            {isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleAdd}
                />
            )}
            <Table data={data} onDelete={handleDelete} />
        </div>
    );
};

export default TasksPage;

