import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Script from "next/script";
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>the Basics</title>
        <meta name="description" content="A series of live cohort which intents to teach you the basics from scratch" />
  
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></Script>


      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand" href="#" id='logo'>theBasics</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">Courses</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
    </nav>


    <main>

        <div className={styles.heroBg}>
          <div className="col-md-9 m-auto">
            <div className="row py-5 px-4">
                <div className="col-md-6 align-self-center order-md-0 order-1 p-5">
                    <h1 className={styles.heroTxt}>Learn by Making and Breaking!</h1>
                    <p className="mb-5">a series of live cohort which intents to teach the very basics knowledges which has very importance in succedding life. </p>
                    <a href="https://www.getrevue.co/profile/thebasics" className={styles.heroBtn}>Join Waitlist</a>
                </div>
                <div className="col-md-6 order-0 order-md-1">
                    <Image src="/hero-sc.svg" className="img-fluid"  width="750" height="500" alt="..."/>
                </div>
            </div>
        </div>
        </div>

        
        <div className="features-sc py-5 px-3">
            <div className="col-md-8 m-auto">
                <h2 className={styles.subHeading}>Our Features</h2>
   

                <div className="row">
                    <div className="col-md-3 col-11">
                        <div className="card border-0">
                            <Image src="/live-session.svg" className="card-img-top"  width="250" height="250" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Live Session</h5>
                                <p className='card-body text-muted text-center'>6 hours of live interactive sessions.</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 col-11">
                        <div className="card border-0">
                            <Image src="/resources.svg" className="card-img-top"  width="250" height="250" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Free Resources</h5>
                                <p className='card-body text-muted text-center'>Get access to many downloadable resources.</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 col-11">
                        <div className="card border-0">
                            <Image src="/projects.svg" className="card-img-top"  width="250" height="250" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Project Building</h5>
                                <p className='card-body text-muted text-center'>At the end build a website by your own.</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 col-11">
                        <div className="card border-0">
                            <Image src="/community.svg" className="card-img-top"  width="250" height="250" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Private Community</h5>
                                <p className='card-body text-muted text-center'>Join the private Discord community.</p>
                            </div>
                        </div>

                    </div>
                </div>


               
            

            </div>
        </div>


        <div className={styles.faqSc}>
            <div className="col-md-6 col-11 m-auto my-5">
                <h2 className={styles.subHeading}>Frequently asked Questions</h2>
                <p className={styles.description}>If you still have some questions, please feel free to <a href='mailto:mail.sachinsblog@gmail.com' className='text-decoration-none'>contact us</a> and we will gladly provide you with more detailed information about our process.</p>
    
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          What is the Basics?
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">the Basics is an online platform built to teach the very basics skills from scratch to any beginner via 90 minute live interactive sessions.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          How to enroll into Courses?
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Enrolling into the course is just easy as buying a book at Amazon. Pick the course you like, and click the Enroll button. Once you've successfully enrolled you'll receive a confirmation mail into your inbox.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          What if I miss a live session?
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">No worries, we got your back! All the sessions are recorded, and are posted privately on YouTube. You can watch it as many times as you like.</div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          Can I get refund?
                        </button>
                      </h2>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">No, For now we do not provide refunds.</div>
                      </div>
                    </div>

                  </div>
    
            </div>
    
        </div>

    
        

    </main>



    <footer className="bg-light py-4">
        <p className="text-center">Build with <i className="bi bi-heart-fill"></i> by <a href='https://sachinsblog.in/' className='text-decoration-none'>Sachin Sharma</a> </p>

        <nav className="nav justify-content-center">
            <a className="nav-link" href="#">Privacy Policy</a>
        </nav>

    </footer>




    </div>
  )
}
