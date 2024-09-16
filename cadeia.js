import conn from "./conn.js";

const Schema = conn.Schema;

const prisioneiroSchema = new Schema({
    nome: {
        type: String,
        required: true
    }
})

const celaSchema = new Schema({
    altura: {
        type: Number,
        required: true
    },
    comprimento: {
        type: Number,
        required: true
    },
    largura: {
        type: Number,
        required: true
    },
    prisioneiros: [prisioneiroSchema]
})

const cadeiaSchema = new Schema ({
    postal: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ["MUNICIPAL", "ESTADUAL", "FEDERAL"],
        default: "MUNICIPAL"
    },
    cela: [celaSchema]
})

const Cadeia = conn.model("Cadeia", cadeiaSchema)

Cadeia.create({
    postal: "123456",
    tipo: "FEDERAL",
    cela: [
        {
            altura: 10,
            comprimento: 10,
            largura: 10,
            prisioneiros: [
                {
                    nome: "John Peterson"
                },
                {
                    nome: "Vlademiro"
                }
            ]
        }
    ]
})

export default Cadeia;
