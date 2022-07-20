const { Traveller } = require("../../models");

const getTravellers = async (req, res) => {
  try {
    const travellers = await Traveller.findAll({});

    res.json({ data: travellers });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all travellers | ${error.message}`);
    return res.status(500).json({error: "Failed to get all travellers"})
  }
};

const createTraveller = (req, res) => {
  res.send("createTraveller");
};

const getTravellerById = async(req, res) => {
    try {
        const { id } = req.params;

        const traveller = await Traveller.findByPk({id});
    
        res.json({ data: traveller });
      } catch (error) {
        console.log(`[ERROR]: Failed to get all traveller | ${error.message}`);
        return res.status(500).json({error: "Failed to get traveller"})
      } 
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
