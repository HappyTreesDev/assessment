import { useRouter } from "next/router";
import React from "react";
import Button from "./Button";

export default function NewGoalButton() {
    const router = useRouter();

    return (
        <Button
            title={"Add Goal"}
            onPressed={() => router.push('/goal/new')}
        />
    );
}