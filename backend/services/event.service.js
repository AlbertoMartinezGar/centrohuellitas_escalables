const Event = require("../models/event");

class EventService {
    EventService(){

    }

    async listEvents(){
        try {
            const events = await Event.find({});
            return events;
        } catch (error) {
            return error;
        }
    }

    async editEvent(editedEvent){
        try {
            await Event.findOneAndUpdate({_id: editedEvent._id}, editedEvent).then(() => {return editedEvent});
        } catch (error) {
            return error;
        }
    }

    async deleteEvent(id){
        try {
            await Event.findOneAndDelete({_id: id}).then((value) => {return value});
        } catch (error) {
            return error;
        }
    }

    async getOneEvent(id){
        try {
            return await Event.findById({_id: id});
        } catch (error) {
            return error;
        }
    }

    async createEvent(newEvent = new Event()){
        try {
            await Event.create(newEvent).then((value) => {
                return value;
            })
        } catch (error) {
            return error;
        }
    }
}

module.exports = new EventService();