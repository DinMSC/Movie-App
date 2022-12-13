import { config } from "./config"
import { FetchShowActionsInterface } from "./interface/fetchShowActions"

export const fetchShowByType = (
  type: string,
  actions: FetchShowActionsInterface
) => {
  fetch(`${config.apiUrl}${type}/top_rated?api_key=${config.apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      actions.dispatch(
        actions.updateShowList({ type, shows: data.results.slice(0, 10) })
      )
    })
}

export const fetchSearchShow = (
  type: string,
  searchTerm: string,
  updateSearchList: Function
) => {
  if (searchTerm.length > 3) {
    fetch(
      `${config.apiUrl}search/${type}?api_key=${config.apiKey}&query=${searchTerm}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        updateSearchList(data.results.slice(0, 10))
      })
  }
}
