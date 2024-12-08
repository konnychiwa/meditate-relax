<a id="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<h3 align="center">React.js</h3>

<div align="center">
  <a href="https://it.legacy.reactjs.org/">
    <img src="public/assets/images/reactLogo.png" alt="Logo" width="200" >
  </a>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://meditate-pak.netlify.app/)

The Idea of the project started by having the possibility to use 3D Models in my website, by learning react-three-fiber. Something new that is not common everywhere, but is something that I really liked from the beginning, that has the possibility to create cool website. In fact I merged this 3D feature with one of my passion, building on a videogames, in this case Minecraft, with my immagination I can add block in the game and transfer the build on the website. Than with gsap, that is a framework JavaScript Animation library I started learning simple animation for example the title. Finally I started learning Tailwind CSS, a simple way, different from Bootstrap to personalize your website

The website is simple, it isn’t really complicated or impressive, but it’s something to learn from, something that I’m proud to have built from scratch. I have a lot to improve, but it’s a really good start. 
I used gsap to animate the main title, that appear a little bit after the 3D model, same with the timer’s title and for the carousel’s title I made that it appears after you first go to the section by moving below the screen.
The timer’s component uses the useState hook to store the state of the timer, including whether it has started, whether it is paused, and the current hours, minutes, and seconds. It also uses the useEffect hook to set up and clear the timer interval when the component mounts and unmounts. The handleStart, handlePause, handleResume, and handleReset functions handle the respective button clicks.
The carousel is a really basic image slider, the component uses the useState hook to keep track of the current slide index.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![React][React.js]][React-url]
* [![Vite]][Vite-url]
* [![Tailwind][TailwindCSS]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

You can visit the website at this link: https://meditate-pak.netlify.app/, or
in this section you will find out how to install the website on your PC

### Prerequisites

How to install the prerequisites if you have never made something like this:
* open your terminal
  ```sh
  npm install npm@latest -g
  ```

### Installation

How to use the website:

1. Clone the repo in the terminal
   ```sh
   git clone https://github.com/konnychiwa/meditate-relax.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the website on your PC
   ```sh
   npm run dev
   ```
4. Open the website: 
   `
   ctrl click the link that appear in the terminal
   `

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pamoda Angelo Konara - angelokonara04@gmail.com

My Repository: https://github.com/konnychiwa?tab=repositories

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

In this space I have added all the useful link that I used to learn

* [React](https://it.legacy.reactjs.org/)
* [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)
* [Tailwind CSS](https://tailwindcss.com/)
* [GSAP](https://gsap.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pamoda-angelo-konara/
[product-screenshot]: public/assets/images/product.png
[React.js]: https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff
[Vite-url]: https://vite.dev/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
