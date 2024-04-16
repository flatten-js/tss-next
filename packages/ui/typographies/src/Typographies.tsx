import clsx from 'clsx'

type TypographiesProps = JSX.IntrinsicElements['div']

export function Typographies(props: TypographiesProps) {
  const { 
    className, 
    children, 
    ...attributes 
  } = props

  return (
    <div 
      className={ clsx('prose lg:prose-xl', className) }
      { ...attributes }
    >
      { children }
    </div>
  )
}

export type Typographies = typeof Typographies