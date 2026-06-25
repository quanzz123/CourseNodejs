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
         Course.find({})
        .then(courses => {
            res.render('me/showCourses', {
                courses : multipleMongooseToObject(courses)
            })
        })
        .catch(next)
    }
}

export default new SiteController();