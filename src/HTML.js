import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js'

import { getTTFB } from 'web-vitals';
import './App.css';
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

const index= 
<body style={{color: "darkblue"}}>
<br></br>

    <table>
    <tr>
        <th> Lesson Number</th>
        <th> Content</th>
    </tr>
    <tr>
        <td>Lesson 1</td>
        <td>Naming conventions</td>
    </tr>
    <tr>
        <td> Lesson 2</td>
        <td> Writing a html doc </td>
    </tr>
    <tr>
        <td> Lesson 3</td>
        <td> Nested list</td>
    </tr>
    <tr>
        <td> Lesson 4</td>
        <td> Intro to CSS</td>
    </tr>
    <tr>
        <td> Lesson 5</td>
        <td> Block element vs inline elements</td>
    </tr>
    <tr>
        <td> Lesson 6</td>
        <td> JavaScript part 1</td>
    </tr>
    </table>
<hr></hr>

    <h1> HMTL learning </h1>
    <div class = "headings">
    <h2> Lesson 1 </h2> 
    </div>

<p>1. Hello! For your first html, please remember to name it as <span class="lesson"><span class="tags"><i>sthsth.htm</i></span></span> and not <span class="lesson"><span class="tags"><i>sthsth.html</i></span></span>! 
<br></br>2. note that <span class="lesson"><span class="tags">&lt;--!--&gt;</span></span> is the comment tag.</p>

<div class = "headings">
<h2> Lesson 2 </h2>
</div>

<b>Note that <span class="lesson">&lt;"!DOCTYPE"&gt;</span> declaration represents the document type 
and helps the browsers to display the web page correctly </b><br></br> 1. HTML headings
are defined with the <span class="lesson"><span class="tags">&lt;h1&gt;</span></span> to <span class="lesson"><span class="tags">&lt;h6&gt;</span></span> tags. <br></br> 2. HTML paragraphs are defined with the <span class="lesson"><span class="tags">&lt;p&gt;</span></span> tag.
<br></br> 3. HTML links are defined with the a tag, with the link's destination 
specified in the href attribute. For instance, the link to the website 
is <a href="https://www.w3schools.com/html/html_basic.asp"> w3schools.com </a>
<br></br> 4. We want to inspect a website, so what we do is simply to right click and choose "inspect" 

<br></br>
<h3>Tips</h3>
<p>
1.This is a <span class="lesson"><span class="tags">&nbsp</span></span> regular space.
This is a <span class="lesson"><span class="tags">&ensp</span></span> two spaces gap.
This is a <span class="lesson"><span class="tags">&emsp</span></span> four spaces gap.
<br></br> 2.<span class="lesson"><span class="tags">&lt;br&gt;</span></span> stands for break line.
</p>

<div class = "headings">
<h2>Lesson 3</h2></div>

<p>
<ul>
    <li>Firstly, remember that it starts with <span class="lesson"><span class="tags">&lt;ul&gt;</span></span> before <span class="lesson"><span class="tags">&lt;li&gt;</span></span></li>
    <li>Secondly, remember the next tag is <span class="lesson"><span class="tags">&lt;ul&gt;</span></span>
        <ul>
            <li> for a subpoint, add a <span class="lesson"><span class="tags">&lt;ul&gt;</span></span> 1 tab inside</li>
            <li> This process continues and we get a nice succulent list</li>
        </ul>
    </li>
</ul>
</p>

<div class = "headings">
<h2>Lesson 4</h2></div>
<p>
        Styling of texts in HTML:<br></br>

        1.Strikethrough <ul><del> This part is strikedthrough</del></ul>
        To achieve this effect, what you do is simply to use the del tag.
        <br></br> 2. Another way is to use the <i>CSS</i> text decoration line property, by using <i> .strike{"text.decoration: line-through"}</i>. 
        <br></br>
        
        <p> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="strike">This text is a line-through</span>.</p>
        <br></br>3. Utilisation of the class attribute in JavaScript. For instance, JavaScript can access 
        <br></br>elements with the <span class="tags">getElementsByClassName()</span> method with the script tag.
    </p>
    <div class="headings">
    <h2>Lesson 5</h2>
    </div>
   
    <p>1. Block elements always starts on a new line and the browsers automatically
    <br></br> add some space before and after the element. A block-level element takes up
    <br></br> the full width available. Two commonly used block elements are p and div. 
    <br></br>The div element defines a division or a section in a HTML document. 
    <br></br></p>

    <p class="w3-theme-border">
        The <span class="lesson"><span class="tags">&lt;p&gt;</span></span> element is a block-level element.</p>

    <p class="w3-theme-border">
            The <span class="lesson"><span class="tags">&lt;div&gt;</span></span> element is a block-level element.</p>

            <table class="table"><hr></hr>
       
       <tr>
       <th>Tag</th>
       <th>Description</th>
       </tr>
       
       <tr>
       <td><span class="lesson"><span class="tags">&lt;p&gt;</span></span></td>
       <td>Defines a section in a document (block-level)</td>
       </tr>

       <tr>
       <td><span class="lesson"><span class="tags">&lt;div&gt;</span></span></td>
       <td>Defines a section in a document (inline)</td>
       </tr>
     
       </table>
