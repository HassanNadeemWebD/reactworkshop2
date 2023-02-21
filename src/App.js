import Card from "./components/Card";
import Nav from "./components/Navbar"
import img from "./components/logo192.png"
import Form from "./components/Form";


function App() {
  const a = 12;
  let b = 79;
  return (
    <div>
      {/* <Nav /> */}
      <Form/>
      {/* <Nav/>
<Nav/>
<Nav/> */}
      <Card title="ReactJS" content="Learning ReactJS" img={img} value = "Go React" />
      <Card title="VueJS"  value = "Go Vue" content="Learning VueJS" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" />
      {/* <h1 >Hello</h1>
      <h2>World {b }{a}</h2> */}






    </div>
  );
}

export default App;
