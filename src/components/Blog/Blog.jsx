import PropTypes from "prop-types"
import { IoBookmarksOutline } from "react-icons/io5";
export default function Blog({blog, addBookmark, handelMarkAsRead}) {
  const {id, title, author, author_img, reading_time, cover,posted_date, hashtags} = blog;
  return (
    <div className="mb-20 space-y-4">
      <img className="w-full h-[450px] mb-8" src={cover} alt={`Cover Picture of the title ${title}`} />
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center">
          <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
          <div className="ml-4 mb-4">
            <h3 className="text-2xl">{author}</h3>
            <p>Posted Date: {posted_date}</p>
          </div>
        </div>
        <div className=" flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={() => addBookmark(blog)} className="ml-4 text-blue-700 text-2xl"><IoBookmarksOutline /></button>
        </div>
      </div>
      <h2>{title}</h2>
      <p>
        {
          hashtags.map((hashtag, idx) => (
            <span key={idx} className="mr-2">{hashtag}</span>
          ))
        }
      </p>
      <button onClick={() => handelMarkAsRead (id, reading_time)} className="text-purple-600 font-bold underline">Mark As Read</button>
    </div>
  )
}


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addBookmark: PropTypes.func.isRequired,
    handelMarkAsRead: PropTypes.func.isRequired,
  
} 