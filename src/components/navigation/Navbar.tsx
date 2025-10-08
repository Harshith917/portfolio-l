
export const Navbar = () => {
  return (
    <ul className="flex flex-col gap-4 uppercase text-white text-sm font-medium tracking-wide">
        <a href="#about" className="cursor-pointer hover:text-gray-300">About</a>
        <a href="#education" className="cursor-pointer hover:text-gray-300">Education</a>
        <a href="#projects" className="cursor-pointer hover:text-gray-300">Projects</a>
        
    </ul>
  )
}
