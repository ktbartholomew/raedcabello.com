import React from 'react';

const ImageSet = ({ columns, children }) => {
  let columnclass = 'md:grid-cols-1';

  switch (columns) {
    case 2:
      columnclass = 'md:grid-cols-2';
      break;
    case 3:
      columnclass = 'md:grid-cols-3';
      break;
    case 4:
      columnclass = 'md:grid-cols-4';
      break;
    case 5:
      columnclass = 'md:grid-cols-5';
      break;
  }
  return <div className={`grid ${columnclass} gap-10 mb-6`}>{children}</div>;
};

export default ImageSet;
