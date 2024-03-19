const Navbar = () => {
  return (
    <nav className='bg-bg py-5'>
      <div className='layout flex-between'>
        <div className=' text-black font-bold'>spen se.</div>
        <div className='flex gap-5'>
          <span>Business</span>
          <span>Pricing</span>
          <span>Features</span>
        </div>
        <div className='flex-between gap-10'>
          <span>Login</span>
          <button className='btn'>Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
