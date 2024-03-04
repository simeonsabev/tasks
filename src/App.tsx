import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Simeon Sabev Hello
                World
            </header>
            <TwoDice></TwoDice>
            <CycleHoliday></CycleHoliday>
            <StartAttempt></StartAttempt>
            <ChangeType></ChangeType>
            <RevealAnswer></RevealAnswer>
            <Counter></Counter>
        </div>
    );
}

export default App;
