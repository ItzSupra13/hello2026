import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

global.mongoose = global.mongoose || { conn: null, promise: null };

const connectToDatabase = async () => {
  if (global.mongoose.conn) return global.mongoose.conn;

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGODB_URI as string, {
      dbName: 'hello-ieee-2', 
      autoIndex: process.env.NODE_ENV !== "production",
    }).then((mongooseInstance) => mongooseInstance.connection);
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

export default connectToDatabase;
