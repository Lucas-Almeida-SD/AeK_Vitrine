import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import InputText from './InputText';

type Props = {
  id: string,
  className?: string,
  name: string,
  value: string,
  title: string,
  enableLabel: boolean,
  handleChange: React.ChangeEventHandler<HTMLInputElement>
};

export default function InputPassword(props: Props) {
  const {
    id, name, className = undefined, value, title, enableLabel, handleChange,
  } = props;

  const [isHidden, setIsHiden] = useState(true);

  const handleClickOnIcon = () => {
    setIsHiden(!isHidden);
  };

  return (
    <InputText
      title={title}
      id={id}
      className={className}
      name={name}
      type={isHidden ? 'password' : 'text'}
      value={value}
      enableLabel={enableLabel}
      Icon={isHidden ? IoMdEyeOff : IoMdEye}
      handleChange={handleChange}
      handleClickOnIcon={handleClickOnIcon}
    />
  );
}