<br></br>


   2. The inline elements, in contast only takes as much space as it needs. 
   <br></br> Examples include:
   <ul>
       <li>
           <ul>
               <li><span class="lesson"><span class="tags">&lt;abbr&gt;</span></span></li>
               <li><span class="lesson"><span class="tags">&lt;acronym&gt;</span></span></li>
               <li><span class="lesson"><span class="tags">&lt;span&gt;</span></span></li>
           </ul>        
       </li>
   </ul>
   3. Learn your tags:
<br></br>
<iframe width="550" height="250" src="https://www.w3schools.com/tags/tag_pre.asp#:~:text=Definition%20and%20Usage,in%20the%20HTML%20source%20code." fullwidth></iframe>
<br></br> uh I think there's some iframe security policy involved
<br></br> therefore the website can't be displayed. I shall place the link below:
<br></br>
<a href="https://designlab.com/figma-101-course/introduction-to-figma/">Link :</a>

<div class="headings">
    <h2>Lesson 6</h2>
    </div>
    <h3>JavaScript: </h3>
        Always write the script tags first before writing js. 
    <pre>  <p class="w3-theme-border">
    &lt;script&gt; document.getElementById("demo").innerHTML ="MyfirstJavaLesson" &lt;/script&gt;
    </p></pre>
    <p id="demo">Below is an example of javascript:</p>
    <button type="button" onclick = "myFunction" > Try it</button>
    <p> Do note that an external script may be practical when the same code is used in many different web pages. JavaScript files have the file extension .js. 
    <br></br> To use an external script, we should put the name of the script file in the <em>src</em> (source) attribute. </p>
    <pre>
        <p class="w3-theme-border">
            &lt;script src="myScript.js"&gt; &lt;/script&gt;
            &lt;"script src="https://www.w3schools.com/js/myScript.js"&gt; &lt;/script&gt;
        </p>
    </pre>
    <p>"Sometimes it may be neater to use javascript to write the body text. <br></br> You can use"+" &lt;br&gt; to break the line."</p>
    <ul>
        <li> Here is a table of tags used in javascript.
            <table>
                <tr>
                    <th> Tags</th>
                </tr>
                <tr>
                    <td>&lt; var &gt;</td>
                </tr>
                <tr>
                    <td>&lt; let &gt;</td>
                </tr>
                <tr>
                    <td>&lt; const &gt;</td>
                </tr>
                <tr>
                    <td>&lt; if &gt;</td>
                </tr>
                <tr>
                    <td>&lt; switch &gt;</td>
                </tr>
                <tr>
                    <td>&lt; function &gt;</td>
                </tr>
            </table>
        </li>
        <li><p>Note that while both <b>let</b> and var are used to declare variables, <b>let</b> cannot be redeclared while <b>var</b>  can be redeclared.</p>
        </li>
        <li>
            <b>const</b> does not define a constant value but a constant reference to a value. So you cannot reassign a constant value, reassign a constant array, reassign
            <br></br> a constant object, but you CAN change the elements of constant array and properties of constant object.</li></ul>
        
            <ul><li>
                        Here is an example: 
                         &lt;p id="demo2"&gt; &lt;/p&gt;
                         <pre> 
                         <p class="w3-theme-border">
                             &lt;script&gt;<br></br>
                                 //defines a constant array<br></br>
                                 const cars = ["Saab","Volvo","BMW"];<br></br>
                                 //Change an element<br></br>
                                 cars[1]="Audi"<br></br>
                                 //add an element at the back<br></br>
                                 cars.push("Toyoto");<br></br>
                                 //display the Arrays<br></br>
                                 document.getElementById("demo2").innerHTML=cars;<br></br>
                             &lt;/script&gt;
                         </p>
                         </pre>
                         </li></ul>
                        
                <ul>
                    <li> JavaScript Type Operators:
                        <ul>
                            <li>typeof: Returns the type of a variable</li>
                            <li>instanceof: Returns true if an object is an instance of object type</li>
                        </ul>
                    </li>
            
            <li>Functions: There are 3 ways to write functions in js
                <pre><p class="w3-theme-border">
                1. Normal way 
                hello function
                    return "Hello World"
                
                document.getElementById"demo3".innerHTML=hello;

                2. Arrow Heads.
                hello =  => 
                    return- "Hello World!";
                
                document.getElementById "demo4".innerHTML=hello;
                
                3.hello =  => "Hello World!";
                document.getElementById "demo".innerHTML = hello;
                </p></pre>
            </li>
            </ul>
            <p>
    Also do note that the meaning of "this" has different meaning compared to regular functions. 
    <br></br>The handling of "this" is different compared to regular functions. In regular functions there is no binding
    <br></br> which means that "this" could refer to the object that called the function -- a window, document, a button or whatever. </p>
   
            
   </body>
   
;
export default function about(){
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(index);
root.render(<App />)
}
