import { useState } from "react";

const initialUserInput = {
    "current-savings": 500,
    "yearly-contribution": 10000,
    "expected-return": 5,
    "duration": 3,
}



const UserInput = (props) => {
    //const [resetVar, setResetVar] = useState(false)
    const [UserInputVal, setUserInput] = useState(initialUserInput);


    const SubmitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(UserInputVal);
    }
    const resetHandler = () => {
        setUserInput(initialUserInput);

    }
    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            }
        })
    }

    return (
        <form className="form" >
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler("current-savings", event.target.value)}
                        value={UserInputVal["current-savings"]}
                        type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Contribution ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler("yearly-contribution", event.target.value)}
                        value={UserInputVal["yearly-contribution"]}
                        type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) => inputChangeHandler("expected-return", event.target.value)}
                        value={UserInputVal["expected-return"]}
                        type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) => inputChangeHandler("duration", event.target.value)}
                        value={UserInputVal["duration"]}
                        type="number" id="duration" />
                </p>
                <p>
                    <label htmlFor="new-savings">New Savings</label>
                    <input
                        onChange={(event) => inputChangeHandler("New", event.target.value)}
                        value={UserInputVal["New"]}
                        type="number" id="new-savings" />
                </p>
            </div>
            <p className="actions">
                {<button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>}
                <button onClick={SubmitHandler} type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form >
    )
}
export default UserInput;
