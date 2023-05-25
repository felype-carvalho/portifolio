// Import images
import SecretWordImage from '../images/projects/secret-word1.jpg'
import AmazonPageCloneImage from '../images/projects/amazon-page-clone1.jpg'
import FacebookPageCloneImage from '../images/projects/facebook-page-clone1.jpg'
import SpotifyPageCloneImage from '../images/projects/spotify-page-clone1.jpg'
import MiniBlogImage from '../images/projects/miniblog1.jpg'
import SpringAPIImage from '../images/projects/spring-api-crud1.jpg'

export const projectsData = [
	{
		id: 1,
		title: 'Spring API CRUD',
		category: 'Aplicação Web',
		img: SpringAPIImage,
		ProjectHeader: {
			title: 'API Rest em Spring com funcionalidades CRUD',
			publishDate: '12 de Maio de 2023',
			tags: 'API / Backend',
		},
	},
	{
		id: 2,
		title: 'Mini Blog',
		category: 'Aplicação Web',
		img: MiniBlogImage,
		ProjectHeader: {
			title: 'Blog de Postagens em React e Firebase',
			publishDate: '4 de Abril de 2023',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 3,
		title: 'Secret Word',
		category: 'Aplicação Web',
		img: SecretWordImage,
		ProjectHeader: {
			title: 'Jogo de Palavras Desenvolvido em React',
			publishDate: '23 de Fevereiro de 2023',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 4,
		title: 'Clone de Página Amazon',
		category: 'Design UI/UX',
		img: AmazonPageCloneImage,
		ProjectHeader: {
			title: 'Clone da pagina de livros da Amazon usando Tailwind CSS',
			publishDate: '9 de Fevereiro de 2023',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 5,
		title: 'Clone de Página Facebook',
		category: 'Design UI/UX',
		img: FacebookPageCloneImage,
		ProjectHeader: {
			title: 'Clone da login do Facebook usando Tailwind CSS',
			publishDate: '7 de Fevereiro de 2023',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 6,
		title: 'Clone de Página Spotify',
		category: 'Design UI/UX',
		img: SpotifyPageCloneImage,
		ProjectHeader: {
			title: 'Clone da login do Facebook usando Tailwind CSS',
			publishDate: '29 de Janeiro de 2023',
			tags: 'UI / Frontend',
		},
	},
];
