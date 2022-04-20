import React, { ReactElement } from "react";
import StyleSheet from './FormField.module.css';

interface Props {
    fieldName: string,
    children: ReactElement | ReactElement[]
}
export default function FormField({ fieldName, children }: Props): ReactElement {
    return (
        <div className={StyleSheet.formField}>
            <div className={StyleSheet.fieldName}>
                {fieldName}
            </div>
            <div className={StyleSheet.field}>
                {children}
            </div>
        </div>
    )
}