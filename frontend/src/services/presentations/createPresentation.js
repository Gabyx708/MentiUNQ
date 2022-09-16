const APIURL = "http://localhost:8080";
export default function createPresentation({titlePresentation}) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title:  titlePresentation})
    };
  return fetch(APIURL+"/presentations/create",requestOptions)
  .then(res=>res.json())
  .then(response=> response)
}
