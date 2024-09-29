import PropTypes from "prop-types"
export default function Bookmark({bookmark}) {
    const { title} = bookmark
  return (
    <div className="bg-slate-300 p-4 m-4 rounded-lg">
        <h3 className="text-xl">{title}</h3>
    </div>
  )
}


Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}