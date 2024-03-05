import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
/*export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    return <div>Two Dice</div>;
}*/
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(2);
    const [rightDie, setRightDie] = useState<number>(4);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {leftDie === rightDie && leftDie === 1 && (
                <div>You rolled snake eyes. You lose!</div>
            )}
            {leftDie === rightDie && leftDie !== 1 && (
                <div>You rolled a pair. You win!</div>
            )}
            {leftDie !== rightDie && <div>Keep trying!</div>}
        </div>
    );
}
/*
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            {leftDie === rightDie && leftDie === 1 && (
                <div>You rolled snake eyes. You lose!</div>
            )}
            {leftDie === rightDie && leftDie !== 1 && (
                <div>You rolled a pair. You win!</div>
            )}
        </div>
    );*/
