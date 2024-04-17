import React from "react";
import Icon from "@mui/material/Icon";
import { Button, Card, Box } from "@mui/material";
import { green, orange, purple, red, blue } from "@material-ui/core/colors";

class JournalViewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const journal = this.props.journal;
    // console.log(journal.journalMode+''+journal.journalId);
    return (
      <Card sx={{ display: "flex" }}>
        <div
          className={journal.journalMode == "viewer" ? "show" : "hide"}
          id="journal-viewer"
        >
          <h1 id="journal-viewer__date">{journal.date}</h1>

          <Box>
            <div id="journal-viewer__mood">
              <div className={journal.mood == "Excited" ? "mood show" : "hide"}>
                <Icon
                  sx={{ fontSize: 100, color: green[800] }}
                  className="far fa-smile-beam fa-fw"
                ></Icon>
              </div>
              <div className={journal.mood == "Happy" ? "mood show" : "hide"}>
                <Icon
                  sx={{ fontSize: 100, color: purple[800] }}
                  className="far fa-smile fa-fw"
                ></Icon>
              </div>
              <div
                className={journal.mood == "Surprised" ? "mood show" : "hide"}
              >
                <Icon
                  sx={{ fontSize: 100, color: orange[800] }}
                  className="far fa-surprise fa-fw"
                ></Icon>
              </div>
              <div className={journal.mood == "Sad" ? "mood show" : "hide"}>
                <Icon
                  sx={{ fontSize: 100, color: blue[800] }}
                  className="far fa-frown fa-fw"
                ></Icon>
              </div>
              <div className={journal.mood == "Angry" ? "mood show" : "hide"}>
                <Icon
                  sx={{ fontSize: 100, color: red[800] }}
                  className="far fa-angry fa-fw"
                ></Icon>
              </div>
            </div>

            <h3 id="journal-viewer__title-viewer">{journal.title}</h3>
          </Box>
          <Box>
            <div id="journal-viewer__writeup-viewer">{journal.writeup}</div>
          </Box>

          <div id="journal-viewer__actions">
            <Button
              className="primary"
              id="edit_button"
              onClick={() => this.props.onEdit()}
            >
              Edit
            </Button>
            <Button
              sx={{ color: red[800] }}
              id="delete_button"
              onClick={() => this.props.onDelete(journal.journalId)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default JournalViewer;
