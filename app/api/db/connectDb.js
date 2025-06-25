import mongoose from "mongoose"

const MONGODB_URI = `mongodb+srv://amanderwal02:Ajay%40150205@department.3rcfydc.mongodb.net/ic2sdt?retryWrites=true&w=majority&appName=department`

let isConnected = false

export async function connectDB() {
  if (isConnected) return

  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ic2sdt",
  })

  isConnected = true
}

