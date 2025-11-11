import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Showcase = () => {

  const isTablet = useMediaQuery({query: '(max-width: 1024px)'})

  useGSAP(()=>{
      if(!isTablet){
         const timeline = gsap.timeline({
             scrollTrigger: {
                 trigger: '#showcase',
                 start: 'top top',
                 end: 'bottom top',
                 scrub: true,
                 pin: true
             }
         })

         timeline.to('.mask img',{
            transform: 'scale(1.1)'
         }).to('.content',{
            opacity: 1,
            y: 0,
            ease: 'power1.in'
         })
      }
  },[isTablet])

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket chip</h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                .M4 powers
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                labore optio dolore est unde aliquam recusandae, aspernatur odit
                blanditiis officiis molestias nisi excepturi totam numquam fugit
                saepe ratione consequuntur et.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                molestias pariatur fugiat quidem ipsam ea, hic accusantium!
                Ipsum, officia obcaecati, assumenda molestias quos incidunt aut
                tempora iusto, iure deserunt mollitia voluptatum corporis libero
                pariatur facilis nihil? Hic vitae ratione tempore laborum amet
                distinctio nulla porro nemo! Et perferendis delectus porro!
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>
          <div className="max-w-3xs space-y-4">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
