import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"
import { PropTypes } from 'prop-types';


export default function Blogs({addBookmark ,handelMarkAsRead}) {
    const [blogs, setBlogs] = useState([])
    // Fetch blogs from an API endpoint
    useEffect(() =>{
        fetch('blogs.json')
       .then(response => response.json())
       .then(data => setBlogs(data))
    },[])
  return (
    <div className="md:w-2/3">
        <h1> Blogs : {blogs.length}</h1>
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog} addBookmark={addBookmark} handelMarkAsRead={handelMarkAsRead}/> )
        }
    </div>
  )
}

Blogs.propTypes = {
  addBookmark: PropTypes.func.isRequired,
  handelMarkAsRead: PropTypes.func.isRequired,
}