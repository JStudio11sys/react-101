import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

import Footer from './Footer';
import { Button } from 'bootstrap';
import StudentInfo from './StudentInfo';
import Invoice from './Invoice';
import TicTacToe from './TicTacToe';


const students = [
  "Emelloyd Rodriguez",
  "Gildo Omandam",
  "Arjohn Lopez",
  "Ronnie Estillero",
  "Revelyn Resolo",
  "Angelo Nhel Acibar",
  "Lyka May Saavedra",
  "David Fajardo",
  "Joshua  Tobongbanua",
  "Carlo Pisico",
  "Ralph Arcos",
  "Rommel Jay Ocon",
  "Jerold Cuico",
  "Rolando Castro",
  "Nicole Magallanes",
  "Paul Luzong",
];

const studentList = students.map((item) => <li>{item}</li>);
const menus = ["Home", "About", "Contact Us", "Login", "Settings"];
const studentInfo = { firstname: "Joshua", age: "24" };
const studentsInfo = [
  { firstname: "Joshua", age: "24" },
  { firstname: "Mia", age: "25" }
];




const invoice = {
  invoiceTo: "Juan Dela Cruz",
  date: "2023-04-15",
  address1: "810 Oroquieta Street Sta Cruz 1000",
  address2: "Manila, Metro Manila, Philippines",
  invoiceNumber: "6845", paymentMode: "COD"
};

const invoiceItems = [{ description: "Mouse", Qty: 3, unitPrice: 200 },
{ description: "Keyboard", Qty: 3, unitPrice: 400 },
{ description: "Monitor", Qty: 6, unitPrice: 5400 },
{ description: "CPU Tower Case", Qty: 3, unitPrice: 1200 },
{ description: "Headset", Qty: 3, unitPrice: 500 },
{ description: "UPS", Qty: 1, unitPrice: 4000 },];


const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;
//const [car,, suv] = vehicles;




function App() {
  return (
    <div className="App">
<TicTacToe />


      <div>
        <Invoice invoiceName={invoice} invoiceListDetails={invoiceItems}/>
      </div>
      <div>
        
      </div>

    </div>




    /*
{invoiceItems.map((invoiceData) => <Invoice data={invoiceData} />)}


    <div className="App">
      <Header menuList={menus} />

      <div className="main-content">
        <h1>Hello React</h1>
        <button className="btn btn-primary">Test</button>
        <ul>
          {studentList}
        </ul>

        {studentsInfo.map((studentData) => <StudentInfo data={studentData}/>)}
        <StudentInfo data={studentsInfo}/>

      </div>


      <Footer />

    </div>
    */
  );
}

export default App;
