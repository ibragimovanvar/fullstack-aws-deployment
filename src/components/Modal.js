import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ onClose, onSave }) => {
    const [taskName, setTaskName] = useState('');
    const [taskType, setTaskType] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const tagsArray = tags.split(',').map(tag => tag.trim());
        onSave({ taskName: taskName, taskType: taskType, tags: tagsArray });
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add New Entry</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Task name</label>
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Task type</label>
                        <input
                            type="text"
                            value={taskType}
                            onChange={(e) => setTaskType(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Tags (separate with commas)</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
