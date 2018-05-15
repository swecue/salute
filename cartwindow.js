let assert = require('assert');
// Here I added a class for opening a new window and checking if the window has been opened before and if it has it will not be "new" Not 100% sure that this works as I intend though. 
module.exports = class Cartwindow {
    constructor() {
        let newWindow;
        let openWindow = function() {
            newWindow = newWindow || window.open('mycart.html');
            newWindow.focus();
            newWindow.onbeforeunload = function() {
                newWindow = null;
            };
        };
    }
}
