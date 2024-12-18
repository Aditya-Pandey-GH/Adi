"use client";
import React, { useState } from "react";
import Intro from "../Intro";
import Link from "next/link";
import YouTubeLoader from "../YouTubeLoader";
import ImageLoader from "../ImageLoader";

const Designs = () => {
	const Thumbs = [
		{
			_id: {
				$oid: "66f0199b1fee15c609f635e3",
			},
			id: "silentAge1Ep1",
			videoID: "3oR5ldApMpI",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635e4",
			},
			id: "gettingOverIt1Trackpad",
			videoID: "Pb_Hk2AlZVU",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635e5",
			},
			id: "gettingOverIt2Speedrun",
			videoID: "sgpzSnycztg",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635e6",
			},
			id: "granny1SewerEscape",
			videoID: "JUWIQRL62V0",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635e7",
			},
			id: "silentAge2Ep3",
			videoID: "_BxOQkpalmQ",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635e8",
			},
			id: "plantsVsZombies1Ep3",
			videoID: "2Y0jFLYFcMY",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635e9",
			},
			id: "grandTheftAutoViceCity1TightendEp1",
			videoID: "n26HVo_bazU",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635ea",
			},
			id: "henryStickmin1FullScreenTutorial",
			videoID: "VUyd6ieASus",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635eb",
			},
			id: "grandTheftAutoViceCity2TightendEp2",
			videoID: "R9yA6mmFGkI",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635ec",
			},
			id: "grandTheftAutoViceCity3TightendEp3",
			videoID: "irowRLpyCWU",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635ed",
			},
			id: "grandTheftAutoViceCity4TightendEp6",
			videoID: "maFhCbyzG5c",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635ee",
			},
			id: "aDifficultGameAboutClimbing1Ep1",
			videoID: "TnBjIPoa4R0",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635ef",
			},
			id: "aDifficultGameAboutClimbing2Ep2",
			videoID: "hVHoZ2JJUUA",
		},
		{
			_id: {
				$oid: "66f0199b1fee15c609f635e2",
			},
			id: "redDeadRedemptionI1Ep1",
			videoID: "QTA6ti6IzN0",
		},
	];
	const Newsletters = [
		{
			id: "oct22",
			title: "How 5G will transform India?",
			link: "/pdfs/2022-10.pdf",
			col: "#bc453f",
		},
		{
			id: "mar23",
			title: "The Era of AI Chatbots",
			link: "/pdfs/2023-03.pdf",
			col: "#581864",
		},
		{
			id: "may23",
			title: "Revolutionizing Conversational AI with ChatGPT",
			link: "/pdfs/2023-05.pdf",
			col: "#32c5a3",
		},
		{
			id: "oct23",
			title: "Data, Data Everywhere (Part 1)",
			link: "/pdfs/2023-10.pdf",
			col: "#e0a504",
		},
		{
			id: "nov23",
			title: "Data, Data Everywhere (Part 2)",
			link: "/pdfs/2023-11.pdf",
			col: "#e0a504",
		},
	];
	const Posters = [
		{
			_id: {
				$oid: "66f006da1fee15c609f635da",
			},
			id: "ecoFriendlyDiwaliPosterMakingCompetitionOct2022",
			title: "Eco-Friendly Diwali",
			desc: "This poster was made for a poster-making competition. The theme for that event was Eco-Friendly Diwali. It was conducted on October 28, 2022 by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
			logo: "https://i.postimg.cc/rpT2K9Lv/diwali-Poster.png",
			preview: "https://postimg.cc/sMTNL7xc",
		},
		{
			_id: {
				$oid: "66f006da1fee15c609f635db",
			},
			id: "bcaOrientationSessionDec2022",
			title: "BCA Orientation (2022-25)",
			desc: "This poster was made for the orientation session that was to be held for the students enrolled in BCA program of batch 2022-25 at Jagan Institute of Management Studies, Sector-5, Rohini. It was organized on December 1, 2022.",
			logo: "https://i.postimg.cc/zBds2ZRr/orientation.png",
			preview: "https://postimg.cc/Q9TYVzb4",
		},
		{
			_id: {
				$oid: "66f006da1fee15c609f635dc",
			},
			id: "airNoisePollutionNukkadNatakDec2022",
			title: "Air or Noise Pollution",
			desc: "This poster was made for a Nukkad Natak event which was to be organized to spread awareness about Air and Noise Pollution. It was conducted on December 13, 2022 by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
			logo: "https://i.postimg.cc/NF5WWJ1r/pollution.png",
			preview: "https://postimg.cc/kRP1SyYn",
		},
		{
			_id: {
				$oid: "66f006da1fee15c609f635dd",
			},
			id: "sankalpAuditionsDec2022",
			title: "Sankalp Auditions (2022-25)",
			desc: "This poster was made for Sankalp, the theatre society of  Jagan Institute of Management Studies, Sector-5, Rohini, to cast students from 2022-25 batch into the society. It was scheduled for December 28, 2022.",
			logo: "https://i.postimg.cc/59rcwJV5/sankalp.png",
			preview: "https://postimg.cc/XX9DbTXX",
		},
		{
			_id: {
				$oid: "66f006da1fee15c609f635de",
			},
			id: "codeItTekQbeJun2023",
			title: "Code-It",
			desc: 'This poster was made for a coding-based event named "Code-It". It was conducted on June 14, 2023 by the IT Club (TekQbe) at Jagan Institute of Management Studies, Sector-5, Rohini.',
			logo: "https://i.postimg.cc/x1MSf4Bv/codeIt.png",
			preview: "https://postimg.cc/JsrFKPr0",
		},
		{
			_id: {
				$oid: "66f006da1fee15c609f635df",
			},
			id: "farewellPartyAug2023",
			title: "Farewell Party (2020-23)",
			desc: "This poster was made for the Farewell Party of the students of MCA, BBA, BCA and BA Eco Hons.. It was conducted on August 12, 2023 by the Cultural Club at Jagan Institute of Management Studies, Sector-5, Rohini.",
			logo: "https://i.postimg.cc/TwY8cY10/farewell.png",
			preview: "https://postimg.cc/5HGk4JwQ",
		},
		{
			_id: {
				$oid: "66f006da1fee15c609f635e0",
			},
			id: "codeHuntTekQbeEvent2023",
			title: "Code Hunt",
			desc: "This poster was made for a 3 round coding-based event named Code Hunt. It was conducted in 2023, by the IT Club (TekQbe) of Jagan Institute of Management Studies, Sector-5, Rohini.",
			logo: "https://i.postimg.cc/N0xqTrsL/codeHunt.png",
			preview: "https://postimg.cc/8Fs0gcrV",
		},
		{
			_id: {
				$oid: "66f006da1fee15c609f635e1",
			},
			id: "saiTiffinSep2024",
			title: "Sai Tiffin Service",
			desc: "This poster was made to promote a local tiffin service, called SAI Tiffin Service. This tiffin service was started in September 2024, and aimed at providing the tiffin service to the people of Shalimar Garden, at a lower price than market price.",
			logo: "https://i.postimg.cc/90KvVdpg/sai-Tiffin.png",
			preview: "https://postimg.cc/Mf0smjg1",
		},
	];
	const Designs = [
		{
			_id: {
				$oid: "66f01ffa1fee15c609f635f7",
			},
			id: "certOFAJun2022",
			type: "Certificate",
			desc: "This certificate was made for an initiative named One For All. This initiative involved collection of milk packets without clipping off the small cut-out from it, which is otherwise not easy to be recycled.",
			logo: "https://i.postimg.cc/m2SqcVYq/OFACert.png",
			preview: "https://postimg.cc/fJJ5pcgj",
		},
		{
			_id: {
				$oid: "66f01ffa1fee15c609f635f8",
			},
			id: "certEcoArtJun2022",
			type: "Certificate",
			desc: "This certificate was made for an event named Eco Art, which was done to support One For All initiative. This event started with a stage play to spread awareness about recycling of plastic waste like milk packets, followed with a art competition where students had to make either drawings or hand paintings.",
			logo: "https://i.postimg.cc/Rh58tDbr/eco-Art-Cert.png",
			preview: "https://postimg.cc/wy2080pF",
		},
		{
			_id: {
				$oid: "66f01ffa1fee15c609f635f9",
			},
			id: "certTekQbe2023",
			type: "Certificate",
			desc: "This certificate was made for the events that were organized by TekQbe in 2023, the IT club of Jagan Institute of Management Studies, Sector-5, Rohini. These were later updated, when the college received NAAC A++ ranking.",
			logo: "https://i.postimg.cc/0y247mZN/tekqbe-Cert.png",
			preview: "https://postimg.cc/9rK1hD63",
		},
		{
			_id: {
				$oid: "66f01ffa1fee15c609f635fa",
			},
			id: "certTechJitter2024",
			type: "Certificate",
			desc: "This certificate was made for an inter-college Tech Fest named Tech Jitters 2.0, which was supposed to be organized on May 1, 2024, by TekQbe, the IT Club of Jagan Institute of Management Studies, Sector-5, Rohini, but was later postponed.",
			logo: "https://i.postimg.cc/y8Qbjdry/tj2Cert.png",
			preview: "https://postimg.cc/nXm2cHxX",
		},
		{
			_id: {
				$oid: "66f01ffa1fee15c609f635fb",
			},
			id: "othersBackdropFarewell2023",
			type: "Backdrop",
			desc: "This design was made as a backdrop for the farewell party of the MCA, BBA, BCA, and BA Eco Hons. graduates, who were paasing their respective courses in 2023, from Jagan Institute of Management Studies, Sector-5, Rohini. The event was organized by the Cultural Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
			logo: "https://i.postimg.cc/G3G6RbHb/farewell-BG.png",
			preview: "https://postimg.cc/nMV3Yb4W",
		},
		{
			_id: {
				$oid: "66f01ffa1fee15c609f635fc",
			},
			id: "otherUIUXCodeKshetraWebsite2024",
			type: "UI/UX Component",
			desc: "This design was made for a national-level hackathon named Code Kshetra, held in Februrary 2024 on 5 and 6, organized by Geek Room in association with Jagan Institute of Management Studies, Sector-5, Rohini. This design names one of the theme of the hackathon.",
			logo: "https://i.postimg.cc/kGQHvvk2/ckDesign.png",
			preview: "https://postimg.cc/N20bgmGt",
		},
		{
			_id: {
				$oid: "66f01ffa1fee15c609f635fd",
			},
			id: "awardMementoTechJitters2022",
			type: "Memento",
			desc: "This design was made for the mementos, which were given to the Guest speaker, and were to be given to the student coordinators of an event named Tech Jitters, held on July 18, 2022 and organized by TekQbe, the IT club of Jagan Institute of Management Studies, Sector-5, Rohini.",
			logo: "https://i.postimg.cc/KY1sH26S/tjTrophy.png",
			preview: "https://postimg.cc/kVdc2kMf",
		},
		{
			_id: {
				$oid: "66f01ffa1fee15c609f635fe",
			},
			id: "awardTrophyEcoClub2023",
			type: "Trophy",
			desc: "This design was made as a header for the trophies which were given to students who took part in the Presentation Competition event, organized by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
			logo: "https://i.postimg.cc/Px89Pjyz/eco-Trophy.png",
			preview: "https://postimg.cc/YGMbsTJh",
		},
	];

	// PAGINATION THUMBNAILS STARTS
	const [curThumbPage, setCurThumbPage] = useState(1);
	const ThumbsPerPage = 1;
	const lastThumbIndex = curThumbPage * ThumbsPerPage;
	const firstThumbIndex = lastThumbIndex - ThumbsPerPage;
	const currentThumbs = Object.values(Thumbs.reverse()).slice(firstThumbIndex, lastThumbIndex);
	const totalThumbPages = Math.ceil(Object.values(Thumbs).length / ThumbsPerPage);
	const handleThumbPageChange = (pageNumber) => {
		setCurThumbPage(pageNumber);
	};
	// PAGINATION THUMBNAILS ENDS
	// PAGINATION POSTERS STARTS
	const [curPosterPage, setCurPosterPage] = useState(1);
	const PostersPerPage = 1;
	const lastPosterIndex = curPosterPage * PostersPerPage;
	const firstPosterIndex = lastPosterIndex - PostersPerPage;
	const currentPosters = Object.values(Posters).slice(firstPosterIndex, lastPosterIndex);
	const totalPosterPages = Math.ceil(Object.values(Posters).length / PostersPerPage);
	const handlePosterPageChange = (pageNumber) => {
		setCurPosterPage(pageNumber);
	};
	// PAGINATION POSTERS ENDS
	// PAGINATION DESIGNS STARTS
	const [curDesignPage, setCurDesignPage] = useState(1);
	const DesignsPerPage = 1;
	const lastDesignIndex = curDesignPage * DesignsPerPage;
	const firstDesignIndex = lastDesignIndex - DesignsPerPage;
	const currentDesigns = Object.values(Designs).slice(firstDesignIndex, lastDesignIndex);
	const totalDesignPages = Math.ceil(Object.values(Designs).length / DesignsPerPage);
	const handleDesignPageChange = (pageNumber) => {
		setCurDesignPage(pageNumber);
	};
	// PAGINATION DESIGNS ENDS

	return (
		<>
			<div className="flex flex-col lg:flex-row justify-around mb-10 sm:mb-16 md:mb-0 md:ml-60 px-4 pt-4">
				<div className="col-1">
					<Intro />
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">THUMBNAILS</h1>
						<div className="text-center">
							{currentThumbs.map((thumb) => (
								<div key={thumb._id.$oid} className="flex flex-col sm:flex-row justify-center items-center">
									<YouTubeLoader videoId={thumb.videoID} />
								</div>
							))}
							<div className="pagination">
								{totalThumbPages > 1 ? (
									<>
										<button
											disabled={curThumbPage <= 1}
											onClick={() => handleThumbPageChange(curThumbPage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curThumbPage}/${totalThumbPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curThumbPage >= totalThumbPages}
											onClick={() => handleThumbPageChange(curThumbPage + 1)}
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
						<h1 className="langar text-amber-400 text-lg lg:text-xl">NEWSLETTERS</h1>
						<ol className="iceberg h-fit flex flex-col text-justify mt-2 ml-6 mr-2 list-decimal">
							{Newsletters.map((elem, index) => {
								return (
									<li key={index} className="my-2 hover:text-stone-400 duration-150 ease-out">
										<Link href={elem.link} target="_blank">
											{elem.title}
										</Link>
									</li>
								);
							})}
						</ol>
					</div>
				</div>

				<div className="col-2">
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">POSTERS</h1>
						<div className="text-center">
							{currentPosters.map((poster) => (
								<div key={poster._id.$oid} className="flex flex-col sm:flex-row justify-center items-center">
									<div className="relative flex flex-col items-center aspect-w-16 aspect-h-9 mt-4">
										<ImageLoader image={poster.logo} preview={poster.preview} />
										<span className="iceberg mt-2 md:text-lg">{poster.title}</span>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalPosterPages > 1 ? (
									<>
										<button
											disabled={curPosterPage <= 1}
											onClick={() => handlePosterPageChange(curPosterPage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curPosterPage}/${totalPosterPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curPosterPage >= totalPosterPages}
											onClick={() => handlePosterPageChange(curPosterPage + 1)}
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
						<h1 className="langar text-amber-400 text-lg lg:text-xl">OTHER DESIGNS</h1>
						<div className="text-center">
							{currentDesigns.map((design) => (
								<div key={design._id.$oid} className="flex flex-col sm:flex-row justify-center items-center">
									<div className="relative flex flex-col items-center aspect-w-16 aspect-h-9 mt-4">
										<ImageLoader image={design.logo} preview={design.preview} />
										<span className="iceberg mt-2 md:text-lg">{design.title}</span>
									</div>
								</div>
							))}
							<div className="pagination">
								{totalDesignPages > 1 ? (
									<>
										<button
											disabled={curDesignPage <= 1}
											onClick={() => handleDesignPageChange(curDesignPage - 1)}
											className="paginationButton active"
										>
											{"<"}
										</button>
										<button className="paginationButton">{`Page ${curDesignPage}/${totalDesignPages}`}</button>
										<button
											className="paginationButton active"
											disabled={curDesignPage >= totalDesignPages}
											onClick={() => handleDesignPageChange(curDesignPage + 1)}
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

export default Designs;
