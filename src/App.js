import logo from './logo.svg';
import './App.css';
import Table from './Table'
import List from './list'
function App() {

  const userInfo=[
    {
      name:"Aravind",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Gokul",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Usuf",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Rahul",
      age:23,
      degree:"B.E."
    }
  ]

  const phones=[
    {
      name:"Redmi"
    },
    {
      name:"Samsung"
    },
    {
      name:"Nokia"
    },
    {
      name:"Apple"
    },
    {
      name:"Oneplus"
    },

  ]


  return (
    <div className="App">
     <Table data={userInfo}/>
     <List brand={phones}/>
    </div>
  );
}

export default App;
