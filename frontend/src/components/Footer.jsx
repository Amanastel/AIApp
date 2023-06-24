const Footer = () => {
  return (
    <footer className="bg-[#6634eb] text-white py-4">
      <div className="container mx-auto flex justify-center">
        <p>
          &copy; {new Date().getFullYear()} AI-Powered Interview Mastery
          Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
