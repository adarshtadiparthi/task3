import React from 'react';
import "./SignupForm.css";
import FormInput from "./FormInput.js";
import Group1 from "./assets/Group1.png";
import Group2 from "./assets/Group2.png";
import Group3 from "./assets/Group3.png";
import Group4 from "./assets/Group4.png";


export default function Signup({navigateToSignIn , colorChoices}){
    const [formData , setFormData] = React.useState(
        {fullName : "",email : "",phoneNumber : "",password : "",confirmPassword : ""}
    )

    function SubmitForm(event){
        event.preventDefault();
        setTimeout(() =>{
            document.getElementById("confirmation").style.opacity = 1;
        },1000)
        setTimeout(()=>{
            navigateToSignIn();
        },21000)
    }

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        });
    }

    const SignUpInputs = [
        {
            id:1,
            name: "fullName",
            type : "text",
            className : "name",
            placeholder : "Full Name",
            errorMessage:"Fill a Name",
            label : "Full Name",
            pattern : "^\[A-Za-z]{1-32}$",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "email",
            className : "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "phoneNumber",
            type: "number",
            className : "number",
            placeholder: "Phone Number",
            errorMessage: "It should be a valid 10 digit Phone Number!",
            label: "Phone Number",
            pattern : "[0-9]{10}",
            required: true,

        },
        {
            id: 4,
            name: "password",
            type: "password",
            className : "typePassword",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true, 
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            className: "confirmPassword",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: formData.password,
            required: true,
        }
    ]

    console.log(colorChoices.primaryColor);
    return (
        <div className = "signUpPage" id="signUppage">
            <div className="signUpForm">
                <h1 className="title" >Create Account</h1>
                <form onSubmit = {SubmitForm}>
                    {SignUpInputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={formData[input.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    <button className = "submitBtn">Create Account</button>
                    <p className = "Confirmation" id = "confirmation">Your Account is Successfully created!</p>
                </form>         
            </div>
            {colorChoices.primaryColor == "#318DFA" &&<img src={Group1}  className ="SignupImage"/>}
            {colorChoices.primaryColor == "#FF6B6B" &&<img src={Group2}  className ="SignupImage"/>}
            {colorChoices.primaryColor == "#1DD1a1" &&<img src={Group3}  className ="SignupImage"/>}
            {colorChoices.primaryColor == "#F368E0" &&<img src={Group4}  className ="SignupImage"/>}
        </div>
    )
}