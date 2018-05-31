let assert = require("assert");

let {$, sleep} = require('./funcs');

module.exports =  function(){

 this.Given(/^that the user is on the start page$/, async function () {
        await helpers.loadPage('http://localhost:3000');
        await sleep(1000);
         
       });

 this.When(/^he clicks on the products link in the top of the page$/, async function () {
        let linkToProducts = await $('#nav-products-btn');
        assert(linkToProducts, "The link doesn't exist");
        await linkToProducts.click();
         
       });

 this.Then(/^the products page will open$/, async function () {
        await sleep(1000);
        assert(await $('.nav-link.active a[href="productlist.html"]'), "Products page is not active");
        assert((await driver.getCurrentUrl()).includes("productlist"), "Didn´t go to the products page");
       });


 this.Given(/^that you are on the products page$/, async function () {
         await helpers.loadPage('http://localhost:3000/productlist.html');
         await sleep(1000);
         
       });

 this.When(/^you click on the contact link in the navbar$/, async function () {
         let linkToContacts = await $('#nav-contact-btn');
        assert(linkToContacts, "The link doesn't exist");
        await linkToContacts.click();
         
       });

 this.Then(/^the Contact page will open$/, async function () {
        await sleep(1000);
        assert(await $('.nav-link.active a[href="contact.html"]'), "Contact page is not active");
        assert((await driver.getCurrentUrl()).includes("contact"), "Didn´t go to the contact page");
         
       });


  this.Given(/^that the user is on the contact page$/, async function () {
         await helpers.loadPage('http://localhost:3000/contact.html');
         await sleep(1000);
         
       });

  this.When(/^he clicks on the about us link in the navbar$/, async function () {
        let linkToAboutUs = await $('#nav-about-btn');
        assert(linkToAboutUs, "The link doesn't exist");
        await linkToAboutUs.click();
         
       });

  this.Then(/^the About us page will open$/, async function () {
        await sleep(1000);
        assert(await $('.nav-link.active a[href="about.html"]'), "About us page is not active");
        assert((await driver.getCurrentUrl()).includes("about"), "Didn´t get to the about us page");
        
       });


}