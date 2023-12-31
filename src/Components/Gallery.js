import React from 'react'
import Navbar from './Navbar';
import img1 from '../gallery/educational.jpg'
import img2 from '../gallery/legal.jpg'
import img3 from '../gallery/food.jpg'
import img4 from '../gallery/medical.jpg'
import img5 from '../gallery/occupation.jpg'
import img6 from '../gallery/mangalyaneethi.jpg'

function Gallery() {
  return (
    
    <div>
        <Navbar/>
        <section id="gallery" class="parallax section" style={{backgroundImage:`url`}}>
    <div class="wrapsection">
        <div class="parallax-overlay" style={{backgroundColor: 'yellowgreen'}}></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 sol-sm-12">
                    <div class="maintitle">
                        <h3 class="section-title">Events Gallery</h3>
                        <p class="lead wow flipInX">
                        We Are A Hindu Humanitarian Organization Helping Children, Families, And Their Communities
Overcome Poverty And Injustice
                        </p>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <a href={img1} title="This is the description">
                        <img src={img1} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Education Support <b></b></span> 
                            <span class="camera"><i class="fa fa-camera"></i></span>
                            <div class="clearfix"></div>
                        </div>			
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img2} title="This is the description">
                    <img src={img2} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Legal support<b></b></span> 
                            <span class="camera"><i class="fa fa-link"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img3} title="This is the description">
                    <img src={img3} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Food supply <b></b></span> 
                            <span class="camera"><i class="fa fa-heart"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img4} title="This is the description">
                    <img src={img4} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Medicine supply <b></b></span> 
                            <span class="camera"><i class="fa fa-tachometer"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img5} title="This is the description">
                    <img src={img5} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Charity <b></b></span> 
                            <span class="camera"><i class="fa fa-microphone"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img6} title="This is the description">
                    <img src={img6} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">sanjeevani <b></b></span> 
                            <span class="camera"><i class="fa fa-coffee"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </section></div>
  )
}

export default Gallery