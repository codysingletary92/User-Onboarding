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

const ogUsers = [{
  name: 'cody',
  email: 'cody@cody.com',
  password: 'cody',
  ToS: true
},
{
  name: 'laiken',
  email: 'laiken@laiken.com',
  password: 'laiken',
  ToS: true
}
]


const schema = yup.object().shape({
  name: yup.string().min(6, 'you must use more than 6 characters').required('You must provide Name'),
  email: yup.string().required('You must provide Email'),
  password: yup.string().required('You must provide Password'),
  ToS: yup.boolean().oneOf([true], 'You must agree to ToS')
});

function App() {
  const [form, setForm] = useState(initialValues)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    ToS: false
  })
  const [users, setUsers] = useState(ogUsers)


  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then( () => setErrors({...errors, [name]: ''}))
    .catch( err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const onChange = event => {
    const valueToUse = event.target['type'] === 'checkbox' ? !form['ToS'] : event.target['value']
    setFormErrors(event.target['name'], valueToUse)
    setForm({...form, [event.target['name']]: valueToUse })
  }

  const onSubmit = event => {
    event.preventDefault()
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      ToS: form.ToS
    }
    console.log(users)
    axios.post(`https://reqres.in/api/users`, newUser)
    .then( res => {
      setForm({name: '',
      email: '',
      password: '',
      ToS: false});
      setUsers([...users, res.data])
    })

    .catch( err => {debugger})
  }
  
  

  return (
    <div className="App">
      <div style={{color: 'red'}}>
        <div>
          {errors.name}
        </div>
        <div>
          {errors.password}
        </div>
        <div>
          {errors.email}
        </div>
        <div>
          {errors.ToS}
        </div>
      </div>
      <Form form={form} onChange={onChange} onSubmit={onSubmit}/>
      {users.map((elem, id) => {
        return <User key={id} user={elem} />
      })}
    </div>
  );
}

export default App;
