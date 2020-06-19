import React from 'react';
import Login from '../components/Login'
import { connect } from 'react-redux'
import { fetchLogin } from '../store/actions/actions-creators/login';

const mapStateToProps = function (state, ownProps) {
    return {
      email: state.login.email,
      password: state.login.password,
      auth: state.auth.data,
      login: state.login.logeado
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
      fetchLogin: (email, password) => dispatch(fetchLogin(email, password)),
    };
};

class LoginContainer extends React.Component {

    constructor(){
        super()

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {    
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.fetchLogin(this.state.email, this.state.password)
        if(this.props.auth.id){
            this.props.history.push("/");
        }
    }

    render(){
        return(
            <Login handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange} handleSubmit={this.handleSubmit} email={this.props.email} password={this.props.password}/>
        )
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);