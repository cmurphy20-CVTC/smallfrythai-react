import React from "react";

function Contact() {
  return(
    <section>
        
        <div class="contactSection">

          <h2 id="publicCaterH2">Application for Catering</h2>

          <form name="contact" method="post" data-netlify="true" onSubmit="submit">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label class="formLabel">
                Name: <input class="formInput form-control" type="text" name="name"/>
              </label>
            </p>
            
            <p>
              <label class="formLabel">
                Email: <input class="formInput form-control" type="email" name="email" />
              </label>
            </p>
            <p>
              <label id="formMessage" class="formLabel">
                Message: <textarea class="formInput form-control" name="message" rows="10" cols="125"></textarea>
              </label>
            </p>
            <div id="captcha">
              <div data-netlify-recaptcha="true"></div>
            </div>
            
            <p>
              <button  id="contactBtn" type="submit">Send</button>
            </p>
          </form>

        </div>

      </section>
  )
}

export default Contact;