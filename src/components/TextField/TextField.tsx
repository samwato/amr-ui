import React from 'react'
import classnames from 'classnames'
import styles from './TextField.module.css'
import { SizeType } from '../globalTypes'

import { Text } from '../Text'

export type TextFieldTypes =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'currency';

type TextFieldProps = {
  id?: string;
  name?: string;
  type?: TextFieldTypes;
  label?: string;
  value?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  align?: 'left' | 'center' | 'right';
  size?: SizeType;
  required?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}


export const TextField = ({
  id,
  name,
  type = 'text',
  label,
  value,
  placeholder,
  prefix,
  suffix,
  align,
  size = 'md',
  required = false,
  disabled = false,
  onChange,
}: TextFieldProps) => {
    
  const labelComponent = label ?
    <div className={styles.label}>
      <Text
        tag="label"
        htmlFor={id}
      >{label}</Text>
    </div> : null
  
  return (
    <div className={styles.container}>
      {labelComponent}
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  )
}
