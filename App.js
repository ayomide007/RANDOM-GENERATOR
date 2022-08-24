
import './App.css';
import {useState,useEffect, Fragment} from 'react';
import Button from "./components/Button";
import axios from 'axios';

const App = ()=> {

  const [userData, setUserData] =useState([]);
  const[loading,setLoading] = useState(false);
  const [activeUser,setActiveUser] = useState(false)
  const [activelink, setActiveLink] =useState(0);

const onClickHandler = ()=>{
    setLoading(true);
    axios.get('https://randomuser.me/api/')
    .then ((response) => {
      console.log(response.data.results);
      setUserData(response.data.results);
    }) .catch((error) =>{
      console.log(error);
      setLoading(true);
      setActiveUser(true);
    }).finally(()=>{
      setLoading(false)
      setActiveUser(true)
    })
  console.log("button is working");
}

  return ( <div className="App">
                <h1> Random User GENERATOR</h1>
                      <Button isActive={activeUser} clicked={onClickHandler}/>

                    {loading ?  (<h1>Loading ...</h1> ):( <div className = "app_user"> 
                                {userData.map((user,index) => { 
            return ( <Fragment key ={user.cell}> 
                        <img src ={user.picture.large} alt="#" />  
                        </Fragment> )
                         }
      )}
                               </div>
                    )}
        </div>
            );
  
  }
export default App; 
