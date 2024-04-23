// import './App.css'
// import Header from './components/Header'
// // import banner from "../src/assets/flight.avif"


// function App() {             

//   return (
// <div className='bg[url(../src/assets/flight.avif)]'>
//     <Header/>
//     <section>
//       <div>Booking</div>
//       <div>Table</div>
//     </section>
  
//     </div>
//   )
// }

// export default App

// import './App.css';
// import Header from './components/Header';
// import flightImage from "../src/assets/flight.avif";

// function App() {             

//   return (
//     <div className='bg' style={{backgroundImage: `url(${flightImage}) bg-cover bg-no-repeat`}}>
//       <Header/>
//       <section>
//         <div>Booking</div>
//         <div>Table</div>
//       </section>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Header from './components/Header';
// import banner from "../src/assets/banner.jpg";

// function App() {             

//   return (
//     <div className='bg' style={{backgroundImage: `url(${banner}) bg-cover bg-no-repeat`}}>
//       <Header/>
//       <section className='h-screen'>
//         <div>Booking</div>
//         <div>Table</div>
//       </section>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Table from "./components/Table";
                                                           
function App(){

  return (
    <div className='bg-[url(../src/assets/banner.jpg)] bg-cover bg-no-repeat'> 
    <Header/>
    <section className="h-screen">
      <Booking/>
      {/* <div>Booking</div>   */}
      {/* <div>Table</div>   */}
      <Table/> 
    </section>
    </div>
  );
}
export default App;
