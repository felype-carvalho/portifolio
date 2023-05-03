function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/felype-carvalho/portifolio"
					target="__blank"
					className="hover:underline hover:text-amber-600 dark:hover:text-amber-300 ml-1 duration-500"
				>
					Portfolio criado com React e Tailwind 
				</a>
				<a
					href="https://github.com/felype-carvalho"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-amber-600 dark:hover:text-amber-300 ml-1 duration-500 text-bold"
				>
					por Felype Carvalho.
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
