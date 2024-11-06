import { Home } from "./screens/Home"
import { Events } from "./screens/Events"
import { Routes, Route, NavLink } from "react-router-dom"
import { Contact } from "./screens/Contact"

import { SocialLinks } from "./components/SocialLinks"
import { FestiPipos } from "./screens/FestiPipos"

import { PreMagnifico } from "./components/Presentations/preMagnifico"
import { PreLegend } from "./components/Presentations/prelegend"
import { Invite } from "./components/Presentations/preInvited"
import { PreTeamUs } from "./components/Presentations/preTeamUs"
import { PreWanted } from "./components/Presentations/preWanted"
import { PreOngola } from "./components/Presentations/preongola"
import { MembreOngola } from "./components/Membres/MembreOngola"
import { MembreTeamsUs } from "./components/Membres/MembreTeamus"
import { MembreInvite } from "./components/Membres/MembreInvite"
import { MembreWanted } from "./components/Membres/MembreWanted"
import { MembreLegend } from "./components/Membres/MembreLegend"
import { Link } from "react-router-dom"
import { GalWtd } from "./components/Galeries/GalWtd"
import { GalMag } from "./components/Galeries/GalMag"
import { GalTus } from "./components/Galeries/GalTus"
import { GalInv } from "./components/Galeries/GalInv"
import { GalOng } from "./components/Galeries/GalOng"
import { GalLeg } from "./components/Galeries/GalLeg"
import FootballInfo from "./screens/Actualite"
import { useState } from "react"
import { Slideshow } from "./screens/Galerie"
import HistoriqueFesti from "./screens/HistoriqueFesti"


const App = () => {
  let [open, setOpen] = useState(false);
  const style = {
    right: !open ? "-100%" : "0",
  };
  const Links = [

    { name: "ACCUEIL", lien: "" },
    { name: "EVENEMENTS", lien: "events" },
    { name: "CONTACT", lien: "contact" },
    { name: "GALERIE", lien: "galerie" },
    { name: "FESTI PIPO", lien: "festi" },

  ]

  return (

    <div className="md:container font-Bellefair ">
      <nav className="flex items-center justify-between pt-5 bg-[#f4f6f7]" >

        <Link to="/"><img className="w-20 ml-7" src="logo2.jpeg" alt="logo du site" /></Link>

        <img src={open ? "./src/assets/close.svg" : "./src/assets/align-justify.svg"} alt="Image Hamburger" className="z-20 fixed text-[white] text-2xl cursor-pointer right-5 top-6 md:hidden w-8 h-8" onClick={() => setOpen(!open)} />


        <ul className={'backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 right-0 md:h-auto h-screen duration-500 ease-linear '} style={style}>
          {
            Links.map((link, index) => (
              <li key={index} className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6">
                <NavLink className='hover:text-yellow-500 text-sm md:py-4 py-3 inline-block font-normal' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={`/${link.lien}`}><b>{link.name}</b></NavLink>
              </li>
            ))
          }
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galerie" element={<Slideshow />} />
        <Route path="/festi" element={<FestiPipos />} />
        <Route path="/premagnifico" element={<PreMagnifico />} />
        <Route path="/prelegend" element={<PreLegend />} />
        <Route path="/preinvite" element={<Invite />} />
        <Route path="/preteamus" element={<PreTeamUs />} />
        <Route path="/prewanted" element={<PreWanted />} />
        <Route path="/preongola" element={<PreOngola />} />
        <Route path="/preongola" element={<MembreOngola />} />
        <Route path="/preteamus" element={<MembreTeamsUs />} />
        <Route path="/preinvite" element={<MembreInvite />} />
        <Route path="/prewanted" element={<MembreWanted />} />
        <Route path="/prelegend" element={<MembreLegend />} />
        <Route path="/premagnifico" element={<PreMagnifico />} />
        <Route path="/galerielegend" element={<GalLeg />} />
        <Route path="/galerieongola" element={<GalOng />} />
        <Route path="/galerieteamus" element={<GalTus />} />
        <Route path="/galeriemagnifico" element={<GalMag />} />
        <Route path="/galerieinvite" element={<GalInv />} />
        <Route path="/galeriewanted" element={<GalWtd />} />
        <Route path="/actu" element={<FootballInfo />} />
        <Route path="/hist" element={<HistoriqueFesti />} />


      </Routes>

      <footer className="bg-[#2E86C1] w-full overflow-hidden mt-20">
        <SocialLinks />
      </footer>

    </div>
  )
}

export default App