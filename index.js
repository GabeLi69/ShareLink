const express = require("express");
const cors = require("cors");

const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);

const app = express();
app.use(cors());
app.use(express.json());

const LinkRouter = require("./routers/LinkRouter");
const LinkService = require("./services/LinkService");

const linkService = new LinkService(knex);


app.use("/api/link", new LinkRouter(linkService).router());

app.listen(8080, () => {
    console.log("SERVER RUNNING")
})
