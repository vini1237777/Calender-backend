import { model, Schema, Document } from "mongoose";

interface IUser extends Document {
  title: string;
  start: Date;
  end: Date;
  priority: { value: string; label: String };
  description: string;
}

const eventScheduler = new Schema<IUser>(
  {
    title: {
      type: String,
    },
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
    priority: {
      type: Object,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "eventScheduler",
    versionKey: false,
    timestamps: true,
  }
);

export default model<IUser>("eventScheduler", eventScheduler);
