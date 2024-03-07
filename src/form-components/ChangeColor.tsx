import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("");

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown"
    ];

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    label={color}
                    id={`color-${color}`}
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={handleColorChange}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    marginTop: "10px",
                    color: "white"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
