const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync();
//development only
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use(require('./routes/routes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});