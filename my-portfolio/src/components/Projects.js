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
            <p>Hole in the Wall</p>
            </h2>
            <p>
              I recently challenged myself to build a game and learn the basics of Unreal Engine over a weekend. The end result was a game called Hole in the Wall, which 
              was inspired by other endless runner games like Subway Surfer and Temple Run. In the game, you take control of a golden cube and navigate through an endlessly generated
              level of obstacle walls while trying to beat your own high score.
            </p>
            <img 
              alt="Image of Game"
              className="mt-10 mb-10 max-w-full h-auto rounded-2xl"
              src="../holeinthewall.png">
            </img>

            <p>
              I began my Unreal journey by following online tutorials and YouTube videos, which helped me create simple game mode and actor classes in C++. 
              Through this, I learned how to interact with the engine using code and gained an understanding of core concepts such as an actor's lifecycle,
              the player controller, and camera components. Starting with C++ felt natural since I was already comfortable with the language; however, I also 
              explored Unreal Engine's Blueprints, which are powerful visual scripting tools that use node-based graphs to program gameplay. I used Blueprints extensively 
              for the login and signup widgets and to integrate with the Azure PlayFab API for player authentication and statistic tracking.
              Check out the video below to see some gameplay:
            </p>
            <div class="flex justify-center items-center p-8">
              <iframe width="840" height="472" src="https://www.youtube.com/embed/ti59RiNlibM?si=O0D0pSsuFpobF9ZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
            <p>
              Working on this game was loads of fun and there are still many things I'd like to add in the future such as a leaderboard system and more obstacle variety.
              I'm also eager to sink my time into a larger game project with Unreal. Maybe a fighting game? Or a top-down RPG?
            </p>
        </div>
        <div>
        <h2 class="sm:text-2xl text-3xl font-medium title-font mb-4 mt-10 underline hover:text-white">
            <a href="https://github.com/Nicethanman/Swapple">Swapple</a>
            </h2>
            <p>
              This is a mobile app I am currently working on called Swapple. The app allows you to create a profile and upload photos 
              of your belongings that you want to trade with others. You can then browse other profiles and propose trades between your belongings
              and their belongings. The app was written in TypeScript with a frontend built with React-Native. The backend makes use of
              Google Firebase services such as Firebase Authentication, Realtime Database and Storage to provide reliable and secure data storage.
            </p>
            <img 
              alt="Image of App"
              className="mt-10 mb-10 max-w-full h-auto rounded-2xl"
              src="../swapple sample image.png">
            </img>
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
              <iframe width="840" height="472" src="https://www.youtube.com/embed/OftXvM14kBY?si=XBU21Sz63md3NEH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div>
          <h2 className="sm:text-2xl text-3xl font-medium title-font mb-4 underline hover:text-white">
            <a href="https://github.com/Nicethanman/Tune-Critic">Tune Critic</a>
          </h2>
          <p>This is a music review application built with a django database. This was a great project that helped 
            develop my experience with fetch APIs as well as the Django REST framework. The application uses JWT authentication tokens to verify users through
            a login and register page. Additionally, I used the Spotify api to retrieve track data and displayed the results to a frontend built on React.
          </p>
          <div class="flex justify-center items-center p-8">
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