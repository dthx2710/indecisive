import React, {useState} from 'react';
import logo from '../logo.svg';
import './App.css';
import Choices from '../components/Choices/Choices';

function App() {
  const [choices, setChoices] = useState([
    {id:0,desc:'Yes'},
    {id:1,desc:'No'},
    {id:2,desc:'Maybe'}
  ])
  // const [spinning,setSpin] = useState(false)

  const descChangeHandler = (event, id) =>{
    const choiceIndex = choices.findIndex(p => {
      return p.id === id;
    });
    const newChoice = {...choices[choiceIndex]};
    newChoice.desc = event.target.value;
    const newChoices = [...choices];
    newChoices[choiceIndex] = newChoice;
    setChoices(newChoices);
  };

  const delChoiceHandler = index => {
    if (choices.length===2){
      alert("Must have at least 2 choices!");
      return;
    }
    const newChoices = [...choices];
    newChoices.splice(index,1);
    setChoices(newChoices);
  }

  const newChoiceHandler = () => {
    //find first free id
    let id;
    for (let i=0; i<=choices.length+1; i++){
      const check = choices.filter(c=>c.id!==i); 
      if (check.length===choices.length){
        id = i;
        break;
      }
    }
    const newChoices = [...choices,{id:id,desc:''}];
    setChoices(newChoices);
  }
  
  const toggleSpinHandler = () => {
    const decisionIndex = Math.floor((Math.random()*choices.length));
    alert(choices[decisionIndex].desc)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Choices
        choices={choices}
        descChanged={descChangeHandler}
        delClicked={delChoiceHandler}
        />

        <button
        className="addChoice"
        type="submit"
        onClick={newChoiceHandler}
        >+
        </button>

        <button
        className="spinButton"
        type="submit"
        onClick={toggleSpinHandler}
        >
        Spin
        </button>
      </header>
    </div>
  );
};

export default App;
