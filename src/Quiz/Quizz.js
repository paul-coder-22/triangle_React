import React, { useState } from 'react';
import './Quizz.css';
import questions from "./Questions";

function Quizz(props) {
    const [formData, setFormData] = useState({
        ques1: "",
        ques2: "",
        ques3: "",
        ques4: "",
        ques5: "",
        ques6: "",
        ques7: "",
        ques8: ""
    });
    const [score, setScore] = useState(0);
    const [show, setShow] = useState(true);
    const [number, setNumber] = useState(0);
    const onhandleChange = (e, ansText, correct) => {
        if (number < questions.length) {
            setNumber(number + 1);
            let valueStore = correct ? setScore(1 + score) : "";
            setFormData({ ...formData, [e.target.name]: correct });
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(Object.values(formData));
        setShow(false);
    };

    return (
        <div className="app" style={{ margin: "0.01% 12%" }}>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <fieldset
                        key={index}
                        className={`fieldsetMargin 
                  ${show ? "" : Object.values(formData)[index] ? "green" : "red"}
                `}
                    >
                        {
                            <legend>
                                {question.questionText.replaceAll(
                                    "*",
                                    String.fromCharCode(176)
                                )}
                            </legend>
                        }
                        {question.answerOptions.map((option, index) => (
                            <label htmlFor={question.radio} className="quiz-label" key={index}>
                                <input
                                    style={{ cursor: "pointer" }}
                                    key={index}
                                    type="radio"
                                    id={question.radio}
                                    value={option.answerText}
                                    name={question.name}
                                    required
                                    onChange={(e) =>
                                        onhandleChange(e, option.answerText, option.isCorrect)
                                    }
                                />
                                {option.answerText}
                            </label>
                        ))}
                    </fieldset>
                ))}
                {show ? (
                    <input type="submit" value="Submit" className="scoreContainer" />
                ) : (
                    <h1 className="scoreContainer">Final Score : {score}</h1>
                )}
            </form>
        </div>
    );
}

export default Quizz;