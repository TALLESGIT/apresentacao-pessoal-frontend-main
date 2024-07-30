function Habilities() {
	return (
		<section className=" bg-gray-400 m-8 p-8 shadow-sm rounded-xl ">
			<div>
				<h2 className="font-bold text-4xl">Habilidades:</h2>
			</div>
			<ul className="flex flex-wrap gap-10 mt-6 justify-center text-center">
				<li>
					<img src="./html.svg" alt="html" />
					<p className="mt-5">HTML</p>
				</li>
				<li>
					<img src="./css.svg" alt="CSS" />
					<p className="mt-5">CSS</p>
				</li>
				<li>
					<img src="./js.svg" alt="JavaScript" />
					<p className="mt-5">JavaScript</p>
				</li>
				<li>
					<img className="mt-2" src="react.svg" alt="React" />
					<p className="mt-5">React</p>
				</li>
				<li>
					<img className="h-30" src="node.svg" alt="Node" />
					<p className="mt-1">Node</p>
				</li>
				<li>
					<img className="w-40 h-40 " src="tailwind.svg" alt="Tailwind" />
					<p className="mt-3">Tailwind CSS</p>
				</li>
				<li>
					<img className="w-40 h-40" src="redux.svg" alt="Redux" />
					<p className="mt-3">Redux</p>
				</li>
			</ul>
		</section>
	);
}

export default Habilities;
