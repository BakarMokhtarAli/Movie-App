import { useEffect, useState } from "react"

export const useFetch = (apiPath, queryTerm="") => {
    const [loading, setLoading] = useState(false);
    const [ movies, setMovies ] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=21bd90924fe6da89c75ce2f28b1eaca5&query=${queryTerm}`

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            const requst = await fetch(url)
            const response = await requst.json();
            setLoading(false)
            setMovies(response.results)
        };
        fetchData();
    },[apiPath, queryTerm])

  return { movies, loading }
}
