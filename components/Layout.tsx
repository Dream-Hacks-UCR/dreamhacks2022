interface Props {
  children: React.ReactNode | React.ReactNodeArray
}

export default function Layout({ children }: Props) {
  return (
    <main className='flex flex-col justify-center items-center flex-grow'>
      {children}
    </main>
  )
}
