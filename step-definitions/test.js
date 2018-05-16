module.exports = function() {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    this.Given(/^one$/, async function() {
    await helpers.loadPage('localhost:3000');
            console.log('it works');
    });

    // Write code here that turns the phrase above into concrete actions

    this.When(/^two$/, async function() {
        let theButton = await driver.findElement(by.css('#wow'));
        await theButton.click();
    });

    this.Then(/^three$/, async function() {
        let body = await driver.findElement(by.css('body'));
        let bgColor = await body.getCssValue('background-color');

        assert(bgColor == "rgba(0, 0, 255, 1)", "the bg color did not turn blue!");
        // Write code here that turns the phrase above into concrete actions
    });
}
