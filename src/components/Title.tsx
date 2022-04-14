import React, { ReactElement } from "react";
import styles from './Title.module.css';

interface Props {
    children?: string | ReactElement;
}

export default function Title({ children }: Props) {
    return (
        <div className={styles.title}>
            {children}
        </div>
    );
}