import React from 'react';

const Image = (props) => {
  return (
    <figure>
      <img
        className="mx-auto"
        src={props.src}
        alt={props.alt || props.caption}
        {...props}
      />
      <figcaption className="text-black-muted text-sm text-center mt-3">
        {props.caption}
      </figcaption>
    </figure>
  );
};
Image.propTypes = {
  src: () => {},
  alt: () => {},
  caption: () => {},
};

export default Image;
