import React from 'react';
import Media from '../components/Media';

interface MediaPageProps {
  setCurrentPage?: (page: string) => void;
}

const MediaPage: React.FC<MediaPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen">
      <Media setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default MediaPage;