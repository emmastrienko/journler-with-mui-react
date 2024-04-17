import React from 'react';
import './App.css';
import MoodStats from './MoodStats';
import JournalCollection from './JournalCollection';
import JournalViewer from './JournalViewer';
import JournalEditor from './JournalEditor';

class App extends React.Component{

  constructor(props){
    super(props);
    const currentDate = new Date();
            const months = ["January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"]
            const currentDateAsNumber = currentDate.getDate();
            const month = months[currentDate.getMonth()];
            const year = currentDate.getFullYear();
            let todaysDate = `${currentDateAsNumber} ${month} ${year}`;
            this.state={journalId:+new Date(),
                          date:todaysDate,
                          journalDate:'',
                          mood:'',
                          title:'',
                          writeup:'',
                          journalMode:'editor',
                          journalCollection:[]};
            
            // console.log(this.state.date);
            this.getMoodStats.bind(this);
            this.save.bind(this);
            
  }  

  onTitleChanged(e){
    this.setState({title:e.target.value})
  }

  onWriteUpChanged(e){
    this.setState({writeup:e.target.value})
  }

  onMoodChanged(mood){
    this.setState({mood:mood});
  }

  onJournalClicked(jrnl){
    this.setState({journalMode:'viewer',
                  journalId:jrnl.journalId,
                  mood:jrnl.mood,
                  title:jrnl.title,
                  writeup:jrnl.writeup,
                  journalDate:jrnl.journalDate})
  }

  save(){
    // console.log('saving');
    const journal = {
      journalId:+new Date(),
      date:this.state.date,
      title:this.state.title,
      writeup:this.state.writeup,
      mood:this.state.mood,
    };
    this.setState({journalCollection:[...this.state.journalCollection,journal]});
  } 

  getMoodStats(mood){
    return this.state.journalCollection.filter(journal=>journal.mood == mood).length;
  }

  cancel(){
    this.setState({title:'',mood:'',writeup:''});
  }
  
  deleteJournal(id){
    // console.log(id);
    const newJournalCollection = this.state.journalCollection.filter(journal => journal.journalId !== id);
    this.setState({journalCollection:newJournalCollection});
    this.setState({
                  mood:'',
                  title:'',
                  writeup:'',
                  journalId:'',
                  journalDate:'',
                  journalMode:'editor'});
  }

  editJournal(){
    // console.log("edit mode changed");
    this.setState({journalMode:'editor'});
  }

  setMood(mood){
    // console.log(mood);
    this.setState({mood:mood});
  }

  render(){
    const journal={journalId:this.state.journalId,
                  journalDate:this.state.journalDate,
                  mood:this.state.mood,
                  title:this.state.title,
                  writeup:this.state.writeup,
                  date:this.state.date,
                  journalMode:this.state.journalMode }
                
  return (
    <div className="app-container">
                    <div id="journal-branding__title">
                        <h1>Journler</h1>
                    </div>
                    <div id="journal-catalog">
                        <MoodStats excitedValue={this.getMoodStats('Excited')}
                                   happyValue={this.getMoodStats('Happy')}
                                   surprisedValue={this.getMoodStats('Surprised')}
                                   sadValue={this.getMoodStats('Sad')}
                                   angryValue={this.getMoodStats('Angry')}/>
                        <JournalCollection collection={this.state.journalCollection}
                                           onJournalClicked={this.onJournalClicked.bind(this)}/>
                    </div>
                     <JournalViewer journal={journal}
                                    onEdit={this.editJournal.bind(this)}
                                    onDelete={this.deleteJournal.bind(this,this.state.journalId)}/> 
                   

                    <JournalEditor journal={journal}
                                 setMood={this.setMood.bind(this)} 
                                 onTitleChange={this.onTitleChanged.bind(this)}
                                 onWriteupChange={this.onWriteUpChanged.bind(this)}
                                 onSave={this.save.bind(this)}
                                 onCancel={this.cancel.bind(this)}/>
                  </div> 
  );
  }
}

export default App;
