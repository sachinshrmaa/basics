import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>the Basics</title>
        <meta name="description" content="a series of live cohort which intents to teach the very basics knowledges which has very importance in succedding life." />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></Script>


      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
          <a class="navbar-brand" href="#" id='logo'>theBasics</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link" href="#">Courses</a>
              <a class="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
    </nav>


    <main>

        <div className={styles.heroBg}>
          <div class="col-md-9 m-auto">
            <div class="row py-5 px-4">
                <div class="col-md-6 align-self-center order-md-0 order-1 p-5">
                    <h1 className={styles.heroTxt}>Learn by Making and Breaking!</h1>
                    <p class="mb-5">    a series of live cohort which intents to teach the very basics knowledges which has very importance in succedding life. </p>
                    <a href="https://www.getrevue.co/profile/thebasics" className={styles.heroBtn}>Join Waitlist</a>
                </div>
                <div class="col-md-6 order-0 order-md-1">
                    <img src="./hero-sc.svg" class="img-fluid hero-img" />
                </div>
            </div>
        </div>
        </div>

        
        <div class="features-sc py-5 px-3">
            <div class="col-md-8 m-auto">
                <h2 className={styles.subHeading}>Our Features</h2>

                <div class="row">
                    <div class="col-md-3 col-11">
                        <div class="card border-0">
                            <img src="./live-session.svg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Live Session</h5>
                                <p className='card-body text-muted'>this is a dummy subtutie of few lines.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 col-11">
                        <div class="card border-0">
                            <img src="./resources.svg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Free Resources</h5>
                                <p className='card-body text-muted'>this is a dummy subtutie of few lines.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 col-11">
                        <div class="card border-0">
                            <img src="./projects.svg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Project Building</h5>
                                <p className='card-body text-muted'>this is a dummy subtutie of few lines.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 col-11">
                        <div class="card border-0">
                            <img src="./community.svg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Private Community</h5>
                                <p className='card-body text-muted'>this is a dummy subtutie of few lines.</p>
                            </div>
                        </div>

                    </div>
                </div>


               
            

            </div>
        </div>


        <div className={styles.faqSc}>
            <div class="col-md-6 col-11 m-auto my-5">
                <h2 className={styles.subHeading}>Frequently asked Questions</h2>
    
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          What is the Basics?
                        </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          How to enroll into Courses?
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          What if I miss a live session?
                        </button>
                      </h2>
                      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                      </div>
                    </div>
                  </div>
    
            </div>
    
        </div>

    
        

    </main>



    <footer class="bg-light py-4">
        <p class="text-center">Build with <i class="bi bi-heart-fill"></i> by Sachin</p>

        <nav class="nav justify-content-center">
            <a class="nav-link" href="#">Privacy Policy</a>
        </nav>

    </footer>




    </div>
  )
}
