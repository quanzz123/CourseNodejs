import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

// Đây chính là "cái khuôn" (Schema) của bạn
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 255
  },
  description: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  }

}, {
  // Option này tự động thêm 2 trường: ngày tạo (createdAt) và ngày cập nhật (updatedAt)
  timestamps: true 
});
// tạo export model
const Course = mongoose.model('Course', courseSchema);

// Xuất cái khuôn này ra để chỗ khác tái sử dụng nếu cần
export default Course;