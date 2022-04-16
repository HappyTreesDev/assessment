import React, { ReactElement, useState } from "react";
import FormField from "./FormField";

interface Props {
    value: string;
    onChange: (newValue: string) => void;
}
export default function TitleField({ value, onChange }: Props): ReactElement {

    function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value);
    }

    return (
        <FormField fieldName={'Goal Title'}>
            <input
                type="text"
                value={value}
                onChange={handleTitleChange}
            />
        </FormField>
    );
}