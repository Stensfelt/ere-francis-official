import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [date, setDate] = useState(new Date());

  const isFriday = () => {
    return date.getDay() === 5 ? true : false;
  }
  const hours = 15 - date.getHours();
  const minutes = 59 - date.getMinutes();
  const seconds = 59 - date.getSeconds();

  const ereFrancis = () => {
    if (isFriday() && hours >= 16) {
      return "Yes";
    }
    else if (isFriday()) {
      return "Yes, in " + hours + " h " + minutes + " min " + seconds + " sec";
    }
    else {
      return "No";
    }
  }

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  });

  return (
    <div className="App">
      <h1 className="question">Time for Friends' Table?</h1>
      <div>
        <h2 className={isFriday() ? "green" : "red"}>
          {ereFrancis()}
        </h2>
      </div>
    </div>
  );
}

export default App;
