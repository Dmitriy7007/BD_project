import cn from 'clsx'
import type { HTMLAttributes } from 'react'

interface IButtonBadge extends HTMLAttributes<HTMLDivElement> {
  value: number
}

export const ButtonBadge = ({ value, className, ...rest }: IButtonBadge) => {
  return (
    <div
      className={cn(
        'px-[7px] py-[4.5px] rounded-[6px] text-white bg-mainBlue text-[10px] font-bold inline-block leading-[10px]',
        className
      )}
      {...rest}
    >
      {value}
    </div>
  )
}
