import React from 'react';
import { MapPin } from '../icons';
import { useLanguage } from '../context/LanguageContext';

interface GoogleMapProps {
  height?: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ height = '400px', className = '' }) => {
  const { t } = useLanguage();

  // Placeholder for future Google Maps integration
  const handleGetDirections = () => {
    // Use the provided coordinates
    window.open('https://www.google.com/maps/place/30%C2%B004\'09.8%22N+31%C2%B013\'11.4%22E/@30.0693906,31.2172584,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0693906!4d31.2198333?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <div className={`relative bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 ${className}`} style={{ height }}>
      {/* Placeholder Map */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-brand-800 mb-2">Visit Our Office</h3>
          <p className="text-brand-600 mb-4">Find us at our location</p>
          <p className="text-sm text-brand-500 mb-4">30°04'09.8"N 31°13'11.4"E<br/>Cairo, Egypt</p>
          <button
            onClick={handleGetDirections}
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            {t('common.getDirections')}
          </button>
        </div>
      </div>
      
      {/* Future Google Maps API integration point */}
      <div id="google-map-container" className="w-full h-full hidden">
        {/* Google Maps will be rendered here */}
      </div>
    </div>
  );
};

export default GoogleMap;
