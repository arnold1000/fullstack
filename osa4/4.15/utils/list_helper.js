const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}


const totalLikes = (blogs) => {
  return blogs.reduce((acc, cur) => acc + cur.likes, 0)
}

const favoriteBlog = (blogs) => {
  const hold = blogs.reduce((acc, cur) => (acc.likes > cur.likes) ? acc : cur)
  return { title: hold.title, author: hold.author, likes: hold.likes }
}

const mostBlogs = (blogs) => {
  const names = blogs.map(x => x.author)

  const counts = _(names).countBy().entries().maxBy(_.last)

  return { author: counts[0], blogs: counts[1] }
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
