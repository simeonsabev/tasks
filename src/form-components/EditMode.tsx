import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div>
            <Form>
                {editMode ? (
                    <div>
                        <h3>Edit Mode</h3>
                        <Form.Group controlId="userName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={userName}
                                onChange={handleNameChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="isStudent">
                            <Form.Check
                                type="switch"
                                id="student-switch"
                                label="Student"
                                checked={isStudent}
                                onChange={handleStudentChange}
                            />
                        </Form.Group>
                        <Button onClick={toggleEditMode}>Save</Button>
                    </div>
                ) : (
                    <div>
                        <h3>Edit Mode</h3>
                        <p>
                            {userName} is{" "}
                            {isStudent ? "a student" : "not a student"}
                        </p>
                        <Button onClick={toggleEditMode}>Edit</Button>
                    </div>
                )}
            </Form>
        </div>
    );
}
