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
}

export const Message = ({
  icon,
  variant = 'info',
  children,
}: MessageProps) => {
  
  const containerClasses = classnames({
    [styles.container]: true,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.plain]: variant === 'plain',
    [styles.outline]: variant === 'outline',
    [styles.light]: variant === 'light',
    [styles.dark]: variant === 'dark',
    [styles.info]: variant === 'info',
    [styles.warning]: variant === 'warning',
    [styles.error]: variant === 'error',
    [styles.success]: variant === 'success',
  })
  
  return (
    <div className={containerClasses}>
      { icon ?
      <div className={styles.icon}>
        <Icon
          icon={icon}
          style="solid"
          variant={variant}
        />
      </div>
      : null }
      <div>
        {children}
      </div>
    </div>
  )
}
