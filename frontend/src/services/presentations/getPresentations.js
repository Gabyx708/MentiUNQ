const APIURL = "http://localhost:8080/presentations/";

export default function getPresentationById({keyword}) {
  return fetch(APIURL+keyword)
  .then(res=>res.json())
  .then(response=> response)
}
