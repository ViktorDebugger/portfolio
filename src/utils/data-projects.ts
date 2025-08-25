import mauDelivery from "../assets/projects-images/mau-delivery.jpg";
import deliFood from "../assets/projects-images/deli-food.jpg";

export const projects = [
  {
    id: 1,
    name: "MAU Delivery",
    image: mauDelivery,
    link: "https://mau-delivery-fr0lii2r9-viktors-projects-48f96426.vercel.app/",
    description:
      "MAU Delivery is a modern food delivery web application built with Next.js that connects users with restaurants and their delicious dishes. The platform features user authentication, cart management, and order tracking functionality, allowing customers to browse restaurants, view detailed dish information including nutrition facts and allergens, and place orders with various payment methods. Users can leave reviews for both dishes and restaurants, manage their profiles with personal allergen preferences, and track their order status in real-time. The application provides a seamless experience with responsive design, smooth animations, and interactive features like search filters and ingredient displays.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Motion",
      "Lucide React",
      "Swiper.js",
      "Firebase",
    ],
  },
  {
    id: 2,
    name: "DeliFood",
    image: deliFood,
    link: "https://viktordebugger.github.io/DeliFood/",
    description:
      "DeliFood is a modern food delivery web application that allows users to browse a menu of dishes, add items to their cart, and place orders with real-time delivery tracking. The application features user authentication, allowing customers to create accounts, log in, and view their order history with the ability to rate dishes. Users can filter dishes by category, search for specific items, and enjoy a responsive design that works seamlessly across all devices. The app includes a comprehensive order management system that tracks order preparation time and notifies users when their food is ready.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Motion",
      "Node.js",
      "Express.js",
      "Firebase",
    ],
  },
];
