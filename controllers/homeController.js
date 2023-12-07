exports.index = (req, res) => {
    res.render("index");
    };
    exports.showCareer = (req, res) => {
        res.render("career")
    };
    exports.showAbout = (req,res) => {
        res.render("about");
    };
    exports.showRealestateagents = (req, res) => {
        res.render("realestateagents")
    };
    exports.showFeaturedproperties = (req,res) => {
        res.render("featuredproperties");
    };
    exports.showSignUp = (req, res) => {
    res.render("contact");
    };
    
    exports.postedContactForm = (req, res) => {
    res.render("thanks");
    };

    exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
    };
    
    exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
    };
    
    exports.respondWithName = (req, res) => {
    res.render("index");
    };