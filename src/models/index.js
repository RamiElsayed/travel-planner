const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip.js");

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
  },
});
Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
  },
})
module.exports = {
  Traveller,
  Location,
  Trip,
};
