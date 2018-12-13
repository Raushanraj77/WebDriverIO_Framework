// login.spec.js
var data = require('./data.json');
var expect = require('chai').expect;
var HomePage = require('./home.page');
var LoginPage = require('./login.page');
describe('login form', function () {
    it('Login to the practice site', function () {
        HomePage.open();
        HomePage.signInLink.click();
	LoginPage.userName.setValue(data.email)
	LoginPage.password.setValue(data.password)
        LoginPage.loginButton.click();
    });

    
});