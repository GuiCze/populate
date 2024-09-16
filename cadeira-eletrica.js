import conn from "./conn.js";

const Schema = conn.Schema

const americanoMedioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    }
})

const cadeiraSchema = new Schema({
    voltagem: {
        type: Number,
        required: true
    },
    americano: americanoMedioSchema
})

const CadeiraEletrica = conn.model("CadeiraEletrica", cadeiraSchema)


const insert = async () => {
    try {
        await CadeiraEletrica.create({
            americano: {
                nome: "John Peterson",
                dataNascimento: "1970-01-01"
            },
            voltagem: 380
        })
    } catch (error) {
        console.log(error);
    }
}

insert()
