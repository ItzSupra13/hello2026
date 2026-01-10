import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  university?: string;
  department?: string;
  year?: string;
  attendance: boolean;
  registeredAt: Date;
  attendanceMarkedAt: Date | null;
  comparePassword: (password: string) => Promise<boolean>;
} //interface due to TS

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true, index: true },
  email: { type: String, unique: true, required: true, index: true },
  password: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
  university: { type: String },
  department: { type: String, index: true },
  year: { type: String },
  attendance: { type: Boolean, default: false, index: true },
  registeredAt: { type: Date, default: Date.now, index: true },
  attendanceMarkedAt: { type: Date, default: null },
});

UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err as mongoose.CallbackError);
  }
});

UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

UserSchema.index(
  { name: "text", email: "text" },
  { weights: { name: 2, email: 1 } }
);
UserSchema.index({ registeredAt: 1, department: 1 });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
