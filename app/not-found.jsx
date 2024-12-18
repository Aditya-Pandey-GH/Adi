import Link from "next/link";

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-950">
			<div className="w-full max-w-md">
				<div className="mb-4">
					<div className="text-2xl font-bold text-center">
						Error 404
					</div>
					<div className="text-2xl font-bold text-center">
						Page Not Found
					</div>
				</div>
				<div>
					<div className="text-center">
						<p>Oops! The page you're looking for doesn't exist.</p>
						<p className="mb-6 text-sm">
							It might have been removed, or you may have entered
							the wrong URL.
						</p>
						<Link href="/" passHref>
							<button variant="primary">Go back to Home</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
