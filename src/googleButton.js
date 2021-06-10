import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

class GoogleButton extends Component {

    constructor(props) {
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.state = {
            id: '',
            name: '',
            provider: '',
            text : ''
        }
    }
    onSuccess = async(response) => {
    	this.setState({
            id: response.googleId,
            name: response.profileObj.name,
            provider: 'google',
            text : '로그인한 사용자명 :  '
        });
       
    }

    onFailure = (error) => {
        alert("로그인 실패");
        console.log(error);
    }
    render(){
        return(
            <div>
                <GoogleLogin
                    clientId="105340773261-jc0omn9fg1a2nt9ckkgalq3vpfvcj1dd.apps.googleusercontent.com"
                    responseType={"id_token"}
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}/><br/>
                    {this.state.text}  {this.state.name}
            </div>
        ) ;

    }
    
}
export default GoogleButton;
