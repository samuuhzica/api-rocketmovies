exports.up = knex => knex.schema.createTable("review", table => {
  table.increments("id");
  table.integer("review");

  table.integer("user_id").references("id").inTable("users");
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");

});
  
exports.down = knex => knex.schema.dropTable("review");
