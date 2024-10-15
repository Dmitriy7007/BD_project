import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import styles from './Field.module.scss'
import { Eye, EyeOff } from 'lucide-react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  extra?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, extra, ...rest }, ref) => {
    return (
      <div className={`${extra}`}>
        <label className={styles['label-field']}>
          {label}
          <input ref={ref} className={styles['input-field']} {...rest} />
          <button className={styles['icon']}>
            <Eye />
            <EyeOff />
          </button>
        </label>
      </div>
    )
  }
)
