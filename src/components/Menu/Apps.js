import React from "react";
import AppPic from '../../assets/pexels-rodnae-productions-6646372.jpg';

function Apps() {
  return(
    <section class="sampleMenuDiv">

        <div class="row fullMenu">
        
          <div class="col appMenuDesc">

            <h1 id="fullMenuTitle">Full Menu</h1>

            <div class="row">

              <div class="col-lg-6">

                <em>Start off with something great!</em> 
                <h2 id="menuTitle">Appetizers</h2>
              

                <ul id="apps" class="menuItems">
                 
                  <li>
                    <div class="row">
                      <div class="col-lg-10">
                        <p>Spring Roll Chicken/Veggie</p>
                      </div>
                      <div class="col-lg-2">
                        <p>$2.5</p>
                      </div>
                    </div> 
                  </li>


                  <li>
                    <div class="row">
                      <div class="col-lg-10">
                      <p>Potstickers (x6)</p>
                    </div>
                    <div class="col-lg-2">
                      <p>$4</p>
                    </div>
                  </div>
                  </li>

                  <li>
                    <div class="row">
                      <div class="col-lg-10">
                        <p>Crab Rangoons (x4)</p>
                      </div>
                      <div class="col-lg-2">
                        <p>$5</p>
                      </div>
                    </div>
                    
                  </li>
                  <li>
                    <div class="row">
                      <div class="col-lg-10">
                        <p>Egg Rolls (x3)</p>
                      </div>
                      <div class="col-lg-2">
                        <p>$5</p>
                      </div>

                    </div>
                    
                  </li>
                </ul>
              </div>
            
              <div class="appImgDiv col-lg-6">
                <img id="appImg" class="sampleMenuPic" src={AppPic} alt="Spring Roll"></img>
                
                
              </div> 
            </div>   
          </div> 
        </div> 
      
      </section>
  )
}

export default Apps;