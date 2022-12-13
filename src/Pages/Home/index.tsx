import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { updateShowList } from "../../Reducers/shows/showsSlice"
import { setShowType } from "../../Reducers/tabs/tabsSlice"
import { fetchSearchShow, fetchShowByType } from "../../utils"
import SHOW_TYPE from "../../enums/showType"
import "./style.css"
import MoviesList from "../../Components/MoviesList"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const dispatch = useDispatch()
  const selectedShowType = useSelector(
    (state: RootState) => state.showType.status
  )
  const defaultViewMovies = useSelector(
    (state: RootState) => state.showList.movies
  )
  const defaultViewTvShows = useSelector(
    (state: RootState) => state.showList.tv
  )

  useEffect(() => {
    fetchShowByType(SHOW_TYPE.MOVIE, { dispatch, updateShowList })
    fetchShowByType(SHOW_TYPE.TV, { dispatch, updateShowList })
  }, [])

  useEffect(() => {
    if (searchTerm.length > 3) {
      const delayDebounceFn = setTimeout(() => {
        fetchSearchShow(selectedShowType, searchTerm, setSearchResults)
      }, 1000)

      return () => clearTimeout(delayDebounceFn)
    } else {
      setSearchResults([])
    }
  }, [searchTerm])

  let search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className='container'>
      <div className='tabs'>
        <button
          className={selectedShowType === SHOW_TYPE.MOVIE ? "selected" : ""}
          type='button'
          onClick={() => {
            dispatch(setShowType(SHOW_TYPE.MOVIE))
            fetchSearchShow(SHOW_TYPE.MOVIE, searchTerm, setSearchResults)
          }}
        >
          Movies
        </button>
        <button
          className={selectedShowType === SHOW_TYPE.TV ? "selected" : ""}
          type='button'
          onClick={() => {
            dispatch(setShowType(SHOW_TYPE.TV))
            fetchSearchShow(SHOW_TYPE.TV, searchTerm, setSearchResults)
          }}
        >
          TV Shows
        </button>
      </div>

      <input
        type='text'
        id='search'
        placeholder='Search...'
        onChange={search}
      />
      <div className='movie-list'>
        {searchResults.length > 0 ? (
          <MoviesList shows={searchResults} type={selectedShowType} />
        ) : (
          <MoviesList
            shows={
              selectedShowType === SHOW_TYPE.MOVIE
                ? defaultViewMovies
                : defaultViewTvShows
            }
            type={selectedShowType}
          />
        )}
      </div>
    </div>
  )
}

export default Home
