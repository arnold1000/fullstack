const dummy = (blogs) => {
  return 1
}


const totalLikes = (blogs) => {
  return blogs.reduce((acc, cur) => acc + cur.likes, 0)
}

const favoriteBlog = (blogs) => {
  const hold = blogs.reduce((acc, cur) => (acc.likes > cur.likes) ? acc : cur)
  return {title: hold.title, author: hold.author, likes: hold.likes}
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
