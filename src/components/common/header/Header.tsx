import { Link } from 'react-router-dom'

// components
import BikesCart from './bikesCart/BikesCart';

// assets
import Logo from 'assets/Logo.png';
import Login from 'assets/icons/login.png';

// styles
import styles from './styles.module.css';

const Header = () => {
    return (
        <header>
            <div className="container flex items-center justify-between">
                <Link to={"/"} className='flex items-center gap-3'>
                    <img src={Logo} alt="" />
                    <h1 className='uppercase'>
                        <p className='text-2xl'>ODD</p>
                        <p className='text-blue'>Bike</p>
                    </h1>
                </Link>
                <div className='flex items-center gap-12'>
                    <ul className='flex items-center gap-6'>
                        <Link className={`${styles.flip}`} to={"bikes"}><li>Bikes</li></Link>
                        <Link className={`${styles.flip}`} to={"about"}><li>About</li></Link>
                        <Link className={`${styles.flip}`} to={"contact"}><li>Contact</li></Link>
                    </ul>
                    <div className='flex items-center gap-6'>
                        <Link to={""}><img className='w-7' src={Login} alt="" /></Link>
                        <BikesCart />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header