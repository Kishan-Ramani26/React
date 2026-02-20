import SearchBar from './components/searchBar';
import Tabs from './components/Tabs';

const App = () => {
  return (
    <>
        <div>
          <h1 className='w-full text-center underline text-6xl'>Media Search</h1>
          <SearchBar />
          <Tabs />
        </div>
    </>
  );
};

export default App;
