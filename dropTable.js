const dbconfig = require("./db/config")
const knex = require("knex")(dbconfig.sqlite);

(async () => {
    try {
        const exist = await knex.schema.hasTable("mensajes");
        if (exist) {
            await knex.schema.dropTable("mensajes");
            console.log("Listo");
        }
    }
    catch(error) {
        console.log(error)
    }
    finally {
        knex.destroy();
    }   
    })();