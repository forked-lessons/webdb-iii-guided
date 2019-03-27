exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function(tbl) {
    //primary key, called id and make it auto-increment
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};
