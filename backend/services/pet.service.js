const Pet = require("../models/pet");

class PetService {
    PetService(){

    }

    async listPets(res){
        try {
            const pets = await Pet.find({});
            return pets;
        } catch (error) {
            return error;
        }
    }

    async editPet(editedPet){
        try {
            await Pet.findOneAndUpdate({_id: editedPet._id}, editedPet).then(() => {return editedPet});
        } catch (error) {
            return error;
        }
    }

    async deletePet(id){
        try {
            await Pet.findOneAndDelete({_id: id}).then((value) => {return value});
        } catch (error) {
            return error;
        }
    }

    async getOnePet(id){
        try {
            return await Pet.findById({_id: id});
        } catch (error) {
            return error;
        }
    }

    async createPet(newPet = new Pet()){
        try {
            await Pet.create(newPet).then((value) => {
                return value;
            })
        } catch (error) {
            return error;
        }
    }
}

module.exports = new PetService();