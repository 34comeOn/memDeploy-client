import React from "react";
import './style.scss';

export const AboutPage = () => {
    return(
        <div className='about-page--container'>
            <h1 className='about-page--caption'>
                About method
            </h1>
            <div className='about-page--text__wrapper'>
                <p className='about-page--text'>
                    Our method of memorization is based on the study of memory by German psychologist Hermann Ebbinghaus.
                </p>
                <p className='about-page--text'>
                    For effective memorization, it is necessary to repeat the material with a certain periodicity.
                </p>
                <p className='about-page--text'>
                    Our app helps you keep track of the material that needs to be repeated at the moment to make progress outstanding!
                </p>
            </div>
        </div>
    )
}