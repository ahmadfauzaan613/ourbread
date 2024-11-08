import React from 'react'
import Pattern from '../assets/brandLogo/LOGO 3.png'
import Logo from '../assets/brandLogo/LOGO 6.png'
import { Globe, Instagram, Mail, MessagesSquare, Video } from 'lucide-react'

function ListCard(props) {
  return (
    <div className="flex items-center cursor-pointer space-x-8 border hover:bg-[#12291b] hover:text-white hover:border-white border-[#12291b] p-2 rounded">
      {props.logo} <p className="text-[18px]">{props.name}</p>
    </div>
  )
}

function Linktree() {
  const DataCp = [
    { name: 'Instagram', logo: <Instagram /> },
    { name: 'Tiktok', logo: <Video /> },
    { name: 'Whatsapp', logo: <MessagesSquare /> },
    { name: 'Website', logo: <Globe /> },
    { name: 'Email', logo: <Mail /> },
  ]
  return (
    <React.Fragment>
      <div
        className="bg-[length:33.3vw] bg-black bg-center w-full h-screen bg-repeat py-[3rem]"
        style={{
          backgroundImage: `url(${Pattern})`,
        }}
      >
        <div className="flex justify-center ">
          <img src={Logo} alt="" className="w-[8vw]  continuous-flip" />
        </div>
        <div className="flex  justify-center  my-[3rem]">
          <div className=" bg-white w-[25%] rounded-md p-4">
            <div className="pb-5 space-y-4">
              <p className="text-center font-bold text-[#12291b]">Lorem ipsum dolor</p>
              {DataCp.map((item) => (
                <ListCard logo={item.logo} name={item.name} />
              ))}
            </div>
            <p className="text-center text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat quas quidem necessitatibus odit officiis sint quia. Expedita repudiandae nostrum, voluptatum et ipsa illo culpa, sit minus quam eveniet hic?</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Linktree
