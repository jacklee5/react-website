import React from "react";
import Skill from "./Skill";

class HomePage extends React.Component{

    data = [
        {name: "HTML", value: 100},
        {name: "CSS", value: 85},
        {name: "Javascript", value: 90},
        {name: "SCSS", value: 60},
        {name: "Node.js", value: 90},
        {name: "Express", value: 70},
        {name: "React", value: 60},
        {name: "Python", value: 40},
        {name: "Java", value: 80},
        {name: "SQL", value: 60}
    ]

    componentDidMount(){
        document.title = "Home";
    }
    render(){
        let skillComponents = this.data.map(item => <Skill name = {item.name} value = {item.value} />);
        return (
            <div className = "page">
                <h1 className = "font-display">About Me</h1>
                <p>Hi, my name is Jack Lee. I am a student developer living in the United States of America, and I have a love for web development - I'm always excited to write a couple lines of HTML, CSS, and JS. In fact, this website is built with no frameworks except React, which I am currently learning. </p>
                <p>This isn't to say that I don't know any other technologies except those three languages. In and out of school, I've picked up a couple others:</p>
                {skillComponents}
            </div>
        )
    }
}

export default HomePage;