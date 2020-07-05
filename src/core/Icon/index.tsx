import React from 'react';

import Home from './home';

interface IconProps {
  name?: string;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }: IconProps) => {
  if (name === 'home') return <Home {...props} />;
  return <Home {...props} />;
};

export default Icon;
