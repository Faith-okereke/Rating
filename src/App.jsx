import { useState } from 'react'
import './App.css'
import star from './assets/icon-star.svg'
import thankYouImage from './assets/illustration-thank-you.svg'
function App() {
  const[open, setOpen] = useState(true)
  const [items, setItems] = useState("")
  const Button = ({number}) =>{
    return(
      <button onClick={()=>setItems(number)} className='button'>{number}</button>
    )
  } 
 
  return(
          <>
          {open && (
            <div>
                <img className='star' src={star} alt="it's a star, people" />
            <div className="writing">
              <h1>How did we do?</h1>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="number">
              <Button number = {1}/>
              <Button number = {2}/>
              <Button number = {3}/>
              <Button number = {4}/>
              <Button number = {5}/>
            </div>
            <button onClick={ ()=>setOpen(!open)} type='submit'>Submit</button>
            </div>
          
          )}
  
          {!open && <Thankyou items = {items}/>}
          </>
         
  )
  }
  const Thankyou = ({items})=>{
    return(
        <div className='Thankyou'>
        <img src={thankYouImage} alt="" />
        <p className='select'>You selected {items} out of 5</p>
        <h3>Thank you!</h3>
        <p className='appreciate'>We appreciate you taking the time to give a rating. <br /> If you ever need more support, don’t hesitate to <br/> get in touch!</p>
  
        </div>
    )
    }
export default App
