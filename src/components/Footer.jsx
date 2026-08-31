import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React & Vite.
      </p>
    </footer>
  );
}
