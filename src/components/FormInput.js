import React from 'react';

export default function FormInput(props){
    const [focused , setFocused] = React.useState(false)
    const { label, errorMessage, handleChange, id, ...inputProps} = props;

    const handleFocus = (event) => {
        setFocused(true);
    };

    return (<div className="formInput">
        <label>{label}</label>
        <input 
            {...inputProps}
            onChange = {handleChange}
            onBlur = {handleFocus}
            focused = {focused.toString()}
        />
        <span className = "errorMessage">{errorMessage}</span>
    </div>)
}