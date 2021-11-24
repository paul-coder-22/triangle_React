import React, { useState } from 'react';
import './Area.css';
function Area(props) {
    const [formName, setForm] = useState('')
    const [baseArea, setBaseArea] = useState({
        firstFormBase: '',
        firstFormHeight: ''
    })
    const [sides, setSides] = useState({
        first: '',
        second: '',
        third: ''
    })
    const [baseHeight, setBaseHeight] = useState({
        thirdFormBase: '',
        thirdFormHypotenous: '',
        thirdFormAngle: ''
    })
    const [output, setOutput] = useState('')
    const [erroText, setError] = useState('')

    let showForm = formName;
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(showForm)
        if (showForm === 'first') {
            firstForm()
        } else if (showForm === 'second') {
            secondForm()
        } else if (showForm === 'third') {
            thirdForm()
        }
        event.target.reset()
    }

    const firstForm = () => {
        if (baseArea.firstFormBase < 0.0001 || baseArea.firstFormHeight < 0.0001) {
            setError('Please Enter a valid value')
        } else {
            setOutput(0.5 * +(baseArea.firstFormBase) * +(baseArea.firstFormHeight))
            setError('')
        }
    }

    const secondForm = () => {
        let a = +(sides.first);
        let b = +(sides.second);
        let c = +(sides.third);

        if ((a + b) > c && (a + c) > b && (c + b) > a) {
            let avg = (a + b + c) / 2;
            let area = Math.sqrt(avg * ((avg - a) * (avg - b) * (avg - c))).toFixed(2);
            setOutput(area)
            setError('')
        } else {
            setError('Please enter the side length  such that sum of two length greater than one length')
        }
    }

    const thirdForm = () => {
        let thirdFormBase = baseHeight.thirdFormBase
        let thirdFormHypotenous = baseHeight.thirdFormHypotenous
        let thirdFormAngle = baseHeight.thirdFormAngle
        if (thirdFormBase < 0.0001 || thirdFormHypotenous < 0.0001) {
            setError('Please Enter a valid value')
        } else if (thirdFormAngle < 0 || thirdFormAngle > 360) {
            if (thirdFormAngle < 0) {
                setError(`Please Put a valid angle`)
            } else {
                setError(`Angle will not be greater than 360`)
            }
        } else {
            const area = (thirdFormBase * thirdFormHypotenous * Math.sin(thirdFormAngle * Math.PI / 180)) / 2;
            setOutput(area.toFixed(2))
        }
    }

    return (
        <div>
            <div className="main-container">
                <button className="back-button">Go back</button>
                <div className="heading">
                    <h1>Calculate Area </h1>
                </div>
                <div className="text-line">
                    <p>Select an option below as per the data you have for a triangle</p>
                </div>
            </div>
            <div className="form-container">
                <form action="" className="formVal">
                    <div className="ques1">
                        <label htmlFor="calArea1">
                            <input type="radio" name="select"
                                id="calArea1" required onClick={() => {
                                    setForm('first')
                                    setOutput('')
                                }} />
                            If you have base and height length
                        </label>
                    </div>
                    <div className="ques2">
                        <label htmlFor="calArea2">
                            <input type="radio" name="select"
                                id="calArea2" required onClick={() => {
                                    setForm('second')
                                    setOutput('')
                                }} />
                            If you have length of 3 sides
                        </label>
                    </div>
                    <div className="ques3">
                        <label htmlFor="calArea3">
                            <input type="radio" name="select"
                                id="calArea3" required onClick={() => {
                                    setForm('third')
                                    setOutput('')
                                }} />
                            If you have base and height length
                        </label>
                    </div>
                </form>


                <div id="firstForm" className="form-container">
                    {
                        formName === 'first' ? <form action="" className="forms" onSubmit={handleSubmit}>
                            <div className="input-ele">
                                <label>
                                    Base =
                                    <input type="number"
                                        name="firstFormBase" required
                                        onChange={(e) => {
                                            setBaseArea({ ...baseArea, [e.target.name]: e.target.value })
                                        }} />
                                </label>
                                <label>
                                    Height =
                                    <input type="number"
                                        name="firstFormHeight" required
                                        onChange={(e) => {
                                            setBaseArea({ ...baseArea, [e.target.name]: e.target.value })
                                        }}
                                    />
                                </label>
                            </div>
                            {/* <button className="ele-button" id="btn1">CLick</button> */}
                            <input type="submit" className="ele-button" />
                        </form> : formName === 'second' ?
                            <form action="" className="forms" onSubmit={handleSubmit}>
                                <div className="input-ele">
                                    <label>
                                        B
                                        <input name="first" type="number"
                                            required onChange={(e) => setSides({ ...sides, [e.target.name]: e.target.value })} />
                                    </label>

                                    <label >
                                        A
                                        <input type="number" name="second" required
                                            onChange={(e) => setSides({ ...sides, [e.target.name]: e.target.value })} />
                                    </label>

                                    <label >
                                        C
                                        <input type="number" name="third" required
                                            onChange={(e) => setSides({ ...sides, [e.target.name]: e.target.value })} />
                                    </label>
                                </div>
                                <button className="ele-button" type="submit" id="btn2">CLick</button>
                            </form> : formName === 'third' ? <form action="" className="forms" onSubmit={handleSubmit}>
                                <div className="input-ele">
                                    <label >
                                        B
                                        <input type="number" name="thirdFormBase"
                                            onChange={(e) => setBaseHeight({ ...baseHeight, [e.target.name]: e.target.value })}
                                            required />
                                    </label>

                                    <label >
                                        C
                                        <input type="number" name="thirdFormHypotenous"
                                            onChange={(e) => setBaseHeight({ ...baseHeight, [e.target.name]: e.target.value })}
                                            required />
                                    </label>

                                    <label > A Degree
                                        <input type="number" name="thirdFormAngle"
                                            onChange={(e) => setBaseHeight({ ...baseHeight, [e.target.name]: e.target.value })}
                                            required />
                                    </label>
                                </div>
                                <button className="ele-button" type="submit" id="btn3">CLick</button>
                            </form> : <h2>Choose One Option</h2>
                    }


                    <h2>Area will be calculated here</h2>

                    <label className="label">
                        <h2 className="h2tag">👉</h2>
                        <div className="outputHere">
                            {
                                erroText ? erroText : output ? output : 'Output loading....'
                            }
                        </div>
                    </label>


                    <div id="formula" className="areaShowHere">
                        {
                            showForm === 'first' ?
                                <span><h2 className="h2tag">Area = </h2> 1/2*base*height </span> :
                                showForm === 'second' ? <span> <h2 class="h2tag">Area = </h2> √s(s-a)(s-b)(s-c)</span> :
                                    showForm === 'third' ? <span><h2 class="h2tag">Area = </h2> 1/2*b*c*sin(A)</span> : <h3>Formula Will Appear Here</h3>
                        }
                    </div>

                </div>
            </div>

        </div >
    );
}

export default Area;