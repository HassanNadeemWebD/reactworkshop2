import React from 'react';
import {useState} from 'react';


const Form = () => {    
    const [value, setValue] = useState("");
    // setValue("abc")
    const handleChange = (e)=>{
        // console.log(e.target.value)

setValue(e.target.value)

    }
    return (
        <div>
            <form className="container">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Put Your Text Here</label>
                    <input type="email" className="form-control" id="inputTxt"  value={value}  onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={value}></textarea>
                </div>
            </form>

            {/* {document.getElementById("inputTxt")} */}
        </div>
    );
}

export default Form;
