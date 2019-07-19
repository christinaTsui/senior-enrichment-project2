import React, { Component } from 'react';
import axios from 'axios';

export default class AddCountryForm extends Component {
  constructor(props) {

    super(props);
    this.state = {
      name: '',
      GFI: '',
      flagUrl: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("I am in handleChange")
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state)
  }

  handleSubmit(event) {
    console.log("I am in handleSubmit")
    event.preventDefault();
    //connect to the store here using subscribe
    this.setState({
      name: '',
      GFI: '',
      flagUrl: '',
    });

    axios.post(`/api/aircrafts`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    console.log("this is props", this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add A Country</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label><br/>

        <label>
          GFI:
          <input
            type="text" //type will validate
            name="GFI" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.GFI} //this will set the value to something
          />
        </label><br/>

        <label>
          FlagUrl:
          <input
            type="text" //type will validate
            name="flagUrl" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.flagUrl} //this will set the value to something
          />
        </label><br/>

        <button id="submit-button" type="submit">Submit New Country</button>
      </form>
    );
  }
}
