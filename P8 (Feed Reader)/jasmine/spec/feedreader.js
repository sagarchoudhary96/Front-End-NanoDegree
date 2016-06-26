/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        //cecks all feeds are defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //check all feeds have url and ins't null
        it('Has url defined and not null', function() {
            for(var i=0; i < allFeeds.length; i++){
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length > 0).toBe(true);
            }
        });


        // checks all feed have name and isn't null
        it("Has name and isn't null", function() {
          for(var i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length > 0).toBe(true);
          }
        });
    });


    /* TODO: Write a new test suite named "The menu" */


    describe('The menu', function() {

        // check menu item is hidden by default
        it('Has menu hidden by default', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

       //check for menu display/hide on click
       it('Display/hide menu on click', function() {
          $('.menu-icon-link').click();  //stimulating click to show menu
          expect($('body').hasClass('menu-hidden')).toBe(false);

          $('.menu-icon-link').click();  //stimulating click to hide the menu
          expect($('body').hasClass('menu-hidden')).toBe(true);
       });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

       beforeEach(function(done) {
          loadFeed(0, done);
       });

       //checks for atleast single entry in feed container
       it('Have a Single Entry', function(done) {
          expect($('.feed .entry').length > 0).toBe(true);
          done();
       });
    });


    /* TODO: Write a new test suite named "New Feed Selection"*/

    describe('New Feed Selection', function() {

       var feed;
       var newfeed;

       beforeEach(function(done) {
          // load feed before testing the spec
          loadFeed(0, function() {
            feed = $('.header-title').html();
            loadFeed(1, function(){ //nested load2 to meet async function demands
                 $newfeed = $('.header-title').html();
                 done();
            });
         });
       });

       //check for feed change at Reload
       it('Feed change at reload', function() {
          expect(feed).not.toEqual(newfeed);  // check for old and new feed to be different
       });
    });

}());
