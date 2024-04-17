import JournalCollection from '../JournalCollection';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should have Card component to display Journal Items", () => {
    const collection = [
        {
            journalId: 123,
            mood: "angry",
            title: "exam postponed",
            writeup: "exam postponed due to corona outbreak",
            journalDate: "22-2-2022"
        },
        {
            journalId: 456,
            mood: "happy",
            title: "results out",
            writeup: "cleared exam with distinction",
            journalDate: "22-6-2022"
        }
    ]
    act(() => {
        render(<JournalCollection collection={collection}/>, container);
    });
    
    const journalItems = document.getElementsByClassName("MuiCard-root");
    expect(journalItems.length).toEqual(2);

});

it("should have Card component with Icon component to display mood status", () => {
    const collection = [
        {
            journalId: 123,
            mood: "angry",
            title: "exam postponed",
            writeup: "exam postponed due to corona outbreak",
            journalDate: "22-2-2022"
        },
        {
            journalId: 456,
            mood: "happy",
            title: "results out",
            writeup: "cleared exam with distinction",
            journalDate: "22-6-2022"
        }
    ]
    act(() => {
        render(<JournalCollection collection={collection}/>, container);
    });
    
    const journalItems = document.getElementsByClassName("MuiCard-root");
    
    const journalItemMoods = journalItems[0].getElementsByClassName("material-icons");
    expect(journalItemMoods.length).toEqual(1);
});