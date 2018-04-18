import mongoose from 'mongoose'

const tvrdejSchema = mongoose.Schema({
    name: String
})

const Tvrdej = mongoose.model('Tvrdej', tvrdejSchema)

export default Tvrdej