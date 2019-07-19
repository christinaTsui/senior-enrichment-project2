import React from 'react';


// const AddAircraftForm = () => {
//   return (
//     <div></div>
//   )
// }

class AddAircraftForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      GFI: '',
      flagUrl: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.name});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        <label>
          GFI:
          <input type="text" value={this.state.GFI} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddAircraftForm
