import React from 'react';
import Register from '../components/Register'
import { connect } from 'react-redux'
import { fetchRegister } from '../store/actions/actions-creators/register'

const mapStateToProps = function (state, ownProps) {
    return {
        name: state.register.name,
        email: state.register.email,
        password: state.register.password
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
      fetchRegister: (name, email, password) => dispatch(fetchRegister(name, email, password)),
    };
};

class RegisterContainer extends React.Component {

    constructor(){
        super()

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {    
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {    
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.fetchRegister(this.state.name, this.state.email, this.state.password)
        this.props.history.push("/login");
    }

    render(){
        return(
            <Register handleNameChange={this.handleNameChange} handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange} handleSubmit={this.handleSubmit} name={this.props.name} email={this.props.email} password={this.props.password}/>
        )
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);