
import './App.css';
import Form from '../components/Form';
import Contacts from  '../components/Contacts';
import { useState } from 'react';

const INITIAL_PERSON = [{id: 1, firstName: 'James', lastName: 'Williams', address: '102 Mountain Dr, Greenville SC 29601', phoneNumber: '864-123-4567'}]


function App() {
const [person, setPerson] = useState(INITIAL_PERSON);

const addPerson = (newPerson) => {
  setPerson([...person, newPerson])
}



  return (
    <div className="App">
      <Form person={person} addPerson={addPerson} />
      <Contacts person={person} addPerson={addPerson} />
    </div>
  );
}

export default App;
