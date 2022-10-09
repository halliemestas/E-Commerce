const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({include:[Product]}).then(tag => {
    res.json(tag)
  }).catch(err =>
    {
      console.log(err)
    })
});

router.get('/:id', (req, res) => {
  Tag.findOne({where: { id : req.params.id}, include:[Product]} ).then( tag => {
    res.json(tag)
  }).catch(err=>
    {
      console.log(err)
    })
});

router.post('/', (req, res) => {
  Tag.create(req.body).then(tag => {
    res.json(tag)
  }).catch(err=>
    {
      console.log(err)
    })
});

router.put('/:id', (req, res) => {
  Tag.update({where: { id : req.params.id}} ).then( tag => {
    res.sendStatus(200)
  }).catch(err=>
    {
      console.log(err)
    })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({where: { id : req.params.id}} ).then( tag => {
    res.sendStatus(200)
  }).catch(err=>
    {
      console.log(err)
    })
});

module.exports = router;
