const Posts = require('../models/Posts.js')
const { Op } = require('sequelize')

exports.add = (req, res) => {
  res.render('add-post', {
    title: 'Adicionar post - TechBlog'
  })
}

exports.store = async (req, res) => {
  const image = req.file.filename
  const imgurl = '/images/' + image

  const post = await Posts.create({
    title: req.body.title,
    imgurl: imgurl,
    description: req.body.description,
    text: req.body.text
  })

  res.redirect('/')
}

exports.listAll = async (req, res) => {
  const posts = await Posts.findAll()

  res.render('home', {
    posts: posts,
    title: 'TechBlog'
  })
}


// bd.all('SELECT * FROM projetos', function (err, rows) {
//   if (err) return console.log(err)
//   let projetosRevert = [...rows].reverse()
//   let ultimosProjetos = []
//   for (projeto of projetosRevert) {
//     if (ultimosProjetos.length < 3) {
//       ultimosProjetos.push(projeto)
//     }
//   }
//   return res.render('index.html', { rows: ultimosProjetos })
//   console.log(rows)
// })
// })

exports.listOne = async (req, res) => {
  const { id } = req.params

  const post = await Posts.findOne({
    where: {
      id: id
    }
  })

  res.render('single-post', {
    post: post,
    title: `${post.title} -  TechBlog`
  })
}

exports.search = async (req, res) => {
  const query = req.query.search
  const posts = await Posts.findAll({
    where: {
      title: { [Op.like]: `%${query}%` }
    }
  })

  res.render('search', {
    title: `Resultados de pesquisas de ${query} - TechBlog`,
    posts: posts
  })
}

exports.delete = async (req, res) => {
  const post = await Posts.destroy({ where: { id: req.params.id } })
  res.redirect('/')
}
