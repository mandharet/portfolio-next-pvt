export default function Footer() {
    return (
      <footer className="border-t mt-20">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Tejas Mandhare — Built with Next.js
        </div>
      </footer>
    );
  }
  