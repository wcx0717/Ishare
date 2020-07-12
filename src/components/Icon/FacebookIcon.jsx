/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Icon, { Stack } from '@mdi/react';

const FacebookIcon = ({ size }) => (
  <Stack size={size} viewBox='0 0 1024 1024'>
    <Icon
      path='M512 0C229.052632 0 0 229.052632 0 512s229.052632 512 512 512 512-229.052632 512-512S794.947368 0 512 0z m122.745263 512h-79.386947v269.473684h-117.921684V512H377.263158v-92.833684h60.173474v-56.643369c0-74.698105 33.684211-119.996632 127.514947-119.996631h79.386947v92.833684h-48.128c-36.109474 0-38.480842 13.608421-38.480842 36.217263v45.298526H646.736842L634.718316 512z'
    />
  </Stack>
);

FacebookIcon.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

FacebookIcon.defaultProps = {
  size: '32px',
};

export default FacebookIcon;
