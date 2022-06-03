import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handClear =() =>{
      setText("")

    }
    
    // these functions do not work
    //CSS styling to be applied 
    //bold function
    const handleBold = () =>{
      let newText = text.bold()
      setText(newText)
    }
    //italics
    const handleItalics = () =>{
      let newText = text.String.Prototype.italics()
      setText(newText)
    }
    const handleUnderline = () =>{
     // newText = text.underline()
      //setText(newText)
    }
    
  return (

<div className="mb-3">
    <div className='mb-3 my-2'>
      <p>Enter your text below </p>
      <span>
      <b className="btn btn-primary mx-1" onClick={handleBold}>B</b>
      <b className="btn btn-primary mx-1" onClick={handleItalics}>I</b>
      <b className="btn btn-primary mx-1" onClick={handleUnderline}>U</b>
      </span>
    <textarea className="form-control my-3" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-danger mx-1" onClick={handClear}>Clear All</button>

    <div className="container fluid border border-radius-3 my-2 p-3 mb-2 bg-secondary text-white ">
      <h2>
        Preview
      </h2>
      <span>
      <p>{text.split(" ").length - 1} Words and {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length - 1)} minutes to read</p>
      <p>{text}</p>
      </span>

    </div>
</div>
  )
}
