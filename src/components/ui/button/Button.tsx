import type { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'clsx'

import styles from './Button.module.scss'
import { CircleCheck, Settings2 } from 'lucide-react'
import { Badge } from '../Badge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  appearance?: 'primary' | 'outline' | 'vacuum' | 'green'
  size?: 'l' | 's' | 'm'
  isCheck?: boolean
  isGreen?: boolean
  isNotChild?: boolean
  isDisabled?: boolean
  isSettings?: boolean
  withBadge?: boolean
}

export const Button = ({
  children,
  appearance = 'primary',
  size = 'm',
  isGreen = false,
  isCheck = false,
  isNotChild = false,
  isDisabled = false,
  withBadge = false,
  isSettings = false,
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[appearance],
        styles[size],
        { [styles.isGreen]: isGreen, [styles.isDisabled]: isDisabled },
        className,
        {
          'px-[13px]': isNotChild,
          'border-[1px] !border-greyStroke':
            isDisabled && appearance === 'outline',
          'px-[7px]': size === 's' && isNotChild,
        }
      )}
      {...rest}
    >
      {' '}
      <>
        {isCheck && (
          <CircleCheck
            className={cn('mr-2', {
              '!mr-0': isNotChild,
              'text-greyStroke': isDisabled,
            })}
          />
        )}
        {children}
        {isSettings && <Settings2 />}
        {withBadge && <Badge value={2} className='ml-2' />}
      </>
    </button>
  )
}
