import mongoose, { Schema, type Document } from "mongoose";

export interface ISystemSettings extends Document {
  is_election_day_open: boolean;
  updatedAt?: Date;
}

const systemSettingsSchema = new Schema<ISystemSettings>(
  {
    is_election_day_open: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const SystemSettings = mongoose.model<ISystemSettings>("SystemSettings", systemSettingsSchema);
