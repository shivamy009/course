
const CourseDetails= () => {
  return (
    <div className="flex-1 bg-white p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold">Blender 3D Fundamentals</h1>
          <p className="text-gray-600 mt-2">Learn the basics of 3D in Blender with a project-based approach.</p>
        </div>
        <img 
          src="https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg" 
          alt="Course Preview" 
          className="w-full lg:w-64 h-auto lg:h-64 object-cover rounded-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-gray-600 mt-4">
          Welcome to the exciting world of Blender 3D! In this comprehensive course, 
          we will dive into the fundamentals of Blender, equipping you with the essential 
          knowledge and skills to create stunning 3D projects.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Course Details</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-8 mt-4">
          <div className="mb-4 sm:mb-0">
            <strong className="block text-lg">128</strong>
            <span className="text-gray-600">Lessons</span>
          </div>
          <div className="mb-4 sm:mb-0">
            <strong className="block text-lg">56h 28m</strong>
            <span className="text-gray-600">Duration</span>
          </div>
          <div>
            <strong className="block text-lg">Beginner</strong>
            <span className="text-gray-600">Skill level</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-4">
          <details className="mb-4">
            <summary className="font-semibold text-gray-800 cursor-pointer">
              How long does it take to learn?
            </summary>
            <p className="mt-2 text-gray-600">It depends on your schedule and dedication, but most people complete it within a month.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold text-gray-800 cursor-pointer">
              Do I need prior 3D experience?
            </summary>
            <p className="mt-2 text-gray-600">No prior experience is required! The course is designed for beginners.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
