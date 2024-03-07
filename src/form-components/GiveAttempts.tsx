import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleRequestChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(event.target.value);
    };

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Attempts Left: {attemptsLeft}</h3>
            <Form>
                <Form.Group controlId="requestedAttempts">
                    <Form.Label>Enter number of attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={handleRequestChange}
                        placeholder="Enter number of attempts"
                    />
                </Form.Group>
                <Button
                    onClick={handleUseAttempt}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>
                <Button onClick={handleGainAttempts}>Gain</Button>
            </Form>
        </div>
    );
}
