import { FunctionComponent } from "react"
import { ShowInterface } from "../../interface/movie"
import SingleShowItem from "../SingleShowItem"

type ShowListType = {
  shows: ShowInterface[]
  type: string
}

const ShowsList: FunctionComponent<ShowListType> = ({ shows, type }) => {
  return (
    <>
      {shows.map((show: ShowInterface) => {
        return (
          show.id && <SingleShowItem type={type} data={show} key={show.id} />
        )
      })}
    </>
  )
}

export default ShowsList
