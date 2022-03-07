import React from 'react'
import "./Clients.css"
import { DiAtom } from 'react-icons/di';


const Clients = () => {
    return (

        <div id="Clients">
            <div className="clients-container">
                <div className="main-title">
                    <h3 class="font-weight-normal text-dark client-head">Our  <span class="text-warning">Clients</span></h3>
                    <p class="text-muted clients-title">Maecenas tempus tellus eget condimentum rhoncus sem quam semper <br /> libero pulvinar hendrerit id lorem.</p>
                    <div className="clients-main-section">
                        <div className="row">
                            <div className="Card">
                                <div class="col-lg-4">
                                    <h3 class="font-weight-normal mt-3 line-height-1_4  clients-info">Some Words From Our <br /> <br /> <span class="font-weight-medium text-warning">Happy Clients </span></h3><br />
                                    <p class="text-muted-title">Itaque earum rerum tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur.
                                    </p>
                                    <br /> <DiAtom className="client-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="">
                                <div className="Card">
                                    <div class="col-lg-4">
                                        <h3 class="font-weight-normal mt-3 line-height-1_4  clients-info">Some Words From Our <br /> <br /> <span class="font-weight-medium text-warning">Happy Clients </span></h3><br />
                                        <p class="text-muted-title">Itaque earum rerum tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur.
                                        </p>
                                        <br /> <DiAtom className="client-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients