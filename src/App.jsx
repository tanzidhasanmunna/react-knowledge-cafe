import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const addBookmark = (blog) => {
    console.log(blog);
    setBookmarks([...bookmarks, blog])
  }

  const handelMarkAsRead = (id, reading_time) => {
    setReadingTime(readingTime + reading_time);
    
    // remove the blog from bookmarks
    setBookmarks(bookmarks.filter(bookmark => bookmark.id!== id))
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="md:flex">
        <Blogs addBookmark={addBookmark}  handelMarkAsRead={handelMarkAsRead}/>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
      </div>
    </div>
  );
}

export default App;
