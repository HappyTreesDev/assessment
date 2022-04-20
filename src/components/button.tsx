import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import StyleSheet from './Button.module.css';

interface ButtonProps {
    title: string;
    onPressed: () => void;
    primary?: boolean;
}

export default function Button({ title, onPressed, primary = false, ...props }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={primary ? StyleSheet.primary : ''}
            onClick={onPressed}
            {...props}
        >
            {title}
        </button>
    );
}