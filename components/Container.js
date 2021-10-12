export default function Container({ color, children }) {
  return (
    <section 
      className={
        'relative flex flex-col justify-center items-center min-h-screen-50 px-4 pt-20 pb-40 bg-stars ' + color
      }
    >
      {children}
    </section>
  )
}