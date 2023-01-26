import React, { useState } from 'react'

export default function TextForm(props) {
    // setText("New text");
    const readingTime = (param) => {
        var readingTimeInSeconds = Math.round((param.split(/\S+/).length - 1) * 0.33333333333)
        return readingTimeInSeconds

    }

    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const toUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const copyText = () => {
        document.getElementById("exampleFormControlTextarea1").select();
        document.getElementById("exampleFormControlTextarea1").setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(text)
    }
    const clearText = () => {

        let newText = ""
        setText(newText)
    }

    



    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <h2 className="my-4">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnchange} rows="10" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>

                <button type="button" onClick={toUpperCase} className="btn btn-primary mx-3">Uppercase</button>

                <button type="button" onClick={toLowerCase} className="btn btn-primary mx-3">Lowercase</button>

                <button type="button" onClick={copyText} className="btn btn-warning mx-3">Copy</button> 

                <button type="button" onClick={clearText} className="btn btn-danger mx-3">Clear</button>


            </div>
            <div className="container my-3">

                <h1> {text.split(/\S+/).length - 1} Word and {text.length} Characters</h1>

                <h5> Speaking Time : {readingTime(text)} seconds - {Math.round((text.split(/\S+/).length - 1) * 0.24)} seconds</h5>

                <h5> Reading Time : {Math.round((text.split(/\S+/).length - 1) * 0.21818)} seconds With Average speed</h5>

            </div>

            <div className="container my-3">
                <h1>Preview</h1>
                <p>{text}</p>
            </div>

        </>
    )
}
