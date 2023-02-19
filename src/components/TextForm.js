import React, { useState } from "react";

export default function TextForm(props) {
    //upperCase
  const handleUpClick = () => {
    console.log("UpperCase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };
  //handleOn Change
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  //lowerCase
  const handleLowClick = () => {
    console.log("LowerCase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  //clear
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }

  //copy
  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to the Clipboard","success");
  }

  //remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra spaces","success");

  }


  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style= {{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} 
          style= {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} 
          id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to UpperCase </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to LowerCase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
      </div>
      <div className="container my-3" style= {{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008  * text.split(" ").length} Minutes read</p>
        <h2>Preview </h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"} </p>
      </div>
    </>
  );
}
