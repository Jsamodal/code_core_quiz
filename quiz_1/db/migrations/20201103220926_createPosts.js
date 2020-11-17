
exports.up = function(knex) {
    return knex.schema.createTable("clucks", (table)=>{
        table.bigIncrements("id");
        table.string("username")
        table.string("image_url");
        table.text("content");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at")
    })
};

exports.down = function(knex) {
    return knexschema.dropTable("clucks")
};
