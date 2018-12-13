var Page = require('./page')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    userName: { get: function () { return browser.element('#email'); } },
    password: { get: function () { return browser.element('#passwd'); } },
    loginButton : { get: function () { return browser.element('#SubmitLogin > span'); } },

    /**
     * define or overwrite page methods
     */
   

   
});

module.exports = LoginPage ;