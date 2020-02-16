import React, {useState, useEffect} from 'react';
import './App.css';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //Note: use own username
    fetch('https://gitconnected.com/v1/portfolio/yoshikoshy')
    .then(res => res.json())
    .then(user => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
