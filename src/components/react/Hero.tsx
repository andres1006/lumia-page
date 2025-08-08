import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  cta1Text: string;
  cta2Text: string;
  lang: "es" | "en";
}

interface HeroMediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

export default function Hero({
  title,
  subtitle,
  cta1Text,
  cta2Text,
  lang,
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroMedia: HeroMediaItem[] = [
    {
      type: "video",
      src: "/img-lumia/Videos/lumia1.mp4",
      poster: "/img-lumia/IMG_5830.jpg",
    },
    {
      type: "video",
      src: "/img-lumia/Videos/Lumia2.MP4",
      poster: "/img-lumia/IMG_5830.jpg",
    },
    {
      type: "video",
      src: "/img-lumia/Videos/Lumia3.MP4",
      poster: "/img-lumia/IMG_5830.jpg",
    },
  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMediaIndex((prevIndex) =>
        prevIndex === heroMedia.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change media every 8 seconds

    return () => clearInterval(timer);
  }, [heroMedia.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media Slideshow */}
      {heroMedia.map((media, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1500 ease-in-out "
          style={{
            opacity: index === currentMediaIndex ? 1 : 0,
          }}
        >
          {media.type === "image" ? (
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${media.src})`,
              }}
            />
          ) : (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={media.poster}
            >
              <source src={media.src} type="video/mp4" />
            </video>
          )}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-8 pb-16">
          <div className="max-w-2xl">
            {/* Slogan */}
            <p
              className={`text-2xl md:text-2xl lg:text-2xl text-gray-200 mb-2 leading-relaxed max-w-xl transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {subtitle}
            </p>

            {/* CTA Minimalista */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href={lang === "es" ? "/contacto" : "/en/contact"}
                className="underline underline-offset-4 inline-flex items-center font-semibold rounded-lg text-white transition-colors duration-200 hover:font-extrabold "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                {cta1Text}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
