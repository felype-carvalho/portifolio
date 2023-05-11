// Import images
import ImageSecretWord1 from '../images/projects/secret-word1.jpg'
import ImageSecretWord2 from '../images/projects/secret-word2.jpg'
import ImageAmazonClone1 from '../images/projects/amazon-page-clone1.jpg'
import ImageFacebookClone1 from '../images/projects/facebook-page-clone1.jpg'
import ImageSpotifyClone1 from '../images/projects/spotify-page-clone1.jpg'


export const singleProjectData = [
	{
		id: 1,
		ProjectHeader: {
			title: 'Secret Word',
			publishDate: '23 de Fevereiro de 2023',
			category: 'Aplicação Web',
			github: 'https://github.com/felype-carvalho/secret-word',
			live: 'https://github.com/felype-carvalho/secret-word',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Menu Principal Secret Word',
				img: ImageSecretWord2,
			},		
			{
				id: 2,
				title: 'Jogo Secret Word',
				img: ImageSecretWord1,
			},		
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Ferramentas e Tecnologias Usadas',
					techs: [
						'ReactJS',
						'HTML',
						'CSS',
						'JavaScript',
					],
				},
			],
			ProjectDetailsHeading: 'Descrição',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Secret Word é um jogo web desenvolvido em React, seu objetivo é adivinhar palavras sugerindo letras. Este aplicativo foi desenvolvido em conjunto com o curso de Matheus Batisti -  React do Zero a Maestria.',
				},
				{
					id: 2,
					details:
						'No jogo é possivel conseguir pontuação ao acertar palavras alterar a linguagem dos menus e palavras entre Inglês e Português. Incluso também 25 palavras e 5 categorias.',
				},
			],
		},

	},
	{
		id: 2,
		ProjectHeader: {
			title: 'Clone de Página Amazon',
			publishDate: '9 de Fevereiro de 2023',
			category: 'Design UI/UX',
			github: 'https://github.com/felype-carvalho/amazon-page-clone',
			live: null,
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Amazon Tela de Livros',
				img: ImageAmazonClone1,
			},
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TailwindCSS',
						'HTML',
						'CSS',
					],
				},
			],
			ProjectDetailsHeading: 'Descrição',
			ProjectDetails: [
				{
					id: 1,
					details:
						'O projeto visa recriar a interface visual da página da Amazon utilizando os recursos do framework CSS Utility First Tailwind na versão 3.0, especificamente a sessão de venda de livros. Esta aplicação foi desenvolvida em conjunto com o curso de Matheus Batisti - Tailwind CSS do básico ao avançado.',
				},
				
			],
		},

	},
	{
		id: 3,
		ProjectHeader: {
			title: 'Clone de Página Facebook',
			publishDate: '7 de Fevereiro de 2023',
			category: 'Design UI/UX',
			github: 'https://github.com/felype-carvalho/facebook-page-clone',
			live: null,
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: ImageFacebookClone1,
			},
			
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TailwindCSS',
						'HTML',
						'CSS',
					],
				},
			],
			ProjectDetailsHeading: 'Descrição',
			ProjectDetails: [
				{
					id: 1,
					details:
						'O projeto visa recriar a interface visual da página de login do Facebook, utilizando os recursos do framework CSS Utility First Tailwind versão 3. Esta aplicação foi desenvolvida em conjunto com o curso de Matheus Batisti - Tailwind CSS do básico ao avançado.',
				},
				
			],
		},

	},
	{
		id: 4,
		ProjectHeader: {
			title: 'Clone de Página Spotify',
			publishDate: '29 de Janeiro de 2023',
			category: 'Design UI/UX',
			github: 'https://github.com/felype-carvalho/spotify-page-clone',
			live: null,
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: ImageSpotifyClone1,
			},
			
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TailwindCSS',
						'HTML',
						'CSS',
					],
				},
			],
			ProjectDetailsHeading: 'Descrição',
			ProjectDetails: [
				{
					id: 1,
					details:
						'O projeto visa recriar a interface visual da página de login do Facebook, utilizando os recursos do framework CSS Utility First Tailwind versão 3. Esta aplicação foi desenvolvida em conjunto com o curso de Matheus Batisti - Tailwind CSS do básico ao avançado.',
				},
				
			],
		},

	},


]



