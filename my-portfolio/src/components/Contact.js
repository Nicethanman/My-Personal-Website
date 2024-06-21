import React from "react";

export default function Contact() {
const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  
  const changeName = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const changeEmail = (event) =>{
    const value = event.target.value;
    setEmail(value);
  }
  const changeMessage = (event) =>{
    const value = event.target.value;
    setMessage(value);
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=The+University+of+British+Columbia,+Vancouver,+BC,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 mr-5 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Vancouver, BC V6T 1Z4 <br />
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                help.ece.ubc.ca
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">604-352-1604</p>
            </div>
          </div>
        </div>
        <form
          netlify
          onSubmit={handleSubmit}
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            Please don't hesitate to reach out to me if you have any questions!
          </p>
          <div class="flex p-3">
            <img src="gmail_icon.png" width="75" height="auto"></img>
            <p class="text-indigo-400 mx-8 my-5 text-xl" >nicethanchang@gmail.com</p>
          </div>

          <div class="flex p-3">
            <img src="linkdin_icon.png" width="75" height="auto"></img>
            <a class=" text-indigo-400 hover:text-indigo-500 mx-8 my-6 text-xl" href="https://www.linkedin.com/in/nicchang/">My Linkdin</a>
          </div>
          <div class="flex p-3">
            <img src="github_icon.png" width="75" height="auto"></img>
            <a class="text-indigo-400 hover:text-indigo-500 mx-8 my-5 text-xl" href="https://github.com/Nicethanman">My Github</a>
          </div>
          <div class="flex p-3">
            <img src="instagram_icon.png" width="75" height="auto"></img>
            <a class="text-indigo-400 hover:text-indigo-500 mx-8 my-5 text-xl" href="https://www.instagram.com/nic_chang30/">My Instagram</a>
          </div>
        </form>
      </div>
    </section>
  );
}