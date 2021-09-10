import React from 'react'
import classnames from 'classnames'
import styles from './TextField.module.css'
import { SizeType } from '../globalTypes'

import { Text } from '../Text'
import { Message } from '../Message'
import { IconButton } from '../IconButton'

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
  onClear?: () => void;
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
  onClear,
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
    [styles.isSearch]: type === 'search',
  })
    
  const labelComponent = label ?
    <div className={styles.label}>
      <Text
        tag="label"
        size={size}
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
        size={size}
        variant="error"
      >* required</Text>
    </div> : null
    
  const errorComponent = error ? 
    <div className={styles.error}>
      <Message
        icon="ExclamationCircleIcon"
        size={size}
        variant="error">
        <Text
          tag="p"
          size={size}
        >{error}
        </Text>
      </Message>
    </div> : null
  
  return (
    <div className={styles.container}>
      {labelComponent}
      {errorComponent}
      <div className={styles.inputWrapper}>
      
        {prefix ? 
          <div className={styles.prefix}>
            <Text
              tag="span"
              size={size}
            >{prefix}</Text>
          </div>
         : null}
         
         <div className={styles.inputContainer}>
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
           
           {type === 'search' && value ? 
             <div className={styles.search}>
               <IconButton
                 icon="XCircleIcon"
                 iconStyle="solid"
                 size={size}
                 type="button"
                 variant="dark"
                 onClick={onClear}
               />
             </div>
           : null }
         </div>
        
        {suffix ? 
          <div className={styles.suffix}>
            <Text
              tag="span"
              size={size}
            >{suffix}</Text>
          </div>
         : null}
      </div>
      
      {requiredComponent}
    </div>
  )
}
