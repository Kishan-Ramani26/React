import ResulteGrid from "./components/ResulteGrid";
import SearchBar from "./components/searchBar";
import Tabs from "./components/Tabs";
import ScrambledText from "./components/ScrambledText";
import TargetCursor from "./components/TargetCursor";

const App = () => {
  return (
    <>
      <TargetCursor />
      <div>
        <ScrambledText
          className="scrambled-title text-wrap"
          radius={140}
          duration={1.2}
          speed={0.6}
          scrambleChars="˶ᵔ ᵕ ᵔ˶"
          style={{ fontSize: "3rem", fontWeight: 800, margin: "0.75rem auto" }}
        >
          Media Search — Discover • Stream • Share
        </ScrambledText>
        {/* <p className="w-full text-center text-sm text-gray-300"></p> */}
        <ScrambledText
          className="scrambled-title w-full text-center text-[1.25rem] text-gray-300 text-nowrap"
          radius={140}
          duration={1.2}
          speed={0.6}
          scrambleChars="⋆｡‧˚ʚ♡ɞ˚‧｡⋆"
          style={{
            fontSize: "1.2rem",
            fontWeight: 200,
            margin: "0.75rem auto",
          }}
        >
          Find your favorite media faster
        </ScrambledText>

        <SearchBar />
        <Tabs />

        <ResulteGrid />
      </div>
    </>
  );
};

export default App;
