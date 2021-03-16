import './App.css';
import Form from './component/Form';
import User from './component/User'
import { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('use is required').min(6, 'name needs to be 6 chars min'),
  email: yup.string().required('you must enter an Email Address'),
  password: yup.string().required('you must enter a password'),
  ToS: yup.boolean().oneOf([true], 'You must agree to ToS')
})

function App() {
  const [users, setUsers] = useState([{
    name: 'cody',
  email: 'cody@cody.com',
  password: 'abcd1234',
  ToS: true},
  {
    name: 'codyasdasdasd',
  email: 'cody@cody.com',
  password: 'abcd1234',
  ToS: true}
])
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    ToS: false
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    ToS: false
  })

  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then( () => setErrors({...errors, [name]: ''}))
    .catch( err => setErrors({...errors, [name]: err.errors[0]}))
  }


  const onChange = event => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    setFormErrors(name, valueToUse)
    setForm({...form, [name]: valueToUse})
  }

  const onSubmit = event => {
    event.preventDefault();
    const newUser = { name: form.name, email: form.email, password: form.password, ToS: form.ToS}
    axios.post('https://reqres.in/api/users', newUser)
    .then( res => {
      setForm({name: '',
      email: '',
      password: '',
      ToS: false});
      // console.log(res.data)
      setUsers([...users, res.data])
    })
    .catch( err => {
      debugger
    })
    
  }

  

  return (
    <div className="App">
      <div style={{color: 'red'}}>
        <div>
          {errors.name}
        </div>
        <div>
          {errors.email}
        </div>
        <div>
          {errors.password}
        </div>
        <div>
          {errors.ToS}
        </div>
      </div>
      <Form form={form} onSubmit={onSubmit} onChange={onChange}/>
      <br /><br />
      {users.map( (elem, id) => <User key={id} user={elem}/>)}
    </div>
  );
}

export default App;
