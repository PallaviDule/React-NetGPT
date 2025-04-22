import { useDispatch} from "react-redux";
import { TMDB_API_OPTIONS } from "../constants/tmdb";
import { addNowPlayingTrailerVideo } from "../redux/movieSlice";
import { useEffect } from "react";

const useCurrentMovieTrailer = (id) => {
    const dispatch = useDispatch();

    const getMovieTrailer = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, TMDB_API_OPTIONS);
        const json = await data.json();

        // console.log('trailer:', json);
        // console.log('trailer:', json.results.filter(v => v.type === "Trailer"));

        const filterTrailerVideos = json.results.filter(v => v.type === "Trailer");
        const trailer = filterTrailerVideos ? filterTrailerVideos[0] : json.results[0];
        dispatch(addNowPlayingTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieTrailer();
    }, []);
};

export default useCurrentMovieTrailer;