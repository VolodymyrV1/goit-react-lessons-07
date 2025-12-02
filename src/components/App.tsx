//Приклад 1

// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";

// import { fetchPerson } from "../services/swapiService";

// function App() {
//   const [counter, setCounter] = useState<number>(0);

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ['character', counter],
//     queryFn: () => fetchPerson(counter),
//     enabled: counter > 0,
//     staleTime: 60 * 1000, // 1 minute
//   });  




//   return (
//     <>
//       <h1>Lesson 7 React Query</h1>

//       <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>
//         -
//       </button>
//       <span>{counter}</span>
//       <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
//         +
//       </button>

//       {isLoading && <p>Loading ...</p>}
//       {isError && <p>Oops. Something went wrong</p>}
//       <h1>{data?.name }</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </>
//   );
// }



//Приклад 2

import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";

import { useQuery } from "@tanstack/react-query";




function App() {

  useQuery({
    queryKey: ["articles"],
    queryFn: 

  })

  const handleSearch = (topic: string) => {
    console.log({topic});
    
  }








  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <ArticleList items={[]}/>
    </>
  );
}
















export default App;
