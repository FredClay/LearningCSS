import { useState } from "react";

import style from '../basicStyleSheets/GenericStyling.module.css';

const SecondPage = () => {

    const [inputField, setInputField] = useState('');

    const generateAlert = () => {
        alert(inputField);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="App-header">
                <form onSubmit={(event) => submitHandler(event)} >
                    <input type="text" className={style.InputField} id="inputField" placeholder="Type Here.." onChange={(e) => setInputField(e.target.value)}/>
                    <br/>
                    <button type="submit" className={style.FancyButton} onClick={() => generateAlert()}>Submit</button>
                </form>
            </div>
            
        </>
    );

};

export default SecondPage;