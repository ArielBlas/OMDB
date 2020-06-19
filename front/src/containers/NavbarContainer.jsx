import React from 'react';
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { findMovie, fetchSearchMovie } from '../store/actions/actions-creators/search'
import { fetchUserAuth } from '../store/actions/actions-creators/auth';
import { fetchLogout } from '../store/actions/actions-creators/login';
import { fetchFavs } from '../store/actions/actions-creators/favorites';

const mapStateToProps = function (state, ownProps) {
    return {
      text: state.search.text,
      data: state.auth.data,
      favs: state.favs.data
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
      findMovie: (text) => dispatch(findMovie(text)),
      fetchSearchMovie: (id) => dispatch(fetchSearchMovie(id)),
      fetchUserAuth: () => dispatch(fetchUserAuth()),
      fetchLogout: () => dispatch(fetchLogout()),
      fetchFavs: (userId) => dispatch(fetchFavs(userId))
    };
};

class NavbarContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            enviar: '',
            user: false,
            estado: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.logoutClick = this.logoutClick.bind(this);
    }

    componentDidMount(){
        if(!this.props.data.id){
            this.props.fetchUserAuth()
        } 
    }

    handleChange(event) {    
        const value = event.target.value
        this.setState({text: value, enviar: value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({ enviar: '', estado: true})
        this.props.findMovie(this.state.text)
        this.props.fetchSearchMovie(this.state.text)
    }

    handleClick(){
        if(this.state.user == false){
            this.setState({user: true});
        } 
        else if(this.state.user == true){
            this.setState({user: false});
        }
    }

    logoutClick(){
        this.props.fetchLogout()
    }

    render(){
        return(
            <Navbar handleChange={this.handleChange} handleSubmit={this.handleSubmit} enviar={this.state.enviar} data={this.props.data} user={this.state.user} handleClick={this.handleClick} logoutClick={this.logoutClick} favs={this.props.favs} estado={this.state.estado}/>
        )
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);