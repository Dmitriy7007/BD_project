import { Children, type ButtonHTMLAttributes, type ReactNode } from 'react'
import cn from 'clsx'

import styles from './Button.module.scss'
import ButtonContext from './ButtonContext'
import { ButtonBadge } from './ButtonBadge'
import { ButtonIcon } from './ButtonIcon'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  appearance?: 'primary' | 'outline' | 'vacuum' | 'green' | 'red'
  size?: 'l' | 's' | 'm'
  isDisabled?: boolean
}

export const Button = ({
  children,
  appearance = 'primary',
  size = 'l',
  isDisabled = false,
  className,
  ...rest
}: Props) => {
  return (
    <ButtonContext.Provider value={{}}>
      <button
        className={cn(
          styles.button,
          styles[appearance],
          styles[size],
          {
            [styles.isDisabled]: isDisabled,
            'border-[1px] !border-greyStroke':
              isDisabled && appearance === 'outline',
            'px-[10px]':
              size === 'm' &&
              typeof children === 'object' &&
              Children.count(children) == 1,
            'px-[7px]':
              size === 's' &&
              typeof children === 'object' &&
              Children.count(children) == 1,
            'hover:border-[1px] hover:border-mainBlue hover:!bg-white active:!bg-white':
              appearance === 'vacuum' && size === 'm',
          },
          className
        )}
        {...rest}
      >
        <>{children}</>
      </button>
    </ButtonContext.Provider>
  )
}

Button.Badge = ButtonBadge
Button.Icon = ButtonIcon
