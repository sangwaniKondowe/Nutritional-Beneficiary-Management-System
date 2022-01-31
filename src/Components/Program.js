
import React from 'react'

import './programm.css'

import {Link} from "react-router-dom"


function Program() {
    
    return (
        
        <div>
          
        <div className='programmsBox'>
            <div className='programmsItem'> 
            
            <Link className="programTitle" to="/programs/intervetions">SCHOOL HEALTH AND NUTRITION</Link>
            <div className='programDiscription'>
            <img src ="./projectImages/school3.jpg" style={{height:"100px" ,width:"120px"}}/>
                </div>
            <div>
            
            </div>
            </div>

            <div className='programmsItem'> 
            <Link className="programTitle" to="/programs/adolescentnutrion" >ADOLESCENT NUTRITION</Link>
            <div className='programDiscription'>
            <img src ="./projectImages/adolescentNutrition1.png" style={{height:"100px" ,width:"120px"}}/>
                </div>
            <div>
            
            </div>
            </div>

            <div className='programmsItem'> 
            <Link className="programTitle" to="/programs/WaterSanitationAndHygiene">WATER SATINATION AND HYGIENE</Link>
            <div className='programDiscription'>
            <img src ="./projectImages/water1.jpg" style={{height:"100px" ,width:"120px"}}/>
                </div>
            <div>
            
            </div>
            </div>
            
            
            
        </div>


        
        <div className='programmsBox2 '>
            <div className='programmsItem'> 
            <Link className="programTitle" to="/programs/IntergratedHomeStead">INTERGRATED HOMESTEAD AGRICULTURE</Link>
            <div className='programDiscription'>
            <img src ="./projectImages/Homestead.jpg" style={{height:"100px" ,width:"120px"}}/>
                </div>
            <div>
            
            </div>
            </div>

            <div className='programmsItem'> 
            <Link className="programTitle" to="/programs/InfantAndYoungChild">INFANT AND YOUNG CHILD FEEDING</Link>
            <div className='programDiscription'>
            <img src ="./projectImages/IYCF1.jpg" style={{height:"100px" ,width:"120px"}}/>
                </div>
            <div>
            
            </div>
            </div>

            <div className='programmsItem'> 
            <button className="programTitle">COMMUNITY MANAGEMENT MALNUTRITION</button>
            <div className='programDiscription'>
            <img src ="./projectImages/acute.jpg" style={{height:"100px" ,width:"120px"}}/>
                </div>
            <div>
            
            </div>
            </div>
            
            
            
        </div>
        
         
     

        </div>
    
    )
}

export default Program
