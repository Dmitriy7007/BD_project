import { CircleCheck } from 'lucide-react'
import { useButtonContext } from './ButtonContext'

export function ButtonIconCircleCheck() {
  useButtonContext()
  return <CircleCheck />
}
