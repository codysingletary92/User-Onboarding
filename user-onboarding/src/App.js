import './App.css';
import Form from './component/Form';
import User from './component/User'
import { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  password: '',
  ToS: false
}

const yup = require("yup");
const schema = yup.object().shape({
  name: yup.string().min(6, 'you must use more than 6 characters').required('You must provide Name'),
  email: yup.string().required('You must provide Email'),
  password: yup.string().required('You must provide Password'),
  ToS: yup.string()
});

function App() {
  const [form, setForm] = useState(initialValues)

  const onChange = event => {
    const valueToUse = event.target['type'] === 'checkbox' ? !form['ToS'] : event.target['value']
    setForm({...form, [event.target['name']]: valueToUse })
  }

  

  return (
    <div className="App">
      <Form form={form} onChange={onChange} />
    </div>
  );
}

export default App;
