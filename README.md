🎨 Bura Na Mano! - Anonymous SplashAn interactive, fun, and anonymous messaging platform inspired by the spirit of Holi. Users can share a unique link and receive "splashes" (secret messages) from friends in vibrant colors.✨ FeaturesUnique User Links: Every user gets a personalized URL to share on social media.Anonymous Messaging: Friends can send messages without revealing their identity.Color Themes: Senders can choose a "Gulaal" color to theme their message.Responsive UI: Glassmorphism design built with Tailwind CSS.Cloud Persistence: Powered by MongoDB Atlas for 24/7 data availability.🛠️ Tech StackFrontend: EJS (Embedded JavaScript), Tailwind CSSBackend: Node.js, Express.jsDatabase: MongoDB (Mongoose ODM)Deployment: Render / Vercel🚀 Getting Started1. Clone the repositoryBashgit clone https://github.com/your-username/Bura-N-Mano.git
cd Bura-N-Mano
2. Install dependenciesBashnpm install
3. Setup Environment VariablesCreate a .env file in the root directory and add your MongoDB Atlas URI:Code snippetPORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
4. Run the applicationBash# For development
npm run dev

# For production
npm start
📂 Project StructurePlaintext├── controller/        # Logic for handling splashes and users
├── model/             # Mongoose schemas (User, Message)
├── routes/            # Express routes (GET/POST)
├── views/             # EJS templates (Form, Thank You, Dashboard)
├── public/            # Static assets (CSS, Images)
├── .env               # Secret credentials (ignored by git)
└── index.js           # Entry point of the application
📸 ScreenshotsSplash FormThank You Page🤝 ContributingFeel free to fork this project and add your own "splashes"!Fork the ProjectCreate your Feature Branch (git checkout -b feature/AmazingFeature)Commit your Changes (git commit -m 'Add some AmazingFeature')Push to the Branch (git push origin feature/AmazingFeature)Open a Pull Request