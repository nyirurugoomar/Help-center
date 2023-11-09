const router = require('express').Router();
const { getCards,createCard,updateCard, deleteCard } = require('./controllers/Card');



router.get("/cards", getCards);
router.post('/cards',createCard)
router.put('/cards/:cardID',updateCard)
router.delete('/cards/:cardID',deleteCard)


module.exports = router;