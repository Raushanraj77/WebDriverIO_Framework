var Page = require('./page')

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    signInLink: { get: function () { return browser.element('#header > div.nav > div > div > nav > div.header_user_info > a'); } },
 
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

   
});

module.exports = HomePage ;