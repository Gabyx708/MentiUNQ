const apiURL = 'http://localhost:8080/presentations/'

export default function getPresentationById({keyword}) {
  return fetch(apiURL+keyword)
  .then(res=>res.json())
  .then(response=> response)
}
