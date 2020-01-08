import { Schema, model } from 'mongoose'

const BeerSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    abv: {
      type: Number,
      required: true
    },
    ibu: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'beer'
  }
)

const Beer = model('Beer', BeerSchema)

export default Beer
