import React from 'react'
import classnames from 'classnames'
import styles from './Message.module.css'
import { SizeType, VariantType } from '../globalTypes'

import { Icon, IconNamesType } from '../Icon'

interface MessageProps {
  icon?: IconNamesType;
  size?: SizeType;
  variant?: VariantType;
  children?: React.ReactNode;
}

export const Message = ({
  icon,
  size,
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
    [styles.sm]: size === 'sm',
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
