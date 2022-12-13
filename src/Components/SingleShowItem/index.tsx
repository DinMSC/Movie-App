import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"
import { config } from "../../config"
import { ShowInterface } from "../../interface/movie"
import "./style.css"

type SingleShowItemProps = {
  data: ShowInterface
  type: string
}

const SingleShowItem: FunctionComponent<SingleShowItemProps> = ({
  data,
  type,
}) => {
  return (
    <div className='single-show-item'>
      <NavLink to={`/${type}/${data.id}`}>
        <img
          className='cover-image'
          src={`${config.apiImageUrl}${data.poster_path}`}
          alt={data.original_title || data.original_name}
        />
        <h4>{data.original_title || data.original_name}</h4>
      </NavLink>
    </div>
  )
}

export default SingleShowItem
