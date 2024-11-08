import React from 'react'
import Logo from '../assets/brandLogo/LOGO 8.png'
import Gif from '../assets/gifTex.gif'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      {/* NAVBAR */}
      <div
        className="relative min-h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${Gif})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-[60%]"></div>
        {/* NAVBAR */}
        <div className="bg-black relative z-10">
          <div className="container mx-auto py-7 flex items-center justify-between">
            <img src={Logo} alt="" className="w-[8vw] continuous-flip" />
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
        {/* Konten */}
        <div className="flex items-end justify-center">
          <div className="absolute bottom-0">
            <p className="text-white">xxx</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
