import React from 'react';
import andres from '../../assets/images/andres.jpg'

const About = () => {
    return (
        <div id="container" class="p-20 w-auto flex px-24 justify-center relative">
    
            <div id="container" class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
                <div class="mr-10">
                    <img
                    class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                    src={andres}
                    alt="image of myself"
                    />
                </div>
                <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
                    <h1 class="text-white font-bold text-3xl mt-6 mb-8">
                        Hey I'm Andrew
                    </h1>

                    <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                    I'm Andrew, and I've been captivated by the esoteric arts since I was a child. 
                    My fascination with the mysteries of the universe started early, and I spent my
                    youth exploring astrology, mysticism, and spiritual practices.
                    Tarot quickly became my favorite tool, and over the years,
                    I've developed a deep understanding of the cards. 
                    I blend intuition with my knowledge of esoteric traditions to offer guidance and insight.
                    I'm always excited to share what I've learned and connect with those seeking 
                    clarity and understanding in their lives.
                    </p>                  
                </div>
            </div>
        </div>
    );
};

export default About;
