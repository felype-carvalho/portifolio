const AboutStackSingle = ({ title, image , docs}) => {
	return (
		<>
			<a
				href={docs}
				target="__blank"
			>
				<img
					src={image}
					className="w-64 py-5 px-10 dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
					alt={title}
					title={title}
				/>
			</a>
		</>
	);
};

export default AboutStackSingle;
