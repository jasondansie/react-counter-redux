import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Button from './components/Button';
import { decrementByAmount, incrementByAmount, reset, selectCounter } from './components/features/counter/MySlice';

function App() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  const buttonHandler = (incramentor) => {

    if (incramentor === "i5") {
      dispatch(incrementByAmount(5));
    }
    else if (incramentor === "i1") {
      dispatch(incrementByAmount(1));
    }
    else if (incramentor === "d5") {
      dispatch(decrementByAmount(5));
    }
    else if (incramentor === "d1") {
      dispatch(decrementByAmount(1));
    }
    else {
      dispatch(reset());
    }

  }

  return (
    <main className="App">
      <div className='container'>
        <div className='circle'>
          <h1>{counter}</h1>
        </div>
        <div className='buttons'>
          <Button
            onClick={() => buttonHandler("d5")}
            buttonText="Descrease 5"
            buttonId="d5"
          />
          <Button
            onClick={() => buttonHandler("d1")}
            buttonText="Descrease 1"
            buttonId="d1"
          />
          <Button
            onClick={() => buttonHandler(0)}
            buttonText="reset"
            buttonId="reset"
          />
          <Button
            onClick={() => buttonHandler("i5")}
            buttonText="Increase 5"
            buttonId="i5"
          />
          <Button
            onClick={() => buttonHandler("i1")}
            buttonText="Increase 1"
            buttonId="i5"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
