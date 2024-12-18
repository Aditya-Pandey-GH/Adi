"use client";
import React, { useState } from "react";
import Image from "next/image";
import Intro from "../Intro";
import Link from "next/link";
import ImageLoader from "../ImageLoader";

const Milestones = () => {
	const Welfares = [
		{
			_id: {
				$oid: "66d0bc665dfe6b308267c92a",
			},
			id: "act2017",
			title: "Performed a act on the auspicious day of Republic Day to increase public awareness on the topic of 'Old-Age Homes'.",
			year: "Jan 2017",
		},
		{
			_id: {
				$oid: "66d0bc665dfe6b308267c92b",
			},
			id: "streetPlay2018",
			title: "Performed a street play to spread awareness about Air and Water Pollution and their severe impacts on environment.",
			year: "Apr 2018",
		},
		{
			_id: {
				$oid: "66d0bc665dfe6b308267c92c",
			},
			id: "streetPlay2019",
			title: "Performed a street play to spread awareness about Water and Land Pollution and their severe impacts on environment.",
			year: "May 2019",
		},
		{
			_id: {
				$oid: "66d0bc665dfe6b308267c92d",
			},
			id: "ofa2022",
			title: "Did plastic recycling and spread awareness for the same through an act, which motivated other students to collect recyclable plastic waste under our initiative 'One for All'.",
			year: "May 2022",
		},
		{
			_id: {
				$oid: "66d0bc665dfe6b308267c92e",
			},
			id: "streetPlay2022",
			title: "Performed a street play to spread awareness about Air Pollution and its severe impacts on environment.",
			year: "Dec 2022",
		},
	];
	const Certs = [
		{
			_id: {
				$oid: "66d0bed15dfe6b308267c930",
			},
			id: "mernTraining",
			title: "MERN Stack Training",
			desc: "This was awarded for the completion of Summer training with MERN stack, at Jagan Institute of Management Studies, Sector-5 (Rohini).",
			logo: "https://i.postimg.cc/vH0Z2hVQ/mern-Stack.jpg",
			preview: "https://postimg.cc/PP8HPmyc",
			by: "Tech Explica",
			on: "Sep 2023",
		},
		{
			_id: {
				$oid: "66d0bed15dfe6b308267c931",
			},
			id: "ofa-bajajCert",
			title: "Plastic Recycling",
			desc: "This was awarded for launching a small-scale initiative (One For All), which consisted of the collection of plastic milk packets, and then sending them to plastic recyclers.",
			logo: "https://i.postimg.cc/x17Tnd5h/one-For-All.png",
			preview: "https://postimg.cc/jDHrhtG4",
			by: "Bajaj & Others",
			on: "Jul 2022",
		},
		{
			_id: {
				$oid: "66d0bed15dfe6b308267c933",
			},
			id: "networkBulls",
			title: "Network Bull (Cisco)",
			desc: "This was awarded for participating in a 1-day industrial visit on network implementation and cyber security.",
			logo: "https://i.postimg.cc/x1qTwmvL/cyberSec.png",
			preview: "https://postimg.cc/3k5Tpdbw",
			by: "Network Bull",
			on: "May 2022",
		},
		{
			_id: {
				$oid: "66d0bed15dfe6b308267c932",
			},
			id: "ipr-event",
			title: "NIPAM",
			desc: "This was awarded for participating in the IP Awareness Training Program under National Intellectual Property Awareness Mission, called Scope for All.",
			logo: "https://i.postimg.cc/mrHZDG6D/scope-For-All.png",
			preview: "https://postimg.cc/3y3QSzh5",
			by: "NIPAM",
			on: "Feb 2022",
		},
	];
	const XPs = [
		{
			_id: {
				$oid: "66d045b45dfe6b308267c902",
			},
			id: "technowhiz",
			name: "Technowhiz",
			xp: "Core Coordinator",
			logo: "https://i.postimg.cc/7Yd7sgjJ/technowhiz.png",
			from: "February 2023",
			to: "July 2024",
		},
		{
			_id: {
				$oid: "66d045c65dfe6b308267c903",
			},
			id: "geekRoom",
			name: "Geek Room",
			xp: "Core Coordinator",
			logo: "https://i.postimg.cc/VsryPFpf/geekRoom.png",
			from: "December 2023",
			to: "February 2024",
		},
		{
			_id: {
				$oid: "66d0457b5dfe6b308267c900",
			},
			id: "itContent",
			name: "IT Kaleidoscope",
			xp: "Content Writer",
			logo: "https://i.postimg.cc/MZs1RkDD/jims.png",
			from: "December 2021",
			to: "July 2024",
		},
		{
			_id: {
				$oid: "66d0455a5dfe6b308267c8ff",
			},
			id: "itDesign",
			name: "IT Kaleidoscope",
			xp: "Designer",
			logo: "https://i.postimg.cc/MZs1RkDD/jims.png",
			from: "December 2021",
			to: "July 2024",
		},
		{
			_id: {
				$oid: "66d045a55dfe6b308267c901",
			},
			id: "tekqbe",
			name: "TekQbe",
			xp: "Student Coordinator",
			logo: "https://i.postimg.cc/7Zzzp5ys/tekqbe.png",
			from: "July 2022",
			to: "July 2024",
		},
	];
	const Achs = [
		{
			_id: {
				$oid: "66d0c0605dfe6b308267c935",
			},
			id: "codeIt",
			name: "Code It",
			desc: "Secured 3rd position in a coding competition named Code-It, where I competed against seniors from 2nd and 3rd year, and also the seniors from MCA.",
			logo: "https://i.postimg.cc/t4b8PGTJ/codeIt.png",
		},
		{
			_id: {
				$oid: "66d0c0605dfe6b308267c936",
			},
			id: "ecoArt",
			name: "Eco Art",
			desc: "Organized a massive event in JIMS, Sector-5, Rohini to spread awareness about milk packet/ plastic recycling. The students were to create posters or hand paintings to promote environment friendliness, and hazards of plastic waste. Me, along with co-orgnaizers, also performed an act to support this.",
			logo: "https://i.postimg.cc/ZKp1C5JX/ofa.png",
		},
		{
			_id: {
				$oid: "66d0c0605dfe6b308267c938",
			},
			id: "sih22",
			name: "Smart India Hackathon 2022",
			desc: "Secured 4th position in SIH'22 for our problem statement and got to know and learn a lot about the environment in a formal hackathon and became well aware about the coding culture.",
			logo: "https://i.postimg.cc/fW6Gz9Qx/sih.png",
		},
		{
			_id: {
				$oid: "66d0c0605dfe6b308267c937",
			},
			id: "techJitters",
			name: "Tech Jitters",
			desc: "Served as a co-ordinator in Tech Jitters, an inter-college tech fest. The event was organized by TekQbe, the IT Club of JIMS.",
			logo: "https://i.postimg.cc/BnCkB7Lg/tech-Jitters.png",
		},
		{
			_id: {
				$oid: "66d0c0605dfe6b308267c939",
			},
			id: "JIH23",
			name: "JIMS Internal Hackathon 2023",
			desc: "Secured 1st position in JIMS Internal Hackathon 2023. JIMS Internal Hackathon is the internal hackathon, that was conducted as an elimination round for Smart India Hackathon 2023.",
			logo: "https://i.postimg.cc/fW6Gz9Qx/sih.png",
		},
		{
			_id: {
				$oid: "66d0c0605dfe6b308267c93a",
			},
			id: "codekshetra",
			name: "Code Kshetra",
			desc: "Served as an organizer in a national level hackathon, Code Kshetra. This was organized in collaboration with Geek Room society. Sponsors included Coding Ninja, Devfolio, Polygon, Rise In, etc.",
			logo: "https://i.postimg.cc/GhHGxMg1/codekshetra.png",
		},
	];

	// PAGINATION WELFARES STARTS
	const [curWelfarePage, setCurWelfarePage] = useState(1);
	const WelfaresPerPage = 3;
	const lastWelfareIndex = curWelfarePage * WelfaresPerPage;
	const firstWelfareIndex = lastWelfareIndex - WelfaresPerPage;
	const currentWelfares = Object.values(Welfares).slice(firstWelfareIndex, lastWelfareIndex);
	const totalWelfarePages = Math.ceil(Object.values(Welfares).length / WelfaresPerPage);
	const handleWelfarePageChange = (pageNumber) => {
		setCurWelfarePage(pageNumber);
	};
	// PAGINATION WELFARES ENDS
	// PAGINATION CERTIFICATES STARTS
	const [curCertPage, setCurCertPage] = useState(1);
	const CertsPerPage = 1;
	const lastCertIndex = curCertPage * CertsPerPage;
	const firstCertIndex = lastCertIndex - CertsPerPage;
	const currentCerts = Object.values(Certs).slice(firstCertIndex, lastCertIndex);
	const totalCertPages = Math.ceil(Object.values(Certs).length / CertsPerPage);
	const handleCertPageChange = (pageNumber) => {
		setCurCertPage(pageNumber);
	};
	// PAGINATION CERTIFICATES ENDS
	// PAGINATION EXPERIENCE STARTS
	const [curXPPage, setCurXPPage] = useState(1);
	const XPsPerPage = 5;
	const lastXPIndex = curXPPage * XPsPerPage;
	const firstXPIndex = lastXPIndex - XPsPerPage;
	const currentXPs = Object.values(XPs.reverse()).slice(firstXPIndex, lastXPIndex);
	const totalXPPages = Math.ceil(Object.values(XPs).length / XPsPerPage);
	const handleXPPageChange = (pageNumber) => {
		setCurXPPage(pageNumber);
	};
	// PAGINATION EXPERIENCE ENDS
	// PAGINATION ACHIEVEMENTS STARTS
	const [curAchPage, setCurAchPage] = useState(1);
	const AchsPerPage = 5;
	const lastAchIndex = curAchPage * AchsPerPage;
	const firstAchIndex = lastAchIndex - AchsPerPage;
	const currentAchs = Object.values(Achs).slice(firstAchIndex, lastAchIndex);
	const totalAchPages = Math.ceil(Object.values(Achs).length / AchsPerPage);
	const handleAchPageChange = (pageNumber) => {
		setCurAchPage(pageNumber);
	};
	// PAGINATION ACHIEVEMENTS ENDS

	return (
		<>
			<div className="flex flex-col lg:flex-row justify-around mb-10 sm:mb-16 md:mb-0 md:ml-60 px-4 pt-4">
				<div className="col-1">
					<Intro />
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">SOCIAL WELFARE</h1>
						<div className="text-justify mt-4">
							{currentWelfares.map((welfare) => (
								<div key={welfare.id} className="flex flex-row h-fit m-auto m-top mt-1 px-4 pt-2 sm:flex-row justify-center">
									<div className="mt-0.5 -ml-2 mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" fill="#ffc700" viewBox="0 0 32 32" className="w-6">
											<circle
												cx="16"
												cy="16"
												r="10"
												stroke="#646464"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="3"
											/>
										</svg>
									</div>
									<div className="iceberg">
										{welfare.title}
										<br />
										<span className="float-right">~ {welfare.year}</span>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalWelfarePages > 1 ? (
									<>
										<button
											disabled={curWelfarePage <= 1}
											onClick={() => handleWelfarePageChange(curWelfarePage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curWelfarePage}/${totalWelfarePages}`}</button>
										<button
											className="paginationButton active"
											disabled={curWelfarePage >= totalWelfarePages}
											onClick={() => handleWelfarePageChange(curWelfarePage + 1)}
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
						<h1 className="langar text-amber-400 text-lg lg:text-xl">CERTIFICATES</h1>
						<div className="text-center">
							{currentCerts.map((cert) => (
								<div key={cert._id.$oid} className="flex flex-col sm:flex-row justify-center items-center">
									<div className="relative flex flex-col items-center aspect-w-16 aspect-h-9 h-full mt-4">
										<ImageLoader title={cert.title} image={cert.logo} preview={cert.preview} bgColor="black" />
										<div className="w-full flex flex-col">
											<span className="iceberg m-auto mt-2 md:text-lg text-amber-400 w-fit">
												{cert.title}
												<hr className="border border-amber-400" />
											</span>
											<span className="iceberg text-justify mt-2 md:text-lg">{cert.desc}</span>
											<ul className="iceberg list-disc text-justify mt-2 md:text-lg ml-6">
												<li>
													<span>By: {cert.by}</span>
												</li>
												<li>
													<span>On: {cert.on}</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalCertPages > 1 ? (
									<>
										<button
											disabled={curCertPage <= 1}
											onClick={() => handleCertPageChange(curCertPage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curCertPage}/${totalCertPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curCertPage >= totalCertPages}
											onClick={() => handleCertPageChange(curCertPage + 1)}
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
						<h1 className="langar text-amber-400 text-lg lg:text-xl">EXPERIENCE</h1>
						<div className="text-center">
							{currentXPs.map((xp) => (
								<div
									key={xp._id.$oid}
									className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center"
								>
									<Image src={xp.logo} width={75} height={75} alt="" loading="lazy" className="bg-white p-2 rounded-2xl" />

									<div className="w-full iceberg text-center sm:text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{xp.name}</h2>
											<hr className="border border-amber-400" />
										</div>

										<div className="mt-2">
											<div>Role: {xp.xp}</div>
											{xp.from ? <div>From: {xp.from}</div> : <></>}
											{xp.to ? <div>To: {xp.to}</div> : <></>}
										</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalXPPages > 1 ? (
									<>
										<button
											disabled={curXPPage <= 1}
											onClick={() => handleXPPageChange(curXPPage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curXPPage}/${totalXPPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curXPPage >= totalXPPages}
											onClick={() => handleXPPageChange(curXPPage + 1)}
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
						<h1 className="langar text-amber-400 text-lg lg:text-xl">ACHIEVEMENTS</h1>
						<div className="text-center">
							{currentAchs.map((ach) => (
								<div key={ach.id} className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center">
									<Image src={ach.logo} width={75} height={75} alt="" className="bg-white p-2 rounded-2xl" />

									<div className="w-full iceberg text-center sm:text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{ach.name}</h2>
											<hr className="border border-amber-400" />
										</div>

										<div className="text-justify mt-2">{ach.desc}</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalAchPages > 1 ? (
									<>
										<button
											disabled={curAchPage <= 1}
											onClick={() => handleAchPageChange(curAchPage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curAchPage}/${totalAchPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curAchPage >= totalAchPages}
											onClick={() => handleAchPageChange(curAchPage + 1)}
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

export default Milestones;
