// file to handle requests

 // Logic that happens when requests come in

const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways'});
};
 
module.exports =  {
    index
}
