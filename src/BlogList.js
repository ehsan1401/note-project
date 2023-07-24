import {Link} from 'react-router-dom'
const BlogList = ({Notes , title}) => {
    return ( 
        <div className="note_list">
            <h2 className="text-3xl text-right px-10">{title}</h2>
            {Notes.map((Note)=>(
                <Link to={`/Notes/${Note.id}`}>
                <div className="note-preview border m-5 p-5 hover:shadow-md transition duration-500 cursor-pointer" key={Note.id}>
                    <h2>{Note.title}</h2>
                    <h2>{Note.time}</h2>
                    <p>{Note.id}</p>
                </div>
                </Link>
            ))}
        </div>
     );
}
 
export default BlogList;