import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: '현재 상영중인',
    path: '/movies/now-playing',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Farsenal-pc-2024-wallpapers&psig=AOvVaw3DouoMCT_R0hRy1agwesWk&ust=1730287895139000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjN44u_s4kDFQAAAAAdAAAAABAE',  
  },
  {
    name: '인기있는',
    path: '/movies/popular',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwall.alphacoders.com%2Fbig.php%3Fi%3D1348900&psig=AOvVaw3DouoMCT_R0hRy1agwesWk&ust=1730287895139000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjN44u_s4kDFQAAAAAdAAAAABAP',  
  },
  {
    name: '높은 평가를 받은',
    path: '/movies/top-rated',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwall.alphacoders.com%2Fbig.php%3Fi%3D584539&psig=AOvVaw3DouoMCT_R0hRy1agwesWk&ust=1730287895139000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjN44u_s4kDFQAAAAAdAAAAABAY',  
  },
  {
    name: '개봉 예정중인',
    path: '/movies/upcoming',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fdesktop-wallpaper-tnnmg&psig=AOvVaw3DouoMCT_R0hRy1agwesWk&ust=1730287895139000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjN44u_s4kDFQAAAAAdAAAAABAh', 
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
