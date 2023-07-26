import React from 'react';
import './SignupForm.css';
import './SignInForm.css';
import FormInput from "./FormInput.js";

export default function Signin(){
    const [formData , setFormData] = React.useState({
        email : "",
        password : ""
    });
    
    const SignInInputs =[
        {
            id: 1,
            name: "email",
            type: "email",
            className : "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            className : "typePassword",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true, 
        }
    ];
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        });
    }

    function SubmitForm(event){
        event.preventDefault();
    }
    
    
    return (
        <div className="SignInPage">
            <div className="signInForm">
                <h1 className="title" >Sign In</h1>
                <form onSubmit = {SubmitForm}>
                    {SignInInputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={formData[input.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    <button className = "submitBtn">Login</button>
                </form>         
            </div>
        </div>
    )
}