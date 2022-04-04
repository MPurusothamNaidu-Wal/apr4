function custommiddleware(req, res, next) {
    if (req.params.name) {
        if (req.params.name == "danger") {
            console.log("Came in error");
            res.json({ status: 0, debug_data: "You cannot send name as danger" })
        }
    } next();
};
module.exports = custommiddleware;