import React from 'react';
import './firstform.css';

const Firstform = () => {
  return (
    <div className='formone'>
      <form>
        <h1>Feedback</h1>
        <h2>Feedback Type: </h2>
        <ul>
            <li>
              <input type="radio" id="f-option" name="selector"/>
              <label for="f-option">Bug</label>
              
              <div class="check"></div>
            </li>
            
            <li>
              <input type="radio" id="s-option" name="selector"/>
              <label for="s-option">Feature</label>
              
              <div class="check"><div class="inside"></div></div>
            </li>
            
            <li>
              <input type="radio" id="t-option" name="selector"/>
              <label for="t-option">Request</label>
              
              <div class="check"><div class="inside"></div></div>
            </li>
          </ul>
                

      </form>
      
    </div>
  )
}

export default Firstform