import { NavLink } from "react-router-dom";

const Header = () => {


    return (
        <>
            <NavLink style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })} end to='/' className='profile'>
                main
            </NavLink>
            <NavLink style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })} end to='/profile' className='profile'>
                profile
            </NavLink>
        </>
    )
}
export default Header;
