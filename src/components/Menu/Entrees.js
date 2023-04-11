import React from "react";
import EntreeImg from '../../assets/pexels-cats-coming-1731535.jpg';

function Entrees() {
  return(

    <section class="sampleMenuDiv">

        <div class="row sampleMenu">

          <div id="mainTitle" class="col">
            <em>Delicious entrees with generous portion sizes</em>
            <h2 id="menuTitle">Main Dishes</h2>

            <img id="appImg" class="sampleMenuPic" src={EntreeImg} alt="Main Dish"></img>
            
          </div> 

          
          <div id="meats" class="col">
            <h2>Choice of Meat</h2>
            <ul class="choiceOfMeat">
              <li>Tofu $9.95</li>
              <li>Chicken / Vegetable $9.95</li>
              <li>Beef $10.95</li>
              <li>Shrimp $12.95</li>
              <li>Chicken + Shrimp $13.95</li>
            </ul>
          </div> 

        </div> 
    
        <div class="row sampleMenuDesc">

          <div class="col-lg-6 fullMenuDescLeft">
        
            <ul class="menuItems">
              <li>
                <strong>Pad Thai</strong>
                <p>Stir fried rice noodles, eggs, bean sprouts, 
                  green onions in pad thai sauce with ground peanuts.
                </p>
              </li>
              <li>
                <strong>Drunken Noodle</strong>
                <p>Classic stir fried wide rice noodles, fresh broccoli, bell peppers,
                  carrots, onions, fresh basil in homemade brown sauce.
                </p>
              </li>
              <li>
                <strong>Ramen Drunken Noodle</strong>
                <p>Stir fried ramen egg noodles, fresh broccoli, bell peppers,
                  carrots, onions, fresh basil in homemade brown sauce.
                </p>
              </li>
              <li>
                <strong>Thai Fried Rice</strong>
                <p>Stir fried rice with eggs, broccoli, onions, carrots, and topped with green onion.
                </p>

              </li>
              <li>
                <strong>Kung Pao</strong>
                <p>Choice of veggies, chicken or shrimp stir fried with chili paste, zucchini, 
                  carrots, onions, bell peppers in homemade brown sauce topped with peanuts.
                </p>
              </li>
            </ul>
          </div> 
        
          <div class="col-lg-6">
            <ul class="menuItems">
              <li>
                <strong>Pad See Ew</strong>
                <p>Stir fried white rice and egg, fresh broccoli, carrots in homemade brown sauce
                </p>
              </li>
              <li>
                <strong>Basil Stir-Fried</strong>
                <p>Choice of veggies, chicken or shrimp stir fried with frsh baisl leaves,  
                  onions, bell peppers in homemade brown sauce.
                </p>
              </li>
              <li>
                <strong>Sweet and Sour</strong>
                <p>broccoli, cauliflower, peapod, oil, sauce</p>
              </li>
              <li>
                <strong>Orange</strong>
                <p>red bell pepper, green bell pepper, pineapple, cauliflower, orange, sauce</p>
              </li>
              <li>
                <strong>Pad Hmong</strong>
                <p>rice noodle, red bell pepper, green bell pepper, jumbo onion, beansprout, 
                  cilantro, green onion, egg, hot & spicy sauce</p>
              </li>
            </ul>      
          </div>   
        </div> 
      </section>
  )
}

export default Entrees;