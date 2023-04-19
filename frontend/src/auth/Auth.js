

import { createAccount, login, logout } from '../api/auth-api';

export default class Auth { 

    accessToken;
    userData;

    constructor() {
        this.getAccessToken = this.getAccessToken.bind(this);
        this.userLogin = this.userLogin.bind(this);
        this.userRegister = this.userRegister.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    // Get the user token
    getAccessToken() {
        return this.accessToken;
    }

    // Get the user data
    getUserData() {
        return this.userData;
    }

    // Login the user
    userLogin() {
        login().then(response => {
            console.log(response);
        });
    }

    // Create account user account
    userRegister() {
        createAccount().then(response => {
            console.log(response);
        });
    }

    // Log out user
    logoutUser() {
        logout().then(response => {
            console.log(response);
        });
    }

}