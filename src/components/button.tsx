import React from 'react';
import * as StyleSheet from './Button.module.css';

interface ButtonProps {
    title: string;
    onPressed: () => void;
    primary?: boolean;
}

export default function Button({ title, onPressed, primary = false }: ButtonProps) {
    return (
        <button className={primary ? StyleSheet.primary : ''} onClick={onPressed}>
            {title}
        </button>
    );
}