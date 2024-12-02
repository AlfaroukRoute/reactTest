import "./About.scss";

// !!!!
export default function About () {
    return <div>
        <h2 className="bg-danger">About Page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nisi? Sapiente maxime cupiditate dicta nulla!</p>
        <Button />
    </div>
}
export  function Button () {
    return <div>
        <button>Ok</button>
    </div>
}