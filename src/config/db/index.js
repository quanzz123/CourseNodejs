import mongoose from 'mongoose';

const connectDB = async () => {
  // Thay thế chuỗi này bằng Connection String 
  const MONGO_URI = 'mongodb://localhost:27017/F8_education_dev';

  try {
    const conn = await mongoose.connect(MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Dừng ứng dụng nếu kết nối thất bại
  }
};

export default connectDB;