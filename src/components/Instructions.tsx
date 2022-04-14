import React, { ReactElement } from "react";
import styles from "./Instructions.module.css";

interface Props {
    children?: string | ReactElement;
}

export default function Instructions({ children }: Props) {
    return (
        <div className={styles.instructions}>
            {children}
        </div>
    )
}