import { CircleCheck, CircleX, Plus, Settings2 } from 'lucide-react'
import { useButtonContext } from './ButtonContext'
import type { HTMLAttributes } from 'react'

interface IButtoIcon extends HTMLAttributes<HTMLOrSVGElement> {
  value: 'check' | 'settings' | 'close' | 'plus'
}

export const ButtonIcon = ({ value, className, ...rest }: IButtoIcon) => {
  useButtonContext()
  switch (value) {
    case 'check':
      return <CircleCheck className={className} {...rest} />
    case 'settings':
      return <Settings2 className={className} {...rest} />
    case 'close':
      return <CircleX className={className} {...rest} />
    case 'plus':
      return <Plus className={className} {...rest} />
    default:
      return <></>
  }
}
