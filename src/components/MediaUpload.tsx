import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon, Video } from 'lucide-react';

interface MediaUploadProps {
  onImagesChange: (urls: string[]) => void;
  onVideoChange: (url: string) => void;
}

export function MediaUpload({ onImagesChange, onVideoChange }: MediaUploadProps) {
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState('');
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newUrls]);
    
    // In a real app, you would upload these files to a server
    // For now, we'll just use the URLs directly
    const imageUrls = files.map(file => URL.createObjectURL(file));
    const newImages = [...images, ...imageUrls];
    setImages(newImages);
    onImagesChange(newImages);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload this file to a server
      // For now, we'll just use the URL directly
      const videoUrl = URL.createObjectURL(file);
      setVideo(videoUrl);
      onVideoChange(videoUrl);
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviewUrls(newPreviewUrls);
    onImagesChange(newImages);
  };

  const removeVideo = () => {
    setVideo('');
    onVideoChange('');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Images
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewUrls.map((url, index) => (
            <div key={index} className="relative group">
              <img
                src={url}
                alt={`Property ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={16} />
              </button>
            </div>
          ))}
          <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-32 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
            <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Add Images</span>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Video Tour
        </label>
        {video ? (
          <div className="relative group">
            <video
              src={video}
              controls
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              onClick={removeVideo}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-48 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
            <Video className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Add Video Tour</span>
            <input
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleVideoChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}