import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 py-4 md:py-6 container mx-auto">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="POT Logo"
            className="h-12 md:h-14 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="#about"
            className="font-urbanist text-base lg:text-lg font-medium text-black hover:text-pot-dark-brown transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="font-urbanist text-base lg:text-lg font-medium text-black hover:text-pot-dark-brown transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="#menu"
            className="font-urbanist text-base lg:text-lg font-medium text-black hover:text-pot-dark-brown transition-colors"
          >
            Menu
          </Link>
        </nav>
      </div>
    </header>
  );
}
