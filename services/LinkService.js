class LinkService {
    constructor(knex){
        this.knex = knex;
    }

    async addLink(link){
        var newLink = {
            name: link.name,
            url: link.url,
            tag: link.tag
        };
        var newLinkID = await this.knex.insert(newLink).into("links").returning("id");
        newLink.id = newLinkID;
    }

    listLink(){
        let query = this.knex.select("links.id", "links.name", "links.url", "links.tag")
            .from("links")

        return query.then((rows) => {
            return rows.map((row) => {
                return {
                    id: row.id,
                    name: row.name,
                    url: row.url,
                    tag: row.tag
                }
            })
        })
    }



}

module.exports = LinkService;