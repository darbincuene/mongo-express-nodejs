import Shirt_brand from "../models/shirt_brand.js"

const controller = {
  getShirt_brands: function (req, res) {
    Shirt_brand.find({}).exec()
      .then(shirt_brand => {
        if (!shirt_brand) return res.status(404).send({message: "No data found"})
        return res.status(200).send(shirt_brand)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  },
  getShirt_brand: function (req, res) {
    let shirt_brandId = req.params.id
    if (shirt_brandId == null) return res.status(404).send({message: "Shirt_brand not found"})

    Shirt_brand.findById(shirt_brandId).exec()
      .then(data => {
        if (!data) return res.status(404).send({message: "Shirt_brand not found"})
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({message: `Internal error-> ${err}`}))
  },
  saveShirt_brand: function (req, res) {
    let shirt_brand = new Shirt_brand()
    const {name} = req.body
    if (name ) {
        shirt_brand.name= name

        shirt_brand.save()
        .then(storedShirt_brand => {
        storedShirt_brand
            ? res.status(200).json({shirt_brand: storedShirt_brand})
            : res.status(404).send({message: "Error saving the document"})
        })
        .catch(error => res.status(500).send({message: "Error while saving the document"}))
    } else {
    return res.status(400).send({message: "Data is not right"})
    }
},
  updateShirt_brand: function (req, res) {
    let {id} = req.params
    let update = req.body

    Shirt_brand.findByIdAndUpdate(id, update, {returnDocument: 'after'})
    .then(updatedShirt_brand => {
        if(!updatedShirt_brand) return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({show: updatedShirt_brand})
    })
    .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
  },
  deleteShirt_brand: function (req, res) {
    let Shirt_brandId = req.params.id

    Shirt_brandId.findByIdAndRemove(Shirt_brandId)
    .then(removedShirt_brand => {
        if (!removedShirt_brand) return res.status(404).send({message: "The show does not exist"})
        return res.status(200).send({show: removedShirt_brand})
    })
    .catch(err => res.status(500).send({message: "Error while deleting"}))
  }
}

export default controller