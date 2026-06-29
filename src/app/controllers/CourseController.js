import Course from "../models/Course.js";
import mongooseDelete from 'mongoose-delete';
import {mongooseToObject, multipleMongooseToObject} from '../../util/mongoose.js'
class CourseController {

    
    //[GET] /courses/:slug
    show(req, res,next) {
        // lấy slug động từ url /courses/slug-1
        const courseSlug = req.params.slug
        Course.findOne({slug: courseSlug})
        .then(course => {
            res.render('courses/show', {
                course : mongooseToObject(course)
            })
        })
        .catch(next)
    }

    //[GET] /courses/create
    create(req, res,next) {
        res.render('courses/create')
    }
    //[POST] /courses/store
    store(req, res,next) {
        // dữ liệu ngườ dùng gửi lên
        const formData = req.body
        // tạo thực thể khóa học mới
        const course = new Course(formData)

        // lưu khóa học vào DB
        course.save()
        .then(() => res.redirect('/'))
        .catch(next);
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => {
            res.render('courses/edit', {
                course: mongooseToObject(course)
            })
        })
        .catch(next)
    }
    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id : req.params.id}, req.body)
        .then(() => res.redirect('/me/courses/show'))
        .catch(next)
    }
    destroy(req, res, next) {
        Course.delete({_id : req.params.id})
            .then(() => res.redirect('/me/courses/show'))
            .catch(next)
    }
    
}

export default new CourseController();