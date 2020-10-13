import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Teammate from './components/Teammate';
import Form from './components/Form';
// import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teammates, setTeammates] = useState([])    
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    let newTeammate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeammate.name || !newTeammate.email || !newTeammate.role) return;

      setTeammates([newTeammate, ...teammates])
      setFormValues(initialFormValues);
    // axios.post('fakeapi.com', newTeammate)
    //   .then(res=> {
    //     setTeammates([ ...teammates, res.data]);
    //     setFormValues(initialFormValues);
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })
  }

  return (
    <div className="App">
      <h1>Teammate Form</h1>
        <Form 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />

        {
          teammates.map(teammate => {
            return (
              <Teammate key={teammate.id} details={teammate} />
            )
          })
        }
    </div>
  );
}

export default App;
