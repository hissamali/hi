import React from 'react'
import "./Features.css"
import feature from "../../images/feature.png"
import feature1 from "../../images/feature1.png"
import { MdLaptopMac } from 'react-icons/md';
import { BsPersonBoundingBox } from 'react-icons/bs';

const Features = () => {
    return (

        <div id="features">
            <section className="feature-container">
                <div className="body">
                    <div className="feature-head">
                        <h3 class="font-weight-normal text-dark feature-text">Our  <span class="text-warning">Features</span></h3>
                        <p class="text-feature">Maecenas tempus tellus eget condimentum rhoncus sem quam semper <br /> libero pulvinar hendrerit id lorem.</p>
                    </div>
                    <div className="main-section">
                        <div className="feature-image">
                            <img src={feature} alt="feature" className="feature-img" />
                        </div>
                        <div className="feature-left">
                            <div className="feature-icon"><MdLaptopMac className="md-laptop" /></div>
                            <h5 class="text-dark font-weight-normal mb-3 pt-3 active">Activity Reporting</h5>
                            <p class="text-para">Et harum quidem rerum facilise expedita distinctio nam libero tempore cum soluta nobis as
                                eligendi option cumque nihil quis nostrum exercitationem impedit minus omnis repellendus.</p>
                            <a class="f-16 text-warning " href="/">Read More <span class="right-icon">→</span></a>
                        </div>
                    </div>
                    <div className="feature-section">
                        <div className="feature-form">
                            <div className="feature-icon"><BsPersonBoundingBox className="md-laptop" /></div>
                            <h5 class="text-dark font-weight-normal mb-3 pt-3 active">Activity Reporting</h5>
                            <p className="text-para mb-3 f-15">Et harum quidem rerum facilise expedita distinctio nam libero tempore cum soluta <br /> nobis as
                                eligendi optio cumque nihil quis nostrum exercitationem impedit minus <br /> omnis repellendus.</p>
                            <a class="f-16 text-warning " href="/">Read More <span class="right-icon ml-2">→</span></a>
                        </div>
                        <div className="feature-image">
                            <img src={feature1} alt="feature1" className="feature-img-w" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features