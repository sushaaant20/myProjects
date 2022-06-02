import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the Text here")
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
  return (

<div className="mb-3">
    <div className='mb-3'>
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
  )
}
