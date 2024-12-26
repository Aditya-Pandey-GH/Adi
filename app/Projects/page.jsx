"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Intro from "../Intro";
import Link from "next/link";

const Projects = () => {
	const Websites = [
		// {
		// 	_id: {
		// 		$oid: "66d0c8ff5dfe6b308267c943",
		// 	},
		// 	id: "jimsPrePlace",
		// 	name: "JIMS Pre-Placement Portal {In Progress}",
		// 	desc: "JIMS Pre-Placement Portal is a web for all the pre-placement related content for JIMS, making it easy for the students to access it later. Also, with a simple admin portal, the admin can easily add or delete or modify multiple things in the website.",
		// 	lang: [
		// 		"Node.js",
		// 		"Express.js",
		// 		"MongoDB",
		// 		"React",
		// 		"Cascading Style Sheets (CSS)",
		// 	],
		// 	logo: "",
		// 	link: "",
		// },
		{
			_id: {
				$oid: "66d0c8ff5dfe6b308267c942",
			},
			id: "adiPortfolio",
			name: "Adi's Portfolio",
			desc: "Adi's Portfolio is the portfolio website for Aditya Pandey. This website shows the entire programming journey of Aditya Pandey. What you are seeing right now is also a part of this project. This portfolio will be updated from time to time to keep it up-to-date.",
			// lang: ["Node.js", "Express.js", "MongoDB", "React", "Cascading Style Sheets (CSS)"],
			lang: ["Node.js", "Express.js", "React", "Next.js", "Cascading Style Sheets (CSS)", "Tailwind CSS"],
			logo: "https://i.postimg.cc/3RGr13K4/portfolio.png",
			link: "https://adipandey.vercel.app",
		},
		{
			_id: {
				$oid: "66d0d39f5dfe6b308267c94c",
			},
			id: "evilSimon",
			name: "Evil Simon",
			desc: "Evil Simon is the hard mode of Simon Says game. The concept of this game is same as the original Simon Says game, but the Evil Simon has a bit of difficulty to offer, and you have to overcome that difficulty, by making and breaking high scores.",
			lang: ["React.js", "Casacading Style Sheets (CSS)"],
			logo: "https://i.postimg.cc/FR1gd0Yn/evil-Simon.png",
			link: "https://evil-simon.vercel.app",
		},
		// {
		// 	_id: {
		// 		$oid: "66ebe20a9fa4c0a3d31551ab",
		// 	},
		// 	id: "healthElevator",
		// 	name: "Health Elevator",
		// 	desc: "Health Elevator is a website that helps the users to search for the nearby medical stores, and set the reminders for medicines. All the reminders will be sent to your WhatsApp number that you want to recieve your reminders on, since most of the people are active on WhatsApp.",
		// 	lang: [
		// 		"Node.js",
		// 		"Express.js",
		// 		"MongoDB",
		// 		"React",
		// 		"Casacading Style Sheets (CSS)",
		// 	],
		// 	logo: "",
		// 	link: "",
		// },
	]; // Websites
	const Apps = [
		{
			_id: {
				$oid: "66d0c7405dfe6b308267c93d",
			},
			id: "g12",
			name: "G-12",
			desc: "G-12 is a command line based Python project. This project contains a set games for different purposes, such as fun games and mind games.",
			lang: ["Python", "MySQL"],
			logo: "https://i.postimg.cc/Hx427zYy/g12.png",
			link: "",
		},
		{
			_id: {
				$oid: "66d0c7405dfe6b308267c93e",
			},
			id: "g12_plus",
			name: "G-12 Plus",
			desc: "G-12 is a Graphical User Interface based Python project. Using libraries like tkinter and customtkinter, this project aims to improve the original G-12 project, by adding an interactable GUI.",
			lang: ["Python", "SQLite"],
			logo: "https://i.postimg.cc/BbSC5Fbw/g12Plus.png",
			link: "",
		},
	]; // Applications
	const Games = [
		// {
		// 	_id: {
		// 		$oid: "66d0c7405dfe6b308267c93d",
		// 	},
		// 	id: "g12",
		// 	name: "G-12",
		// 	desc: "G-12 is a command line based Python project. This project contains a set games for different purposes, such as fun games and mind games.",
		// 	lang: ["Python", "MySQL"],
		// 	logo: "https://i.postimg.cc/Hx427zYy/g12.png",
		// 	link: "",
		// },
		// {
		// 	_id: {
		// 		$oid: "66d0c7405dfe6b308267c93e",
		// 	},
		// 	id: "g12_plus",
		// 	name: "G-12 Plus",
		// 	desc: "G-12 is a Graphical User Interface based Python project. Using libraries like tkinter and customtkinter, this project aims to improve the original G-12 project, by adding an interactable GUI.",
		// 	lang: ["Python", "SQLite"],
		// 	logo: "https://i.postimg.cc/BbSC5Fbw/g12Plus.png",
		// 	link: "",
		// },
		{
			_id: {
				$oid: "66d0d39f5dfe6b308267c94c",
			},
			id: "evilSimon",
			name: "Evil Simon",
			desc: "Evil Simon is the Hard Mode of Simon Says game. The concept of this game is same as the original Simon Says game, but the Evil Simon has a bit of difficulty to offer, and you have to overcome that difficulty, by making and breaking high scores.",
			lang: ["React.js", "Casacading Style Sheets (CSS)"],
			logo: "https://i.postimg.cc/FR1gd0Yn/evil-Simon.png",
			link: "https://evil-simon.vercel.app",
		},
		{
			_id: {
				$oid: "66d0c7405dfe6b308267c93f",
			},
			id: "flappy_clone",
			name: "Flappy Bird (Clone)",
			desc: "Flappy Bird is one of the very well popular games. But it was abandoned by its developer. This project is a clone of the original Flappy Bird game, but a bit more difficult.",
			lang: ["Unity", "C#"],
			logo: "https://i.postimg.cc/3xBgttpc/flappy-Bird.png",
			link: "https://github.com/AdiBhaiya/Flappy-Bird-Clone/releases",
		},
	]; // Games

	// PAGINATION WEBSITES STARTS
	const [curWebPage, setCurWebPage] = useState(1);
	const WebsPerPage = 3;
	const lastWebIndex = curWebPage * WebsPerPage;
	const firstWebIndex = lastWebIndex - WebsPerPage;
	const currentWebs = Object.values(Websites).slice(firstWebIndex, lastWebIndex);
	const totalWebPages = Math.ceil(Object.values(Websites).length / WebsPerPage);
	const handleWebPageChange = (pageNumber) => {
		setCurWebPage(pageNumber);
	};
	// PAGINATION WEBSITES ENDS
	// PAGINATION APPS STARTS
	const [curAppPage, setCurAppPage] = useState(1);
	const AppsPerPage = 2;
	const lastAppIndex = curAppPage * AppsPerPage;
	const firstAppIndex = lastAppIndex - AppsPerPage;
	const currentApps = Object.values(Apps).slice(firstAppIndex, lastAppIndex);
	const totalAppPages = Math.ceil(Object.values(Apps).length / AppsPerPage);
	const handleAppPageChange = (pageNumber) => {
		setCurAppPage(pageNumber);
	};
	// PAGINATION APPS ENDS
	// PAGINATION GAMES STARTS
	const [curGamePage, setCurGamePage] = useState(1);
	const GamesPerPage = 3;
	const lastGameIndex = curGamePage * GamesPerPage;
	const firstGameIndex = lastGameIndex - GamesPerPage;
	const currentGames = Object.values(Games.reverse()).slice(firstGameIndex, lastGameIndex);
	const totalGamePages = Math.ceil(Object.values(Games).length / GamesPerPage);
	const handleGamePageChange = (pageNumber) => {
		setCurGamePage(pageNumber);
	};
	// PAGINATION GAMES ENDS

	return (
		<>
			<div className="flex flex-col lg:flex-row justify-around mb-10 sm:mb-16 md:mb-0 md:ml-60 px-4 pt-4">
				<div className="col-1">
					<Intro />
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">WEBSITES</h1>
						<div className="text-center">
							{currentWebs.map((web) => (
								<div
									key={web._id.$oid}
									className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center"
								>
									<Image src={web.logo} width={75} height={75} alt="" className="bg-white p-2 rounded-2xl" />

									<div className="w-full iceberg text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{web.name}</h2>
											<hr className="border border-amber-400" />
										</div>

										<div className="mt-2">
											<div>{web.desc}</div>
											<div>
												Language:
												<ul>
													{web.lang.map((lang) => (
														<li key={lang} className="list-disc ml-6">
															{lang}
														</li>
													))}
												</ul>
											</div>
											{web.link && (
												<div className="flex flex-row items-center mt-2">
													<Image src="/svgs/Site.svg" width={25} height={25} alt="Link: " className="w-6 mr-2" />
													<Link
														href={web.link}
														title={web.link}
														className="text-yellow-300 hover:text-amber-500 duration-300 ease-in-out"
													>
														Go to site
													</Link>
												</div>
											)}
										</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalWebPages > 1 ? (
									<>
										<button
											disabled={curWebPage <= 1}
											onClick={() => handleWebPageChange(curWebPage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curWebPage}/${totalWebPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curWebPage >= totalWebPages}
											onClick={() => handleWebPageChange(curWebPage + 1)}
										>
											{">"}
										</button>
									</>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="col-2">
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">APPLICATIONS</h1>
						<div className="text-center">
							{currentApps.map((app) => (
								<div
									key={app._id.$oid}
									className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center"
								>
									<Image src={app.logo} width={75} height={75} alt="" className="bg-white p-2 rounded-2xl" />

									<div className="w-full iceberg text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{app.name}</h2>
											<hr className="border border-amber-400" />
										</div>

										<div className="mt-2">
											<div>{app.desc}</div>
											<div>
												Language:
												<ul>
													{app.lang.map((lang) => (
														<li key={lang} className="list-disc ml-6">
															{lang}
														</li>
													))}
												</ul>
											</div>
											{app.link && (
												<div className="flex flex-row items-center mt-2">
													<Image src="/svgs/Site.svg" width={25} height={25} alt="Link: " className="w-6 mr-2" />
													<Link
														href={app.link}
														title={app.link}
														className="text-yellow-300 hover:text-amber-500 duration-300 ease-in-out"
													>
														Go to Release
													</Link>
												</div>
											)}
										</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalAppPages > 1 ? (
									<>
										<button
											disabled={curAppPage <= 1}
											onClick={() => handleAppPageChange(curAppPage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curAppPage}/${totalAppPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curAppPage >= totalAppPages}
											onClick={() => handleAppPageChange(curAppPage + 1)}
										>
											{">"}
										</button>
									</>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>

					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">GAMES</h1>
						<div className="text-center">
							{currentGames.map((game) => (
								<div
									key={game._id.$oid}
									className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center"
								>
									<Image src={game.logo} width={75} height={75} alt="" className="bg-white p-2 rounded-2xl" />

									<div className="w-full iceberg text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{game.name}</h2>
											<hr className="border border-amber-400" />
										</div>

										<div className="mt-2">
											<div>{game.desc}</div>
											<div>
												Language:
												<ul>
													{game.lang.map((lang) => (
														<li key={lang} className="list-disc ml-6">
															{lang}
														</li>
													))}
												</ul>
											</div>
											{game.link && (
												<div className="flex flex-row items-center mt-2">
													<Image src="/svgs/Site.svg" width={25} height={25} alt="Link: " className="w-6 mr-2" />
													<Link
														href={game.link}
														title={game.link}
														className="text-yellow-300 hover:text-amber-500 duration-300 ease-in-out"
													>
														Go to Release
													</Link>
												</div>
											)}
										</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalGamePages > 1 ? (
									<>
										<button
											disabled={curGamePage <= 1}
											onClick={() => handleGamePageChange(curGamePage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curGamePage}/${totalGamePages}`}</button>
										<button
											className="paginationButton active"
											disabled={curGamePage >= totalGamePages}
											onClick={() => handleGamePageChange(curGamePage + 1)}
										>
											{">"}
										</button>
									</>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
