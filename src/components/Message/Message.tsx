import React from 'react'
import classnames from 'classnames'
import styles from './Message.module.css'
import { sizeType, variantType } from '../globalTypes'

import { iconNamesType } from '../Icon/src/types'
import { Icon } from '../Icon'
import { Text } from '../Text'

interface MessageProps {
  message: string;
  icon?: iconNamesType;
  size?: sizeType;
  variant?: variantType;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Message = ({
  message,
  icon,
  size = 'md',
  variant = 'info',
  children,
  onClick,
}: MessageProps) => {
  
  const containerClasses = classnames({
    [styles.container]: true,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.light]: variant === 'light',
    [styles.dark]: variant === 'dark',
    [styles.info]: variant === 'info',
    [styles.warning]: variant === 'warning',
    [styles.error]: variant === 'error',
    [styles.success]: variant === 'success',
  })
  
  return (
    <div className={containerClasses} onClick={onClick}>
      { icon ?
      <div className={styles.icon}>
        <Icon
          icon={icon}
          style="outline"
          size={size}
          variant={variant}
        />
      </div>
      : null }
      <div>
        <Text
          tag="p"
          size={size}
          variant={variant}
        >{message}</Text>
        {children}
      </div>
    </div>
  )
}
