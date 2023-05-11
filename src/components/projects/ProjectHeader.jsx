import { useContext } from 'react';
import { FiClock, FiGithub, FiGlobe, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{singleProjectData.ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center mr-10">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData.ProjectHeader.category}
					</span>
				</div>
				<div>
					<a href={singleProjectData.ProjectHeader.github} target="_blank" rel="noopener noreferrer" className="flex items-center mr-10">
						<FiGithub className="text-lg text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light underline">
							GitHub
						</span>
					</a>
				</div>
				{singleProjectData.ProjectHeader.live ? (
					<div>
						<a href={singleProjectData.ProjectHeader.live} target="_blank" rel="noopener noreferrer" className="flex items-center ">
							<FiGlobe className="text-lg text-ternary-dark dark:text-ternary-light" />
							<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light underline">
								Acessar
							</span>
						</a>
					</div>
					) : ""}

			</div>
		</div>
	);
};

export default ProjectSingleHeader;
