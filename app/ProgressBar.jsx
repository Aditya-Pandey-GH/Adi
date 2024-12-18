"use client";
import { useState, useEffect } from "react";

const Color = (skill) => {
	if (skill >= 75) {
		return "#279e1c";
	} else if (skill >= 50) {
		return "#bf7432";
	} else {
		return "#bf3232";
	}
};

const ProgressBar = ({ skill }) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setWidth(skill);
		}, 100); // Delay similar to `transition={{ delay: 0.1 }}`

		return () => clearTimeout(timer);
	}, [skill]);

	return (
		<div
			className="skillProgress absolute h-full text-white flex items-center justify-center transition-all duration-500 ease-out"
			style={{
				width: `${width}%`,
				backgroundColor: Color(skill),
			}}
		>
			{skill + "%"}
		</div>
	);
};

export default ProgressBar;
