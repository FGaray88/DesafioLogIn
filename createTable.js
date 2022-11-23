const dbconfig = require("./db/config")
const knex = require("knex")(dbconfig.sqlite);


(async () => {
    try {
        const exist = await knex.schema.hasTable("mensajes");
        console.log(exist)
        if (!exist) {
            await knex.schema.createTable("mensajes", (table) => {
                table.increments("id")
                table.string("username").notNullable().defaultTo("N/A")
                table.string("text").notNullable()
                table.timestamp("created_at").defaultTo(knex.fn.now())
            });
        console.log("tabla creada con exito");
        }
    }
    catch(error) {
        console.log(error);
    }
    finally {
        knex.destroy();
    }   
    

    
    
    
    
    /*
    if (!exist) {
        knex.schema.createTable("productos", table => {
            table.increments("id")
            table.string("name").notNullable().defaultTo("N/A")
            table.string("thumbnail").notNullable()
            table.string("description", 500)
            table.float("price")
            table.integer("stock")
            table.integer("code").unique()
        })
    }
    */
})();

