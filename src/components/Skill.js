import React from 'react';

export default class Skill extends React.Component{
    render(){
        return (
            <div className = "skill col-1-2">
                <div style = {{width:"100%",height:"32px",background:"#f5f5f5",position:"relative"}}>
                    <div style = {{width: this.props.value + "%",height:"100%"}} className = "background-primary"></div>
                    <p style = {{position:"absolute",top:"0px",margin:0,color:"white",padding:8,fontSize:16}}>{this.props.name}</p>
                </div>
            </div>
        )
    }
}