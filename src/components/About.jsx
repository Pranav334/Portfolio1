import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800/80 to-black/80 text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold inline border-b-4 border-blue-500"
          >
            About Me
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="md:flex gap-8 items-center"
        >
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl mt-10 text-gray-300"
            >
              I'm Pranav Prakash, a Computer Science student at Lovely Professional University, Punjab. I am passionate about creating innovative solutions through code and have experience in full-stack development, open-source contribution, and AI model training.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl mt-4 text-gray-300"
            >
              With a strong foundation in Python and C++, I enjoy tackling complex problems and building efficient, user-friendly applications. My technical skills include working with tools like GitHub, MySQL, and Windows OS.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl mt-4 text-gray-300"
            >
              My goal is to leverage technology to create meaningful impact and continue growing as a developer in this ever-evolving landscape.
            </motion.p>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-blue-500/20 transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl font-semibold border-b border-gray-700 pb-3 mb-4 text-blue-400"
              >
                Education
              </motion.h3>

              <motion.div
                className="mb-4 p-3 hover:bg-gray-800 rounded-md transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-xl font-medium text-blue-400">Lovely Professional University, Punjab</h4>
                <p className="text-gray-400">Computer Science and Engineering</p>
                <p className="text-gray-400">2022 – Present</p>
              </motion.div>

              <motion.div
                className="mb-4 p-3 hover:bg-gray-800 rounded-md transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-xl font-medium text-blue-400">Jesus And Mary Academy, Darbhanga</h4>
                <p className="text-gray-400">12th — Percentage: 67%</p>
                <p className="text-gray-400">2020 – 2021</p>
              </motion.div>

              <motion.div
                className="p-3 hover:bg-gray-800 rounded-md transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="text-xl font-medium text-blue-400">Jesus And Mary Academy, Darbhanga</h4>
                <p className="text-gray-400">10th — Percentage: 62%</p>
                <p className="text-gray-400">2018 – 2019</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;