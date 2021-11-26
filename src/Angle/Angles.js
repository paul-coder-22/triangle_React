import React, { useState } from 'react';
import "./Angles.css";
function Angles(props) {

    const [checkTriangle, setTrinagle] = useState({
        first: "",
        second: "",
        third: ""
    })
    const [errortext, setErrorText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        validTriangle()
    }
    let totalValue = 0
    const validTriangle = () => {
        totalValue = Object.values(checkTriangle).reduce((prev, curr) => (+prev) + (+curr))
        if (totalValue === 180) {
            setErrorText('≽ Yuhu! these angles can make a triangle')
        } else {
            setErrorText('Oops! these angles cannot make a triangle')
        }
    }

    setTimeout(() => {
        setErrorText('')
    }, 10000);

    return (
        <div>
            <div className="container">
                <div className="main-container">
                    <div className="form-element">
                        <div className="text-tag">
                            <h1>Enter the angles in below input boxes we will tell you if those
                                angles make a Triangle</h1>
                        </div>
                        <form action="" id="anglesForm" method="get" onSubmit={handleSubmit}>

                            <input type="number" placeholder=" First "
                                name="first"
                                onChange={(e) => setTrinagle({ ...checkTriangle, [e.target.name]: e.target.value })} required /> -
                            <input type="number" placeholder=" Second "
                                name="second"
                                onChange={(e) => setTrinagle({ ...checkTriangle, [e.target.name]: e.target.value })} required /> -
                            <input type="number" placeholder=" Thrird "
                                name="third"
                                onChange={(e) => setTrinagle({ ...checkTriangle, [e.target.name]: e.target.value })} required />
                            <button id="btn" type="submit" >Calculate</button>
                        </form>
                        <div className="output">
                            {
                                errortext ? errortext : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Angles;