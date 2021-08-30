const express = require("express");

class LinkRouter {
    constructor(linkService) {
        this.linkService = linkService;
    }

    router() {
        let router = express.Router();
        router.get("/", this.get.bind(this));
        router.post("/", this.post.bind(this));
        return router;
    }

    get(req, res) {
        console.log("get request");
        return this.linkService.listLink().then((links) => {
            return res.json(links);
        });
    }

    post(req, res) {
        console.log("post request");
        return this.linkService.addLink(req.body).then(() => {
            return this.linkService.listLink();
        }).then((links) => {
            return res.json(links);
        } );
    }

}

module.exports = LinkRouter;