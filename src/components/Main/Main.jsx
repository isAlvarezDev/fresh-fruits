const Main = () => {
    return <main className="main-grid">
        <div className="main-content">
            <h1 className="main-title">Get <span className="title-highlight">FRESH <br />FRUITS</span> Today</h1>
            <p className="mt-6 main-description">Orange is not just a tasty fruit, its more. Get to</p>
            <p className="main-description">know the multiple health benefits of adding</p>
            <p className="main-description">orange in your daily diet.</p>
            <button className="main-button">Know More</button>
        </div>
        <div className="image-container">
            <img src="/orange.webp" alt="An image of an orange" width='900' height='900' loading="lazy" />
            <span className="letter-base letter-mustard letter-o">O</span>
                <span className="letter-base letter-mustard letter-r">R</span>
                <span className="letter-base letter-transparent letter-a">A</span>
                <span className="letter-base letter-transparent letter-n">N</span>
                <span className="letter-base letter-transparent letter-g">G</span>
                <span className="letter-base letter-mustard letter-e">E</span>
        </div>
    </main>
}

export default Main
