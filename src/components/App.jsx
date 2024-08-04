import React, {useEffect} from 'react';
import AppRoutes from './Routes/Routes';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { getCategories } from '../features/categories/categoriesSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories());
    }, [dispatch])

    return(
    <div className='app'>
        <Header/>
        <Footer/>
        <div className='container'>
        <Sidebar/>
        </div>
        <AppRoutes/>
    </div>
    )
}

export default App;