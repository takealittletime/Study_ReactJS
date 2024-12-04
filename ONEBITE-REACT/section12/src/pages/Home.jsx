import { useSearchParams } from "react-router-dom";

const Home= ()=> {
  const [params, setParams] = useSearchParams();

  return (
    <div>
      <h1>HomeTest</h1>
    </div>
  )
};

export default Home;