import { useState } from 'react'

import './App.css'

// https://script.google.com/macros/s/AKfycbwisAM_ZYcgpQt5KtxAXKZjXa1ijm0IWUGvez26f7OvgPllN9wMv4P5OOLv2Q2_Q-XH/exec
function App() {
  
  const handleSubmit = (e) => {
    e.preventDefault() 
    const url = 'https://script.google.com/macros/s/AKfycbwisAM_ZYcgpQt5KtxAXKZjXa1ijm0IWUGvez26f7OvgPllN9wMv4P5OOLv2Q2_Q-XH/exec'
  fetch( url, {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body : `Name=${e.target.name.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`
    })
    .then(response => response.text())
    .then(data => {
      alert(data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  return (
    <div>
      <section id="form-section" style={{ backgroundColor: '#050707', padding: '20px' }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              
              
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
             
              
                          />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
                          
             
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default App;
