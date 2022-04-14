import React from "react";
import Instructions from "./Instructions";
import Title from "./Title";

export default function Introduction() {
    return (
        <>
            <Title>Welcome to Coachify</Title>
            <Instructions>Below are your goals to work on. Please complete them when you can.</Instructions>
        </>
    );
}