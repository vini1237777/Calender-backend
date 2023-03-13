
import express from 'express';
import EventSchedulerService from '../services/eventScheduler.service';

import { Req } from '../types/request';


export default class EventSchedulerController {
  static async create(
    req: Req,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const payload = req.body;
      const event = await EventSchedulerService.create(payload);

      return res.status(200).send({ event });
    } catch (err) {
      next(err);
    }
  }

  static async get(
    req: Req,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const events = await EventSchedulerService.get();

      return res.status(200).send({ events });
    } catch (err) {
      next(err);
    }
  }
  static async update(
    req: Req,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const payload = req.body;
      const id=req.params.id;
      const event = await EventSchedulerService.update(id,payload);

      return res.status(200).send({ event });
    } catch (err) {
      next(err);
    }
  }
}
