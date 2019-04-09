exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", function(tbl) {
      tbl.increments();
      
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      
      tbl.string("description", 128).notNullable();
      
      tbl.string("notes", 128);
      
      tbl.boolean("completed").defaultTo(false);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions");
  };