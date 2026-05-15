import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    year: 2025,
    title: 'GSEF 2025 Opening Keynote',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
    span: 'col-span-12 md:col-span-8 row-span-2'
  },
  {
    id: 2,
    year: 2024,
    title: 'Panel Discussion',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-12 md:col-span-4 row-span-1'
  },
  {
    id: 3,
    year: 2024,
    title: 'Networking Session',
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-12 md:col-span-4 row-span-1'
  },
  {
    id: 4,
    year: 2023,
    title: 'VIP Lounge',
    url: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-12 md:col-span-4 row-span-1'
  },
  {
    id: 5,
    year: 2023,
    title: 'Startup Pitch',
    url: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-12 md:col-span-4 row-span-1'
  },
  {
    id: 6,
    year: 2022,
    title: 'Tech Showcase',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-12 md:col-span-4 row-span-1'
  }
];

const years = ['All', 2025, 2024, 2023, 2022];

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredImages = selectedYear === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.year === selectedYear);

  return (
    <div className="w-full bg-[#F3F4F6] min-h-screen pt-12 pb-24 font-body">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="font-display font-extrabold text-[#111827] text-4xl mb-2">Gallery</h1>
            <p className="text-gray-500 font-medium">Moments from our past forums.</p>
          </div>
          
          {/* Year Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all ${
                  selectedYear === year 
                    ? 'bg-[#00A67E] text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[250px]">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className={`group relative overflow-hidden rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                selectedYear === 'All' ? image.span : 'col-span-12 md:col-span-4 row-span-1'
              }`}
            >
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="inline-block bg-[#00A67E] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-2">
                  {image.year}
                </div>
                <h3 className="text-white font-display font-bold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {filteredImages.length > 0 && (
          <div className="mt-12 text-center">
            <button className="bg-white border border-gray-200 text-navy font-bold text-[13px] px-8 py-3 rounded-full hover:bg-gray-50 hover:shadow-sm transition-all">
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
