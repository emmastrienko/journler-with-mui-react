import React from "react";
import { Card, Icon, Box } from "@mui/material";
import { green, orange, purple, red, blue } from "@mui/material/colors";

class JournalCollection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const getMoodIcon = (mood) => {
      switch (mood) {
        case "Excited":
          return (
            <Icon
              sx={{ fontSize: 100, color: green[800] }}
              className="far fa-smile-beam fa-fw"
            ></Icon>
          );

        case "Happy":
          return (
            <Icon
              sx={{ fontSize: 100, color: purple[800] }}
              className="far fa-smile fa-fw"
            ></Icon>
          );

        case "Surprised":
          return (
            <Icon
              sx={{ fontSize: 100, color: orange[800] }}
              className="far fa-surprise fa-fw"
            ></Icon>
          );
        case "Sad":
          return (
            <Icon
              sx={{ fontSize: 100, color: blue[800] }}
              className="far fa-frown fa-fw"
            ></Icon>
          );

        case "Angry":
          return (
            <Icon
              sx={{ fontSize: 70, color: red[800] }}
              className="far fa-angry fa-fw"
            ></Icon>
          );

        default:
          return null;
      }
    };
    return (
      <div>
        <h2>Journals</h2>
        <ul id="journal-catalog__collection">
          {this.props.collection.map((journal) => (
            <Card sx={{ display: 'flex', justifycontent: 'space-between'}}
              onClick={() => this.props.onJournalClicked(journal)}
              key={journal.id}
              className="journal-catalog__collection--journal"
            >
              <Box>
                <h3 variant="subtitle1" id="title_date">
                  {journal.title} - {journal.date}
                </h3>
                <p>{journal.writeup}</p>
              </Box>
              <Box display="flex" justifyContent="flex-end">{getMoodIcon(journal.mood)}</Box>
            </Card>
          ))}
        </ul>
      </div>
    );
  }
}

export default JournalCollection;
