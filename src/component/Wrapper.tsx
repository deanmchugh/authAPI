import { ReactChild } from 'react'

interface Props {
  children: ReactChild
}

function Wrapper({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  )
}

export default Wrapper
