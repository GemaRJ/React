import { useState } from "react";

export default function Tweet() {

const [tweet, setTweet] = useState("");
const [tweets, setTweets] = useState<string[]>([]);

const enviarTweet = () => {

if (tweet.trim() === "") {

alert("No se puede enviar un tweet vacío");
return;

}

setTweets([
...tweets,
tweet
]);

setTweet("");

};

return (
<div className="container mt-4" style={{ maxWidth: "600px" }}>

<h1 className="text-center mb-4">
Tweeter React
</h1>

<textarea
className="form-control mb-2"
rows={3}
maxLength={255}
placeholder="¿Qué está pasando?"
value={tweet}
onChange={(e) => setTweet(e.target.value)}
/>

<div className="text-end">

<span className="badge bg-secondary">
{tweet.length}/255
</span>

</div>

<button
className="btn btn-primary w-100 mt-3"
onClick={enviarTweet}
>
Enviar Tweet
</button>

<hr />

{tweets.map((item, index) => (

<div className="card mb-3" key={index}>

<div className="card-body">
{item}
</div>

</div>

))}

</div>
);

}