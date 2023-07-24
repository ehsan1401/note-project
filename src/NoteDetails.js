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
                <h2>{ Note.title }</h2>
                <p>{Note.body} </p>
                <div>{Note.time}</div>
                <button onClick={handleClick} className="bg-red-500 p-2 rounded-md">Delete</button>
            </article>
        )} 
    </div>
     );
}
 
export default NoteDetails;