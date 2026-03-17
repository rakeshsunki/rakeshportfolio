import styles from "./landingpage.module.css";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model3D(props) {
  const { scene } = useGLTF("/desk.glb");
  return <primitive object={scene} {...props} />;
}

const AboutMe = () => {
  return (
    <motion.section
      id="About"
      className="w-full mt-14 px-4 md:px-10 py-10 bg-slate-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="h-1 w-12 md:w-20 bg-amber-200" />
        <h2 className={`${styles.About} !m-0`}>ABOUT ME</h2>
        <span className="h-1 flex-1 bg-amber-200/70" />
      </motion.div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <motion.div
          className="rounded-2xl border border-slate-700 bg-slate-800/70 backdrop-blur-sm p-6 md:p-8 shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <p className="text-lg md:text-xl font-semibold text-amber-200 mb-4">
            Tech Manager & Full Stack Developer at Lensverse Technologies Pvt
            Ltd
          </p>

          <p className="text-slate-200 leading-8">
            I lead engineering initiatives at Lensverse Technologies Pvt Ltd
            while actively building scalable full stack products. My work
            combines product thinking, team mentorship, and hands-on development
            across modern frontend and backend technologies.
          </p>

          <p className="text-slate-200 leading-8 mt-4">
            I focus on building reliable user experiences with React and
            Next.js, designing robust APIs with Node.js and Express, and
            managing data workflows with MongoDB and SQL. I also bring strong
            problem-solving foundations through Data Structures and Algorithms.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wider text-blue-300">
                Current Role
              </p>
              <p className="text-sm font-semibold mt-1">Tech Manager</p>
            </div>
            <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wider text-violet-300">
                Primary Focus
              </p>
              <p className="text-sm font-semibold mt-1">
                Full Stack Development
              </p>
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wider text-emerald-300">
                Company
              </p>
              <p className="text-sm font-semibold mt-1">
                Lensverse Technologies Pvt Ltd
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 md:p-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <motion.div
            className="bg-blue-500/15 backdrop-blur-sm px-3 py-1 rounded-full mb-3 border border-blue-400/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="text-blue-300 text-sm font-medium">
              Interactive 3D Workspace
            </span>
          </motion.div>

          <Canvas
            style={{ width: "100%", height: "320px" }}
            camera={{ position: [4, 3, 6], fov: 45 }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 3, 3]} intensity={0.8} />
            <Model3D scale={0.8} position={[0, -1, 0]} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={1}
            />
          </Canvas>

          <p className="text-slate-400 text-xs mt-2 text-center">
            Drag to rotate • Scroll to zoom • Click and drag to explore
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
