exports.up = knex =>
  knex.schema.createTable('ratings', table => {
    table.increments('id')
    table.integer('user_id').references('id').inTable('users')
    table
      .integer('note_id')
      .references('id')
      .inTable('notes')
      .onDelete('CASCADE')
  })

exports.down = knex => knex.schema.dropTable('ratings')
