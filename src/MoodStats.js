import React from 'react';
import { Icon, Card } from '@mui/material';
import { green, orange, purple, blue, red } from '@mui/material/colors';

class MoodStats extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div>
               <h2>Mood Stats</h2>
                        <div id="journal-catalog__mood-stats">
                            <Card className="mood-stat">
                                <div className="mood"><Icon sx={{fontSize: 70, color: green[800]}} className="far fa-smile-beam"></Icon></div>
                                <div className="stat">{this.props.excitedValue}</div>
                            </Card>
                            <Card className="mood-stat">
                                <div className="mood"><Icon sx={{fontSize: 70, color: purple[800]}} className="far fa-smile"></Icon></div>
                                <div className="stat">{this.props.happyValue}</div>
                            </Card>
                            <Card className="mood-stat">
                                <div className="mood"><Icon sx={{fontSize: 70, color: orange[800]}} className="far fa-surprise"></Icon></div>
                                <div className="stat">{this.props.surprisedValue}</div>
                            </Card>
                            <Card className="mood-stat">
                                <div className="mood"><Icon sx={{fontSize: 70, color: blue[800]}} className="far fa-frown"></Icon></div>
                                <div className="stat">{this.props.sadValue}</div>
                            </Card>
                            <Card className="mood-stat">
                                <div className="mood"><Icon sx={{fontSize: 70, color: red[800]}} className="far fa-angry"></Icon></div>
                                <div className="stat">{this.props.angryValue}</div>
                            </Card>
                        </div>
            </div>
        );
    }
}

export default MoodStats;