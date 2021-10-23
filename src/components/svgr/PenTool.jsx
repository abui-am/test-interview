import * as React from 'react';

function PenTool({ fill, ...props }) {
  return (
    <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 23.75L23.75 15l3.75 3.75-8.75 8.75L15 23.75z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 16.25l-1.875-9.375L2.5 2.5l4.375 18.125L16.25 22.5l6.25-6.25z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.5 2.5l9.482 9.482" stroke={fill} strokeWidth={2} />
      <circle cx={13.75} cy={13.75} r={2.5} stroke={fill} strokeWidth={2} />
    </svg>
  );
}

export default PenTool;
