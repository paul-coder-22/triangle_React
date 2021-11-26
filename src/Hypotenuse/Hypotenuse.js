import React, { useState } from 'react';
import "./Hypotenuse.css";
function Hypotenuse(props) {

    const [anglesArea, setAngleArea] = useState({
        base: "",
        height: ""
    })

    const [outputText, setoutputText] = useState({});

    const setValueAnglesArea = (e) => {
        setAngleArea({ ...anglesArea, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(anglesArea)
        getValue()
        e.target.reset()
    }

    const getValue = () => {
        let base = anglesArea.base;
        let height = anglesArea.height;
        if (base < 1 || height < 1) {
            setoutputText({ errorText: 'Please Enter a Valid Value' })
        } else {
            let total = Math.sqrt((base * base) + (height * height)).toFixed(2);
            console.log(total)
            setoutputText({ totalValue: total })
        }
    }
    return (
        <div>
            <div className="main-container">
                <div className="text-line">
                    <p>Enter Base And Height</p>
                </div>

                <div className="form-container">

                    <form action="" id="formValue" className="forms" onSubmit={handleSubmit}>
                        <div className="input-ele">
                            <label >
                                Base
                                <input type="number" id="base"
                                    name="base" placeholder="Enter your Value" required
                                    onChange={setValueAnglesArea} />
                            </label>
                            <label >
                                Height
                                <input type="number" id="height"
                                    name="height" placeholder="Enter your Value"
                                    required onChange={setValueAnglesArea} />
                            </label>
                        </div>
                        <button className="ele-button" id="btn" type='submit'>Click</button>
                    </form>

                    <h2>Hypotenuse will be calculated here</h2>

                    <label className="label">
                        <h2 className="h2tag">👉</h2>
                        <div id="resultView" className="outputHere">
                            {!outputText.errorText && !outputText.totalValue ? 'Output Loading ...' : outputText.totalValue ? outputText.totalValue : outputText.errorText ? outputText.errorText : ''}
                            {/* {typeof outputText === 'string' ? 'Output loading....' : outputText} */}
                        </div>
                    </label>


                    <div id="formula" className="areaShowHere">
                        <h2 className="h2tag">Area = </h2> 1/2*base*height
                    </div>
                </div>
            </div>


            {/*  <div className="footer-container">
                <div className="footer-icon">
                    <div className="footer-icon1"><a href="https://twitter.com/pulmicheal1"> <i
                        className="fab fa-twitter fa-2x"></i></a></div>
                    <div className="footer-icon2"><a href="https://www.linkedin.com/in/kiron-paul-1b81111b1/"> <i
                        className="fab fa-linkedin fa-2x"></i> </a></div>
                    <div className="footer-icon3"> <a href="https://github.com/paul-coder-22/TriangleApp/tree/master/hypotenuse"> <i
                        className="fab fa-github fa-2x"></i></a></div>
                </div>
            </div> */}
        </div>
    );
}

export default Hypotenuse;