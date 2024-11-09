import React from 'react'
import { FaFacebook, FaReddit , FaWhatsapp} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const SocialShareButton = ( {url, title} ) => {
  return (
    <div className="w-full flex justify-between">
      <a target="_blank" rel="noreferrer" href="/">
        <FaFacebook className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${url}`}>
        <FaXTwitter className="text-[#000000] w-12 h-auto" />
      </a>
      <a target="_blank" rel="noreferrer" href={`https://www.reddit.com/submit?url=${url}&title=${title}`}>
        <FaReddit className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a target="_blank" rel="noreferrer" href={`https://api,whatsapp.com/send/?text=${url}`}>
        <FaWhatsapp className="text-[#25d366] w-12 h-auto" />
      </a>
    </div>
  );
}

export default SocialShareButton
