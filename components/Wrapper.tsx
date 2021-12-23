interface Props {
  children: React.ReactNode | React.ReactNodeArray
}

export default function Wrapper({ children }: Props) {
  return (
    <div className='flex flex-col w-full max-w-[68rem] min-h-[inherit] mt-12'>
      {children}
    </div>
  )
}