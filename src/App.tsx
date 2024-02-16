import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Simeon Sabev Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 style={{ backgroundColor: "lightblue", padding: "20px" }}>
                Pawsitively Fascinating: Unleashing the Wondrous World of Dogs
            </h1>
            <p>
                Dogs have a remarkable sense of smell, which is estimated to be
                between 10,000 to 100,000 times more sensitive than humans! This
                incredible ability allows them to detect certain diseases, such
                as cancer and diabetes, and even predict epileptic seizures and
                other medical emergencies in some cases.
            </p>
            <img
                src="https://1.bp.blogspot.com/-ch-4qlvZwCA/VB8f0HHRQyI/AAAAAAABLvA/wszcnHtPcyo/s1600/cute-dog-picture-039-06.jpg"
                width="200"
                height="150"
                alt="A picture of a happy dog"
            />
            <ul>
                <li>
                    Loyalty: Dogs are known for their loyalty to their owners
                    and are often referred to as man&apos;s best friend. They
                    form strong bonds with their human companions and are known
                    to be devoted and protective.
                </li>
                <li>
                    Intelligence: Dogs are intelligent animals that can learn a
                    wide range of commands and behaviors. They are capable of
                    problem-solving and can be trained for various tasks, such
                    as agility, search and rescue, and assistance work.
                </li>
                <li>
                    Companionship: Dogs provide companionship and emotional
                    support to their owners. They are often valued for their
                    ability to provide comfort and joy, and many people consider
                    them to be important members of the family.
                </li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        Dogs have a sense of time and can sense how long
                        you&apos;ve been gone.Dogs dream, similar to humans, and
                        often twitch or move their paws while asleep. Dogs&apos;
                        nose prints are as unique as human fingerprints and can
                        be used to identify them.
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        Dogs sense of smell is 10,000 to 100,000 times more
                        acute than humans.ll be on the right side. Maybe try
                        adding an image? The Basenji is the only barkless dog
                        breed; instead, it makes a yodel-like sound. The
                        Newfoundland breed has webbed feet and is an excellent
                        swimmer.
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
