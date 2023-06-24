import { EventSchedulerDao } from "../dao/eventScheduler.dao";

export default class EventSchedulerService {
  static async create(payload: any) {
    return EventSchedulerDao.create(payload);
  }

  static async get() {
    return EventSchedulerDao.get();
  }
  static async update(id:any,payload:any) {
    return EventSchedulerDao.update(id, payload);
  }
}
