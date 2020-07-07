import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login' 

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null) 
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  const addBlog = async () => {
    console.log(url)
    console.log(title)
    console.log(author)
    try {
      await blogService.create({
        title, author, url
      })
    } catch (exception) {
      console.log(exception)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
        
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      
      blogService.setToken(user.token)
     
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      ///setErrorMessage('wrong credentials')
      setTimeout(() => {
        //setErrorMessage(null)
      }, 5000)
    }
  }  
  
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <h2>log in to application</h2>
    <div>
      username
        <input
        type="text"
        value={username}
        name="Username"
        onChange={({ target }) => setUsername(target.value)}
      />
    </div>
    <div>
      password
        <input
        type="password"
        value={password}
        name="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
    </div>
    <button type="submit">login</button>
  </form>      
  )

  const blogForm = () => {
    return(
      <div>
        <h2>blogs</h2>
        
        <p>{user.name} logged in <button onClick={handleLogout}  >logout</button> </p>
        
        <h2>create new</h2>
        <form onSubmit={addBlog}>

          <div>
            title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          </div>

          <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
          </div>

          <div>
            url
          <input
            value={url}
            onChange={({ target }) => setUrl(target.value)}
          />
          </div>

          <button type="submit">create</button>

          {blogs.map(blog =><Blog key={blog.id} blog={blog} />)}
        
        </form>  
      </div>
    )
  }

  return (
    <div>
      { user === null ? loginForm() : blogForm() }
    </div>
  )

}

export default App