function Project() {
	return (
		<section className="bg-slate-400  p-8 mt-4 shadow-sm rounded-xl">
			<h1 className="font-bold text-4xl">Project:</h1>

			<div className=" gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center min-h-screen container mx-auto">
				<div class="card">
					<div className="p-5 flex flex-col">
						<div className="rounded-xl overflow-hidden">
							<img className="w-96 h-80" src="./movies.jpg" alt="movies" />
						</div>
						<h5 className="text-2xl md:text-3xl font-medium mt-3">Movie App</h5>
						<p className="text-slate-700 text-lg mt-3">
							O aplicativo de filmes permite aos usuários navegar e pesquisar
							filmes com uma interface intuitiva. O front-end é construído com
							HTML, CSS e JavaScript e React, e usa uma API RESTful. O back-end,
							feito com Node.js e Express.js, utiliza MongoDB para armazenar
							dados de filmes.
						</p>
						<a
							href="http://filmeapp.netlify.app/"
							target="blank"
							className="text-center bg-slate-600 text-white py-2 rounded-xl font-semibold mt-4 hover:bg-slate-900 focus:scale-95 transition-all duration-200 ease-out"
						>
							Site
						</a>
					</div>
				</div>

				<div class="card">
					<div className="p-5 flex flex-col">
						<div className="rounded-xl overflow-hidden">
							<img
								className="w-96 h-80"
								src="./Imobiliaria.jpg"
								alt="Imobiliaria"
							/>
						</div>
						<h5 className="text-2xl md:text-3xl font-medium mt-3">
							Imobiliária Santos
						</h5>
						<p className="text-slate-700 text-lg mt-3">
							Este projeto consiste no desenvolvimento de um site para uma
							imobiliária, utilizando HTML e CSS. O objetivo principal é exibir
							imóveis disponíveis para venda, oferecendo uma interface clara e
							intuitiva. A responsividade do design garante uma experiência de
							em diferentes dispositivos.
						</p>
						<a
							href="http://filmeapp.netlify.app/"
							target="blank"
							className="text-center bg-slate-600 text-white py-2 rounded-xl font-semibold mt-4 hover:bg-slate-900 focus:scale-95 transition-all duration-200 ease-out"
						>
							Site
						</a>
					</div>
				</div>

				<div class="card">
					<div className="p-5 flex flex-col">
						<div className="rounded-xl overflow-hidden">
							<img
								className="w-96 h-80"
								src="./Microsoft.jpg"
								alt="Microsoft"
							/>
						</div>
						<h5 className="text-2xl md:text-3xl font-medium mt-3">Microsoft</h5>
						<p className="text-slate-700 text-lg mt-3">
							Este projeto envolve o desenvolvimento de um site para a
							Microsoft, utilizando HTML, CSS. O objetivo é criar uma plataforma
							intuitiva e responsiva, O site incluirá seções para produtos,
							serviços, suporte ao cliente e recursos corporativos, garantindo
							fácil navegação.
						</p>
						<a
							href="https://projeto-microsoft.vercel.app/"
							target="blank"
							className="text-center bg-slate-600 text-white py-2 rounded-xl font-semibold mt-4 hover:bg-slate-900 focus:scale-95 transition-all duration-200 ease-out"
						>
							Site
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Project;
