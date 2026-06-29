import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';
import mongooseDelete from 'mongoose-delete';

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
// 2. Thêm plugin xóa mềm vào Schema
courseSchema.plugin(mongooseDelete, { 
    deletedAt: true,        // Lưu thêm thời gian thực hiện xóa
    overrideMethods: 'all'  // Tự động ẩn các bản ghi đã xóa khỏi các câu lệnh tìm kiếm thông thường (find, findOne...)
});
// tạo export model
const Course = mongoose.model('Course', courseSchema);

// Xuất cái khuôn này ra để chỗ khác tái sử dụng nếu cần
export default Course;