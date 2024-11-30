"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import PortfolioLogo from "@/assets/frontLogo.png";

import { RiCloseLargeFill, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [operationDropdownOpen, setOperationDropdownOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setNavbarOpen(false);
				setDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<nav className="fixed w-full text-base font-semibold text-gray-600 z-50 backdrop-blur-3xl bg-[#f5f5f5ab] ">
			<div
				className="lg:w-11/12 2xl:max-w-screen-2xl mx-auto flex flex-wrap items-center justify-around z-50 py-2"
				ref={menuRef}
			>
				<div className="w-full flex flex-grow-0 justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<Link href="/">
						<Image
							className="w-28 p-2"
							src={PortfolioLogo}
							alt="logo"
							width={150}
							height={50}
						/>
					</Link>
					<button
						className="text-umojablue cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						{navbarOpen ? (
							<RiCloseLargeFill size={25} />
						) : (
							<RiMenu3Line size={25} />
						)}
					</button>
				</div>
				<div
					className={`lg:flex flex-grow items-center py-3 transition-all duration-300 ease-in-out ${
						navbarOpen ? "block" : "hidden"
					}`}
				>
					<div className="flex flex-col items-center lg:flex-row list-none lg:ml-auto uppercase">
						{/* Menu Items */}
						<Link href="/">
							<div
								className="px-4 border-transparent border-b-4 hover:text-orange py-2 cursor-pointer"
								onClick={() => setNavbarOpen(false)}
							>
								Home
							</div>
						</Link>
						<Link href="/about">
							<div
								className="px-4 border-transparent border-b-4 hover:text-orange py-2 cursor-pointer"
								onClick={() => setNavbarOpen(false)}
							>
								About Us
							</div>
						</Link>

						{/* Mobile dropdown */}
						<div className="relative lg:hidden">
							<div
								className="cursor-pointer py-2 px-4 border-transparent border-b-4 hover:text-orange"
								onClick={() => setOperationDropdownOpen(!operationDropdownOpen)}
							>
								Where We Operate
							</div>

							{/* Toggleable Dropdown */}
							<div
								className={`transition-all duration-300 ease-in-out ${
									operationDropdownOpen ? "block" : "hidden"
								}`}
							>
								<ul className="text-center  py-2">
									<li
										className="px-4 py-2 text-gray-600 hover:text-orange hover:bg-gray-100 cursor-pointer"
										onClick={() => setNavbarOpen(false)}
									>
										<Link href="/country/uganda">Uganda</Link>
									</li>
									<li
										className="px-4 py-2 text-gray-600 hover:text-orange hover:bg-gray-100 cursor-pointer"
										onClick={() => setNavbarOpen(false)}
									>
										<Link href="/country/zambia">Zambia</Link>
									</li>
									<li
										className="px-4 py-2 text-gray-600 hover:text-orange hover:bg-gray-100 cursor-pointer"
										onClick={() => setNavbarOpen(false)}
									>
										<Link href="/country/kenya">Kenya</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* Dropdown Menu */}
						<div
							className="relative group lg:py-2 lg:px-4 border-transparent border-b-4 cursor-pointer hidden lg:block"
							onMouseEnter={() => setDropdownOpen(true)}
							onMouseLeave={() => setDropdownOpen(false)}
							onClick={() => setDropdownOpen(!dropdownOpen)} // Mobile toggle
						>
							<div>Where We Operate</div>
							<div
								className={`absolute lg:mt-2 bg-[#f5f5f5f8] backdrop-blur-3xl shadow-md rounded w-40 transition-all duration-300 ease-in-out ${
									dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
								}`}
							>
								<div className="text-left">
									<li className="px-4 py-2 text-gray-600 hover:text-orange hover:bg-gray-100 cursor-pointer">
										<Link href="/country/uganda">Uganda</Link>
									</li>
									<li className="px-4 py-2 text-gray-600 hover:text-orange hover:bg-gray-100 cursor-pointer">
										<Link href="/country/zambia">Zambia</Link>
									</li>
									<li className="px-4 py-2 text-gray-600 hover:text-orange hover:bg-gray-100 cursor-pointer">
										<Link href="/country/kenya">Kenya</Link>
									</li>
								</div>
							</div>
						</div>

						<Link href="/client-stories">
							<div
								className="px-4 border-transparent border-b-4 hover:text-orange py-2 cursor-pointer"
								onClick={() => setNavbarOpen(false)}
							>
								Our Stories
							</div>
						</Link>
						<Link href="/career">
							<div
								className="px-4 border-transparent border-b-4 hover:text-orange py-2 cursor-pointer"
								onClick={() => setNavbarOpen(false)}
							>
								Career
							</div>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
