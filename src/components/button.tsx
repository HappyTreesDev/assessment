import { useRouter } from 'next/router';
import React from 'react';

interface ButtonProps {
    title: string,
    onPressed?: () => void,
}

export default function Button({ title, onPressed }: ButtonProps) {
    const router = useRouter();
    const handleClick = () => {
        router.push('/create-goal')
    }

    return (
        <button onClick={onPressed ?? handleClick}>
            {title}
        </button>
    );
}