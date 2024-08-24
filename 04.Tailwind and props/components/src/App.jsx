import './App.css';
import Card from './card';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-10'>
      <Card name="Abhi Sharma" btnText="NerdyAbhi" />
      <Card name="Abhi" btnText="Only Abhi" />
      </div>
    </>
  );
}

export default App;
