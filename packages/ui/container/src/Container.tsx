import { clsx } from 'clsx'

type ContainerProps = JSX.IntrinsicElements['div'] & {
  center?: boolean
  full?: boolean
}

export function Container(props: ContainerProps) {
  const { 
    className,
    center,
    full,
    children,
    ...attributes 
  } = props

  return (
    <div className="h-screen px-6 flex justify-center items-center">
      <div 
        className={
          clsx(
            "w-full",
            full || 'md:w-1/2 lg:w-1/4',
            center && 'text-center flex flex-col justify-center items-center',
            className
          )
        }
        { ...attributes }
      >
        { children }
      </div>
    </div>
  )
}

export type Container = typeof Container