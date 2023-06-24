import eventSchedulerModel from "../models/eventScheduler.model";


export class EventSchedulerDao {
  static async create(payload: any) {
    return eventSchedulerModel.create(payload);
  }

  static async get() {
    return eventSchedulerModel.find({});
  }
  static async update(id: any, payload: any) {
    return eventSchedulerModel.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });
  }
}
