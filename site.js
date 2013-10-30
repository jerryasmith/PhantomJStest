var page = require('webpage').create();
page.open('http://jerryasmith.us/spark', function () {
    page.render('example.png');
    phantom.exit();
});