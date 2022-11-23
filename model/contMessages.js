const fs = require("fs")

class Messages {

    constructor(archivo) {
        this.archivo = archivo;
    }

    save(message) {
            const { id, username, text, time } = message;
            /* const newMessage = {
                id,
                username,
                text,
                time
            }; */
            const data = leerArchivo(this.archivo);
            data.push(message)
            escribirArchivo(this.archivo, JSON.stringify(data))
            
    }

    getAll() {
        const data = leerArchivo(this.archivo);
        return data;
    }
}

leerArchivo = (archivo) => {
        const data = fs.readFileSync(archivo,"utf-8")
        const dataParse = JSON.parse(data)
        return dataParse;
}

escribirArchivo = (archivo, data) => {
        fs.writeFileSync(archivo, data)
}

module.exports = Messages;
