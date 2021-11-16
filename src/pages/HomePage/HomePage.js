import React from 'react';
import classes from './HomePage.module.css';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from 'components/UI/LoginButton';

const dummy_data = [
  {
    id: 1,
    description: 'Authentic Cliche Forage',
  },
  {
    id: 2,
    description: 'Kinfolk Chips Snackwave',
  },
  {
    id: 3,
    description: 'Coloring Book Ethical',
  },
  {
    id: 4,
    description: 'Typewriter Polaroid Cray',
  },
  {
    id: 5,
    description: 'Pack Truffaut Blue',
  },
  {
    id: 6,
    description: 'The Catcher In The Rye',
  },
];

const HomePage = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return <Redirect push to='/dashboard' />;
  }
  return (
    <section className='text-gray-600 body-font'>
      <div className={classes.container}>
        <div className='text-center mb-20'>
          <h1 className={classes.title}>Raw Denim Heirloom Man Braid</h1>
          <p className={classes.description}>
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine,
            ramps microdosing banh mi pug.
          </p>
        </div>
        <div className={classes.content}>
          {dummy_data.map((data) => {
            return (
              <div key={data.id} className='p-2 sm:w-1/2 w-full'>
                <div className={classes.icon}>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-indigo-500 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                  <span className='title-font font-medium'>{data.description}</span>
                </div>
              </div>
            );
          })}
        </div>
        <LoginButton />
      </div>
    </section>
  );
};

export default HomePage;
