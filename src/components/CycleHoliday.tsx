import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define the holidays
enum Holiday {
    Diwali = "🪔",
    DragonBoatFestival = "🎏",
    Halloween = "🎃",
    Christmas = "🎄",
    Thanksgiving = "🦃"
}

// Define the order of holidays for alphabetical and yearly transitions
const holidaysInOrder: Holiday[] = [
    Holiday.Christmas,
    Holiday.Diwali,
    Holiday.DragonBoatFestival,
    Holiday.Halloween,
    Holiday.Thanksgiving
];

// Function to get the next holiday alphabetically
const getNextHolidayAlphabetically = (currentHoliday: Holiday): Holiday => {
    const currentIndex = holidaysInOrder.indexOf(currentHoliday);
    const nextIndex = (currentIndex + 1) % holidaysInOrder.length;
    return holidaysInOrder[nextIndex];
};

// Function to get the next holiday by year
const getNextHolidayByYear = (currentHoliday: Holiday): Holiday => {
    const currentIndex = holidaysInOrder.indexOf(currentHoliday);
    const nextIndex = (currentIndex + 1) % holidaysInOrder.length;
    return holidaysInOrder[nextIndex];
};
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Diwali
    );

    const cycleAlphabetically = () => {
        setCurrentHoliday(getNextHolidayAlphabetically(currentHoliday));
    };

    const cycleByYear = () => {
        setCurrentHoliday(getNextHolidayByYear(currentHoliday));
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={cycleAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
