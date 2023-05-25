import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutStackSingle from './AboutStackSingle';

const AboutClients = () => {
	const { stacksData, stacksHeading } = useContext(AboutMeContext);

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{stacksHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-8 mt-10 sm:mt-14 gap-2">
				{stacksData.map((stack) => (
					<AboutStackSingle
						title={stack.title}
						image={stack.img}
						key={stack.id}
						docs={stack.docs}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
