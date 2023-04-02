import React from "react";
import FAQsImg from "./FAQSImg";

function FAQs() {
  return(
    <section>
        <div class="faq">

            <div id="faqTitle" class="col">
              <h2>Frequenty Asked Questions</h2>
            </div>

        <div class="row">

          <FAQsImg />

          <div class="col-lg-6 faqContent">
            <div class="row faqP faqPBold">
              <p>Are there any minimums for the trailer during the operating season for private events?</p>
            </div>

            <div class="row faqP faqPPlain">
              <p>Private events are offered for a maximum of three hours with a minimum hourly rate of $500 USD.</p>
            </div>

            <div class="row faqP faqPBold">
              <p>How does catering work for public events? (festivals, local events, corporate events)</p>
            </div>

            <div class="row faqP faqPPlain">
              <p>Please start by filling out an application below, and our food trailer representative will be in contact with you.</p>
            </div>
          
          </div>

        </div>

      </div>

    </section>
  )
}

export default FAQs;