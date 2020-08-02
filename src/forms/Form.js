import React from "react";

class Form extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return ( 
        <form>
            <input
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={e => this.change(e)}
            />
            <br />
            <input
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={e => this.change(e)}
            />
            <br />
            <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
        );
    }
}
export default Form;