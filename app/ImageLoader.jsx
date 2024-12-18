"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageLoader = ({ image, title }) => {
	return (
		<div className="flex flex-col sm:flex-row justify-center items-center">
			<div className="relative flex flex-col items-center aspect-w-16 aspect-h-9 mt-4">
				<div className="relative group w-fit sm:w-2/3 md:w-1/2">
					<Image src={image} width={720} height={1280} alt={title} className="bg-white w-full p-2 rounded-2xl cursor-pointer" />
				</div>
				<span className="iceberg mt-2 md:text-lg">{title}</span>
			</div>
		</div>
	);
};

export default ImageLoader;
