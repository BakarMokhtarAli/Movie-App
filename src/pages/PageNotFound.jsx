import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import PageNotFoundImage from "../assets/pageNotFoundImage.jpg"
import { useTitle } from "../hooks/useTitle";
import LoadingGif from "../assets/loading-gif.gif";
export const PageNotFound = () => {

  const { loading } = useFetch();
  useTitle("Page Not Found")
  return (
    <main>
      {loading ? (
        <div className="w-28 mx-auto my-10">
          <img src={LoadingGif} alt="loading State..." />
        </div>
      ) :(
        <>
        <div className='flex flex-col max-w-5xl m-auto justify-around'>
            <h2 className="text-2xl text-left font-bold dark:text-white my-5
            ">OOps Page Not Found</h2>
        </div>
        <div>
            <img className="rounded" src={PageNotFoundImage} alt="page Not Found" />
        </div>
        <Link to={"/"}>
        <button className="py-2 px-5 rounded-lg text-xl bg-blue-600 text-white my-5 mx-auto">
            Back to Home
        </button>
        </Link>
        </>
      )
      }
    </main>
  )
}
