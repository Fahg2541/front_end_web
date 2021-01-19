import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            redirect: null
        };
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        if(this.state.username == 'Jpum@hotmail.com' && this.state.password == '1234'){
            alert('Yes');
            this.setState({
                redirect: true
            });

        }else{
            alert('No');
        }
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/homepage" />
        }
        return (
            <div class="login-wrapper" id="login-content">
                <div class="login-content">
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div class="row">
                            <label for="username">
                                Username:
                                <input type="text" name="username" id="username" placeholder="username" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" onChange = {this.handleChange}/>
                            </label>
                        </div>
                    
                        <div class="row">
                            <label for="password">
                                Password:
                                <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" onChange = {this.handleChange} />
                            </label>
                        </div>
                        <div class="row">
                            <div class="remember">
                                <div>
                                    <input type="checkbox" name="remember" value="Remember me"><span>Remember me</span></input>
                                </div>
                                <a href="#">Forget password ?</a>
                            </div>
                        </div>
                        <div class="row">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <Switch>
                            <Route path="/homepage">
                                <HomePage/>
                            </Route>
                        </Switch>
                    <div class="row">
                        <p>Or via social</p>
                        <div class="social-btn-2">
                            <a class="fb" href="#"><i class="ion-social-facebook"></i>Facebook</a>
                            <a class="tw" href="#"><i class="ion-social-twitter"></i>twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;