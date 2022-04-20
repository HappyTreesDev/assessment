import React, { ReactElement } from "react";
import StyleSheet from './Title.module.css';

interface Props {
    children?: string | ReactElement;
}

export default function Title({ children }: Props) {
    return (
        <div className={StyleSheet.title}>
            {children}
        </div>
    );
}