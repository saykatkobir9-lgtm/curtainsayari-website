import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Instagram, Sparkles, Ruler, Palette, MessageCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ستائر وكنب بتصميم فريد
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                نحن متخصصون في تفصيل الستائر والكنب بأعلى جودة وأفضل الأسعار. اجعل منزلك أكثر أناقة وجمالاً مع خدماتنا المتميزة.
              </p>
              <div className="flex gap-4">
                <a href="tel:+966575421534">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 gap-2">
                    <Phone className="h-5 w-5" />
                    اتصل بنا الآن
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline">
                    اعرف المزيد
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/sofa-styling.jpg"
                alt="ستائر وكنب"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            لماذا تختار ستائر السياري؟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition">
              <Sparkles className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900">جودة عالية</h4>
              <p className="text-gray-600">
                نستخدم أفضل الخامات والمواد الأصلية لضمان الجودة والمتانة
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition">
              <Palette className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900">تصاميم متنوعة</h4>
              <p className="text-gray-600">
                مجموعة واسعة من الألوان والتصاميم لتناسب ذوقك واحتياجاتك
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition">
              <Ruler className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900">تفصيل مخصص</h4>
              <p className="text-gray-600">
                نقوم بتفصيل كل قطعة حسب مقاسات منزلك وتفضيلاتك الشخصية
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            منتجاتنا وخدماتنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Curtains */}
            <Card className="overflow-hidden hover:shadow-xl transition">
              <img
                src="/curtain-1.jpg"
                alt="الستائر"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3 text-gray-900">الستائر المخصصة</h4>
                <p className="text-gray-600 mb-4">
                  ستائر عالية الجودة بتصاميم حديثة وألوان متنوعة. نوفر تفصيل حسب مقاسات نوافذك بدقة عالية.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>✓ خامات أصلية وفاخرة</li>
                  <li>✓ تصاميم حديثة وعصرية</li>
                  <li>✓ تفصيل دقيق حسب المقاسات</li>
                </ul>
              </div>
            </Card>

            {/* Cushions */}
            <Card className="overflow-hidden hover:shadow-xl transition">
              <img
                src="/cushion-1.jpg"
                alt="الكنب"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3 text-gray-900">تفصيل الكنب</h4>
                <p className="text-gray-600 mb-4">
                  كنب وأريكات مخصصة بتصاميم فريدة. نوفر خدمة تفصيل شاملة مع اختيار الألوان والخامات المفضلة لديك.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>✓ تصاميم حسب الطلب</li>
                  <li>✓ خامات مريحة وفاخرة</li>
                  <li>✓ ألوان متعددة</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            أعمالنا السابقة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src="/curtain-2.jpg"
                alt="عينة من أعمالنا"
                className="w-full h-80 object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src="/sofa-styling.jpg"
                alt="عينة من أعمالنا"
                className="w-full h-80 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg mb-4">
              شاهد المزيد من أعمالنا على Instagram
            </p>
            <a href="https://www.instagram.com/alsayaricurtainsandsofas/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2">
                <Instagram className="h-5 w-5" />
                زيارة Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            اتصل بنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <Card className="p-8 text-center hover:shadow-lg transition">
              <Phone className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900">رقم الهاتف</h4>
              <a
                href="tel:+966575421534"
                className="text-amber-600 hover:text-amber-700 font-semibold text-lg"
              >
                +966 57 542 1534
              </a>
            </Card>

            {/* Address */}
            <Card className="p-8 text-center hover:shadow-lg transition">
              <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900">العنوان</h4>
              <p className="text-gray-600">
                An Narjis
                <br />
                Riyadh 14243
                <br />
                Saudi Arabia
              </p>
            </Card>

            {/* Hours */}
            <Card className="p-8 text-center hover:shadow-lg transition">
              <div className="h-12 w-12 text-amber-600 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🕐</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">أوقات العمل</h4>
              <p className="text-gray-600">
                متاح 24 ساعة
                <br />
                طوال أيام الأسبوع
              </p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-6">
              هل تريد معرفة المزيد أو لديك استفسار؟
            </p>
            <div className="flex gap-4 justify-center">
              <a href="tel:+966575421534">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 gap-2">
                  <Phone className="h-5 w-5" />
                  اتصل بنا الآن
                </Button>
              </a>
              <a href="https://wa.me/966575421534" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 gap-2">
                  <MessageCircle className="h-5 w-5" />
                  واتس أب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            آراء عملائنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                خدمة ممتازة جداً! الستائر جاءت بجودة عالية جداً والتفصيل دقيق جداً. أنصح بهم بشدة.
              </p>
              <p className="font-semibold text-gray-900">فاطمة محمد</p>
              <p className="text-sm text-gray-600">الرياض</p>
            </Card>

            {/* Review 2 */}
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                تفصيل الكنب كان احترافي جداً. اختاروا الألوان والتصميم بعناية فائقة. شكراً لهم!
              </p>
              <p className="font-semibold text-gray-900">أحمد علي</p>
              <p className="text-sm text-gray-600">الرياض</p>
            </Card>

            {/* Review 3 */}
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                أفضل خدمة تفصيل في الرياض! الأسعار معقولة والجودة عالية جداً. شكراً يا ستائر السياري.
              </p>
              <p className="font-semibold text-gray-900">نور الدين</p>
              <p className="text-sm text-gray-600">الرياض</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
