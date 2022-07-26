const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip.js");

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
});
Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false,
  },
});
module.exports = {
  Traveller,
  Location,
  Trip,
};
