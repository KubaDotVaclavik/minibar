import mongoose from 'mongoose'

const pivoSchema = mongoose.Schema({
    name: String
})

const Pivo = mongoose.model('Pivo', pivoSchema)

export default Pivo