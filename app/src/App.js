import {useState, useEffect} from 'react';
import axios from "axios";

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3333/users').then(response => {
      setMessage(response.data.message);
    });
  }, []);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
