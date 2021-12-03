const PetService = require("../services/pet.service");

module.exports = { 
    listPets: async(req, res) => {
        const pets = await PetService.listPets(res);
    res.json(pets)
},

 editPet: async(req, res) => {
     console.log(req.body);
    res.json({
        pets: await PetService.editPet(req.body)
    })
},

 deletePet: async(req, res) => {
    res.json({
        pets: await PetService.deletePet(req.params.id)
    })
},

 getOnePet: async(req, res) => {
    res.json({
        pets: await PetService.getOnePet(req.params.id)
    })
},

 createPet: async(req, res) => {
     console.log(req.body);
    res.json({
        pets: await PetService.createPet(req.body)
    })
}

}