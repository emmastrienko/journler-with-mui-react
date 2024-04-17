import JournalViewer from '../JournalViewer';
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

it("should have card to view journal item details", () => {
    const journal = {
        journalId: 123,
        mood: "angry",
        title: "exam postponed",
        writeup: "exam postponed due to corona outbreak",
        journalDate: "22-2-2022"
    };
    act(()=>{
        render(<JournalViewer journal={journal} />,container);
    })
    
    const journalCards = document.getElementsByClassName("MuiCard-root");
    expect(journalCards.length).toEqual(1);
});
