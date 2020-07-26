/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Icon, { Stack } from '@mdi/react';

const GoogleIcon = ({ size }) => (
  <Stack size={size} viewBox='0 0 1024 1024'>
    <Icon
      path='M511.09 959.58c247.45 0 448.05-200.24 448.05-447.25 0-245.95-198.9-445.53-444.9-447.22h-6.3C265.84 66.78 69.37 260.09 63.19 500.66V524c6.2 241.61 204.36 435.58 447.9 435.58z m-235-539.68c13.73-32.34 32.3-60.22 55.68-83.67 23.39-23.47 51.2-42.06 83.44-55.83a256.507 256.507 0 0 1 101.84-20.66c68.12 0 126.57 22.89 175.38 68.64l-71.17 68.63c-27.95-27.08-62.67-40.64-104.23-40.64-29.3 0-56.37 7.4-81.25 22.19a163.444 163.444 0 0 0-59.08 60.28c-14.52 25.38-21.8 53.1-21.8 83.15 0 30.04 7.27 57.76 21.81 83.15a163.37 163.37 0 0 0 59.08 60.28 155.955 155.955 0 0 0 81.24 22.2c19.73 0 37.91-2.72 54.48-8.2 16.58-5.47 30.2-12.28 40.87-20.47a147.99 147.99 0 0 0 27.93-28.03c7.95-10.47 13.8-20.36 17.54-29.7 3.53-8.57 6.1-17.51 7.66-26.64H517.05v-90.16h246.93c2.72 15.25 4.07 29.82 4.07 43.71 0 49.41-10.32 93.53-30.99 132.33-20.67 38.83-50.12 69.16-88.37 91-38.26 21.85-82.13 32.79-131.65 32.79-35.66 0-69.59-6.89-101.84-20.66-32.23-13.78-60.06-32.39-83.44-55.83-23.4-23.44-41.96-51.33-55.68-83.65a258.39 258.39 0 0 1-20.6-102.12c0.02-35.73 6.89-69.76 20.61-102.09z m0 0'
    />
  </Stack>
);

GoogleIcon.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

GoogleIcon.defaultProps = {
  size: '32px',
};

export default GoogleIcon;