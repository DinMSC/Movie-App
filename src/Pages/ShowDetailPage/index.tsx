import { FunctionComponent, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { RootState } from "../../app/store"
import { config } from "../../config"
import "./style.css"
type ShowDetailPageProps = {}

const ShowDetailPage: FunctionComponent<ShowDetailPageProps> = () => {
  let { id } = useParams()

  const [show, setShow] = useState({
    original_title: "",
    overview: "",
    poster_path: "",
    video: "",
  })

  const selectedShowType = useSelector(
    (state: RootState) => state.showType.status
  )

  useEffect(() => {
    fetch(`${config.apiUrl}${selectedShowType}/${id}?api_key=${config.apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (Number(id) === 121) {
          data.video = "https://www.youtube.com/watch?v=v7v1hIkYH24"
        }
        setShow(data)
        console.log(data)
      })
  }, [id])

  return (
    <div className='container show-detail-page'>
      <NavLink to={"/"}>
        <span className='go-back'>Back</span>
      </NavLink>

      {Object.keys(show).length > 0 ? (
        <>
          {<h2 className='movie-title'>{show.original_title}</h2>}
          <div className='content'>
            {show?.video ? (
              <video width='320' height='240' controls>
                <source
                  src='https://www.youtube.com/watch?v=v7v1hIkYH24'
                  type='video/mp4'
                />
                <source
                  src='https://www.youtube.com/watch?v=v7v1hIkYH24'
                  type='video/ogg'
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                className='mdp-cover'
                src={`${config.apiImageUrl}${show.poster_path}`}
                alt={show.original_title}
              />
            )}
            <p className='movie-description'>{show.overview}</p>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  )
}

export default ShowDetailPage
