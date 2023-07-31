const mongoose = require('mongoose'); // access database 
const model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    model
        .find({}) // emppty filler for all
        .exec((err, trips) => {
            if(!trips) {
                return res 
                    .status(404)
                    .json({ "message" : "trip not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }     
    
        });
};

const tripsFindCode = async (req, res) => {
    model
        .find({ 'code': req.params.tripCode}) // emppty filler for all
        .exec((err, trips) => {
            if(!trips) {
                return res 
                    .status(404)
                    .json({ "message" : "trip not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }     
    
        });
};
module.exports = {
    tripsList,
    tripsFindCode
};