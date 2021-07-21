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
          type="outline"
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












// const variantOptions = {
//   info: {
//     textColor: 'text-blue-600',
//     darkTextColor: 'dark:text-blue-100',
//     bg: 'bg-blue-50',
//     darkBg: 'dark:bg-blue-900', 
//   },
//   warning: {
//     textColor: 'text-yellow-600',
//     darkTextColor: 'dark:text-yellow-100',
//     bg: 'bg-yellow-50',
//     darkBg: 'dark:bg-yellow-900', 
//   },
//   error: {
//     textColor: 'text-red-600',
//     darkTextColor: 'dark:text-red-100',
//     bg: 'bg-red-50',
//     darkBg: 'dark:bg-red-900', 
//   },
//   success: {
//     textColor: 'text-green-600',
//     darkTextColor: 'dark:text-green-100',
//     bg: 'bg-green-50',
//     darkBg: 'dark:bg-green-900', 
//   },
// }
// 
// return (      
//   <div className={[
//       styles.text,
//       'text-sm',
//       'items-center',
//       'w-full',
//       'flex',
//       'py-2',
//       'px-3',
//       'rounded-lg',
//       `${variantOptions[variant].textColor}`,
//       `${variantOptions[variant].darkTextColor}`,
//       `${variantOptions[variant].bg}`,
//       `${variantOptions[variant].darkBg}`,
//       'overflow-x-auto',
//       'mb-5',
//     ].join(' ')}>
//     { icon ? <div className="mr-1">{Icons[icon]}</div> : null }
//     {message}
//   </div>
// )
