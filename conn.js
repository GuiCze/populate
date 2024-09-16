import mongoose from "mongoose";

const mongoDB = "mongodb://localhost:27017/subdocumento"

const main = async () => {
    try {
        await mongoose.connect(mongoDB)
        console.log("Conectado ao mongoDB");
    } catch (error) {
        console.log(error);
    }
}

main()

export default mongoose;