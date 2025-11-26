import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}
                >
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.1rem' }}
                >
                    Have a project in mind or just want to say hi? Feel free to send me a message!
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="glass"
                    style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <input
                            type="text"
                            placeholder="Name"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff',
                                outline: 'none'
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        rows="5"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: '#fff',
                            outline: 'none',
                            resize: 'vertical'
                        }}
                    ></textarea>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'var(--accent-cyan)',
                            color: '#000',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>

                <footer style={{ marginTop: '5rem', textAlign: 'center', color: '#666', paddingBottom: '2rem' }}>
                    <p>© 2024 Dipesh. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
