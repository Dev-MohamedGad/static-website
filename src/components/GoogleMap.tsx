import React from 'react';
import { MapPin } from '../icons';
import { useLanguage } from '../context/LanguageContext';

interface GoogleMapProps {
  height?: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ height = '400px', className = '' }) => {
  const { t } = useLanguage();

  // Office coordinates: 30°04'09.8"N 31°13'11.4"E
  const latitude = 30.0693906;
  const longitude = 31.2198333;
  
  // Create Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA0JzA5LjgiTiAzMcKwMTMnMTEuNCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg`;

  const handleGetDirections = () => {
    // Use the provided coordinates
    window.open('https://www.google.com/maps/place/30%C2%B004\'09.8%22N+31%C2%B013\'11.4%22E/@30.0693906,31.2172584,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0693906!4d31.2198333?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <div className={`relative bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-lg ${className}`} style={{ height }}>
      {/* Google Maps Embed */}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
        title="Shehab Law Firm Location"
      />
      
      {/* Mobile: Simple button */}
      <div className="absolute top-2 left-2 sm:hidden">
        <button
          onClick={handleGetDirections}
          className="bg-brand-600 hover:bg-brand-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-xs shadow-lg flex items-center"
        >
          <MapPin className="w-3 h-3 mr-1" />
          {t('common.getDirections')}
        </button>
      </div>

      {/* Desktop: Full card */}
      <div className="hidden sm:block absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-56">
        <div className="flex items-center mb-1">
          <div className="w-6 h-6 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center mr-2">
            <MapPin className="w-3 h-3 text-white" />
          </div>
          <h3 className="text-sm font-semibold mx-2 text-brand-800">{t('office.visitOffice')}</h3>
        </div>
        <p className="text-xs text-brand-600 mb-1">{t('office.findUs')}</p>
        <p className="text-xs text-brand-500 mb-2">{t('office.coordinates')}<br/>{t('office.cityCountry')}</p>
        <button
          onClick={handleGetDirections}
          className="bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors duration-200 text-xs w-auto"
        >
          {t('common.getDirections')}
        </button>
      </div>
    </div>
  );
};

export default GoogleMap;
