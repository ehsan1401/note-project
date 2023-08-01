import {Link} from 'react-router-dom'
const BlogList = ({Notes , title}) => {
    return ( 
        <div className="note_list">
            <h2 className="text-3xl text-right px-10" style={{fontFamily:'Armita'}}>{title}</h2>
            {Notes.map((Note)=>(
                <Link to={`/Notes/${Note.id}`}>
                <div className="note-preview" key={Note.id}>
                    {Note.status && <div className='bg-red-500 text-white font-bold  border m-5 p-5 hover:shadow-md transition duration-500 cursor-pointer'>
                        <h2 style={{fontFamily:'lalezar'}} className='text-2xl'>{Note.title}</h2>
                        <h2>{Note.time} : {Note.min}</h2> 
                        <div style={{fontFamily:'Armita'}} className='text-xl'>مهم</div>
                    </div>}

                    {!Note.status && <div className='border m-5 p-5 hover:shadow-md transition duration-500 cursor-pointer'>
                        <h2 style={{fontFamily:'lalezar'}} className='text-2xl'>{Note.title}</h2>
                        <h2>{Note.time}:{Note.min}</h2> 
                        <div style={{fontFamily:'Armita'}} className='text-xl'>معمولی</div>
                    </div>}

                </div>
                </Link>
            ))}
        </div>
     );
}
 
export default BlogList;