const Sequelize = require('sequelize');
const course = require('../models').course;

module.exports = {

    findAll(params, res){
        let tipo = params.tipo
        let institutionID = params.institutionID
        console.log(tipo)
        course.findAll({
            where: {
                [tipo]: institutionID,
            }
        })
        .then(courses => {
            let response = {
                courses:courses,
                exists: true,
            }

            if(courses.length == 0){
                response.exists = false
            }
            res.status(200).send(response)
        })
        .catch(error => res.status(400).send({error: "imposible de encontrar"}));
    },

    find(params, res){
        let courseName = params.name
        course.findAll({
            where: {
                name: courseName,
            }
        })
        .then(courses => {
            let response = {
                courses:courses,
                exists: true,
            }

            if(courses.length == 0){
                response.exists = false
            }
            res.status(200).send(response)
        })
        .catch(error => res.status(400).send({error: "imposible de encontrar"}));
    },

    create(params, res){
        course.create({
            name: params.name,
            price: params.price,
            minGrade: params.minGrade,
            stars: params.stars,
            numStudents: params.numStudents,
            institutionID: params.institutionID,
            photo: params.photo,
        })
        .then(courses => {
            res.status(200).send(courses)
        })
        .catch(error => res.status(400).send(error));
    }
}