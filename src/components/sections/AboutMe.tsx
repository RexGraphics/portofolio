import { motion } from 'framer-motion';

const AboutMe = () => {
    // const skills = [
    //     { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    //     { category: 'Backend', items: ['Laravel', 'Node.js', 'PHP', 'MySQL'] },
    //     { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
    // ];

    // const stats = [
    //     { value: '3+', label: 'Years Experience' },
    //     { value: '20+', label: 'Projects Completed' },
    //     { value: '15+', label: 'Happy Clients' },
    // ];

    return (
        <section className="w-full max-w-7xl min-h-screen top-1/2 absolute overflow-hidden" id="about-me-section">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 mt-4"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        About <span className="text-green-accent-main">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-accent-main mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Left Side - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">My Journey</h3>
                        <p className="text-white leading-relaxed text-lg">
                            Hi! I'm <span className="font-semibold text-green-accent-main">Ghazwan Fikri Maulana</span>,
                            a passionate fullstack developer who loves turning ideas into reality through clean,
                            efficient code.
                        </p>
                        <p className="text-white leading-relaxed text-lg">
                            I specialize in building modern web applications using React and Laravel.
                            My journey in web development started with curiosity and has grown into a
                            dedication to creating seamless user experiences and robust backend systems.
                        </p>
                        <p className="text-white leading-relaxed text-lg">
                            When I'm not coding, you'll find me exploring new technologies, contributing
                            to open-source projects, or sharing knowledge with the developer community.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;