import React, { ReactElement } from "react";
import styles from './FormField.module.css';

interface Props {
    fieldName: string,
    children: ReactElement | ReactElement[]
}
export default function FormField({ fieldName, children }: Props): ReactElement {
    return (
        <div className={styles.formField}>
            <div className={styles.fieldName}>
                {fieldName}
            </div>
            <div className={styles.field}>
                {children}
            </div>
        </div>
    )
}