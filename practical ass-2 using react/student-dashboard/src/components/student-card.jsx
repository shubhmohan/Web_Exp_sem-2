import React from 'react';

export default function StudentCard({ student }) {
  const { name, course, year, cgpa, image } = student;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-72 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
      {/* Rectangular Image Wrapper */}
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-gray-100 border border-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </div>

      {/* Metadata Fields */}
      <div className="space-y-2 text-gray-600 text-left w-full px-2">
        <p className="text-base font-medium">
          <span className="text-gray-400 font-normal">Name:</span> {name}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-400 font-normal">Course:</span> {course}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-400 font-normal">Year:</span> {year}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-400 font-normal">CGPA:</span> {cgpa}
        </p>
      </div>
    </div>
  );
}