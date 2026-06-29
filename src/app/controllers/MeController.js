import Course from "../models/Course.js";
import mongooseDelete from 'mongoose-delete';
import {mongooseToObject, multipleMongooseToObject} from '../../util/mongoose.js'


class MeController {
    //[GET] /mes/trash/show
    showTrashCourse(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/showTrashCourses', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
    //[PATCH] mes/:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('/mes/trash/show'))
            .catch(next)
    }
}

export default new MeController();