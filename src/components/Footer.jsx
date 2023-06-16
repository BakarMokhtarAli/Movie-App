import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

export const Footer = () => {
  return (
    
<footer className="bg-white w-full mx-auto shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 flex medium:justify-center medium:mb-2 dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Movies™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 medium:justify-center">
        <li>
            <Link to="https://github.com/BakarMokhtarAli" target='_blank' className="mr-4 hover:underline md:mr-6 ">
              <AiFillGithub className='text-xl mx-2 dark:text-white' />
            </Link>
        </li>
        <li>
            <Link to="https://twitter.com/Abukar_M_ali" target='_blank' className="mr-4 hover:underline md:mr-6">
              <AiOutlineTwitter className='text-xl mx-2 text-blue-500' />
            </Link>
        </li>
        <li>
            <Link to="https://m.facebook.com/profile.php?eav=AfZfmb_IlaiJ8Sp2GzD-wxyNOx6387Sz2k_6HMh282vDK3O7-6uyXFwFZhOsnlrtcBg&paipv=0" target='_blank' className="mr-4 hover:underline md:mr-6">
              <FaFacebookF className='text-xl mx-2 text-blue-700' />
            </Link>
        </li>
    </ul>
    </div>
</footer>

  )
}
