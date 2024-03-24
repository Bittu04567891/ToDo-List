const Card = require("../models/Card");
const User = require("../models/User");

const router = require("express").Router();
//CREATE
router.post("/", async (req, res) => {
  const newCard = new Card(req.body);

  try {
    const savedCard = await newCard.save();
    res.status(200).json(savedCard);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCard);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.status(200).json("Card has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
//all cards get
router.get("/find/:userId", async (req, res) => {
  try {
    const cards = await Card.find({ userId: req.params.userId });
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Star
router.put("/star/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    card.star = !card.star;
    const updatedCard = await card.save();

    res.status(200).json(updatedCard);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
