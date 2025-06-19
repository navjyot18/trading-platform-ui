## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/navjyot18/trading-platform-ui.git
   cd trading-platform-ui
   npm install
   npm start
   npm run build

2. ** Project architecture


- `assets/`: Static files like images, logos, and icons.
- `components/`: Small, self-contained UI blocks and styles used across multiple pages.
  - `ComponentName.jsx`
   `ComponentName.styled.jsx`
- `services/`: (Optional) Abstraction for fetching data (real or simulated).
- `App.js`: Entry-level component that configures layout and routing.
- `index.js`: Renders the React app into the DOM.



## 💡 Implementation Decisions

✅ **React functional components and hooks**  
Used for a clean, modern development experience with simplified state and effect management (`useState`, `useEffect`).

🧩 **Modular component architecture**  
Components are decoupled and reusable, making the codebase scalable and easier to maintain.

🧪 **Mock data strategy**  
Mock JSON data simulates real backend responses, allowing rapid UI development and testing without backend dependencies.

⚛️ **Frontend-first approach**  
The design and layout were prioritized to quickly build and iterate over the user interface.

🛠️ **Minimal external dependencies**  
Only essential packages are used to keep the stack lightweight, reduce bundle size, and simplify debugging.

♿ **Accessibility (a11y) considerations**  
UI components follow basic accessibility best practices like semantic HTML, keyboard navigation support, and readable color contrast.

📱 **PWA-ready foundation**  
Built with Progressive Web App compatibility in mind — supports offline access, responsive design, and can be easily enhanced with service workers and manifest configuration.

