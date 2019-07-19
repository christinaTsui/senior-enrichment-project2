import React, { Component } from 'react';

// Initial
// const AddAircraftForm = () => {
//   return (
//     <div></div>
//   )
// }

//Second Try
// class AddAircraftForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       GFI: '',
//       flagUrl: '',
//     };

//     // this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (event) => {
//     this.setState({value: event.target.name});
//   }

//   handleSubmit = (event) => {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.name} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />

//         <label>
//           GFI:
//           <input type="text" value={this.state.GFI} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

export default class AddAircraftForm extends Component {
  constructor(props) {
    super();
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
  }

  render() {
    console.log("this is props", this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Designer/Manufacturer:
          <input
            type="text"
            name="make"
            onChange={this.handleChange}
            value={this.state.make}
          />
        </label>

        <label>
          Model:
          <input
            type="text" //type will validate
            name="model" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.model} //this will set the value to something
          />
        </label>

        <label>
          Year Debutted:
          <input
            type="number" //type will validate
            name="year" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.year} //this will set the value to something
          />
        </label>

        {/* would be nicer if this was a radio form..i tried doing it but it broke because syntax was not in a form so I kept it at text type */}
        <label>
          Type:
          <input
            type="text" //type will validate
            name="type" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.type} //this will set the value to something
          />
        </label>

        <label>
          Cost:
          <input
            type="number" //type will validate
            name="cost" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.cost} //this will set the value to something
          />
        </label>

        <label>
          imageUrl:
          <input
            type="text" //type will validate
            name="imageUrl" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.imageUrl} //this will set the value to something
          />
        </label>

        <label>
          Description:
          <input
            type="text" //type will validate
            name="description" //name will match the state key value pair
            onChange={this.handleChange}
            value={this.state.description} //this will set the value to something
          />
        </label>

        <button type="submit">Submit New Aircraft</button>
      </form>
    );
  }
}
