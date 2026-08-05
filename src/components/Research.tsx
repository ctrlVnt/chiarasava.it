import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";

const Research = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const publicationsRef = useRef<HTMLDivElement>(null);
  const preprintsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.2 });
    
    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    if (publicationsRef.current) {
      tl.from(publicationsRef.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");
    }

    if (preprintsRef.current) {
      tl.from(preprintsRef.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");
    }
  }, []);


  const publications = [  
    {
      title: "Derivations as Algebras",
      authors: [
        { name: "J.S. Pacaud Lemay", link: "https://sites.google.com/view/jspl-personal-webpage/" },
        { name: "C. Sava", link: "#" }
      ],
      journal: "J. London Math. Soc., 114: e70650.",
      year: "(2026)",
      link: "https://doi.org/10.1112/jlms.70650"
    },
    {
      title: "∞-Dold-Kan correspondence via representation theory",
      authors: [
        { name: "C. Sava", link: "#" }
      ],
      journal: "Algebras and Representation Theory",
      year: "(2026)",
      link: "https://doi.org/10.1007/s10468-026-10388-3"
    }
  ];

  
  const preprints = [
    {
      title: "The derivator of a dg-category",
      authors: [
        { name: "F. Genovese", link: "https://fgenovese1987.github.io/" },
        { name: "C. Sava", link: "#" },
        { name: "with an appendix by J. Šťovíček", link: "https://www.karlin.mff.cuni.cz/~stovicek/index.php/en/homepage" }
      ],
      journal: "arXiv preprint",
      year: "(2025)",
      link: "https://arxiv.org/abs/2508.02612"
    },
    {
      title: "Equivalent definitions of the preprojective algebra",
      authors: [
        { name: "C. Sava", link: "#" }
      ],
      journal: "arXiv preprint",
      year: "(2022)",
      link: "https://arxiv.org/abs/2203.00792"
    },
    {
      title: "Differential graded algebras in differential categories",
      authors: [
        { name: "J.S. Pacaud Lemay", link: "https://sites.google.com/view/jspl-personal-webpage/" },
        { name: "C. Sava", link: "#" }
      ],
      journal: "work in progress",
      year: "",
      link: "#"
    },
  ];

  const renderAuthors = (authorsList: { name: string; link: string }[]) => {
    return authorsList.map((author, index) => {
      const isLast = index === authorsList.length - 1;
      const authorElement = author.link && author.link !== "#" ? (
        <a 
          href={author.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-red-600 hover:underline"
        >
          {author.name}
        </a>
      ) : (
        <span>{author.name}</span>
      );

      return (
        <span key={index}>
          {authorElement}
          {!isLast && ", "}
        </span>
      );
    });
  };

  return (
    <section ref={sectionRef} id="research" className="bg-red-100 relative pb-16 bg-S overflow-hidden">
      {/* Animated Mathematical Symbols Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-10 left-10 text-6xl text-red-400 font-serif opacity-50"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        >
          ∑
        </div>
        <div 
          className="absolute top-32 right-20 text-5xl text-red-400 font-serif opacity-60"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.08}deg)` }}
        >
          ∫
        </div>
        <div 
          className="absolute bottom-40 left-1/4 text-7xl text-red-400 font-serif opacity-40"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        >
          π
        </div>
        <div 
          className="absolute bottom-20 right-10 text-4xl text-indigo-100 font-serif opacity-70"
          style={{ transform: `translateY(${scrollY * -0.08}px) rotate(${scrollY * 0.06}deg)` }}
        >
          ∞
        </div>
        <div 
          className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-red-400 rounded-full opacity-30"
          style={{ transform: `translateY(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})` }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-red-400 transform rotate-45 opacity-40"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${45 + scrollY * 0.1}deg)` }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research</h2>
        </div>

        <div className="space-y-12">
          {/* Sezione Pubblicazioni */}
          {publications.length > 0 && (
            <div ref={publicationsRef}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Publications</h3>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-card border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    
                    {/* Titolo come Link (se presente) */}
                    {pub.link !== "#" ? (
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-red-600 hover:underline transition-colors duration-150 block"
                        >
                          {pub.title}
                        </a>
                      </h4>
                    ) : (
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">{pub.title}</h4>
                    )}

                    {/* Autori */}
                    <p className="text-gray-700 text-sm mb-1">
                      {renderAuthors(pub.authors)}
                    </p>

                    {/* Journal e Anno */}
                    <p className="text-gray-500 text-xs italic">
                      {pub.journal} {pub.year && `• ${pub.year}`}
                    </p>

                    {pub.link === "#" && (
                      <p className="text-xs text-gray-400 mt-2 font-medium">
                        Ongoing works... 🚧
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sezione Preprints */}
          {preprints.length > 0 && (
            <div ref={preprintsRef}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Preprints</h3>
              <div className="space-y-4">
                {preprints.map((prep, index) => (
                  <div key={index} className="bg-card border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    
                    {/* Titolo come Link (se presente) */}
                    {prep.link !== "#" ? (
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">
                        <a 
                          href={prep.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-red-600 hover:underline transition-colors duration-150 block"
                        >
                          {prep.title}
                        </a>
                      </h4>
                    ) : (
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">{prep.title}</h4>
                    )}

                    {/* Autori */}
                    <p className="text-gray-700 text-sm mb-1">
                      {renderAuthors(prep.authors)}
                    </p>

                    {/* Journal e Anno */}
                    <p className="text-gray-500 text-xs italic">
                      {prep.journal} {prep.year && `• ${prep.year}`}
                    </p>

                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Research;
