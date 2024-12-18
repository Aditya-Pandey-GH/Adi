import Image from "next/image";

const Modal = ({ isOpen, onClose, qrCode, name }) => {
	if (!isOpen) return null;

	return (
		<div className="iceberg fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
			<div className="flex flex-col w-fit bg-blue-700 p-1.5 rounded-md">
				<div className="w-full h-fit flex flex-row-reverse justify-center items-center mb-1">
					<button onClick={onClose} className="float-right text-white-500 bg-red-500 px-2 rounded-sm text-xl" aria-label="Close Modal">
						✖
					</button>
					<h2 className="w-full h-fit text-left">{name}</h2>
				</div>
				<div>
					<Image src={qrCode} width={200} height={200} alt={`${name} QR Code`} loading="lazy" className="bg-white rounded-md" />
				</div>
			</div>
		</div>

		// <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
		// 	<div className="bg-gray-800 rounded-lg p-4 relative">
		// 		<button onClick={onClose} className="absolute top-2 right-2 text-red-500 text-xl" aria-label="Close Modal">
		// 			✖
		// 		</button>
		// 		<p className="text-left">{name} QR Code</p>
		// 		<div className="flex flex-col items-center">
		// 			<Image src={qrCode} width={150} height={150} alt={`${name} QR Code`} loading="lazy" className="bg-white rounded-md" />
		// 		</div>
		// 	</div>
		// </div>
	);
};
export default Modal;
