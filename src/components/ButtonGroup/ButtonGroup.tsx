import React from 'react'
import classnames from 'classnames'
import styles from './ButtonGroup.module.css'
import { JustifyContentType } from '../globalTypes'

interface ButtonGroupProps {
  joined?: boolean;
  justifyContent? : JustifyContentType;
  children: React.ReactNode;
}

export const ButtonGroup = ({
  joined = false,
  justifyContent = 'start',
  children,
}: ButtonGroupProps) => {
  
  const groupClasses = classnames({
    [styles.group]: true,
    [styles.joined]: joined,
    [styles.start]: justifyContent === 'start',
    [styles.center]: justifyContent === 'center',
    [styles.end]: justifyContent === 'end',
    [styles.between]: justifyContent === 'between',
    [styles.around]: justifyContent === 'around',
  })
  
  return (
    <div className={groupClasses}>
      {children}
    </div>
  )
}
