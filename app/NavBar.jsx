"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
	const pathname = usePathname();
	const router = useRouter();

	const Pages = [
		{
			id: "homePage",
			name: "Home",
			logo: "https://i.postimg.cc/QxvTKf0Y/home.png",
			path: "/",
		},
		{
			id: "skillPage",
			name: "Skills",
			logo: "https://i.postimg.cc/hjCJDsXr/skills.png",
			path: "/Skills",
		},
		{
			id: "projPage",
			name: "Projects",
			logo: "https://i.postimg.cc/136NGDdm/projects.png",
			path: "/Projects",
		},
		{
			id: "designPage",
			name: "Designs",
			logo: "https://i.postimg.cc/DzPJDnFR/gallery.png",
			path: "/Designs",
		},
		{
			id: "milestonePage",
			// name: "Achievements",
			name: "Milestones",
			logo: "https://i.postimg.cc/vZ0SChWD/achievements.png",
			path: "/Milestones",
		},
		{
			id: "connectPage",
			name: "Connect",
			logo: "https://i.postimg.cc/s2rGwvFp/connect.png",
			path: "/Connect",
		},
	];

	let curPage = Pages.find((page) => page.path === pathname);
	if (curPage === undefined) {
		curPage = {
			id: "default",
			name: "Adi",
			logo: "https://i.postimg.cc/P5RZzv06/logo.png",
			path: pathname,
		};
	}
	// console.log(curPage.name);

	const handleNavigation = (path) => {
		if (path !== pathname) {
			router.replace(path); // Replace the current history entry
		}
	};

	return (
		<>
			<nav className="bg-[#313a4b] font-iceberg fixed bottom-0 md:bottom-auto w-full md:w-60 h-fit md:h-full z-50">
				{/* PC Navbar */}
				<div className="overflow-y-auto max-h-screen hidden md:block">
					{/* Current Page */}
					{curPage !== undefined && (
						<>
							<div className="w-fit m-auto flex justify-center items-center my-2 py-4 px-6 space-x-2 text-base bg-gray-800 rounded-lg">
								<Image src={curPage.logo} width={200} height={200} alt="" className="w-10" />
								<div>{curPage.name}</div>
							</div>
						</>
					)}
					{/* All Pages */}
					<div className="font-langar mt-4">
						{Pages.map((page) => {
							return (
								<div
									key={page.id}
									href={page.path}
									onClick={() => handleNavigation(page.path)}
									className={`${
										pathname === page.path && "bg-gray-800"
									} flex items-center p-4 text-base font-normal hover:bg-gray-600 hover:cursor-pointer transition-colors`}
								>
									<Image src={page.logo} width={400} height={400} className="w-6 h-6 mr-3" alt="" />
									{page.name}
								</div>
							);
						})}
					</div>
				</div>
				{/* Phone Navbar */}
				<div className="overflow-y-auto max-h-screen flex justify-evenly w-screen md:hidden">
					{Pages.map((page) => {
						return (
							<div key={page.id} href={page.path} onClick={() => handleNavigation(page.path)}>
								<div className={`${pathname === page.path && "bg-slate-600"} flex flex-col items-center px-1 py-2 rounded-lg hover:cursor-pointer`}>
									<Image src={page.logo} width={400} height={400} title={page.name} alt="" className="w-6 h-6" />
									<div className="font-iceberg hidden sm:block">{page.name}</div>
								</div>
							</div>
						);
					})}
				</div>
			</nav>
		</>
	);
};

export default NavBar;
