import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (

        <div id="footer">
            <div className="main-footer">
                <div className="">
                    <div class="col-lg-6">
                        <div class="text-center mt-5 mb-4">
                            <h6 class="text-muted font-weight-normal footer-title">Subscribe To Our Newsletter For New Content, <br /> <span class="d-block mt-2">Update And Giveaways!</span></h6>
                        </div>
                        <br />
                        <div class="text-center subscribe-form mt-4 form-title"><form action="#" class=""><input type="text" placeholder="Your Email Address..." className="input-form" />
                            <button type="submit" class="btn btn-warning subscribe">Subscribe</button></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer