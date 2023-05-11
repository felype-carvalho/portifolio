const AboutStackSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-5 px-10 dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutStackSingle;
