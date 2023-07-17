const fs = require('fs');

// Take JSON file, read as string, parse and convert to JSON
// Not best practice! Best practice would be to read on startup and cache files
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// To get /travel in the url
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
}