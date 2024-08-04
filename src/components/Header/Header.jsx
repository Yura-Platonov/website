import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../utils/routes'
import styles from "../../styles/Header.module.css";
import LOGO from '../../images/logo.svg'


const Header = () => {
    return(
<div className='styles.header'>
    <div className='styles.logo'></div>
    <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="Stuff" />
    </Link>
</div>
)
}

export default Header;