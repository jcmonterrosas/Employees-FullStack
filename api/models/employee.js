module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      fullname: {
        type: Sequelize.STRING
      },
      function: {
        type: Sequelize.STRING
      }
    });
  
    return Employee;
  };