import React from "react";

export const JsonLd: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SVS Constructions & Interiors",
    "image": "https://svsconstructions.com/images/logo.jpg",
    "@id": "https://svsconstructions.com",
    "url": "https://svsconstructions.com",
    "telephone": "+919940626796",
    "email": "svsconstructionspvtltd007@gmail.com",
    "priceRange": "₹620/sq.ft",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Sivakasi",
      "addressRegion": "Tamil Nadu",
      "postalCode": "626123",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.4533,
      "longitude": 77.7997
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://github.com/ManiprabhuG/SVS_Construction_Interiors"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the starting price for labour contract construction in Sivakasi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SVS Constructions offers labour contract construction starting from ₹620 per sq.ft across Sivakasi, Virudhunagar, Madurai, and Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        "name": "What services does SVS Constructions & Interiors provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer residential house construction, labour contract services, civil works, tiling, plumbing, electrical, painting, fireworks building construction, project planning, and building consultancy."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
