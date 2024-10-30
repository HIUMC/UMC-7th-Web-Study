import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: '현재 상영중인',
    path: '/movies/now-playing',
    image: 'https://wallpapercave.com/wp/wp13143874.jpg',  
  },
  {
    name: '인기있는',
    path: '/movies/popular',
    image: 'https://images6.alphacoders.com/134/thumb-1920-1348900.jpeg',  
  },
  {
    name: '높은 평가를 받은',
    path: '/movies/top-rated',
    image: 'https://images5.alphacoders.com/584/thumb-1920-584539.jpg',  
  },
  {
    name: '개봉 예정중인',
    path: '/movies/upcoming',
    image: 'https://e0.pxfuel.com/wallpapers/617/942/desktop-wallpaper-emirates-stadium-arsenal-stadium.jpg', 
  },
];

const MovieCategories = () => {
  return (
    <div>
      <h2 style={styles.title}>카테고리</h2>
      <div style={styles.categoryContainer}>
        {categories.map((category) => (
          <Link to={category.path} key={category.name} style={styles.categoryCard}>
            <div
              style={{
                ...styles.categoryImage,
                backgroundImage: `url(${category.image})`,
              }}
            />
            <span style={styles.categoryName}>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  categoryCard: {
    width: '200px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
  },
  categoryImage: {
    width: '100%',
    height: '120px',
    backgroundColor: '#333',
    borderRadius: '8px',
    marginBottom: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  categoryName: {
    fontSize: '18px',
  },
};

export default MovieCategories;
