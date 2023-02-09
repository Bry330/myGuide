const Home = () => {

    const Handler = () => {
        console.log("Hola");
    }

    const HandlerAgain = (name) => {
        console.log("hello " + name)
    }

    return (
        <div className="home" >
            <button onClick={Handler}>Click me</button>
            <button onClick={() => { HandlerAgain("Luigi") }}>Click me Again</button>
        </div >
    );
}

export default Home;