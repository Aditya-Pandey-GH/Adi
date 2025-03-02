"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Intro from "../Intro";
import ProgressBar from "../ProgressBar";

const Skills = () => {
	const Langs = [
		{
			_id: {
				$oid: "66d0af185dfe6b318267c918",
			},
			id: "html",
			title: "HTML",
			skill: 95,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b318267c917",
			},
			id: "js",
			title: "JavaScript",
			skill: 90,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c919",
			},
			id: "css",
			title: "CSS",
			skill: 75,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b318267c919",
			},
			id: "csharp",
			title: "C# (Unity)",
			skill: 75,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c918",
			},
			id: "java",
			title: "Java",
			skill: 60,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c91a",
			},
			id: "python",
			title: "Python",
			skill: 50,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c91c",
			},
			id: "cpp",
			title: "C++",
			skill: 25,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c91b",
			},
			id: "c",
			title: "C",
			skill: 10,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
		},
		// {
		// 	_id: {
		// 		$oid: "66d0af185dfe6b308267c91d",
		// 	},
		// 	id: "dart",
		// 	title: "Dart (Flutter) {Learning}",
		// 	skill: 25,
		// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
		// },
	]; // Languages
	const DBs = [
		{
			_id: {
				$oid: "66d0b3605dfe6b308267c91f",
			},
			id: "mongo",
			title: "MongoDB",
			type: "NoSQL",
			since: "2023",
			skill: 80,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		},
		{
			_id: {
				$oid: "66d0b3605dfe6b308267c920",
			},
			id: "mysql",
			title: "MySQL",
			type: "SQL",
			since: "2019",
			skill: 40,
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		},
		// {
		// 	_id: {
		// 		$oid: "66d0b3605dfe6b308267c921",
		// 	},
		// 	id: "oraclesql",
		// 	title: "OracleSQL",
		// 	skill: 20,
		// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
		// },
	]; // Databases
	const TechStacks = [
		{
			_id: {
				$oid: "66d0acd85dfe6b308267c912",
			},
			id: "unity",
			title: "Unity",
			tech: "",
			sect: "Game Development",
			lang: "C#",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
		},
		{
			_id: {
				$oid: "66d0acd85dfe6b308267c916",
			},
			id: "tailwind",
			title: "Tailwind CSS",
			sect: "Web Development",
			lang: "CSS",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		},
		{
			_id: {
				$oid: "66d0acd85dfe6b308267c915",
			},
			id: "nextjs",
			title: "NextJS",
			tech: "MERN Stack",
			sect: "Web Development",
			lang: "JavaScript",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		},
		{
			_id: {
				$oid: "66d0acd85dfe6b308267c914",
			},
			id: "vite",
			title: "Vite",
			tech: "MERN",
			sect: "Web Development",
			lang: "JavaScript",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
		},
		{
			_id: {
				$oid: "66d0acd85dfe6b308267c90f",
			},
			id: "react",
			title: "ReactJS",
			tech: "MERN",
			sect: "Web Development",
			lang: "JavaScript",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		},
		{
			_id: {
				$oid: "66d0acd85dfe6b308267c910",
			},
			id: "express",
			title: "ExpressJS",
			tech: "MERN",
			sect: "Web Development",
			lang: "JavaScript",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
		},
		{
			_id: {
				$oid: "66d0acd85dfe6b308267c911",
			},
			id: "node",
			title: "NodeJS",
			tech: "MERN",
			sect: "Web Development",
			lang: "JavaScript",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		},
		// {
		// 	_id: {
		// 		$oid: "66d0acd85dfe6b308267c913",
		// 	},
		// 	id: "flutter",
		// 	title: "Flutter {Learning}",
		// 	tech: "Flutter",
		// 	sect: "Application Development",
		// 	lang: "Dart",
		// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
		// },
	]; // Frameworks
	const Tools = [
		{
			_id: {
				$oid: "66d0af185dfe6b308267c91c",
			},
			id: "vscode",
			title: "Microsoft Visual Studio Code",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
			type: "Programming",
			since: "2022",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c91b",
			},
			id: "vs",
			title: "Microsoft Visual Studio",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg",
			type: "Programming",
			since: "2016",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c91d",
			},
			id: "jetbrains",
			title: "JetBrains",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
			type: "Programming",
			since: "2022",
		},
		// {
		// 	_id: {
		// 		$oid: "66d0af185dfe6b308267c91e",
		// 	},
		// 	id: "vb",
		// 	title: "Microsoft Visual Basic",
		// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg",
		// 	type: "Programming",
		// 	since: "2016",
		// },
		{
			_id: {
				$oid: "66d0af185dfe6b308267c916",
			},
			id: "ppt",
			title: "Microsoft PowerPoint",
			logo: "https://static.cdnlogo.com/logos/p/67/powerpoint.svg",
			type: "Designing",
			since: "2013",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c917",
			},
			id: "figma",
			title: "Figma",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
			type: "Designing",
			since: "2023",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c918",
			},
			id: "canva",
			title: "Canva",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
			type: "Designing",
			since: "2022",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c920",
			},
			id: "photoshop",
			title: "Adobe Photoshop",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
			type: "Designing",
			since: "2024",
		},
		{
			_id: {
				$oid: "66d0af185dfe6b308267c91a",
			},
			id: "filmora",
			title: "Wondershare Filmora",
			// logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wondershare_filmora_logo.svg",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/Logos/filmora.svg",
			type: "Video Editing",
			since: "2020",
		},
		// {
		// 	_id: {
		// 		$oid: "66d0af185dfe6b308267c91b",
		// 	},
		// 	id: "premiere_pro",
		// 	title: "Adobe Premiere Pro",
		// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
		// 	type: "Video Editing",
		// 	since: "2024",
		// },
	]; // Programming + Designing + Video Editing Tools

	// PAGINATION LANG STARTS
	const [curLangPage, setCurLangPage] = useState(1);
	const LangsPerPage = 3;
	const lastLangIndex = curLangPage * LangsPerPage;
	const firstLangIndex = lastLangIndex - LangsPerPage;
	const currentLangs = Object.values(Langs).slice(firstLangIndex, lastLangIndex);
	const totalLangPages = Math.ceil(Object.values(Langs).length / LangsPerPage);
	const handleLangPageChange = (pageNumber) => {
		setCurLangPage(pageNumber);
	};
	// PAGINATION LANG ENDS
	// PAGINATION FRAMEWORKS STARTS
	const [curTechPage, setCurTechPage] = useState(1);
	const TechsPerPage = 4;
	const lastTechIndex = curTechPage * TechsPerPage;
	const firstTechIndex = lastTechIndex - TechsPerPage;
	const currentTechs = Object.values(TechStacks).slice(firstTechIndex, lastTechIndex);
	const totalTechPages = Math.ceil(Object.values(TechStacks).length / TechsPerPage);
	const handleTechPageChange = (pageNumber) => {
		setCurTechPage(pageNumber);
	};
	// PAGINATION FRAMEWORKS ENDS
	// // PAGINATION TOOL STARTS
	const [curToolPage, setCurToolPage] = useState(1);
	const groupedTools = Object.values(Tools).reduce((acc, tool) => {
		if (!acc[tool.type]) {
			acc[tool.type] = [];
		}
		acc[tool.type].push(tool);
		return acc;
	}, {});
	const toolGroups = Object.keys(groupedTools).map((elem) => {
		return { type: elem, tools: groupedTools[elem] };
	});
	const totalToolPages = toolGroups.length;
	const currentToolsGroup = toolGroups[curToolPage - 1];
	const handleToolPageChange = (pageNumber) => {
		setCurToolPage(pageNumber);
	};
	// // PAGINATION TOOL ENDS

	return (
		<>
			<div className="flex flex-col lg:flex-row justify-around mb-10 sm:mb-16 md:mb-0 md:ml-60 px-4 pt-4">
				<div className="col-1">
					<Intro />
					<div className="mainContainer">
						<h1 className="font-langar text-amber-400 text-lg lg:text-xl">LANGUAGES</h1>
						<div className="text-center">
							{currentLangs.map((lang) => (
								<div key={lang._id.$oid} className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center">
									<Image src={lang.logo} width={75} height={75} alt="" className="bg-white p-2 rounded-2xl" />

									<div className="w-full font-iceberg justify-center sm:text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{lang.title}</h2>
											{/* <hr className="border border-amber-400" /> */}
										</div>

										<div className="w-full h-6 bg-gray-800 rounded-lg relative overflow-hidden">
											<ProgressBar skill={lang.skill} />
										</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalLangPages > 1 ? (
									<>
										<button disabled={curLangPage <= 1} onClick={() => handleLangPageChange(curLangPage - 1)} className="paginationButton active">
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curLangPage}/${totalLangPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curLangPage >= totalLangPages}
											onClick={() => handleLangPageChange(curLangPage + 1)}
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
						<h1 className="font-langar text-amber-400 text-lg lg:text-xl">DATABASES</h1>
						<div className="text-center">
							{Object.values(DBs).map((db) => (
								<div key={db._id.$oid} className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center">
									<Image src={db.logo} width={75} height={75} alt="" className="bg-white p-2 rounded-2xl" />

									<div className="w-full font-iceberg text-center sm:text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{db.title}</h2>
											<hr className="border border-amber-400" />
										</div>

										{/* <div className="w-full h-6 bg-gray-800 rounded-lg relative overflow-hidden">
											<ProgressBar skill={db.skill} />
										</div> */}

										<div className="mt-2">
											<div>{db.sect}</div>
											<div>Type: {db.type}</div>
											<div>Using Since: {db.since}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="col-2">
					<div className="mainContainer">
						<h1 className="font-langar text-amber-400 text-lg lg:text-xl">FRAMEWORKS</h1>
						<div className="text-center">
							{currentTechs.map((tech) => (
								<div key={tech._id.$oid} className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center">
									<Image src={tech.logo} width={75} height={75} alt="" className="bg-white p-2 rounded-2xl" />

									<div className="w-full font-iceberg text-center sm:text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{tech.title}</h2>
											<hr className="border border-amber-400" />
										</div>

										<div className="mt-2">
											<div>{tech.sect}</div>
											{tech.tech ? <div>Tech Stack: {tech.tech}</div> : <></>}
											{tech.lang ? <div>Language: {tech.lang}</div> : <></>}
										</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalTechPages > 1 ? (
									<>
										<button disabled={curTechPage <= 1} onClick={() => handleTechPageChange(curTechPage - 1)} className="paginationButton active">
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curTechPage}/${totalTechPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curTechPage >= totalTechPages}
											onClick={() => handleTechPageChange(curTechPage + 1)}
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
						<h1 className="font-langar text-amber-400 text-lg lg:text-xl">{`${currentToolsGroup.type.toLocaleUpperCase()} TOOLS`}</h1>
						<div className="text-center">
							{currentToolsGroup.tools.map((tools) => (
								<div key={tools._id.$oid} className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center">
									<Image src={tools.logo} width={75} height={75} alt="" className="bg-white p-2 rounded-2xl" />

									<div className="w-full font-iceberg text-center sm:text-justify sm:ml-4">
										<div className="w-fit m-auto mt-2 sm:m-0">
											<h2 className="text-amber-400">{tools.title}</h2>
											<hr className="border border-amber-400" />
										</div>

										<div className="mt-2">
											<div>{tools.sect}</div>
											<div>Using Since: {tools.since}</div>
											<div>Used For: {tools.type}</div>
										</div>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalToolPages > 1 ? (
									<>
										<button disabled={curToolPage <= 1} onClick={() => handleToolPageChange(curToolPage - 1)} className="paginationButton active">
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curToolPage}/${totalToolPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curToolPage >= totalToolPages}
											onClick={() => handleToolPageChange(curToolPage + 1)}
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

export default Skills;
