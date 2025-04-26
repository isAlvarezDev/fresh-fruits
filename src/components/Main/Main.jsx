const Main = () => {
    return <main className="grid grid-cols-[1fr_1fr] px-16 place-items-center place-content-center justify-items-stretch max-[850px]:flex max-[850px]:flex-col max-[850px]:mt-12">
        <div className="flex flex-col">
            <h1 className="text-6xl font-medium leading-19">Get <span className="font-bold text-orange bg-linear-to-b from-transparent from-52% via-mustard/50 via-86% to-white to-86%">FRESH <br />FRUITS</span> Today</h1>
            <p className="mt-6 text-lg text-pretty">Orange is not just a tasty fruit, its more. Get to</p>
            <p className="text-lg text-pretty">know the multiple health benefits of adding</p>
            <p className="text-lg text-pretty">orange in your daily diet.</p>
            <button className="bg-orange font-medium text-white text-[13.5px] px-8 py-2 rounded-full mt-4 cursor-pointer hover:bg-[#F07407] transition-colors duration-150 w-fit max-[850px]:self-center max-[500px]:my-8">Know More</button>
        </div>
        <div className="relative select-none">
            <img src="/orange.webp" alt="An image of an orange" width='900' height='900' loading="lazy" />
            <span className="absolute top-[6%] left-[39%] text-6xl font-bold text-mustard max-[1024px]:text-black max-[850px]:text-mustard max-[650px]:text-5xl max-[480px]:text-4xl">O</span>
            <span className="absolute top-[2%] right-[29%] text-6xl font-bold text-mustard max-[1024px]:text-black max-[850px]:text-mustard max-[650px]:text-5xl max-[480px]:text-4xl">R</span>
            <span className="absolute top-[29%] right-0 text-6xl font-bold -z-5 max-[650px]:text-5xl max-[480px]:text-4xl">A</span>
            <span className="absolute top-[60%] right-[14%] text-6xl font-bold -z-5 max-[650px]:text-5xl max-[480px]:text-4xl">N</span>
            <span className="absolute bottom-[6%] right-[50%] text-6xl font-bold -z-5 max-[1030px]:bottom-[0%] max-[850px]:bottom-[4%] max-[650px]:text-5xl max-[480px]:text-4xl">G</span>
            <span className="orange-title absolute bottom-[5%] left-[8%] text-6xl font-bold text-mustard max-[1024px]:text-black max-[650px]:text-5xl max-[480px]:text-4xl">E</span>
        </div>
    </main>
}

export default Main