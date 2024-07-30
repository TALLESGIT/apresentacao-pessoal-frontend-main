function Project() {
	return (
		<section className="bg-gray-400 m-8 p-8 shadow-sm rounded-xl ">
			<h1 className="font-bold text-4xl mb-8">Projects:</h1>
			<div className="flex justify-center">
				<div className="w-60 h-100 p-2">
					<div className="p-2 bg-white rounded-xl">
						<img
							className="object-cover rounded-xl justify-center"
							src="./movie-app.png"
							alt="Movies"
						/>
						<h2 className="font-semibold text-lg mt-3 ">Movie App</h2>
						<p className="text-sm text-gray-600">
							O aplicativo de filmes permite aos usuários navegar e pesquisar
							filmes com uma interface intuitiva. O front-end é construído com
							HTML, CSS e JavaScript e React, e usa uma API RESTful. O back-end,
							feito com Node.js e Express.js, utiliza MongoDB para armazenar
							dados de filmes.
						</p>

						<div className="flex justify-between">
							<a
								className="bg-slate-600 text-white shadow-sm rounded-xl p-2 mt-2"
								href="http://filmeapp.netlify.app/"
								target="blank"
							>
								código
							</a>
							<a
								className="bg-slate-600 text-white shadow-sm rounded-xl p-2 mt-2"
								href="http://filmeapp.netlify.app/"
								target="blank"
							>
								Site
							</a>
						</div>
					</div>
				</div>

				<div className="w-60 h-100 p-2">
					<div className="p-2 bg-white rounded-xl">
						<img
							className="h-60 object-cover rounded-xl justify-center"
							src="./testeJornadaPyton.png"
							alt="Movies"
						/>
						<h2 className="font-semibold text-lg mt-3 ">
							Teste Jornada Python
						</h2>
						<p className="text-sm text-gray-600 mb-2">
							Projeto de teste para uma empresa, usando apenas HTML e CSS puro,
							O projeto demonstra habilidades em design web básico e
							responsividade, A simplicidade do código facilita a manutenção e a
							compreensão do funcionamento da página. sem o uso de frameworks ou
							bibliotecas adicionais.
						</p>

						<div className="flex justify-between">
							<a
								className="bg-slate-600 text-white shadow-sm rounded-xl p-2 mt-2"
								href="http://testehashtagtreinamemtos.netlify.app/"
								target="blank"
							>
								código
							</a>
							<a
								className="bg-slate-600 text-white shadow-sm rounded-xl p-2 mt-2"
								href="http://testehashtagtreinamemtos.netlify.app/"
								target="blank"
							>
								Site
							</a>
						</div>
					</div>
				</div>

				<div className="w-60 h-100 p-2">
					<div className="p-2 bg-white rounded-xl">
						<img
							className="h-60 object-cover rounded-xl justify-center"
							src="./casaImobiliaria.png"
							alt="Casa Imobiliaria"
						/>
						<h2 className="font-semibold text-lg mt-3 ">Imobiliária Santos</h2>
						<p className="text-sm text-gray-600 mt-2">
							Este projeto consiste no desenvolvimento de um site para uma
							imobiliária, utilizando HTML e CSS. O objetivo principal é exibir
							imóveis disponíveis para venda, oferecendo uma interface clara e
							intuitiva. A responsividade do design garante uma experiência de
							usuário agradável em diferentes dispositivos.
						</p>

						<div className="flex justify-between">
							<a
								className="bg-slate-600 text-white shadow-sm rounded-xl p-2 mt-2"
								href="http://github.com/TALLESGIT/projeto-itau"
								target="blank"
							>
								código
							</a>
							<a
								className="bg-slate-600 text-white shadow-sm rounded-xl p-2 mt-2"
								href="http://santos-imobiliaria.netlify.app/"
								target="blank"
							>
								Site
							</a>
						</div>
					</div>
				</div>

				<div className="w-60 h-100 p-2">
					<div className="p-2 bg-white rounded-xl">
						<img
							className="h-60 object-cover rounded-xl justify-center"
							src="./itau.png"
							alt="Movies"
						/>
						<h2 className="font-semibold text-lg mt-3 ">
							Projeto Site Banco Itaú
						</h2>
						<p className="mt-2 text-sm text-gray-600">
							ste projeto envolveu o desenvolvimento da parte visual do site de
							uma imobiliária, focando no front-end. Utilizamos as tecnologias
							HTML e CSS para criar uma interface clara e responsiva.
							proporcionando uma experiência de usuário agradável e intuitiva em
							diferentes dispositivos.
						</p>

						<div className="flex justify-between">
							<a
								className="bg-slate-600 text-white shadow-sm rounded-xl p-2 mt-2"
								href="http://github.com/TALLESGIT/projeto-itau"
								target="blank"
							>
								código
							</a>
							<a
								className="bg-slate-600 text-white shadow-sm rounded-xl p-2 mt-2"
								href="http://projeto-itau-lime.vercel.app/"
								target="blank"
							>
								Site
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Project;
