import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title , setTitle] = useState('');
    const [time , setTime] = useState('');
    const [min , setMin] = useState('');

    const [body , setBody] = useState('');
    const [status , setStatus] = useState(false);
    const  history = useHistory();
    const [isPending , setIsPending] = useState(false);



    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title , time , min , body , status };

        setIsPending(true);


        fetch('http://localhost:8000/Notes', {
            method:'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('یادداشت اضافه شد!')
            setIsPending(false);
        })
        history.push('/');    
    }

    return ( 
        <div className="create">
            <h2>اضافه کردن یادداشت جدید</h2>
            <form onSubmit={handleSubmit}>
                <label>موضوع یادداشت</label>
                <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}} />

                <label>متن یادداشت</label>
                <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>

                <label>ساعت </label>
                <input type="number" placeholder="12" min="00" max="24" required value={time} onChange={(e)=>{setTime(e.target.value)}} />

                <label>دقیقه </label>
                <input type="number" placeholder="15" min="00" max="59" required value={min} onChange={(e)=>{setMin(e.target.value)}} />

                <label>وضعیت یادداشت</label>
                <select
                    value={status}
                    onChange={(e)=>{setStatus(e.target.value)}}
                >
                    <option value={false}>معمولی</option>
                    <option value={true}>مهم</option>
                </select>
                {!isPending && <button>اضافه کردن</button>}
                {isPending && <button disabled>Adding Blog ...</button>}
            </form>
        </div>
     );
}
 
export default Create;