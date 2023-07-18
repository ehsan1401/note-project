import { Link } from 'react-router-dom'
const NavigationBar = () => {
    return ( 
        <div className="navigation">
            <h2 className="logo inline float-right p-8 text-4xl font-bold text-yellow-500" style={{fontFamily:"title"}}>یادداشت نویس</h2>
            <ul className="flex justify-start text-md">
                <Link to="/AboutUs">
                <li className="p-8 hover:text-red-500" style={{fontFamily:"aban"}}>درباره ما</li>
                </Link>
                <Link to="/create">
                <li className="p-8 hover:text-red-500" style={{fontFamily:"aban"}}>اضافه کردن یادداشت</li>
                </Link>
                <Link to="/">
                <li className="p-8 hover:text-red-500" style={{fontFamily:"aban"}}>خانه</li>
                </Link>
            </ul>
        </div>
     );
}
 
export default NavigationBar;