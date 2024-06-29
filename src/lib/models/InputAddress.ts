import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IInputAddress extends Document {
  shippingName: string;
  receiverName: string;
  selectedAddress: string;
  detailedAddress?: string;
  entryMethod: string;
  entryInput?: string;
  carrierOption: string;
  carrierInput?: string;
  phoneNumber: string;
  isDefault: boolean;
  id: string;
}

const inputAddressSchema: Schema<IInputAddress> = new Schema(
  {
    shippingName: { type: String, required: true },
    receiverName: { type: String, required: true },
    selectedAddress: { type: String, required: true },
    detailedAddress: { type: String },
    entryMethod: { type: String, required: true },
    entryInput: { type: String },
    carrierOption: { type: String, required: true },
    carrierInput: { type: String },
    phoneNumber: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
    id: { type: String, required: true, unique: true }
  },
  {
    versionKey: false,
    collection: 'input-address'  // Explicitly set the collection name
  }
);

const InputAddress: Model<IInputAddress> = mongoose.models.InputAddress || mongoose.model<IInputAddress>('InputAddress', inputAddressSchema);

export default InputAddress;
