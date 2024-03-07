import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <Form>
                <Form.Group controlId="userAnswer">
                    <Form.Label>Enter your answer:</Form.Label>
                    <Form.Control
                        type="text"
                        value={userAnswer}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Form>
            {userAnswer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
