import * as React from 'react';

const Home: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="var(--c-gray-5)"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20z" />
    </svg>
  );
};

export default Home;
