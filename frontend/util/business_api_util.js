import React from 'react';

export const fetchBusinesses = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/businesses/',
    success: success.call(),
    error: () => {
      console.log('error');
    }
  });
};

