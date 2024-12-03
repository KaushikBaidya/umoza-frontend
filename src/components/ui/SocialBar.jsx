import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

function SocialBar() {
	return (
		<>
			<div
				id="social"
				className="hidden lg:flex fixed flex-col top-[30%] left-0 z-10"
			>
				<ul>
					<li className="w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-umojablue ">
						<a
							className="flex justify-between items-center w-full text-white pl-2"
							href="https://www.linkedin.com/company/umojainternational/"
							target="_blank"
							rel="noreferrer"
						>
							Follow Us! <FaLinkedin size={25} className="mr-3" />
						</a>
					</li>
					<li className="w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-umojablue ">
						<a
							className="flex justify-between items-center w-full text-white pl-2"
							href="https://www.youtube.com/channel/@umojainternational"
							target="_blank"
							rel="noreferrer"
						>
							Subscribe <BsYoutube size={25} className="mr-3" />
						</a>
					</li>
					<li className="w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-umojablue ">
						<a
							className="flex justify-between items-center w-full text-white pl-2"
							href="https://www.facebook.com/umojainternational"
							target="_blank"
							rel="noreferrer"
						>
							Like Us! <FaFacebook size={25} className="mr-3" />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default SocialBar;
