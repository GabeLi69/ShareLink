
exports.up = function(knex) {
  return knex.schema.createTable("links", (table) => {
      table.increments().primary();
      table.string("name");
      table.string("url");
      table.string("tag");
      table.timestamps(false,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("links");
};
