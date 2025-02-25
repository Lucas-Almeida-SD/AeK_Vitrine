import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  type: 'text' | 'email' | 'password',
  id: string,
  className?: string,
  name: string,
  value: string,
  title: string,
  enableLabel: boolean,
  Icon: IconType,
  handleChange: React.ChangeEventHandler<HTMLInputElement>,
  handleClickOnIcon?: () => void,
};

export default function InputText(props: Props) {
  const {
    type,
    id,
    className = undefined,
    name,
    value,
    title,
    enableLabel,
    Icon,
    handleChange,
    handleClickOnIcon = undefined,
  } = props;

  return (
    <div className="mb-3 login-input-container">
      {enableLabel && (
        <label
          htmlFor={id}
          className="form-label"
        >
          {title}
        </label>
      )}
      <input
        type={type}
        className={`form-control${className ? ` ${className}` : ''}`}
        id={id}
        name={name}
        placeholder={!enableLabel ? title : undefined}
        value={value}
        onChange={handleChange}
      />
      <Icon className="input-icon" onClick={handleClickOnIcon} />
    </div>
  );
}
