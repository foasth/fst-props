
import './App.css';
import Profile from './profile/profile';

const App = ()=>{
  const fullname = 'ANIS'
  const bio = 'FLCL'
  const profession = 'WEB-DEV'
  const sayhello = ()=>{
    alert(fullname)
    alert(bio)
  }
  return(
    <>
      <Profile  sayhello={sayhello}
                fullname={'ANIS'}
                bio={'FLCL'}
                profession={'WEB-DEV'}/>
    </>
    
  );

}

export default App;
