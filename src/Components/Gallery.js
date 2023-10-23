import React from 'react'
import img1 from '../gallery/educational.jpg'
import img2 from '../gallery/legal.jpg'
import img3 from '../gallery/food.jpg'
import img4 from '../gallery/medical.jpg'
import img5 from '../gallery/occupation.jpg'
import img6 from '../gallery/mangalyaneethi.jpg'

function Gallery() {
  return (
    <div><section id="gallery" class="parallax section" style={{backgroundImage:`url`}}>
    <div class="wrapsection">
        <div class="parallax-overlay" style={{backgroundColor: 'yellowgreen'}}></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 sol-sm-12">
                    <div class="maintitle">
                        <h3 class="section-title">Events Gallery</h3>
                        <p class="lead wow flipInX">
                            Have a look at your past events gallery, see how much fun we have while helping people all over the world. Join our community today!
                        </p>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <a href={img1} title="This is the description">
                        <img src={img1} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">This is <b>awesome</b></span> 
                            <span class="camera"><i class="fa fa-camera"></i></span>
                            <div class="clearfix"></div>
                        </div>			
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img2} title="This is the description">
                    <img src={img2} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Great <b>marathon</b></span> 
                            <span class="camera"><i class="fa fa-link"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img3} title="This is the description">
                    <img src={img3} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Running <b>miles</b></span> 
                            <span class="camera"><i class="fa fa-heart"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img4} title="This is the description">
                    <img src={img4} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Young <b>volunteers</b></span> 
                            <span class="camera"><i class="fa fa-tachometer"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img5} title="This is the description">
                    <img src={img5} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Charity <b>concerts</b></span> 
                            <span class="camera"><i class="fa fa-microphone"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href={img6} title="This is the description">
                    <img src={img6} alt="" class="image-responsive"/>
                        <div class="description">
                            <span class="caption">Generous <b>sponsors</b></span> 
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