import React from 'react'
import classnames from 'classnames'
import styles from './TextField.module.css'
import { SizeType } from '../globalTypes'

import { Text } from '../Text'
import { Message } from '../Message'

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
  value?: string | number;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  align?: 'left' | 'center' | 'right';
  size?: SizeType;
  error?: string;
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
  align = 'left',
  size = 'md',
  error,
  required = false,
  disabled = false,
  onChange,
}: TextFieldProps) => {
  
  const inputClasses = classnames({
    [styles.input]: true,
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [styles.left]: align === 'left',
    [styles.center]: align === 'center',
    [styles.right]: align === 'right',
    [styles.hasPrefix]: prefix,
    [styles.hasSuffix]: suffix,
  })
    
  const labelComponent = label ?
    <div className={styles.label}>
      <Text
        tag="label"
        size="sm"
        htmlFor={id}
      >{label}</Text>
    </div> : null
    
  const requiredComponent = required && (
    value === null || 
    value === undefined ||
    value === ''
  ) ?
    <div className={styles.required}>
      <Text
        tag="span"
        size="xs"
        variant="error"
      >* required</Text>
    </div> : null
    
  const errorComponent = error ? 
    <div className={styles.error}>
      <Text
        tag="span"
        size="xs"
        variant="error"
      >{error}</Text>
    </div> : null
  
  return (
    <div className={styles.container}>
      {labelComponent}
      {errorComponent}
      <div className={styles.inputContainer}>
        {prefix ? 
          <div className={styles.prefix}>
            <Text
              tag="span"
              size="xs"
            >{prefix}</Text>
          </div>
         : null}
        <input
          className={inputClasses}
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        {suffix ? 
          <div className={styles.suffix}>
            <Text
              tag="span"
              size="xs"
            >{suffix}</Text>
          </div>
         : null}
      </div>
      {requiredComponent}
    </div>
  )
}
