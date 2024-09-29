import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div>
      <div>
        <h2 className="text-3xl">Total Reading Time: {readingTime}</h2>
      </div>
      <div className="md:w-full bg-gray-200 p-4 ml-4 mt-4">
        <h2 className="text-2xl text-center ">Bookmarks Blogs:{bookmarks.length}</h2>
        {
          bookmarks.map((bookmark, idx )=> <Bookmark key={idx} bookmark={bookmark}/>)
        }
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
