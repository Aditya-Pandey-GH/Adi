"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const YouTubeLoader = ({ videoId }) => {
	const [videoTitle, setVideoTitle] = useState("Loading...");
	const [clicked, setClicked] = useState(false);

	// Fetch video title
	const fetchVideoTitle = async () => {
		try {
			const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
			const data = await response.json();

			if (data.title) {
				setVideoTitle(data.title.split("|")[0]);
			} else {
				setVideoTitle("Title not available");
			}
		} catch (error) {
			console.error("Error fetching video metadata:", error);
			setVideoTitle("Error fetching title");
		}
	};

	useEffect(() => {
		fetchVideoTitle();
	}, [videoId]);

	const handleClick = () => {
		setClicked(!clicked); // Toggle the clicked state
	};

	return (
		<div className="relative flex flex-col items-center aspect-w-16 aspect-h-9 mt-4">
			<div onClick={handleClick} className="relative group w-fit sm:w-3/4 md:w-2/3 max-w-full">
				<Image src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} width={1280} height={720} alt={videoTitle} className="bg-white p-2 rounded-2xl cursor-pointer" />
				<div
					className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-2xl space-y-2 cursor-pointer transition-opacity duration-200 ease-in-out ${
						clicked ? "opacity-100" : "opacity-0"
					}`}
				>
					<Link
						href={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
						target="_blank"
						rel="noopener noreferrer"
						// style={{ pointerEvents: clicked ? "auto" : "none" }} // Disable interaction when not clicked
						className={`iceberg text-white bg-blue-500 flex flex-row px-4 py-2 rounded-lg hover:bg-gray-600 duration-200 ${clicked ? "pointer-events-auto" : "pointer-events-none"}`}
					>
						<Image src={"/svgs/Image.svg"} width={15} height={15} alt="" className="w-4 mr-2" />
						View Image
					</Link>
					<Link
						href={`https://www.youtube.com/watch?v=${videoId}`}
						target="_blank"
						rel="noopener noreferrer"
						// style={{ pointerEvents: clicked ? "auto" : "none" }} // Disable interaction when not clicked
						className={`iceberg text-white bg-red-600 flex flex-row px-4 py-2 rounded-lg hover:bg-gray-600 duration-200 ${clicked ? "pointer-events-auto" : "pointer-events-none"}`}
					>
						<Image src={"/svgs/Play.svg"} width={15} height={15} alt="" className="w-4 mr-2" />
						Watch Video
					</Link>
				</div>
			</div>

			{/* Video Title */}
			<span className="iceberg mt-2 md:text-lg">{videoTitle}</span>
		</div>
	);
};

export default YouTubeLoader;
