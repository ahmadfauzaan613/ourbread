import { useNavigate } from 'react-router-dom'
import Logo from '../assets/brandLogo/LOGO 8.png'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    // <div className="relative z-10">
    //   <div className="container mx-auto py-7 flex items-center justify-between">
    //     <img src={Logo} alt="" className="w-[8vw] continuous-flip" />
    //     <div className="flex items-center space-x-6">
    //       <p onClick={() => navigate('/linktree')} className="text-white cursor-pointer">
    //         Linktree
    //       </p>
    //       <p className="text-white">Menu</p>
    //       <p className="text-white">Menu</p>
    //       <p className="text-white">Menu</p>
    //       <p className="text-white">Menu</p>
    //     </div>
    //   </div>
    // </div>
    <div className="relative z-10">
      <div className="container mx-auto py-7 flex items-center justify-center">
        <div className="flex items-center space-x-6">
          <p onClick={() => navigate('/linktree')} className="text-white cursor-pointer">
            Linktree
          </p>
          <p className="text-white">Menu</p>
          <p className="text-white">Menu</p>
          <p className="text-white">Menu</p>
          <p className="text-white">Menu</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
