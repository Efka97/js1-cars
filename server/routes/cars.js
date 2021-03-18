const {Router} = require('express');


const router = Router();

router.get('/', (req, res) => {
  res.send('Ateityje gražinsiu automobilius');
});

router.post('/', (req, res) => {
  res.send('Ateityje įdėsiu vieną automobilį');
});

router.patch('/:id', (req, res) => {
  res.send('Ateityje atnuajinsiu vieną automobilį');
});

router.delete('/:id', (req, res) => {
  res.send('Ateityje ištrinsiu vieną automobilį');
});

module.exports = router;