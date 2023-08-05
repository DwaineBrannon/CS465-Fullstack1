const request = require('request');
const apiOptions = {
    server: 'https://localhost:3000'
}

/* render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';

    // if the result was not an array, make it an array and report error
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    }
    else {
        if (!responseBody.length) {
            message = 'No trips exist in database';
        }
    }

    // render the page
    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};

// To get /travel in the url
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    console.info('>>travelController.travelList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    )
}

module.exports = {
    travelList,
};