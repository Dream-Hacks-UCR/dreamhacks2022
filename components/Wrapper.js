export default function Container({ children }) {
  return (
    <div className='flex flex-col w-full max-w-272 min-h-inherit mt-12'>
      {children}
    </div>
  )
}