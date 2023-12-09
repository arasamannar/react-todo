import './App.css';
// import Createtodo from './Components/Createtodo';
// import Readtodo from './Components/Readtodo';
// import Updaetodo from './Components/Updaetodo';
// import Deletetodo from './Components/Deletetodo';
// import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid' style={{marginTop: '100px'}}>
      <div className='row'>
          <div className='col-4'>
            <input type='text' placeholder='Todo Name...' />
          </div>
          <div className='col-4'>
           <input type='text' placeholder='Todo Description...' />
          </div>
          <div className='col-4'>
            <button type='submit'>Add Todo</button>
          </div>
      </div>
    </div>
  );
}

export default App;
