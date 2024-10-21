import React from 'react'

interface GenericContainerProps {
  Component: React.ComponentType<any>
}

export const ChapterContainer: React.FC<GenericContainerProps> = ({
  Component,
  ...rest
}) => {
  return (
    <div>
      <Component {...rest} />
    </div>
  )
}
