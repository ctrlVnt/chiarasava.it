
import { Mail } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const bgCirclesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(sectionRef.current, { opacity: 0, duration: 1.2 });

    if (window.innerWidth >= 1024) {
      tl.from(imageRef.current, { x: -100, opacity: 0, duration: 1 }, "-=0.8")
        .from([textRef.current, buttonRef.current], { x: 100, opacity: 0, duration: 1 }, "-=0.8")
        .from(titleRef.current, {y: -30, opacity: 0, duration: 1}, "-=0.8");
    } else {
      tl.from(imageRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.8")
        .from([textRef.current, buttonRef.current, titleRef.current], { y: 30, opacity: 0, duration: 1 }, "-=0.6");
    }

    tl.from(bgCirclesRef.current?.children, {
      scale: 0.6,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)",
    }, "-=1");
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section className="relative bg-gradient-to-b from-sky-100 from-10% via-cyan-100 via-80% to-red-100 to-90% pt-24 pb-32 overflow-hidden">
      <div ref={bgCirclesRef} className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute top-1/4 -right-1/4 w-80 h-80 bg-purple-200/40 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.1}deg)` }}
        />
        <div 
          className="absolute top-0 left-1/3 w-64 h-64 bg-indigo-200/30 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-8">

    <div ref={imageRef} className="flex flex-col justify-center lg:justify-end lg:flex-shrink-0">
      <img
        src="profile_entire.jpg"
        alt="profile.jpg"
        className="
          w-52 lg:w-80
          h-52 lg:h-full
          rounded-full
          mx-auto lg:mb-0 
          lg:rounded-3xl
          object-cover
          shadow-lg
          mb-0
        "
      />
      <p className='text-s opacity-50 mt-3'>Picture by Nicola Carissimi</p>
    </div>


    <div className="flex-1">
      <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Chiara Sava
      </h1>
      
      <p ref={textRef} className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0 mb-8">
        I am a Ph.D. student at Charles University in Prague and 
        I work under the supervision of{" "}
        <a
          className="text-cyan-600"
          href="https://www.karlin.mff.cuni.cz/~stovicek/index.php/en/homepage"
          target="_blank"
        >
          Jan Šťovíček
        </a>.
        <br>
        </br>
        <br>
        </br>
        My research focuses on the application of homotopy-theoretical methods to representation theory of finite dimensional algebras,
        with an emphasis on tilting theory. I mainly work with enhancements of triangulated categories 
        and I have recently begun exploring extensions of these methods to differential categories.
      </p>

      <div ref={buttonRef} className="flex flex-row justify-center lg:justify-start">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-cyan-600 text-white w-12 h-12 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center"
        >
          <Mail size={20} />
        </button>
      </div>
    </div>
    
  </div>
</div>

    </section>
  );
};

export default Hero;
