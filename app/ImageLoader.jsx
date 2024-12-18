"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ImageLoader = ({ image, preview, bgColor = "white" }) => {
	return (
		<Link href={preview} target="_blank" className="relative group w-fit sm:w-2/3 md:w-1/2">
			<Image
				src={image}
				width={1000}
				height={1000}
				alt={"Not Found"}
				loading="lazy"
				layout="responsive"
				style={{ backgroundColor: bgColor }}
				className="w-full p-2 rounded-xl cursor-pointer"
			/>
		</Link>
	);
};

export default ImageLoader;
