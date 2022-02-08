const express = require('express');
const router = express.Router();

const PostsController = require('./controllers/PostController.js')

router.get('/', PostsController.listAll)

router.get('/post', (req, res) => res.render("single-post"))

router.get('/posts/add', PostsController.add)

router.post('/posts/add', PostsController.store)

//Mostrar posts por ID
router.get('/posts/:id', PostsController.listOne);

//pesquisar por post
router.get('/search', PostsController.search);

//deletar posts
router.get('/deletar/:id', PostsController.delete);


module.exports = router;
