import React from 'react'
import './colorchoice.css'

export default function ColorChoice({onColorChange}){
    const [activeButton, setActiveButton] = React.useState('button1');

    const changeactive = (event) => {
        const buttonId = event.target.id;
        setActiveButton(buttonId);

        onColorChange(getColorFromButtonId(buttonId));
    };

    const getColorFromButtonId = (buttonId) => {
        switch (buttonId) {
          case 'button1':
            return '#318DFA';
          case 'button2':
            return '#1DD1a1';
          case 'button3':
            return '#FF6B6B';
          case 'button4':
            return '#F368E0';
          default:
            return '#318DFA';
        }
    };

    return (
    <div className="colorBox">
        <button
            className={`colorBtn ${activeButton === 'button1' ? 'activeColor' : ''}`}
            onClick={changeactive}
            id="button1"
        ></button>
        <button
            className={`colorBtn ${activeButton === 'button2' ? 'activeColor' : ''}`}
            onClick={changeactive}
            id="button2"
        ></button>
        <button
            className={`colorBtn ${activeButton === 'button3' ? 'activeColor' : ''}`}
            onClick={changeactive}
            id="button3"
        ></button>
        <button
            className={`colorBtn ${activeButton === 'button4' ? 'activeColor' : ''}`}
            onClick={changeactive}
            id="button4"
        ></button>
    </div>
    )
}