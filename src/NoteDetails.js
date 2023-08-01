import {useParams} from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const NoteDetails = () => {
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
                <h2 className="font-bold text-2xl mb-16 ">{ Note.title }</h2>
                <div className=" mx-16 w-auto m-auto p-16 shadow-inner overflow-auto	">
                    <p>{Note.body} </p>
                </div>
                <div>{Note.time}</div>
                <button onClick={handleClick} className="text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300	">Delete</button>
            </article>
        )} 
    </div>
     );
}
 
export default NoteDetails;