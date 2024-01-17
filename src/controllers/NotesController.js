const knex = require('../database/knex')

class NotesController {
  async create(request, response) {
    const { title, ratings, description, tags } = request.body
    const { user_id } = request.params

    const [note_id] = await knex('notes').insert({
      title,
      description,
      user_id
    })

    const ratingsInsert = ratings.map(rating => {
      return {
        note_id,
        ratings,
        user_id
      }
    })
    await knex('ratings').insert(ratingsInsert)

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })
    await knex('tags').insert(tagsInsert)

    response.json()
  }
}
module.exports = NotesController
