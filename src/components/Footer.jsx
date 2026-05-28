import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-cyan-500/10 text-white py-8">
      
      <div className="max-w-7xl mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div>
          
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Adarsh kushwaha
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            Frontend Developer
          </p>
        </div>

        {/* Right Icons */}
        <div className="flex gap-5 text-2xl text-gray-400">
          
          <a
            href="https://github.com/Adarsh2027"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:-translate-y-1"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition duration-300 hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.linkedin.com/in/adarsh-kushwaha-6644a8360/"
            className="hover:text-cyan-400 transition duration-300 hover:-translate-y-1"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © 2026 Adarsh kushwaha. All Rights Reserved.
      </div>
    </footer>
  );
}