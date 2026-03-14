import ResulteGrid from './components/ResulteGrid';
import SearchBar from './components/searchBar';
import Tabs from './components/Tabs';

const App = () => {
  return (
    <>
        <div>
          <h1 className='w-full text-center underline text-6xl'>Media Search</h1>
          <SearchBar />
          <Tabs />
          <ResulteGrid />
        </div>
    </>
  );
};

export default App;
