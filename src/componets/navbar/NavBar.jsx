import { NavLink } from 'react-router-dom';
import st from './style.module.css';

const NavBar = () => {
    return ( 
        <>
            <nav>
                
                <h4><NavLink to='/'>Main 0</NavLink></h4>
                <ul>
                    <li><NavLink to='/main1' className={({isActive}) => isActive ? st.activ : ''}>Main 1</NavLink></li>
                    <li><NavLink to='/main2' className={({isActive}) => isActive ? st.activ : ''}>Main 2</NavLink></li>
                    <li><NavLink to='/main3' className={({isActive}) => isActive ? st.activ : ''}>Main 3</NavLink></li>
                    <li><NavLink to='/main4' className={({isActive}) => isActive ? st.activ : ''}>Main 4</NavLink></li>
                </ul>
            </nav>
        </>
     );
}
 
export default NavBar;