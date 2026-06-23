import React from 'react';
import StudentCard from './StudentCard';
import { studentsData } from '../data/students';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Section Header */}
      <h1 className="text-4xl font-semibold text-gray-700 mb-12 tracking-wide">
        Student Profile Dashboard
      </h1>

      {/* Flex/Grid Wrapper for standard presentation spacing */}
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl w-full">
        {studentsData.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}