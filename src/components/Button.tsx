import React from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset'
  id?: string,
  className?: string,
  title: string,
  handleClick?: () => void,
};

export default function Button(props: Props) {
  const {
    type, id = undefined, className = undefined, title, handleClick = undefined,
  } = props;

  return (
    <button
      type={type}
      id={id}
      className={`btn btn-primary${className ? ` ${className}` : ''}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
