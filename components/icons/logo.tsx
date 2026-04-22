import React from 'react';

const AARLogo: React.FC = () => {
    return (
        <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="50" cy="50" r="30" fill="red" />
            <polygon points="100,10 130,90 70,90" fill="teal" />
            <rect x="150" y="30" width="40" height="40" fill="red" />
        </svg>
    );
};

export default AARLogo;