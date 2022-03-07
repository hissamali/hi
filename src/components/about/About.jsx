import React from 'react'
import "./About.css"
import about from "../../images/about.svg"

const About = () => {
    return (

        <div id="about">
            <section className="container-section">
                <div className="about-content">
                    <h3 class="font-weight-normal text-dark about-heading">About  <span class="text-warning">Us</span></h3>
                    <br />
                    <p class="text-area">Maecenas tempus tellus eget condimentum rhoncus sem quam semper <br /> libero
                        pulvinar hendrerit id lorem.
                    </p>
                </div>
                <div className="body-section">
                    <div className="about-section">
                        <div className="about-img">
                            <img src={about} alt="about" className="about-pick" />
                        </div>
                        <div class="col-md-6 our-title">
                            <h6 class="text-dark font-weight-light f-20 mb-3">Our <span className="mission"> Mission </span></h6>
                            <p class=" font-weight-light mission-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi odio praesentium ex distinctio nesciunt nobis, saepe harum? Magni repellendus adipisci necessitatibus recusandae tempore voluptatum dolorem deserunt laboriosam, quos quisquam, consectetur rerum earum. Eaque recusandae eos aperiam molestiae, eligendi debitis minus commodi! Architecto amet quaerat voluptatibus quia voluptatem accusantium molestias laboriosam sunt! Sint dicta fuga earum autem rem saepe, voluptatibus debitis numquam quam nemo tempore quasi quos vel? Deleniti, necessitatibus!
                            </p>
                            <div className="btn-icon">
                                <button classNamebtn="">Find Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About