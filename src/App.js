import "./App.css";
import Address from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto";

function App() {
  return (
    <div className="Main">
      <h1>Bienvenue sur votre profil</h1>
      <div className="App">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
