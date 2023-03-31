import React from "react";

function SampleMenu() {
  return (
    <section class="sampleMenuDiv">

  <div class="row sampleMenu">
    
    <div class="col-lg-4" >
      <img class="sampleMenuPic" src="img/pexels-pixabay-262897.jpg" alt="Bowl of Spicy Pho"></img>
    </div>
    
    <div class="col-lg-8 sampleMenuDesc">
      <div id="sampleTitle">
        <em >Authentic and classic Thai dishes. We offer more options,<a id="sampleTitle" href="menu.html"> view full menu here.</a> </em>
        <h2 id="sampleTitle">Sample of Menu</h2>
      </div>
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
  </div>

</section>
  )
}

export default SampleMenu;