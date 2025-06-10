import React, { PropsWithChildren } from 'react'

export interface ButtonProps {
  title: string
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children }) => {
  return <button>{children}</button>
}
