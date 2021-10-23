import * as React from 'react';

function Smile({ fill, ...props }) {
  return (
    <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 27.5c6.904 0 12.5-5.596 12.5-12.5S21.904 2.5 15 2.5 2.5 8.096 2.5 15 8.096 27.5 15 27.5z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17.5s1.875 2.5 5 2.5 5-2.5 5-2.5M11.25 11.25h.012M18.75 11.25h.012"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Smile;
