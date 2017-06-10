import { Event, EventModel } from './../schemas/Event';

export class EventService {

    getEvents(): Promise<Array<Event>> {
        return new Promise((resolve, reject) => {
            EventModel.find({ enabled: true }, { name: 1, _id: 0 }, (err, events: Array<Event>) => {
                if(err) reject(err);
                resolve(events);
            });
        });
    }

}