const route = require('express');
const EventController = require("../controllers/Event.controller");

const router = route();

router.get("/api/events", EventController.listEvents);
router.get("/api/event/:id", EventController.getOneEvent);
router.put("/api/editevent", EventController.editEvent);
router.post("/api/addevent", EventController.createEvent);
router.delete("/api/deleteevent/:id", EventController.deleteEvent);

module.exports = router;