import React from 'react'

const TestimonialSingle = ({ name, designation }) => {

    return (
        <div class="testimonial-item">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="testimonial-item-icon mx-auto">
                    <p class="testimonial-item-icon-design">
                        99
                    </p>
                </div>
                <p class="testimonial-item-pera">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                </p>
                <h4 class="testimonial-item-title">
                    {name} <br></br>
                    <small class="testimonial-item-title-side">
                        {designation}
                    </small>
                </h4>
            </div>
        </div>
    )
}

export default TestimonialSingle;
