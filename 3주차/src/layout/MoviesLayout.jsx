import { Outlet } from 'react-router-dom';
import CategoriesPage from '../pages/Movies';
import styled from 'styled-components';

const MovieLayout = () => {
    return (
        <>
            <Outlet></Outlet>
        </>
    )
}

export default MovieLayout;