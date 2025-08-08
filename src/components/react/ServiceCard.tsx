import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  imageBackground?: string;
  featured?: boolean;
  lang: "es" | "en";
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  imageBackground,
  featured = false,
  lang,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const patternUrl = `data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-luxury ${
        featured
          ? "bg-gradient-gold text-white shadow-gold"
          : "bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${imageBackground}")`,
            opacity: 0.5,
          }}
        ></div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Star className="w-5 h-5 text-white fill-current" />
          </div>
        </div>
      )}

      <div className="relative z-10 p-8">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
            featured
              ? "bg-white/20 backdrop-blur-sm"
              : "bg-primary-gold/10 group-hover:bg-primary-gold/20"
          }`}
        >
          <span
            className={`text-3xl transition-all duration-300 ${
              featured
                ? "filter grayscale-0"
                : "filter grayscale group-hover:grayscale-0"
            }`}
          >
            {icon}
          </span>
        </div>

        {/* Content */}
        <h3
          className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            featured
              ? "text-white"
              : "text-gray-900 group-hover:text-primary-gold"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-lg leading-relaxed mb-8 ${
            featured ? "text-white/90" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* CTA */}
        <a
          href={href}
          className={`inline-flex items-center font-semibold transition-all duration-300 ${
            featured
              ? "text-white hover:text-white/80"
              : "text-primary-gold hover:text-primary-gold-dark"
          }`}
        >
          {lang === "es" ? "Conoce más" : "Learn more"}
          <ArrowRight
            className={`ml-2 w-5 h-5 transition-all duration-300 ${
              isHovered ? "translate-x-2" : "translate-x-0"
            }`}
          />
        </a>
      </div>

      {/* Hover Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-primary-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          featured ? "hidden" : ""
        }`}
      ></div>
    </div>
  );
}
