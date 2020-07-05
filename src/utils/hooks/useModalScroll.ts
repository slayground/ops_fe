import React from 'react';
import noScroll from 'no-scroll';

const useModalScroll = (
  isModalOpen: boolean
): [boolean, (open: boolean) => void] => {
  const [isOpen, setIsOpen] = React.useState(isModalOpen);

  const toggleOpen = (open: boolean) => {
    // 150 = fadeIn fadeOut
    if (open) {
      setIsOpen(!isOpen);
      setTimeout(() => noScroll.on(), 150);
    } else {
      setIsOpen(!isOpen);
      setTimeout(() => noScroll.off(), 150);
    }
  };

  return [isOpen, toggleOpen];
};

export default useModalScroll;
