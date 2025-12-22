import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', text = 'Loading...', fullScreen = false }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    };

    const containerClass = fullScreen
        ? 'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm'
        : '';

    const wrapperClass = fullScreen
        ? 'flex flex-col items-center justify-center h-full'
        : 'flex flex-col items-center justify-center p-8';

    return (
        <div className={containerClass}>
            <div className={wrapperClass}>
                {/* Animated Spinner */}
                <motion.div
                    className={`${sizeClasses[size]} relative`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    {/* Outer Ring */}
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>

                    {/* Spinning Arc */}
                    <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"></div>
                </motion.div>

                {/* Loading Text */}
                {text && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-text-secondary font-medium"
                    >
                        {text}
                    </motion.p>
                )}

                {/* Animated Dots */}
                <div className="flex gap-1 mt-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.1
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
