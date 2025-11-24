import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-10 object-contain" />
          <h1 className="text-xl font-bold text-gray-900">Curtain Alsayari - Professional Curtain & Sofa Customization</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-amber-700 font-medium transition">
            الرئيسية
          </a>
          <a href="#products" className="text-gray-700 hover:text-amber-700 font-medium transition">
            المنتجات
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-amber-700 font-medium transition">
            أعمالنا
          </a>
          <a href="#contact" className="text-gray-700 hover:text-amber-700 font-medium transition">
            اتصل بنا
          </a>
        </nav>

        {/* Contact Actions */}
        <div className="flex items-center gap-3">
          <a href="tel:+966575421534">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">اتصل</span>
            </Button>
          </a>
          <a href="https://www.instagram.com/alsayari_curtain/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">Instagram</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
