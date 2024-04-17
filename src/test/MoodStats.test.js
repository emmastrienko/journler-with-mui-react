import MoodStats from '../MoodStats';
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

it("should have Card component with Icon component to display mood status", () => {
    act(() => {
        render(<MoodStats excitedValue={1}
                    happyValue={2}
                    surprisedValue={3}
                    sadValue={4}
                    angryValue={5} />, container);
    });
    
    const moodIcons = document.getElementsByClassName("MuiIcon-root");
    
    expect(moodIcons.length).toEqual(5);
});