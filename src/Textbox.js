import './App.css';
import React, { useState, useEffect} from 'react';
import genie from './genie.png';

function Textbox() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [genieVisible, setGenieVisible] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
          setGenieVisible(true);
        }, 10000);
        
        // setTimeout(() => {
        //   setGenieVisible(false);
        //   setTimeout(() => {
        //     setGenieVisible(true);
        //   }, 10000);
        // }, 1000);
      }, []);
      
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ message }),
      })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
    }
      
    return (
      <div className="submission">
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className='response'>
          {response}
        </div>
        {genieVisible && (
          <div className="genie">
            <img src={genie} alt="genie" style={{ width: '100px' }} />
          </div>
        )}
      </div>
    );
  }
  

export default Textbox;
