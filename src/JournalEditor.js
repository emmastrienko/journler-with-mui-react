import React from 'react';
import Icon from '@mui/material/Icon';
import {Button, IconButton, TextField} from '@mui/material';
import { green, orange, purple, red, blue } from '@material-ui/core/colors';


class JournalEditor extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        const journal=this.props.journal;
        // console.log(journal);
        return (
            <div className={journal.journalMode == 'editor'?'show':'hide'} id="journal-editor">
                        <h1 id="journal-editor__date">{journal.date}</h1>
                        <h2 id="journal-editor__mood-label">How's your Mood Today</h2>
                        <div id="journal-editor__mood">
                            <IconButton className={journal.mood=='Excited' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Excited')}>
                                <Icon sx={{fontSize: 70, color: green[800]}} className="far fa-smile-beam fa-fw"></Icon>
                            </IconButton>
                            <IconButton className={journal.mood=='Happy' ? 'selectedMood' : 'mood'} 
                               onClick={()=>this.props.setMood('Happy')}>
                                <Icon sx={{fontSize: 70, color: purple[800]}} className="far fa-smile fa-fw"></Icon>
                            </IconButton>
                            <IconButton className={journal.mood=='Surprised' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Surprised')}>
                                <Icon sx={{fontSize: 70, color: orange[800]}} className="far fa-surprise fa-fw"></Icon>
                            </IconButton>
                            <IconButton className={journal.mood=='Sad' ? 'selectedMood' : 'mood'} 
                               onClick={()=>this.props.setMood('Sad')}>
                                <Icon sx={{fontSize: 70, color: blue[800]}} className="far fa-frown fa-fw"></Icon>
                            </IconButton>
                            <IconButton className={journal.mood=='Angry' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Angry')}>
                                <Icon sx={{fontSize: 70, color: red[800]}} className="far fa-angry fa-fw"></Icon>
                            </IconButton>
                        </div>
                        <TextField variant="outlined" value={journal.title} onChange={this.props.onTitleChange} 
                            placeholder="What's on your Mind?" 
                            type="text" id="journal-editor__title-editor" />
                        <TextField multiline variant='filled' value={journal.writeup} onChange={this.props.onWriteupChange} 
                            placeholder="I am all excited to know how was your day like!" 
                            name="journal-editor__writeup-editor" 
                            id="journal-editor__writeup-editor" 
                            cols="30" rows="20"></TextField>
                        <div id="journal-editor__actions">
                            <Button variant='contained' className="primary" id="save_button" onClick={()=>this.props.onSave()}>Save</Button>
                            <Button variant='contained' sx={{backgroundColor: purple[500]}} id="cancel_button" onClick={()=>this.props.onCancel()}>Clear</Button>
                        </div>
                    </div>
        );
    }
}

export default JournalEditor;