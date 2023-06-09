import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
<nav className='flex justify-between items-center w-full mb-10 pt-3'>
<img src={logo} alt='sumz_logo' className='w-28 object-contain' />

           <div className="flex justify-end">
      <button
        type='button'
        onClick={() =>
          window.open("https://github.com/Harshvardhan1609", "_blank")
        }
        className='black_btn'
      >
        GitHub
      </button>
      <button
        type='button'
        onClick={() =>
          window.open("https://www.instagram.com/illuminator__1609/", "_blank")
        }
        className='black_btn2'
      >
        Instagram
      </button>
    </div>
  </nav>

  <h1 className='head_text'>
    Summarize Articles with <br className='max-md:hidden' />
    <span className='orange_gradient '>OpenAI GPT-4</span>
  </h1>
  <h2 className='desc'>
    Powered By SWORD
  </h2>
</header>

  );
};

export default Hero;