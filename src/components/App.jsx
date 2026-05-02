import React from "react";
import Home from './Home';
import Navbar from './Navbar';
import About from './About';

import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <Navbar />
      <Home name={user.name} color={user.color} city={user.city}/>
      <About links={user.links} bio={user.bio}/>
    </div>
  );
}

export default App;