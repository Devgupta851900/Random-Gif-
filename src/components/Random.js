import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

const Random = () => {
	const { gif, loading, getGif } = useGif();

	function clickHandler(event) {
		getGif();
	}

	return (
		<div className=" w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4 ">
			<h1 className=" text-2xl underline uppercase font-bold mt-4 ">
				A RANDOM GIF
			</h1>
			{loading ? (
				<Spinner />
			) : (
				<img alt="random GIF" src={gif} width={450} />
			)}
			<button
				className=" w-10/12 bg-amber-50 text-lg py-2 rounded-lg mb-6 "
				onClick={clickHandler}
			>
				Generate
			</button>
		</div>
	);
};

export default Random;
