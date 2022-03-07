import React from 'react'
import "./Services.css"
import { RiCustomerServiceLine } from 'react-icons/ri';
import { BsDisplay } from 'react-icons/bs';
import { GiTrophyCup } from 'react-icons/gi';

const Services = () => {
    return (

        <div id="services">
            <main className="container-main">
                <div className="services-content">
                    <div className="row">
                        <div class="justify-content-center row">
                            <div class="col-md-8 col-lg-6">
                                <div class="title text-center mb-5">
                                    <h3 class="font-weight-normal text-dark service-heading">Our  <span class="text-warning">Service</span> </h3>
                                    <p class="text-muted">Maecenas tempus tellus eget condimentum rhoncus sem quam
                                        semper <br /> libero pulvinar hendrerit id lorem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="main-card">
                            <div className="card">
                                <div className="row">
                                    <div><RiCustomerServiceLine className="music-icon" /></div>
                                    <div class="service-box service-warning">
                                        <div class="mb-5"><i class="pe-7s-headphones service-icon"></i></div><h5 class="service-title text-dark font-weight-normal pt-1 mb-4">Awesome Support</h5>
                                        <p class="text-title service-subtitle mb-4">Et harum quidem rerum facilis expedita distinctio
                                            nam libero tempore cum quibusdam nobis.</p>
                                        <a class="right-icon" href="/"><span class="right-icon">→</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row">
                                    <div><BsDisplay className="music-icon" /></div>
                                    <div class="service-box service-warning">
                                        <div class="mb-5"><i class="pe-7s-headphones service-icon"></i></div><h5 class="service-title text-dark font-weight-normal pt-1 mb-4">Digital Design</h5>
                                        <p class="text-title service-subtitle mb-4">Et harum quidem rerum facilis expedita distinctio
                                            nam libero tempore cum quibusdam nobis.</p>
                                        <a class="right-icon" href="/"><span class="right-icon">→</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row">
                                    <div><GiTrophyCup className="music-icon" /></div>
                                    <div class="service-box service-warning">
                                        <div class="mb-5"><i class="pe-7s-headphones service-icon"></i></div><h5 class="service-title text-dark font-weight-normal pt-1 mb-4">Goal Business</h5>
                                        <p class="text-title service-subtitle mb-4">Et harum quidem rerum facilis expedita distinctio
                                            nam libero tempore cum quibusdam nobis.</p>
                                        <a class="right-icon" href="/"><span class="right-icon">→</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div>
    )
}

export default Services