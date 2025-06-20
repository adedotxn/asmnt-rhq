## **Project Approach**
This project was developed using TypeScript, Tailwind CSS, Shadcn UI, and Next.js. 
In the absence of a Figma design file, I utilized Tailwind's color system to ensure a consistent and cohesive visual aesthetic, aligning as closely as possible with the provided reference image. To enhance maintainability and scalability, I structured reusable components within a dedicated components folder, organized by concern: the ui folder contains base reusable components (e.g., buttons, cards, badges) from Shadcn UI, customizable to fit a product design system; the layout folder houses components persisted across pages; the shared folder includes compound reusable components (e.g., a follow button with avatars) built on top of the base UI components; and page-specific components are stored in folders named after each application page. This modular architecture promotes flexibility and streamlines development.

## **Setup Instructions**
To set up and run the project locally:

- Install dependencies: `npm install`
- Run the development server: `npm run dev`
- For a production build, use: `npm run build` followed by `npm run start`

### **Limitations**
Due to the lack of specific components or UI elements, I was unable to replicate certain decorative elements from the reference image, which would have enhanced the visual fidelity. Additionally, without a dedicated mobile design, achieving an intuitive mobile-friendly interface proved challenging, leading to some compromises in responsiveness. A provided mobile design would have facilitated a more seamless adaptation for smaller screens.
