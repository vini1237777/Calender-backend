import userModel from "../models/eventScheduler.model";


export class EventSchedulerDao {
  static async create(name: any) {
    return await userModel.create({ name: name });
  }
}
