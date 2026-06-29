import Course from "../models/Course.js";
import {multipleMongooseToObject} from '../../util/mongoose.js'
class SiteController {

    //[GET] /home
    index(req, res, next) {
        Course.find({})
        .then(courses => {
            res.render('home', {
                courses : multipleMongooseToObject(courses)
            })
        })
        .catch(next)
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
    //[GET] /me/course/show
    show(req, res, next) {
        Promise.all([
            // truy vấn 1 lấy các khóa học chư bị xóa
            Course.find({}),
            //truy vấn 2: đếm các khóa học đã bị xóa mềm
            Course.countDocumentsDeleted()

        ])
            .then(([courses, deletedCount]) => {
                res.render('me/showCourses', {

                    courses: multipleMongooseToObject(courses),
                    deletedCount: deletedCount
                })
            })
            .catch(next)
    }
}

export default new SiteController();