import { useRouter } from 'next/router';
import React from 'react';

interface ButtonProps {
    title: string,
    onPressed: () => void,
}

export default function Button({ title, onPressed }: ButtonProps) {
    return (
        <button onClick={onPressed}>
            {title}
        </button>
    );
}