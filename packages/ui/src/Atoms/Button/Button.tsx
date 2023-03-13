import { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren

export function Button({ children }: ButtonProps) {
  return (
    <button>
      {children}
    </button>
  )
}