import * as React from 'react';

function Phone({ fill, ...props }) {
  return (
    <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.813 6.25a6.25 6.25 0 014.937 4.938M18.812 1.25a11.25 11.25 0 019.938 9.925M27.5 21.15v3.75a2.5 2.5 0 01-2.725 2.5 24.736 24.736 0 01-10.787-3.837 24.376 24.376 0 01-7.5-7.5A24.737 24.737 0 012.65 5.225 2.5 2.5 0 015.137 2.5h3.75a2.5 2.5 0 012.5 2.15c.159 1.2.452 2.378.875 3.512A2.5 2.5 0 0111.7 10.8l-1.587 1.587a20 20 0 007.5 7.5L19.2 18.3a2.5 2.5 0 012.637-.563 16.05 16.05 0 003.513.876 2.5 2.5 0 012.15 2.537z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Phone;
