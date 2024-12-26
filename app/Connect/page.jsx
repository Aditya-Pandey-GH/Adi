"use client";
import React, { useState } from "react";
import Intro from "../Intro";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";

const Connect = () => {
	const [openModalId, setOpenModalId] = useState(null);
	const SocialMedia = [
		{
			_id: {
				$oid: "66d0ccb95dfe6b308267c945",
			},
			id: "github",
			name: "GitHub",
			userName: "AdiPGHub",
			qr: "/svgs/GitHub.svg",
			link: "https://github.com/AdiPGHub",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
			msg: "Check out the projects made by me on my GitHub profile.",
		},
		{
			_id: {
				$oid: "66d0ccb95dfe6b308267c946",
			},
			id: "linkedin",
			name: "LinkedIn",
			userName: "AdiPIn",
			qr: "/svgs/LinkedIn.svg",
			link: "https://www.linkedin.com/in/AdiPIn",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
			msg: "Check out my achievements on my LinkedIn account.",
		},
		{
			_id: {
				$oid: "66d0ccb95dfe6b308267c947",
			},
			id: "yt",
			name: "YouTube",
			userName: "GameZonedYT",
			qr: "/svgs/YT.svg",
			link: "https://www.youtube.com/@GameZonedYT?sub_confirmation=1",
			logo: "https://cdn.jsdelivr.net/gh/rdimascio/icons/icons/youtube.svg",
			msg: "Check out my videos and thumbnails on my YouTube channel.",
		},
		{
			_id: {
				$oid: "66d0ccb96dfe6b308267c947",
			},
			id: "insta",
			name: "Instagram",
			userName: "AdiP.Ig",
			qr: "/svgs/Insta.svg",
			link: "https://www.instagram.com/adip.ig",
			// logo: "https://cdn.jsdelivr.net/gh/rdimascio/icons/icons/instagram.svg",
			logo: "https://static.cdnlogo.com/logos/i/92/instagram.svg",
			msg: "Check out my posts and activities on my Instagram account.",
		},
	];

	const [formData, setFormData] = useState({
		email: "",
		client: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.email || !formData.client || !formData.message) return alert("Please fill all the fields");
		if (
			// confirm(
			// 	"Confirm the information to continue:\n" +
			// 		"\nEmail ID: " +
			// 		formData.email +
			// 		"\nName: " +
			// 		formData.client +
			// 		"\nMessage:\n" +
			// 		formData.message
			// )
			confirm("Press OK to confirm")
		) {
			const res = await (await fetch(`/api/sendMail`, { method: "POST", body: JSON.stringify(formData) })).json();
			if (res.success) {
				alert("Email sent successfully");
			} else {
				alert("Email sending failed. Please try again.");
			}
		}
	};

	return (
		<>
			<div className="flex flex-col lg:flex-row justify-around mb-10 sm:mb-16 md:mb-0 md:ml-60 px-4 pt-4">
				<div className="col-1">
					<Intro />
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">CONTACT ME</h1>
						<div className="iceberg h-fit flex flex-col text-justify mt-4">
							<form onSubmit={handleSubmit} className="text-white flex flex-col space-y-4">
								<div className="bg-[#313a4b] flex flex-row p-2 rounded-lg">
									<div className="ml-2">
										<Image src={"/svgs/Name.svg"} width={30} height={30} alt="" />
									</div>
									<input
										id="client"
										name="client"
										type="text"
										placeholder="Name"
										autoComplete="off"
										value={formData.client}
										onChange={handleChange}
										className="bg-transparent w-full mx-2 px-2 focus:outline-none"
									/>
								</div>
								<div className="bg-[#313a4b] flex flex-row p-2 rounded-lg">
									<div className="ml-2">
										<Image src={"/svgs/Email.svg"} width={30} height={30} alt="" />
									</div>
									<input
										id="email"
										name="email"
										type="email"
										placeholder="Email ID"
										autoComplete="off"
										value={formData.email}
										onChange={handleChange}
										className="bg-transparent w-full mx-2 px-2 focus:outline-none"
									/>
								</div>
								<div className="bg-[#313a4b] flex flex-row p-2 rounded-lg">
									<div className="ml-2">
										<Image src={"/svgs/Message.svg"} width={30} height={30} alt="" />
									</div>
									<textarea
										id="message"
										name="message"
										type="text"
										placeholder="Message"
										autoComplete="off"
										value={formData.message}
										onChange={handleChange}
										className="bg-transparent w-full min-h-40 mx-2 px-2 focus:outline-none resize-y"
									/>
								</div>

								<button
									id="sendMailToAdi"
									className="langar text-lg cursor-pointer bg-amber-400 text-black w-fit m-auto px-10 py-4 rounded-lg hover:opacity-80"
								>
									SUBMIT
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className="col-2">
					<div className="mainContainer">
						<h1 className="langar text-amber-400 text-lg lg:text-xl">CONNECT WITH ME</h1>
						{/* <div className="text-center mt-2 flex flex-wrap space-x-4 justify-center"> */}
						<div className="text-center">
							{SocialMedia.map((social) => {
								return (
									<div
										key={social.id}
										className="subContainer flex flex-col sm:flex-row justify-center sm:justify-normal items-center"
									>
										<div className="relative w-full sm:w-fit flex justify-center sm:justify-normal">
											<div className="absolute top-0 right-0 iceberg sm:invisible">
												<button
													title={`Show ${social.name} QR Code`}
													onClick={() => setOpenModalId(social.id)}
													className="text-green-500 hover:underline"
												>
													QR
												</button>
											</div>
											<Link href={social.link} target="_blank">
												<Image src={social.logo} width={90} height={90} alt="" className="bg-white p-1.5 rounded-xl" />
											</Link>
										</div>

										<div className="w-full iceberg text-justify sm:ml-4">
											<div className="flex flex-row items-center float-end invisible sm:visible">
												<button
													title={`Show ${social.name} QR Code`}
													onClick={() => setOpenModalId(social.id)}
													className="text-green-500 hover:underline"
												>
													QR
												</button>
											</div>
											<div className="w-fit m-auto mt-2 sm:m-0">
												<h2 className="text-amber-400 flex flex-row space-x-2">
													<Link href={social.link} target="_blank">
														{social.name}
													</Link>
												</h2>
												<hr className="border border-amber-400" />
											</div>

											<div className="mt-2">
												<div className="flex flex-row items-center">
													<span className="font-serif text-yellow-300">@</span>
													<Link
														href={social.link}
														target="_blank"
														className="text-yellow-300 hover:text-amber-500 duration-300 ease-in-out"
													>
														{social.userName}
													</Link>
												</div>
												<div className="flex flex-row items-center">{social.msg}</div>
											</div>
										</div>
										<Modal
											isOpen={openModalId === social.id} // Check if this modal should be open
											onClose={() => setOpenModalId(null)} // Close modal
											qrCode={social.qr}
											name={social.name}
										/>
									</div>
									// <div key={social.id} className="m-2">
									// 	<Link href={social.link} target="_blank">
									// 		<Image
									// 			src={social.logo}
									// 			width={5}
									// 			height={5}
									// 			alt=""
									// 			loading="lazy"
									// 			className="bg-white rounded-lg w-40"
									// 		/>
									// 	</Link>
									// 	<span className="iceberg text-amber-400">{social.name}</span>
									// </div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Connect;
