const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.fullname) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    console.log(req.body);

    const employee = {
        fullname: req.body.fullname,
        function: req.body.function
    };

    Employee.findOrCreate({ where: { fullname: employee.fullname, function: employee.function}})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Employee.",
            });
        });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    const fullname = req.query.fullname;
    var condition = fullname
        ? { fullname: { [Op.iLike]: `%${fullname}%` } }
        : null;

    Employee.findAll({ where: condition, include: ["employees"] })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employess.",
            });
        });
};

exports.setBoss = async (req, res) => {
    const id = req.params.id;

    if (id != req.body.bossId) {
        if(await isTheBoss(req.body.bossId, id)){
            res.send({
                message: "You are trying to select the boss of this employee, select another Boss."
            });
            return;
        }
        Employee.update(req.body, {
            where: { id: id },
        })
            .then((num) => {
                if (num == 1) {
                    res.send({
                        message: "Boss was added successfully.",
                    });
                } else {
                    res.send({
                        message: `Cannot add Boss with id=${id}.`,
                    });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: "Error adding Boss with id=" + id,
                });
            });
    } else {
        res.send({
            message: `Can't be your own boss.`,
        });
    }

};

isTheBoss = async (employee, boss) =>{
    let flag = false;
    await Employee.findAll({ where: {bossId : boss}})
        .then(data => {
            data.forEach(element => {
                if(element.id == employee){
                    flag = true;
                }
            });            
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
    return flag;
}
