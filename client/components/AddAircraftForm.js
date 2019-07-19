import React, { Component } from 'react';
import axios from 'axios';

export default class AddAircraftForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
      year: '',
      type: '',
      cost: '',
      imageUrl: '',
      description: '',
      succeeded: '',
      country: '',
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
      make: '',
      model: '',
      year: '',
      type: '',
      cost: '',
      imageUrl: '',
      description: '',
      succeeded: '',
      country: '',
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
        <h2>Add An Aircraft</h2>
        <label>
          Designer/Manufacturer:
          <input
            type="text"
            name="make"
            onChange={this.handleChange}
            value={this.state.make}
          />
        </label><br/>

        <label>
          Model:
          <input
            type="text" //type will validate
            name="model" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.model} //this will set the value to something
          />
        </label><br/>

        <label>
          Year Debutted:
          <input
            type="number" //type will validate
            name="year" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.year} //this will set the value to something
          />
        </label><br/>

        {/* would be nicer if this was a radio form..i tried doing it but it broke because syntax was not in a form so I kept it at text type */}
        <label>
          Type:
          <input
            type="text" //type will validate
            name="type" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.type} //this will set the value to something
          />
        </label><br/>

        <label>
          Cost:
          <input
            type="number" //type will validate
            name="cost" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.cost} //this will set the value to something
          />
        </label><br/>

        <label>
          imageUrl:
          <input
            type="text" //type will validate
            name="imageUrl" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.imageUrl} //this will set the value to something
          />
        </label><br/>

        <label>
          Description:
          <input
            type="text" //type will validate
            name="description" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.description} //this will set the value to something
          />
        </label><br/>

        <button id="delete-button" type="submit">Submit New Aircraft</button>
      </form>
    );
  }
}
