import React from 'react'
import '../CSS/yuvacracy.css'
function Navbar() {
  return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid" >
              <a  href="https://safiyanu-yuvacracy.vercel.app/"><h1 class="main-logo-name"><img src="https://res.cloudinary.com/deepcnbrz/image/upload/v1674058464/yuvacracy_degneg.jpg" class="main-logo"/> YuvaCracy </h1></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""><i class="fa-solid fa-bars"></i></span>
              </button>
              <div class="collapse navbar-collapse d-lg-flex flex-lg-row justify-content-lg-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link navbar-links" aria-current="page" href="https://safiyanu-yuvacracy.vercel.app/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar-links" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar-links" href="#">Motivation</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar-links" href="#">Teams</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar-links" href="#">Article</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar-links" href="#">Events</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar-links" href="#">Contact Us</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
    
  )
}

export default Navbar