const route = require('express');
const PetController = require("../controllers/Pet.controller");

const router = route();

router.get("/api/pets", PetController.listPets);
router.get("/api/pet/:id", PetController.getOnePet);
router.put("/api/editpet", PetController.editPet);
router.post("/api/addpet", PetController.createPet);
router.delete("/api/deletepet/:id", PetController.deletePet);

module.exports = router;