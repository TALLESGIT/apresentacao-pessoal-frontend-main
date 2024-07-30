function About() {
	return (
		<section className="bg-gray-400 m-8 mx-72 mt-10 p-8 shadow-sm rounded-xl">
			<img
				className="w-32 h-32 rounded-full mx-auto"
				src="/fotoperfil.jpg"
				alt="fotoPerfil"
			/>
			<div className="font-medium text-center mt-4 ">
				<div className="text-slate-600 font-bold">Tales Coelho</div>
			</div>
			<div className="pt-6 text-center space-y-4">
				<p className="text-lg font-bold">
					🧑‍💻 Desenvolvedor Fron-end | Apaixonado por Transformar Códigos em
					Experiências Inovadoras. Desde que construí meu primeiro computador,
					aos 16 anos, sabia que a tecnologia era minha vocação. A sensação de
					realização ao resolver problemas complexos e criar soluções inovadoras
					tem me motivado desde então… diligente com experiência em projetos
					freelance e especialização em Javascript, React, Tailwind CSS, Redux e
					Node. Comprometido com a criação de interfaces de usuário intuitivas e
					performáticas. Atualmente aprimorando conhecimentos técnicos através
					do curso superior de Análise e Desenvolvimento de Sistemas, o que
					reforça uma base sólida para solucionar desafios complexos de
					programação e colaborar efetivamente em ambientes de desenvolvimento
					ágil..
				</p>
			</div>
			<div className="flex justify-center mt-4 gap-4">
				<a
					className="w-12 h-12"
					href="http://www.linkedin.com/in/tales-coelhoo"
					target="blank"
				>
					<img
						className="hover:opacity-50"
						src="/linkedin.png"
						alt="linkedin"
					/>
				</a>
				<a
					className="w-12 h-12"
					href="http://www.instagram.com/talescoelho/?utm_source=qr&igsh=ZHJteDYwaGx4cDJh"
					target="blank"
				>
					<img
						className="hover:opacity-50"
						src="/intagran.png"
						alt="intagran"
					/>
				</a>
				<a
					className="w-12 h-12"
					href="http://github.com/TALLESGIT/"
					target="blank"
				>
					<img className="hover:opacity-50" src="/github.png" alt="github" />
				</a>
			</div>
		</section>
	);
}

export default About;
