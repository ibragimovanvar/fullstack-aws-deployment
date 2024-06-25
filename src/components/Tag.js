import React from 'react';
import './Tags.css';

const TAG_COLORS = ['tag-blue', 'tag-green', 'tag-red', 'tag-yellow', 'tag-purple'];

const Tag = ({ text, index }) => {
    const colorClass = TAG_COLORS[index % TAG_COLORS.length];
    return <span className={`tag ${colorClass}`}>{text}</span>;
};

export default Tag;
