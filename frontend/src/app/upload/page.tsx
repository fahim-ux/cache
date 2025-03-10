"use client";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";

export default function Home() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  }, []);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };
  const deleteFile = (indexToDelete: number) => {
    setFiles(files.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="min-h-screen w-full bg-repeat bg-center flex items-center justify-center overflow-auto py-10 px-4 ">
      <div className="bg-[#edf2f4] bg-opacity-90 rounded-lg shadow-xl p-8 max-w-2xl w-[80rem] h-fit-content mt-[8rem] ">
        <h1 className="text-3xl font-mono text-[#457b9d] text-center mb-6">Upload Files</h1>
        
        {/* Hidden file input */}
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
        />
        
        {/* Drag and drop area */}
        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center flex items-center justify-center
            ${dragActive ? 'border-[#457b9d] bg-blue-50' : 'border-[#ef233c] bg-white'}
            transition-all duration-300 ease-in-out mb-6`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-lg text-gray-700 font-mono">
              Drag and drop files here, or 
              <button 
                onClick={openFileDialog}
                className="text-blue-500 font-medium hover:text-blue-600 focus:outline-none ml-1 cursor-pointer"
              >
                browse
              </button>
            </p>
            <p className="text-sm text-gray-500 font-mono">Supported formats: JPG, PNG, GIF, PDF</p>
          </div>
        </div>
        
        {/* Upload button */}
        <div className="flex justify-center ">
          <button 
            onClick={openFileDialog}
            className="bg-[#3d5a80] hover:bg-[#003049] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-mono cursor-pointer"
          >
            Select Files
          </button>
        </div>
        
        {/* File list */}
        {files.length > 0 && (
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-mono text-[#3d5a80] mb-3">Selected Files</h2>
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between bg-[#ffffff] p-3 rounded-lg">
                  <div className="flex items-center flex-grow">
                    <div className="text-blue-500 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="truncate max-w-xs text-[#3d5a80]">{file.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-3">{(file.size / 1024).toFixed(2)} KB</span>
                    <button 
                      onClick={() => deleteFile(index)}
                      className="text-[#ef233c] hover:text-red-700 transition-colors focus:outline-none cursor-pointer"
                      aria-label="Delete file"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <button 
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out w-full font-mono cursor-pointer"
            >
              Upload {files.length} {files.length === 1 ? 'File' : 'Files'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
