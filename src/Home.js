import { useEffect , useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const {data : Notes , isPending , error} = useFetch('http://localhost:8000/Notes');
    return ( 
        <div className="home py-10 w-full">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div> }
        {Notes && <BlogList Notes={Notes} title="یادداشت ها"/>}
        </div>
     );
}
 
export default Home;