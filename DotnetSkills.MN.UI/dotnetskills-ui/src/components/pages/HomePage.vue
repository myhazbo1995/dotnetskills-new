<template>
    <section class="pt-page" data-id="home">
      <div class="section-inner start-page-content">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-4">
              <div class="photo">
                <img :src="require('@/assets/images/main_photo.jpg')" alt="Main Photo">
              </div>
            </div>
            <div class="col-sm-8 col-md-8 col-lg-8">
              <div class="title-block">
                <h1>Mykhailo Nohas</h1>
                <div class="owl-carousel text-rotation">
                  <div class="item">
                    <div class="sp-subtitle">.Net Developer</div>
                  </div>
                  <div class="item">
                    <div class="sp-subtitle">Backend-developer</div>
                  </div>
                </div>
              </div>
              <div class="social-links">
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="page-content">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6">
              <div class="about-me">
                <div class="block-title">
                  <h3>About <span>Me</span></h3>
                </div>
                <p>Hello! <br> My name is Mykhailo Nohas. <br> Senior .Net developer with more than 8 years of commercial experience.</p>
              </div>
              <div class="download-resume">
                <a href="CV.pdf" target="_blank" class="btn btn-secondary">Download Resume</a>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <ul class="info-list">
                <li><span class="title">Age</span><span class="value">27</span></li>
                <li><span class="title">Residence</span><span class="value">Poland</span></li>
                <li><span class="title">Nationality</span><span class="value">Ukrainian</span></li>
                <li><span class="title">e-mail</span><span class="value"><a href="mailto:myhazbo@gmail.com">myhazbo@gmail.com</a></span></li>
                <li><span class="title">Phone</span><span class="value">+48 793 354 008</span></li>
                <li><span class="title">Freelance</span><span class="value available">Available</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    // Component logic and data can be added here if needed
  }
  </script>
  
  <style scoped>
  /* Component-specific styles can be added here */
  </style>