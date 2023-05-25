// Import images
import ImageSecretWord1 from '../images/projects/secret-word1.jpg'
import ImageSecretWord2 from '../images/projects/secret-word2.jpg'
import ImageAmazonClone1 from '../images/projects/amazon-page-clone1.jpg'
import ImageFacebookClone1 from '../images/projects/facebook-page-clone1.jpg'
import ImageSpotifyClone1 from '../images/projects/spotify-page-clone1.jpg'
import ImageMiniBlog1 from '../images/projects/miniblog1.jpg'
import ImageMiniBlog2 from '../images/projects/miniblog2.jpg'
import ImageSpringAPIImage1 from '../images/projects/spring-api-crud1.jpg'
import ImageSpringAPIImage2 from '../images/projects/spring-api-crud2.jpg'


export const singleProjectData = [
	{
		id: 1,
		ProjectHeader: {
			title: 'Spring API CRUD',
			publishDate: '12 de Maio de 2023',
			category: 'Aplicação Web',
			github: 'https://github.com/felype-carvalho/spring-api-crud',
			live: null,
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Menu Principal Secret Word',
				img: ImageSpringAPIImage1,
			},		
			{
				id: 2,
				title: 'Jogo Secret Word',
				img: ImageSpringAPIImage2,
			},		
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Ferramentas e Tecnologias Usadas',
					techs: [
						'Java',
						'Spring',
						'Spring JPA',
						'H2 Database',
						'Swagger',
					],
				},
			],
			ProjectDetailsHeading: 'Descrição',
			ProjectDetails: [
				{
					id: 1,
					details:
						'O projeto é uma API Rest em Spring com funcionalidades CRUD para os objetos Pessoa e Endereço. Onde o relacionamento funciona como se uma pessoa tivesse multiplos endereços.',
				},
				{
					id: 2,
					details:
						'A API realiza validação de duplicidade para e-mail e cpf, utiliza também o H2 Database para persistir os dados em memória. A documentação para teste da API foi gerada utilizando Swagger',
				},
			],
		},

	},
	{
		id: 2,
		ProjectHeader: {
			title: 'Mini Blog',
			publishDate: '4 de Abril de 2023',
			category: 'Aplicação Web',
			github: 'https://github.com/felype-carvalho/miniblog',
			live: 'https://miniblog-felype-carvalho.vercel.app',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Pagina Principal MiniBlog',
				img: ImageMiniBlog1,
			},		
			{
				id: 2,
				title: 'Pagina de Login',
				img: ImageMiniBlog2,
			},		
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Ferramentas e Tecnologias Usadas',
					techs: [
						'ReactJS',
						'Firebase',
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
						'O Mini Blog é um aplicativo feito em React e Firebase, que visa ser um ambiente onde o usuário possa postar sobre seu dia a dia, trabalho, viagens, etc. Este aplicativo foi desenvolvido em conjunto com o curso de Matheus Batisti -  React do Zero a Maestria.',
				},
				{
					id: 2,
					details:
						'Na aplicação é possivel se cadastrar, realizar login e visualizar postagens de outros usuários. Também criar, editar, atualizar e excluir postagens a partir de um dashboard.',
				},
			],
		},

	},
	{
		id: 3,
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
		id: 4,
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
		id: 5,
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
		id: 6,
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



