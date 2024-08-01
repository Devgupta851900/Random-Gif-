import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
	const [gif, setGif] = useState("");
	const [loading, setLoading] = useState(true);

	async function getGif(tag) {
		const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

		try {
			// Enable loading icon
			setLoading(true);

			// fetch gif data
			const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

			// getting the url and setting it in "gif" variable
			const imageSource = data.data.images.downsized_large.url;

			// disable loading icon
			setGif(imageSource);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		getGif();
	}, []);

	return { gif, loading, getGif };
};

export default useGif;
