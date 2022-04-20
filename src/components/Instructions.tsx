import React, { ReactElement } from "react";
import StyleSheet from "./Instructions.module.css";

interface Props {
    children?: string | ReactElement;
}

export default function Instructions({ children }: Props) {
    return (
        <div className={StyleSheet.instructions}>
            {children}
        </div>
    )
}