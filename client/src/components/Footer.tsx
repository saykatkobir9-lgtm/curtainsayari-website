import { Phone, MapPin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">ستائر السياري</h3>
            <p className="text-gray-300 mb-4">
              متخصصون في تفصيل الستائر والكنب بأعلى جودة وأفضل الأسعار في الرياض
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+966575421534" className="hover:text-amber-500 transition">
                  +966 57 542 1534
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>An Nasim Ash Sharqi, Riyadh 14243</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>متاح 24 ساعة</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">تابعنا</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/alsayari_curtain/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 p-3 rounded-full transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ستائر السياري. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
