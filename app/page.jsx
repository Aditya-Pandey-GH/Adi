"use client";
import { useEffect } from "react";
import Intro from "./Intro";

const Main = () => {
	const Welcome = [
		"Hello user. I am Aditya Pandey 👋, and I welcome you to my website.",
		"I am a BCA graduate, and have the knowledge of making web applications 🌐, like this website.",
		"Other than that, I also have knowledge of various concepts like graphic designing 🖼️ and video editing 📹.",
		"I aspire to become a professional game developer 🎮 in near future, and lead the market and industry with my professionalism.",
		"This website shows my skills, my works, my achievements 🏆, my experience, and many more things about me.",
		"Explore this website to know more about me 😁.",
	];

	const Education = [
		{
			id: "bca",
			title: "Bachelor of Computer Applications",
			duration: "Dec 2021 - June 2024",
			institute: "JIMS, Sector-5, Rohini",
			location: "New Delhi",
			affiliation: "GGSIPU",
		},
		{
			id: "intermediate",
			title: "Intermediate",
			duration: "2020 - 2021",
			institute: "Hansraj Smarak Sr. Sec. School",
			location: "New Delhi",
			affiliation: "CBSE",
		},
		{
			id: "matriculation",
			title: "Matriculation",
			duration: "2018 - 2019",
			institute: "Everest Public School",
			location: "Ghaziabad",
			affiliation: "CBSE",
		},
	];
	return (
		<>
			<div className="flex flex-col lg:flex-row justify-around mb-10 sm:mb-16 md:mb-0 md:ml-60 px-4 pt-4">
				<div className="col-1">
					<Intro />
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">WELCOME 👋</h1>
						<ul className="iceberg h-fit flex flex-col text-justify mt-2 ml-6 mr-2">
							{Welcome.map((elem, index) => {
								return (
									<li key={index} className="before:absolute before:content-['>'] before:-translate-x-6 pt-2">
										{elem}
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<div className="col-2">
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">EDUCATION</h1>
						<div className="h-fit flex flex-col text-justify">
							{Education.map((edu) => {
								return (
									<div key={edu.id} className="subContainer">
										<div className="w-fit">
											<h2 className="langar text-amber-400 text-md">{edu.title.toUpperCase()}</h2>
											<hr className="border border-amber-400" />
										</div>
										<div className="iceberg mt-2">
											<div>{edu.duration}</div>
											<div>{edu.institute}</div>
											<div>{edu.location}</div>
											<div>{edu.affiliation}</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
