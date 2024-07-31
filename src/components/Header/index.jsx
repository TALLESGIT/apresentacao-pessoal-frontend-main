function Header() {
	return (
		<section className="bg-gray-400 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
			<img
				className="w-32 h-32 rounded-full mx-auto md:rounded-none md:h-auto "
				src="/fotoperfil.jpg"
				alt="fotoPerfil"
			/>
			<div className="pt-6 text-center space-y-4 md:text-left md:p-8">
				<div className="text-lg font-semibold">
					Olá! Sou um desenvolvedor Front-End apaixonado, com experiência em
					JavaScript, React. Crio interfaces dinâmicas e responsivas e uso
					Tailwind CSS para designs atraentes.
				</div>
				<div className="font-medium text-center mt-4 ">
					<div className="text-slate-700 font-bold">Tales Coelho</div>
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
			</div>
		</section>
	);
}

export default Header;
