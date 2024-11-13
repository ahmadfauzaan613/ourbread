import React from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../assets/image/jeremy-wong-weddings-YyvpmN6PB3I-unsplash.jpg'
import backAbout from '../assets/image/tom-the-photographer-SljsxQcjZl0-unsplash.jpg'
import Logo from '../assets/brandLogo/LOGO 6.png'
import 'animate.css'

function Home() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div
        id="sec1"
        className="relative min-h-screen bg-cover bg-no-repeat bg-top parallax"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-[80%]"></div>
        {/* NAVBAR */}
        <div className="relative z-10">
          <div className="container mx-auto py-7 flex items-center justify-center">
            <div className="flex items-center space-x-[4rem]">
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

        {/* KONTEN */}
        <div className="flex flex-col items-center justify-center h-[90vh]">
          <div className="relative flex justify-center mb-[2.5rem]">
            <img src={Logo} alt="Logo Our Bride" className="w-[20vw] h-full" />
          </div>
          <p className="text-white relative text-[14px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda voluptas aut consequatur asperiores fuga excepturi illo <br /> quia et nihil ipsum iure blanditiis, amet adipisci nam! Similique ut nam dolore.
          </p>
          <p className="text-white relative text-[14px] mt-[1rem] text-center">Explore</p>
        </div>
      </div>

      <div id="sec2" className="bg-black py-[3rem] min-h-screen">
        <div className="container mx-auto">
          <p className="text-white text-[100px]">ABOUT.</p>
          <p className="text-white leading-[1.5rem] mb-[3rem] text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse laboriosam, optio quasi fugiat praesentium perferendis tenetur dolorum vitae libero rem repellat similique? Quia itaque rerum explicabo. Tempora ducimus laboriosam repellat? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolor dolores expedita enim voluptates iste. Labore quis commodi beatae impedit accusamus, placeat quas animi neque maiores eligendi voluptatibus. Quam, inventore mollitia?
          </p>
          <div className="relative w-full h-[60vh]">
            <div className="absolute inset-0 bg-black opacity-30">
              <img src={backAbout} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-[80px]">LIFE.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="sec3" className="bg-white py-[3rem] min-h-screen">
        <div className="container mx-auto">
          <p className="text-[#12291B] text-[100px] text-center">SERVICES</p>
          <p className="text-black leading-[1.5rem] mb-[3rem] text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse laboriosam, optio quasi fugiat praesentium perferendis tenetur dolorum vitae libero rem repellat similique? Quia itaque rerum explicabo. Tempora ducimus laboriosam repellat? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.
          </p>
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <p>xxx</p>
            </div>
            <div>
              <p>xxx</p>
            </div>
            <div>
              <p>xxx</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
