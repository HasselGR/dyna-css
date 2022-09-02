import {useState} from 'react';
import './App.css';

function App() {
  const [credentials, setCredentials] =useState({
    username:'',
    password:'',
  })
  const [properties, setProperties] = useState({
    username:'',
    password:''
  })

  const auth = {
    username:'username',
    password:'12345678',
  }


  const handleChange = (event) =>{
    if (event.target.value.includes(' ')){
      alert('You cant put spaces in usernames');
      setProperties(oldProperties=> ({
        ...oldProperties,
        [event.target.name]: 'warning'
      }))
      return;
    }
    setCredentials(oldCredentials => ({
      ...oldCredentials,
      [event.target.name]: event.target.value,
    }))
  }
  const submitCredentials = (event) =>{
    event.preventDefault();
    for (const property in credentials){
      if (credentials[property] === ''){
        setProperties(oldProperties=> ({
          ...oldProperties,
          [property]: 'warning'
        }))
      }
      else if (auth[property] !== credentials[property]){
        console.log('wrong credentials')
        setProperties(oldProperties=> ({
          ...oldProperties,
          [property]: 'error'
        }))
      }
    }
  }

  //TO DO, DRY

  const clearCredentials = (event) =>{
    event.preventDefault();
    setProperties({
      username:'',
      password:'',
    })
    setCredentials({
      username:'',
      password:'',
    })
  }

  return (
    <div className="App">
      <h1>Dyna-css</h1>
      <h2>The goal of this app is to dynamically change the background color of text boxes based to let you gain experience
         using both CSS variables and dynamically changing them from within the app.</h2>
      <label>Username</label>
      <input className={properties.username} type="text" id= "username" name="username" placeholder="Username" value={credentials.username} onChange={handleChange}></input>
      <label>password</label>
      <input className={properties.password} type="password" id="password" name="password" value={credentials.password} placeholder="******" onChange={handleChange} ></input>
      <button onClick={submitCredentials}>Login</button>
      <button onClick={clearCredentials}>Cancel</button>
    </div>
  );
}

export default App;
