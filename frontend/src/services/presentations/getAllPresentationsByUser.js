const APIURL = "http://localhost:8080/presentations/all/";

export default function getAllPresentationsByUser({userID}) {
  return fetch(APIURL+userID)
  .then(res=>res.json())
  .then(response=> response)
}
