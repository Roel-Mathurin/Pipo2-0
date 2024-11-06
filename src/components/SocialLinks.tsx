import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import "./styles.css"

export const SocialLinks = () => {
    return (
        <div className="flex items-center flex-wrap md:mt-0 mt-10 bg-[#2E86C1]">

            <div className="mr-20">
                <small className="mt-5 text-3xl font-extrabold text-[#f7d111]">Nos Reseaux Sociaux </small>
                <ul className="mt-2">
                    <div className="flex items-center">
                        <li><a className="text-[white] underline hover:text-[red] text-2xl flex items-center" href="https://www.youtube.com/@festipipos1924"><FaYoutube className="mr-2" />  Youtube</a></li>
                    </div>

                    <div className="flex items-center">
                        <li><a className="text-[white] underline hover:text-[blue] text-2xl flex items-center" href="https://www.facebook.com/yan.low.376"><FaFacebook className="mr-2" />Facebook</a></li>
                    </div>


                    <div className="flex items-center">

                        <li><a className="text-[white] underline hover:text-[#E9AB12] text-2xl flex items-center" href=""><FaInstagram className="mr-2" />Instagram</a></li>

                    </div>
                </ul>
            </div>


            <div className="mt-5">
                <i className="text-3xl font-extrabold text-[#f7d111]">Nos Partenaires</i>
                <div className="flex items-inline ">
                    <img src="33.jpeg" alt="33 export" className="w-20 mr-3 mt-5 rounded md:py-0 py-4 md:mx-5 mx-auto" />
                    <img src="vitale.png" alt="eau vitale" className="w-20 mr-3 mt-5 rounded md:py-0 py-4 md:mx-5 mx-auto" />
                    <img src="queen.jpeg" alt="queen space" className="w-20 mr-3 mt-5 rounded md:py-0 py-4 md:mx-5 mx-auto" />
                    <img src="youzou.png" alt="youzou juice" className="w-20 mr-3 mt-5 rounded md:py-0 py-4 md:mx-5 mx-auto" />
                </div>


            </div>

        </div>





    )
}
