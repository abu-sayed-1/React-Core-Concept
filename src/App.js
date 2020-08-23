import React,{useState, useEffect} from 'react';
//------------005------            
import './App.css';
// Component state hook and set state method//--Module No 32 /video No 11.....  //ei code diya tumi ei tar State number fixed kore dite paro State mane hocche User zokha click korbe tokn kichu ek ta hobe ba change hobe ar zdi na click kore tahle kichu bove na ei jinish gula very impotent 

function App() {
  
  const FriendsName=['Polash','Arman','Faruk','Sojib','Emon','Rakib Ahmed'];
  const products=[
    {name:'Photoshop',price:'$90.99',Email:' jalkldd'},
    {name:'llustrator',price:'$60.99',Email:'kjdjskkdjd'},
    {name:'PDF',price:'$8.99',Email:'kjdjskkdjalkldd'}
  ];

  const productName = products.map(product=>product.price)
  console.log(productName)
  
  const FriendsNames = FriendsName.map(FriendsName=>FriendsName)
  console.log(FriendsNames)
  return (
    <div className="App">
      {/* ||| niche 001 */}
      <ul>
        {
          products.map(products=><li>{products.name}</li>)
        }
      </ul>
      <ul>
        {
         FriendsName.map(FriendsName=><li>{FriendsName}</li>) 
        }
        {/* ei code diye---001-- ^^^^^^^^tumi array sob gula value nite parba pottek ta <li> tag ar modde, bar bar li niye array ke target kra lagbe na */}
         {/* <li>{FriendsName[2]}</li>
         <li>{FriendsName[3]}</li>
         <li>{FriendsName[4]}</li>
         <li>{FriendsName[5]}</li> */}
      </ul>
       <header className="App-header">
              
               <Counter></Counter>
               <Users></Users>
         <div>
               <Product product={products[1]} ></Product>
               <Product product={products[2]} ></Product>
               <Product product={products[0]} ></Product>
         </div>
         <div>
               <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
               <Person name="Rakib Ahmed" job="dorsok"></Person>
               <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
               <Person name="Rakib Ahmed" job="dorsok"></Person>
         </div>

      </header>
    </div>
  );
}
// --005.............................................
function Counter(){
  const [count,setCount] = useState(0);
  const handeleIncrease = () => setCount(count + 1);
  
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
     {/* button-004-^^-- click korle 1 - hobe...... */}
      <button onClick= {() => setCount(count + 1)}>Increase</button>
          {/* button-004-^^-- click korle 1 + hobe...... */}

    </div>
  )
}
// 005  Decrease button click korle <h1> tag er ek number kome jabe //Increase button click korle <h1> tag er ek number bede jabe 
  

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data =>setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
<ul>
  {
    users.map(user => <li>{user.name}</li>)
  }

</ul>
  </div>
  )
};

function Product(props){
  const productStyle = {
    backgroundColor:'lightgray',
    border:'3px solid gray',
    borderRedius:'5px',
    height:'300px',
    width:'200px',
   display:'inline-block',
    margin:'50px 0px 0px 50px'
    

  }
  const {name, price,Email} = props.product;

  return (
    <div style={productStyle}>
      
      <h3>{name}</h3>
      <h5>{price}</h5>
     <h6>{Email}</h6>
      <button>Buy now</button> 
    </div>
  )
}

// -- card box ---
function Person(props){
  const textColor = {
    // float:'left',
    marginTop:'50px',
    width:'400px',
    height:'130px',
    padding:'10px',
    color:'red',
    border:"3px solid cyan",
    backgroundColor:'#fff',
    borderRadius:'14px',
    textShadow:'4px 4px 5px black',
    float:'left',
    marginLeft:"10px"
    // display:'flex',

  }
  return (
   <div  style={textColor}>
      
    <h2> Name:{props.name} </h2>
    <p>My job:{props.job}</p>
    </div>
   )
}
export default App;




// // INTRODUCTION TO COMPONENT STATE//--Module No 32 /video No 10.........................
// function App() {
  
