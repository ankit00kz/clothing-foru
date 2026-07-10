'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function ProductImageUpload() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview((prev) => [...(prev || []), event.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      // Example: Upload to Cloudinary
      const uploadedUrls = [];
      
      for (const file of preview) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'clothing-store'); // Setup in Cloudinary

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        const data = await response.json();
        uploadedUrls.push(data.secure_url);
      }

      console.log('Uploaded URLs:', uploadedUrls);
      setPreview(null);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="glass p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Upload Product Images</h3>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
        />

        {/* Preview Grid */}
        {preview && preview.length > 0 && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {preview.map((img, idx) => (
              <div key={idx} className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-purple-300">
                <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!preview || uploading}
          className="mt-6 btn-gradient disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : `Upload ${preview?.length || 0} Images`}
        </button>
      </div>
    </div>
  );
}
