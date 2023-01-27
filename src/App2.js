import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(1);

  const buttonHandler = () => {
    console.log("button pressed");
    setCounter(counter + 1);
  }

  return (
    <main className="App">
      <div className='container'>
        <div className='circle'>
          <h1>{counter}</h1>
        </div>
        <div className='buttons'>
          <Button
            onClick={buttonHandler}
            buttonText="Descrease 5"
          />
          <Button
            onClick={buttonHandler}
            buttonText="Descrease 1"
          />
          <Button
            onClick={buttonHandler}
            buttonText="reset"
          />
          <Button
            onClick={buttonHandler}
            buttonText="Increase 5"
          />
          <Button
            onClick={buttonHandler}
            buttonText="Increase 1"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
