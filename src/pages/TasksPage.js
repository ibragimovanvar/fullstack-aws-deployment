import React, {useEffect, useState} from 'react';
import Table from '../components/Table';
import Modal from '../components/Modal';

const TasksPage = () => {
    const bakend_url = 'http://localhost:8080/api/v1/tasks';
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        document.title = 'Tasks Page';
        fetch(bakend_url)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const handleAdd = (newEntry) => {
        fetch(bakend_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry),
        })
            .then(response => response.json())
            .then(savedEntry => setData([...data, savedEntry]));
    };

    const handleDelete = (id) => {
        fetch(bakend_url + `${id}`, {
            method: 'DELETE',
        })
            .then(() => setData(data.filter(item => item.id !== id)));
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
            <Table data={data} onDelete={handleDelete}/>
        </div>
    );
};

export default TasksPage;
