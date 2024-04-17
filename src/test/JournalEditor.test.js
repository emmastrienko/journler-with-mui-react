import JournalEditor from '../JournalEditor';
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

it("should have 5 IconButton components to display moods", () => {
    const journal = {
        journalMode: 'editor',
        journalId: 123,
        mood: "angry",
        title: "exam postponed",
        writeup: "exam postponed due to corona outbreak",
        journalDate: "22-2-2022"
    };
    act(()=>{
        render(<JournalEditor journal={journal} />,container);
    })
    const iconButtons = document.getElementsByClassName("MuiIconButton-root");
    expect(iconButtons.length).toEqual(5);
});

it("should have 2 TextField components to capture journal title and write-up ", () => {
    const journal = {
        journalMode: 'editor',
        journalId: 123,
        mood: "angry",
        title: "exam postponed",
        writeup: "exam postponed due to corona outbreak",
        journalDate: "22-2-2022"
    };
    act(()=>{
        render(<JournalEditor journal={journal} />,container);
    })
    const textFields = document.getElementsByClassName("MuiTextField-root");
    expect(textFields.length).toEqual(2);
});

it("should have 2 Button components to for save and cancel operations", () => {
    const journal = {
        journalId: 123,
        mood: "angry",
        title: "exam postponed",
        writeup: "exam postponed due to corona outbreak",
        journalDate: "22-2-2022"
    };
    act(()=>{
        render(<JournalEditor journal={journal} />,container);
    })
    const buttons = document.getElementsByClassName("MuiButton-root");
    expect(buttons.length).toEqual(2);
});