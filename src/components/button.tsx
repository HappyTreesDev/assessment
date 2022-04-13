import { useRouter } from 'next/router';
import React from 'react';

interface ButtonProps {
    title: string,
}

export default function Button({ title }: ButtonProps) {
    const router = useRouter();
    const handleClick = () => {
        router.push('/create-goal')
    }

    return (
        <button onClick={handleClick}>
            {title}
        </button>
    );
}