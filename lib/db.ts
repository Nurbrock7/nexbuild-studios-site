import mongoose from "mongoose";

/**
 * Cached MongoDB connection for Next.js serverless/dev environments.
 * Reuses one connection across hot reloads and warm invocations instead of
 * opening a new socket per request.
 */

// eslint-disable-next-line no-var
declare global {
  var _mongoose:
    | { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
    | undefined;
}

const cached = global._mongoose ?? { conn: null, promise: null };
global._mongoose = cached;

/**
 * Connect to MongoDB using MONGODB_URI. Throws if the env var is missing —
 * callers decide whether that's fatal (it isn't for lead capture).
 */
export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { bufferCommands: false });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    // Reset so the next request retries instead of reusing a rejected promise.
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}
