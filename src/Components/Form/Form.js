import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
	const [enterdName, setEnteredName] = useState("");
	const [enterdAge, setEnteredAge] = useState("");

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

        if(enterdName.trim() === '' || enterdAge.trim() === '')
        {
            props.modalDisplay({displayModal:true,message:'Please fill all the values.'});
        }
        else if(enterdAge.trim() <= 0)
        {
            props.modalDisplay({displayModal:true,message:'Age can not be less than 0.'});
        }
        else
        {
            const nameData = {
                id: Math.random().toString(),
                name: enterdName,
                age: enterdAge,
            };
    
            props.onDisplayNewName(nameData);
    
            setEnteredName('');
            setEnteredAge('');
        }


	};

	return (
		<div className="form-element">
			<form onSubmit={submitHandler}>
				<div className="card">
					<div className="form-group mt-2 mb-2">
						<label className="form-label">
							<b>Name : </b>
						</label>
						<input
							type="text"
							name="name"
							className="form-control"
							placeholder="Enter Your Name"
							onChange={nameChangeHandler}
							value={enterdName}
						/>
					</div>
					<div className="form-group mt-2 mb-2">
						<label className="form-label">
							<b>Age : </b>
						</label>
						<input
							type="number"
							name="age"
							className="form-control"
							placeholder="Enter Your Age"
							value={enterdAge}
							onChange={ageChangeHandler}
						/>
					</div>
					<div className="form-group mt-2 mb-">
						<button type="submit" className="btn btn-primary">
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