//   const FriendsName=['Polash','Arman','Faruk','Sojib','Emon','Rakib Ahmed'];
//   const products=[
//     {name:'Photoshop',price:'$90.99',Email:' jalkldd'},
//     {name:'llustrator',price:'$60.99',Email:'kjdjskkdjd'},
//     {name:'PDF',price:'$8.99',Email:'kjdjskkdjalkldd'}
//   ];

//   const productName = products.map(product=>product.price)
//   console.log(productName)
  
//   const FriendsNames = FriendsName.map(FriendsName=>FriendsName)
//   console.log(FriendsNames)
//   return (
//     <div className="App">
//       {/* ||| niche 001 */}
//       <ul>
//         {
//           products.map(products=><li>{products.name}</li>)
//         }
//       </ul>
//       <ul>
//         {
//          FriendsName.map(FriendsName=><li>{FriendsName}</li>) 
//         }
//         {/* ei code diye---001-- ^^^^^^^^tumi array sob gula value nite parba pottek ta <li> tag ar modde, bar bar li niye array ke target kra lagbe na */}
//          {/* <li>{FriendsName[2]}</li>
//          <li>{FriendsName[3]}</li>
//          <li>{FriendsName[4]}</li>
//          <li>{FriendsName[5]}</li> */}
//       </ul>
//        <header className="App-header">
//          <Counter></Counter>
//          <div>
//                <Product product={products[1]} ></Product>
//                <Product product={products[2]} ></Product>
//                <Product product={products[0]} ></Product>
//          </div>
//          <div>
//                <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
//                <Person name="Rakib Ahmed" job="dorsok"></Person>
//                <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
//                <Person name="Rakib Ahmed" job="dorsok"></Person>
//          </div>

//       </header>
//     </div>
//   );
// }

// function Counter(){
//   const [count,setCount] = useState(0);
  
//   const handelIncrease = () => { 
//     setCount(count + 1)
//     }
//     //button-004-^^-- click korle 1 + hobe......
//     const handelDecrease = () =>{
//       setCount( count - 1)
//     }
// //  button ^^ 003 click korle 1 - hode ^^
//   //002 ^^ei code diya tumi ei tar State number fixed kore dite paro State mane hocche User zokha click korbe tokn kichu ek ta hobe ba change hobe ar zdi na click kore tahle kichu bove na ei jinish gula very impotent 
//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={handelDecrease}>Decrease</button>
//             {/*003  */}
//       <button onClick= {handelIncrease}>Increase</button>
//                    {/* 004 */}
//       {/* 002 */}
//     </div>
//   )
// }
 
// function Product(props){
//   const productStyle = {
//     backgroundColor:'lightgray',
//     border:'3px solid gray',
//     borderRedius:'5px',
//     height:'300px',
//     width:'200px',
//    display:'inline-block',
//     margin:'50px 0px 0px 50px'
    

//   }
//   const {name, price,Email} = props.product;

//   return (
//     <div style={productStyle}>
      
//       <h3>{name}</h3>
//       <h5>{price}</h5>
//      <h6>{Email}</h6>
//       <button>Buy now</button> 
//     </div>
//   )
// }

// // -- card box ---
// function Person(props){
//   const textColor = {
//     // float:'left',
//     marginTop:'50px',
//     width:'400px',
//     height:'130px',
//     padding:'10px',
//     color:'red',
//     border:"3px solid cyan",
//     backgroundColor:'#fff',
//     borderRadius:'14px',
//     textShadow:'4px 4px 5px black',
//     float:'left',
//     marginLeft:"10px"
//     // display:'flex',

//   }
//   return (
//    <div  style={textColor}>
      
//     <h2> Name:{props.name} </h2>
//     <p>My job:{props.job}</p>
//     </div>
//    )
// }
// export default App;




 
 // --------Module No 32/video No 09-----Create multiple components from an array of objects---ei code diya tumi Object onek gula vlue access kirte parba ---text alada thkbe kintu sob gula body digen same thakbe------------------------------------------------------------------
// function App() {
  
//   const FriendsName=['Polash','Arman','Faruk','Sojib','Emon','Rakib Ahmed'];
//   const products=[
//     {name:'Photoshop',price:'$90.99',Email:' jalkldd'},
//     {name:'llustrator',price:'$60.99',Email:'kjdjskkdjd'},
//     {name:'PDF',price:'$8.99',Email:'kjdjskkdjalkldd'}
//   ];

//   const productName = products.map(product=>product.price)
//   console.log(productName)
  
//   const FriendsNames = FriendsName.map(FriendsName=>FriendsName)
//   console.log(FriendsNames)
//   return (
//     <div className="App">
//       {/* ||| niche 001 */}
//       <ul>
//         {
//           products.map(products=><li>{products.name}</li>)
//         }
//       </ul>
//       <ul>
//         {
//          FriendsName.map(FriendsName=><li>{FriendsName}</li>) 
//         }
//         {/* ei code diye---001-- ^^^^^^^^tumi array sob gula value nite parba pottek ta <li> tag ar modde, bar bar li niye array ke target kra lagbe na */}
//          {/* <li>{FriendsName[2]}</li>
//          <li>{FriendsName[3]}</li>
//          <li>{FriendsName[4]}</li>
//          <li>{FriendsName[5]}</li> */}
//       </ul>
//        <header className="App-header">
//          <div>
//                <Product product={products[1]} ></Product>
//                <Product product={products[2]} ></Product>
//                <Product product={products[0]} ></Product>
//          </div>
//          <div>
//                <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
//                <Person name="Rakib Ahmed" job="dorsok"></Person>
//                <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
//                <Person name="Rakib Ahmed" job="dorsok"></Person>
//          </div>

//       </header>
//     </div>
//   );
// }

// function Product(props){
//   const productStyle = {
//     backgroundColor:'lightgray',
//     border:'3px solid gray',
//     borderRedius:'5px',
//     height:'300px',
//     width:'200px',
//    display:'inline-block',
//     margin:'50px 0px 0px 50px'
    

//   }
//   const {name, price,Email} = props.product;

//   return (
//     <div style={productStyle}>
      
//       <h3>{name}</h3>
//       <h5>{price}</h5>
//      <h6>{Email}</h6>
//       <button>Buy now</button> 
//     </div>
//   )
// }

// // -- card box ---
// function Person(props){
//   const textColor = {
//     // float:'left',
//     marginTop:'50px',
//     width:'400px',
//     height:'130px',
//     padding:'10px',
//     color:'red',
//     border:"3px solid cyan",
//     backgroundColor:'#fff',
//     borderRadius:'14px',
//     textShadow:'4px 4px 5px black',
//     float:'left',
//     marginLeft:"10px"
//     // display:'flex',

//   }
//   return (
//    <div  style={textColor}>
      
//     <h2> Name:{props.name} </h2>
//     <p>My job:{props.job}</p>
//     </div>
//    )
// }
// export default App;
 



// --------Module No 32/video No 08-----Pass object to components and access object---ei code diya tumi Object onek gula vlue access kirte parba ---------------------------------------------------------------------
// function App() {
  
//   // const FriendsName=['Polash','Arman','Faruk','Sojib','Emon','Rakib Ahmed'];
//   const products=[
//     {name:'Photoshop',price:'$90.99'}
//   ];
//   return (
//     <div className="App">
//        <header className="App-header">
//        <Product product={products[0]} ></Product>
//        <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
//        <Person name="Rakib Ahmed" job="dorsok"></Person>
//        <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
//        <Person name="Rakib Ahmed" job="dorsok"></Person>
      

//       </header>
//     </div>
//   );
// }

// function Product(props){
//   const productstyle = {
//     backgroundColor:'lightgray',
//     border:'3px solid gray',
//     borderRedius:'5px',
//     height:'200px',
//     width:'200px',
//     float:'left'

//   }
//   return (
//     <div style={productstyle}>
//       <h3>{props.product.name}</h3>
//       <h5>{props.product.price}</h5>
//       <button>Buy now</button> 
//     </div>
//   )
// }


// function Person(props){
//   const textColor = {
//     // float:'left',
//     marginTop:'20px',
//     width:'400px',
//     height:'130px',
//     padding:'10px',
//     color:'red',
//     border:"3px solid cyan",
//     backgroundColor:'#fff',
//     borderRadius:'14px',
//     textShadow:'4px 4px 5px black',
//     // display:'flex',

//   }
   
//   return (
//    <div  style={textColor}>
      
//     <h2> Name:{props.name} </h2>
//     <p>My job:{props.job}</p>
//     </div>
//    )
// }
// export default App;
 

//-------------ei code diya css color background,ect dite paro React diye --Module No 32/video No 07-----//
// function App() {
  
//   // const FriendsName=['Polash','Arman','Faruk','Sojib','Emon','Rakib Ahmed'];
//   return (
//     <div className="App">
//        <header className="App-header">
//         <Product></Product>
//        <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
//        <Person name="Rakib Ahmed" job="dorsok"></Person>
//        <Person name= 'Abu Sayed Rakib' job="Freelancer"></Person>
//        <Person name="Rakib Ahmed" job="dorsok"></Person>
      

//       </header>
//     </div>
//   );
// }


// function Person(props){
//   const textColor = {
//     // float:'left',
//     marginTop:'20px',
//     width:'400px',
//     height:'130px',
//     padding:'10px',
//     color:'red',
//     border:"3px solid cyan",
//     backgroundColor:'#fff',
//     borderRadius:'14px',
//     textShadow:'4px 4px 5px black',
//     // display:'flex',

//   }
   
//   return (
//    <div  style={textColor}>
      
//     <h2> Name:{props.name} </h2>
//     <p>My job:{props.job}</p>
//     </div>
//    )
// }
// export default App;
 



//-----Module No 32/video No 07//-------------------------------------------------------------
// function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Person name="Rakib Ahmed" Email="abusayedrakib69@Email.com"></Person>
//         <Person name="Raju Khan"></Person>
//         <Person title="Rakib Company"></Person>
//         <Person></Person>
//       </header>
//     </div>
//   );
// }

// export default App;

// function Person(props){
//   const PersonStyle={
//     border:'5px solid cyan',
//     margin:'20px',
//     backgroundColor:'rgba(255,255,255,0.25)',
//     borderRadius:'14px',
//     padding:'20px',
    
//   }
// const textStyle={
//   color:'cyan',
//   backgroundColor:'white',
//   textShadow:'5px 4px 6px black',
//   borderRadius:'10px'

// }
// // console.log(props);
//   return (
//      <div style={PersonStyle} >
//         <h1 style={textStyle}>{props.title}</h1> 
//         <h4>Name:{props.name}<br></br>Email:  <a href="https://bangla2.programming-hero.com/course-status/">{props.Email}</a></h4>
//     </div>
//   )
// }


//-----Module No 32/ video No 06-----এই কোড ব্যবহার করলে একটা ডিজাইন বারবার লেখা লাগবেনা সিমিলার জিনিস যেগুলো আছে ওইগুলা ke তুমি কল করে দিলেই ওই ডিজাইনটা পেয়ে যাবে Html css বারবার লেখা lagbe না  ইটা কে বলে component-

// function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Person></Person>
//         <Person></Person>
//         <Person></Person>
//         <Person></Person>
//       </header>
//     </div>
//   );
// }

// export default App;

// function Person(){
//   const PersonStyle={
//     border:'5px solid cyan',
//     margin:'20px',
//     backgroundColor:'rgba(255,255,255,0.25)',
//     borderRadius:'14px',
//     padding:'20px',
    
//   }
// const textStyle={
//   color:'cyan',

// }
//   return (
//      <div style={PersonStyle} >
//         <h1 style={ textStyle}>Rakib miya</h1> 
//         <h4>Name:Raju khan</h4>
//     </div>
//   )
// }






//-----Module No 32/ video No 05----------এই কোড দিয়ে তুমি React  এর মধ্যে Html,css,booststrap ,ect  স্টাইল ট্যাগ  সবগুলো লিখতে পারো----------------------------------------------
// function Person(){
//   return (
//      <div style={{border:'5px solid cyan',margin:'20px',backgroundColor:'rgba(255,255,255,0.25)',borderRadius:'14px',padding:'20px'}} >
//         <h1 style={{color:'cyan'}}>Rakib miya</h1> 
//         <h4>Name:Raju khan</h4>
//     </div>
//   )
// }