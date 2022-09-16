const APIURL = "http://localhost:8080/types";

export default function getAllTypes() {
  return fetch(APIURL)
  .then(res=>res.json())
  .then(response=> response)
}
