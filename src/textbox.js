import React, { Component } from 'react'

class TextBox extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            textValue: ''
        }
    }
//this is the function that will handle the user input
    handleInput(e){
        this.setState({
            userInput: e.target.value,
            textValue: e.target.value
        })
    }
//the userinput is going to be the same input that is being displayed (textValue)

    render(){
        return (
            <div>
                <input onChange={this.handleInput.bind(this)}></input>
                <h2>{this.state.textValue}</h2>
            </div>
        )
    }

}

export default TextBox
//how were going to update values. when you invoke it, you pass it an object
//




//super - how you reach the parent class, becuase textbox extends compoennt, we have constucotr for textbox, ands uper is also a constructor,
//because textbox extends compone,t txtbox is technically ac hild, so we have to
//use a super to reach up to the component.
//state -- functionality, the status of the entire program or indivudal object, 
//state is an object with two key value pairs. We're just manipulating hte value of the keys.
//UI, state, business logic