import Shirt_list from '../models/shirt_list.js'

const controller = {
  getShirt_lists: function (req, res) {
    Shirt_list.find({}).exec()
      .then(shirt_lists => {
        if (!shirt_lists) return res.status(404).send({message: "No data found"})
        return res.status(200).json(shirt_lists)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  },
  getShirt_list: function (req, res) {
    let shirt_listId = req.params.id
    if (shirt_listId == null) return res.status(404).send({message: "Shirt_list not found"})

    Shirt_list.findById(shirt_listId).exec()
      .then(data => {
        if (!data) return res.status(404).send({message: "Shirt_list not found"})
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({message: `Internal error-> ${err}`}))
  },
  saveShirt_list: function (req, res) {
    let shirt_list = new Shirt_list()
    const {name,price,size,color,photo} = req.body
    if (name && price) {
        shirt_list.name = name
        Shirt_list.price=price
        Shirt_list.size=size
        shirt_list.color=color
        shirt_list.photo=photo
        shirt_list.save()
        .then(storedShirt_list => {
        storedShirt_list
            ? res.status(200).json({shirt_list: storedShirt_list})
            : res.status(404).send({message: "Error saving the document"})
        })
        .catch(error => res.status(500).send({message: "Error while saving the document"}))
    } else {
    return res.status(400).send({message: "Data is not right"})
    }
},
  updateShirt_list: function (req, res) {
    let showId = req.params.id
    let update = req.body

    Show.findByIdAndUpdate(shirt_listId, update, {returnDocument: 'after'})
    .then(updatedShirt_list => {
        if(!updatedShirt_list) return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({show: updatedShow})
    })
    .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
  },
  deleteShirt_list: function (req, res) {
    let showId = req.params.id

    Shirt_listId.findByIdAndRemove(shirt_listId)
    .then(removedShirt_list => {
        if (!removedShirt_list) return res.status(404).send({message: "The show does not exist"})
        return res.status(200).send({show: removedShirt_list})
    })
    .catch(err => res.status(500).send({message: "Error while deleting"}))
  }
}

export default controller