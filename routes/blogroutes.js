const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();


router.get('/', (req, res)=>{
    res.render("index")
  })


  router.get('/admin9353580260madBLOGMINEZ', (req, res)=>{
    res.render("admin")
  })

  router.get('/about', (req, res)=>{
    res.render("about")
  })

  router.get('/contact', (req, res)=>{
    res.render("contact")
  })

  router.get('/error', (req, res)=>{
    res.render("error")
  })

router.post('/admin9353580260madBLOGMINEZ', blogController.createPost);
router.get('/getPosts', blogController.getPosts);

module.exports = router;
