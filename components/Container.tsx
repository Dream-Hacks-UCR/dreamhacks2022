interface Props {
  children: React.ReactNode | React.ReactNodeArray
  color: string
}

export default function Container({ children, color}: Props) {
  return (
    <section 
      className={
        'relative flex flex-col justify-center items-center min-h-[50vh] px-4 pt-20 pb-40 bg-stars ' + color
      }
    >
      {children}
    </section>
  )
}