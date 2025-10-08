import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ProjectCard  
            desc={<p>Swag-In is a modern e-commerce website built with React.js, offering a seamless shopping experience by utilizing static JSON data for product information.</p>}
            title="Swag-in Ecommerce"
            githubLink="https://github.com/Harshith917/Swag-In"
            liveLink="https://swag-in.vercel.app/"
            techStack={["Mern","React","React-context-API"]}
        />
        <ProjectCard
            
            desc={<p>Developed a full-stack authentication system utilizing JavaScript, featuring secure login and registration functionalities. Implemented role-based access control, allowing users to access specific resources based on their assigned roles. Integrated JWT (JSON Web Tokens) for secure token-based authentication, enhancing session management and security.</p>}
            title="Authentication"
            githubLink="https://github.com/Harshith917/Authentication"
            liveLink="https://authentication-silk-chi.vercel.app/"
            techStack={["Node.js","Express","MongoDB","React","shadcn"]}
        />
    </div>
  )
}
