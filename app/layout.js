import "./globals.css";
import NavBar from "./NavBar";
// import Image from "next/image";
import { Iceberg, Khand, Langar } from "next/font/google";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400", variable: "--font-iceberg" });
const khand = Khand({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-khand" });
const langar = Langar({ subsets: ["latin"], weight: "400", variable: "--font-langar" });

export const metadata = {
	title: "Aditya Pandey's Portfolio",
	description: "This is the portfolio website of Aditya Pandey",
	author: "Aditya Pandey",
	nickname: "Adi",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${iceberg.variable} ${khand.variable} ${langar.variable}`}>
			<link rel="icon" href="/logo.svg" type="image/png" sizes="any" />
			<body className="custom-scrollbar bg-[#282c34]">
				<NavBar />
				{children}
				{/* <div className="BodyContents mb-10 sm:mb-16 md:mb-0 md:ml-60"></div> */}
			</body>
		</html>
	);
}
