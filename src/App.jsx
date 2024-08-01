import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
	return (
		<div className=" w-screen h-screen flex flex-col items-center background overflow-x-hidden ">
			<h1 className=" bg-white rounded-lg w-11/12 text-4xl font-bold uppercase text-center px-10 py-4 mt-[40px]  ">Random GIFs</h1>
			<div className="w-full flex flex-col items-center gap-y-10 mt-8 ">
				<Random />
				<Tag />
			</div>
		</div>
	);
};

export default App;
