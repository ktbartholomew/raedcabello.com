import React from 'react';

const ImageSet = ({ columns, children }) => {
  return (
    <div
      className={`grid md:grid-cols-${columns.toString() || '1'} gap-10 mb-6`}
    >
      {children}
    </div>
  );
};

export default ImageSet;
