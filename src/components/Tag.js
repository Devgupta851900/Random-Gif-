import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

const Tag = () => {
	const [tag, setTag] = useState("cute cats");

	const { gif, loading, getGif } = useGif(tag);

	return (
		<div className=" w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4 ">
			<h1 className=" text-2xl underline uppercase font-bold mt-4 ">
				RANDOM {tag} GIF
			</h1>
			{loading ? (
				<Spinner />
			) : (
				<img alt="random GIF" src={gif} width={450} />
			)}

			<form
				className="w-full flex flex-col items-center mx-auto "
				
			></form>

			<input
				type="text"
				onChange={(event) => {
					setTag(event.target.value);
				}}
				className=" w-10/12 text-lg py-2 rounded-lg mb-1 text-center uppercase font-semibold "
				value={tag}
			/>

			<button className=" w-10/12 bg-amber-50 text-lg py-2 rounded-lg mb-6 " onClick={() => {
					getGif(tag);
				}}>
				Generate
			</button>
		</div>
	);
};

export default Tag;
