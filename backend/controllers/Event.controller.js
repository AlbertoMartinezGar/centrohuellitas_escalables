const EventService = require("../services/event.service");

module.exports = { 
    listEvents: async(req, res) => {
        const events = await EventService.listEvents(res);
        res.json(events)
    },

editEvent: async(req, res) => {
    res.json({
        events: await EventService.editEvent(req.body)
    })
},

deleteEvent: async(req, res) => {
    res.json({
        events: await EventService.deleteEvent(req.params.id)
    })
},

getOneEvent: async(req, res) => {
    const oneEvent = await EventService.getOneEvent(req.params.id)
    res.json(oneEvent)
},

createEvent: async(req, res) => {
     console.log(req.body);
    res.json({
        events: await EventService.createEvent(req.body)
    })
}

}