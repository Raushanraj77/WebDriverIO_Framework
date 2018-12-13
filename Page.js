var data = require('./data.json');
function Page () {
    this.title = 'Login Page';
}

Page.prototype.open = function (path) {
    browser.url(data.url)
}

module.exports = new Page()