const getTravellers = (req, res) => {
    res.send("getTravellers");
};
const createTraveller = (req, res) => {
    res.send("createTraveller");
};

const getTravellerById = (req, res) => {
    res.send("getTravellerById");
};

const deleteTravellerById = (req, res) => {
    res.send("deleteTravellerById");
};

module.exports = {
  getTravellers,
  createTraveller,
  getTravellerById,
  deleteTravellerById,
};

