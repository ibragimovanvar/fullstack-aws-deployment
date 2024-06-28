import React from 'react';
import Tag from './Tag';
import './Table.css';

const Table = ({ data, onDelete }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Task name</th>
                <th>Type</th>
                <th>Tags</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.taskName}</td>
                    <td>{item.taskType}</td>
                    <td>
                        {item.tags.map((tag, tagIndex) => (
                            <Tag key={tagIndex} text={tag} index={tagIndex} />
                        ))}
                    </td>
                    <td>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;


