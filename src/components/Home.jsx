import React from 'react'
import '../styles/Home.scss'
import vg from '../images/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
function Home() {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>who we are?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis optio beatae. Quo ab, animi odio necessitatibus distinctio maiores fugit deleniti velit rerum corporis, blanditiis iste sunt eligendi alias vel!
                        Laboriosam quos cumque unde nulla optio officiis, voluptatibus provident ipsam est ullam odio necessitatibus, voluptatem sequi velit placeat, illum deleniti. Voluptatem ullam labore impedit repellendus officia quae accusamus placeat distinctio.
                        Veniam, quam eveniet. Consequatur, esse dolorem magni libero earum voluptatem temporibus ipsa repudiandae, quaerat iusto, tempora sapiente odit. Minima explicabo deserunt nesciunt quod eius eveniet eum necessitatibus aut quaerat unde.</p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s"
                        }}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay:"0.5s"
                        }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay:"0.7s"
                        }}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay:"1s"
                        }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home