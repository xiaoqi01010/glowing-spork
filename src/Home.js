import React from 'react';
import ReactDom from 'react-dom/client';
import './App.css';
import './index.js'
import App from './app'

//const myFirstElement =<h1>Hello React!</h1>
//const root = ReactDom.createRoot(document.getElementById('root'));
//root.render(myFirstElement);

//const myelement = (
//    <table>
//        <tr>
//            <th>Name</th>
//        </tr>
//        <tr>
//            <td>John</td>
//        </tr>
//
//    </table>
//);
const element = 
<body style={{color: "darkblue"}}>
<br></br>
<div class="headings">
<h1> An introduction to different languages</h1></div>
<p>
    Having learnt the basics of more than 2 languages, it is fairly easy to recognise 
    <br></br> that all languages share a similar grammar. For instance, the while, for loops 
    <br></br> as well as if else loops are not so different in C++ from that in python or java. 
    <br></br> So the key is understanding the flow of the logic while writing different functions
    <br></br> or simply just different loops. 
</p>

<div class="headings">
<h1> Metacognition</h1></div>
<p>
    Like any science subject, the key to fast learning is metacognition, 
    <br></br> or in other words, action focused retrospection framework comprising
    <br></br> of planning, action and review. Therefore, the key here is to WRITE THEM 
    <br></br>CODES. WRITE EM! YEET EM!</p>
</body>;

export default function Tome(){
    const root = ReactDom.createRoot(document.getElementById('root'));
    root.render(element);
    root.render(<App />)
};

