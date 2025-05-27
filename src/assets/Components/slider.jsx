import  { useEffect, useState } from 'react';
import './slider.css';

const testimonials = [
    {
        name: 'Shalini Dubey',
        role: 'Founder',
        image: '/assets/testimonial1.jpg', // update the path to your image
        text: 'EVVAAP is a game-changer. We now have verified records of all students and employees, helping us eliminate fraud and build trust.',
    },
    {
        name: 'Rajesh Dhingra',
        role: 'Production Head',
        image: '/assets/testimonial2.jpg', // update the path to your image
        text: 'We saw a 28% increase in successful placements and re-hires after using EVVAAP. The verification process is seamless and professional.',
    },
    {
        name: 'Meena Verma',
        role: 'HR Director',
        image: '/assets/testimonial3.jpg', // update path
        text: 'EVVAAP helps us find pre-verified, skilled professionals. It saved us countless hours and improved candidate quality significantly.',
    },
];

const TestimonialsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 2000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="testimonial-section">
            <h2>Testimonials</h2>
            <div className="testimonial-slider">
                {testimonials.map((item, index) => (
                    <div
                        className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                    >
                        <p className="testimonial-text">"{item.text}"</p>
                        <div className="testimonial-profile">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="testimonial-dots">
                {testimonials.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === currentIndex ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSlider;
