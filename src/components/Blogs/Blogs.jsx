import { useEffect } from "react"
import { useState } from "react"


export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    // Fetch blogs from an API endpoint
    useEffect(() =>{
        fetch('blogs.json')
       .then(response => response.json())
       .then(data => setBlogs(data))
    },[])
  return (
    <div>Blogs</div>
  )
}
