import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certificates = [
    {
      title: "DSA self-paced",
      org: "GeeksforGeeks",
      date: "June 2024 – August 2024"
    },
    {
      title: "C++ Basics: Selection and Iteration",
      org: "Coursera",
      date: "Feb 2023 - Mar 2023"
    },
    {
      title: "Data Structures and Algorithms Specialization",
      org: "Coursera",
      date: "June 2024 – August 2024"
    }
  ];

  return (
    <div name="certifications" className="w-full min-h-screen bg-gradient-to-b from-gray-900/90 to-black/90 text-white py-16 relative z-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold inline border-b-4 border-blue-500"
          >
            Certifications
          </motion.h2>
          <p className="py-6 text-gray-400">Professional certifications and achievements</p>
        </div>

        <div className="space-y-6 relative z-10">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              className="p-4 bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
              }}
            >
              <div className="flex items-center gap-4">
                <FaCertificate className="text-2xl text-yellow-400" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-400">{cert.title}</h4>
                  <p className="text-gray-400">{cert.org}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;