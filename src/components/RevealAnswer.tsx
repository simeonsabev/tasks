import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            {isVisible ? <div>42</div> : null}
            <Button onClick={() => setIsVisible(!isVisible)}>
                Reveal Answer
            </Button>
        </div>
    );
}
