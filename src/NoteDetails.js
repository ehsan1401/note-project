import {useParams} from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
import { useState } from "react";

const NoteDetails = () => {
    const [status , setStatus] = useState(false);
    const {id} = useParams();
    const {data : Note , error , isPending } = useFetch('http://localhost:8000/Notes/' + id);
    const history = useHistory();
    const handleClick = () =>{
        fetch('http://localhost:8000/Notes/' + Note.id , {
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
        
        { isPending && <div>Loading...</div>}
        { error && <div>{error}</div>}
        { Note && (
            <article>
                <br />
                <h2 className=" text-3xl mb-6 " style={{fontFamily:'Sina'}}>{ Note.title } </h2>
                <div className="status mt-5 p-3 font-bold text-4xl" style={{fontFamily:'Armita'}}>
                    {Note.status && <div className="text-red-500">مهم</div>}
                    {!Note.status && <div>معمولی</div>}
                </div>
                <div className="text-3xl font-bold inline">{Note.time}:{Note.min}</div>
                <div className=" mx-16 w-auto m-auto p-16 shadow-inner overflow-auto	">
                    <p style={{fontFamily:'aban'}}>{Note.body} </p>
                </div>
                



                
                <button onClick={handleClick} className="text-red-500 p-2 mt-5 border border-gray-200 rounded-md hover:bg-red-500 hover:text-white transition duration-300	">Delete</button>
            </article>
        )} 
    </div>
     );
}
 
export default NoteDetails;