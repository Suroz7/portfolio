import React, { Component } from 'react';

class Qualification extends React.Component {
    render() {
        return (
            <div class="quali_border">
                <p class='quali_title' >Qualification</p>
                <div class='quali'>
                    <div class='education'>
                        <h2>Education</h2>
                       <div class='dropdown-content'>
                        <div class='ddcc'> <h3 > 
                        Centria University of Applied Science
                        </h3>
                        <p>
                            Bachelors of Engineering in Information Technology 
                        </p></div>
                        <div class='ddcc'>
                        <h3 > 
                        Golden Gate International College 
                        </h3>
                        <p>
                            High School
                        </p></div>
                        <div class='ddcc'>
                        <h3 > 
                        Nepal Police Higher Secondary Boarding School
                        </h3>
                        <p>Middle School</p></div></div>
                    </div>
                    <div class='programming'>
                    <h2> 
                       Programming 
                        </h2><h2>Languages</h2>
                        <div class='dropdown-content'>
                        <p>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>C programming</li>
                        </p>
                    </div></div>
                    <div class='design'>
                    <h2> 
                       Design Skills
                        </h2>
                        <div class='dropdown-content'> <p>
                        <li>Adobe Illuslator</li>
                        <li>Adobe Photoshop</li>
                        <li>Blender</li>
                        
                        </p></div>
                    </div>
                    <div class='experience'>
                    <h2> 
                       Experience
                        </h2><div class='dropdown-content'>
                        <p>
                        <li>Dude Project</li>
                        <li>Top Nepal IT solution</li>
                      
                        
                        </p>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
} export default Qualification