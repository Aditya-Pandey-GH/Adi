import React from "react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "./Typewriter";

const Intro = () => {
	const introData = {
		name: "Aditya Pandey",
		dob: "September 16, 2003",
		pfp: "https://i.postimg.cc/4ysN00wx/pfp.jpg",
		profs: [" Web Developer.", " Game Developer.", " Graphic Designer.", " Video Editor."],
		resume: "/pdfs/Aditya Pandey Resume.pdf",
	};
	return (
		<>
			<div className="mainContainer flex flex-col items-center">
				<Image src={introData.pfp} width={400} height={400} alt="Picture of the author" className="w-32 rounded-xl mb-4" />
				<div className="khand text-2xl">{introData.name.toUpperCase()}</div>
				<div className="iceberg text-md mb-2">{introData.dob}</div>
				<div className="iceberg text-xl">
					I am a
					<Typewriter profsArr={introData.profs} typingSpeed={40} deletingSpeed={40} />
				</div>
				<Link
					href={introData.resume}
					target="_blank"
					className="hover:bg-gray-700 ease-in-out transition-colors duration-300 flex flex-row items-center justify-center cursor-pointer mt-2 py-2 px-4 rounded-xl"
				>
					<div className="flex w-fit space-x-2">
						<Image src="/svgs/Download.svg" width={25} height={25} alt="" className="w-4" />
						<span className="iceberg text-lg text-green-500">Download Resume</span>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Intro;
