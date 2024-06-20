import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are a few projects that I'm proud of. Not all the Github repositories are public so feel free to reach out to me if you'd like to take a look at the source code.
          </p>
        </div>
        <div>
          <h2 class="sm:text-2xl text-3xl font-medium title-font mb-4 underline hover:text-white">
            <a href="https://github.com/Nicethanman/Coin-Counter">Minimum Change Calculator</a>
            </h2>
          <p>
            This Python program uses image recognition to calculate the minimum amount of Canadian change returned to a customer after a purchase. 
            The algorithm takes a recursive approach in finding the optimal combination of coins and uses memoization to reduce the average runtime.
            The contours of the shapes were identified using pre processing techniques such as Guassian Blur and dilation.  
          </p>
          <div className="p-8 flex justify-center items-center">
            <img 
              alt="Pre Processed Image"
              className="max-w-full h-auto rounded-lg border border-black"
              src="../coin_counter_img.png">
            </img>
          </div>
          <p>
            The user interface was designed using PYQT. Below is a demo video of the calculator in action
          </p>
          <div class="flex justify-center items-center p-8">
            <video class="rounded-lg border-x-4 border-white" width="600" height="auto" controls>
              <source src="../coin_calculator_vid.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div>
          <h2 className="sm:text-2xl text-3xl font-medium title-font mb-4 underline hover:text-white">
            <a href="https://github.com/Nicethanman/Tune-Critic">Tune Critic</a>
          </h2>
          <p>This is a music review application built with a django database. This was a great project that helped 
            develop my experience with fetch apis as well as the django REST framework. The application uses JWT authentication tokens to verify users through
            a login and register page. Additionally, I used the Spotify api to retrieve track data and displayed the results to a frontend built on React.
          </p>
          <div class="flex justify-center items-center p-6">
            <img src="tune_critic.gif" class="rounded-lg"></img>
          </div>
        </div>
        <h2 className="p-8 sm:text-2xl text-3xl font-medium title-font mb-4 text-white">More Projects</h2>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}