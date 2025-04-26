import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
const App = () => {
  return (
    <>
      <Header />
      <Main />
    <img src="/wave-haikei-xl.svg" className="h-full max-w-7xl absolute -z-10 right-0 max-[850px]:hidden" alt="wave" />
    </>
  );
};

export default App;
