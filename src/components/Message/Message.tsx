import React from 'react'

import styles from './Message.module.css'

import { Icon } from '../Icon'

interface MessageProps {
  icon?: string;
  message: string;
  variant?: 'info' | 'warning' | 'error' | 'success';
}

export const Message = ({ icon, message, variant = 'error' }: MessageProps) => {
  
  const variantOptions = {
    info: {
      textColor: 'text-blue-600',
      darkTextColor: 'dark:text-blue-100',
      bg: 'bg-blue-50',
      darkBg: 'dark:bg-blue-900', 
    },
    warning: {
      textColor: 'text-yellow-600',
      darkTextColor: 'dark:text-yellow-100',
      bg: 'bg-yellow-50',
      darkBg: 'dark:bg-yellow-900', 
    },
    error: {
      textColor: 'text-red-600',
      darkTextColor: 'dark:text-red-100',
      bg: 'bg-red-50',
      darkBg: 'dark:bg-red-900', 
    },
    success: {
      textColor: 'text-green-600',
      darkTextColor: 'dark:text-green-100',
      bg: 'bg-green-50',
      darkBg: 'dark:bg-green-900', 
    },
  }
  
  return (      
    <div className={[
        styles.text,
        'text-sm',
        'items-center',
        'w-full',
        'flex',
        'py-2',
        'px-3',
        'rounded-lg',
        `${variantOptions[variant].textColor}`,
        `${variantOptions[variant].darkTextColor}`,
        `${variantOptions[variant].bg}`,
        `${variantOptions[variant].darkBg}`,
        'overflow-x-auto',
        'mb-5',
      ].join(' ')}>
      { icon ? <div className="mr-1">{Icons[icon]}</div> : null }
      {message}
    </div>
  )
}
