import React from "react";
import "../css/Hero.css"

import logo from '../img/logo.png';

class Hero extends React.Component{

    componentDidMount(){
        let letterEffect = (el) => {
            let nameEl = el;
            let name = nameEl.innerHTML;
            nameEl.style.display = "inline-block"
            nameEl.style.width = nameEl.offsetWidth + "px";
            nameEl.innerHTML = "";
            for(let i = 0; i < name.length; i++){
                let letter = document.createElement("span");
                letter.className = "letter";
                letter.textContent = name[i];
                setTimeout(() => {
                    letter.style.display = "inline";
                }, i * 200);
                nameEl.appendChild(letter);
            }
        }

        let els = document.querySelectorAll(".hero h1");
        for(let i = 0; i < els.length; i++){
            letterEffect(els[i]);
        }
    }

    render(){
        return (
            <div className = "hero">
                <div className = "center font-display">
                    <img className = "logo" src = {logo} alt = "logo"/>
                    <h1>Jack</h1>
                    <h1>Lee</h1>
                </div>
            </div>
        )
    }
}

export default Hero;