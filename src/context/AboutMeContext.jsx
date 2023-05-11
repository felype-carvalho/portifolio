import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { stacksHeading as stacksPageHeading } from '../data/stacksData';
import { stacksData as stacksDataJson } from '../data/stacksData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const stacksHeading = stacksPageHeading;

	// const [clientsData, setClientsData] = useState(clientsDataJson);
	const [stacksData, setStacksData] = useState(stacksDataJson);


	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				stacksHeading,
				stacksData,
				setStacksData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
