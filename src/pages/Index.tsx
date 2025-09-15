import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">LuxAppliances</div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-primary transition-colors">Главная</Link>
            <Link to="/catalog" className="text-slate-700 hover:text-primary transition-colors">Каталог</Link>
            <Link to="/about" className="text-slate-700 hover:text-primary transition-colors">О бренде</Link>
            <Link to="/contact" className="text-slate-700 hover:text-primary transition-colors">Контакты</Link>
          </div>
          <Button variant="default" className="bg-primary text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Консультация
          </Button>
        </div>
      </nav>

      <section className="relative py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">Premium Collection</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Элегантная<br />
                <span className="text-slate-300">премиум</span><br />
                техника
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Инновационные решения для современного дома. Безукоризненное качество, 
                утонченный дизайн и надежность на десятилетия.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Видео о технике
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/2488f635-bc71-476a-806e-5c01cabb4dda.jpg" 
                alt="Премиальная кухонная техника" 
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={24} className="text-amber-500" />
                  <div>
                    <p className="font-semibold text-slate-900">Гарантия 5 лет</p>
                    <p className="text-sm text-slate-600">На всю технику</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-800">Почему выбирают нас</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Преимущества премиум-класса
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Каждая деталь продумана для вашего комфорта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-slate-700" />
                </div>
                <CardTitle className="text-xl">Инновационные технологии</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Интеллектуальное управление, энергоэффективность A+++, 
                  Wi-Fi подключение для удаленного контроля
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-slate-700" />
                </div>
                <CardTitle className="text-xl">Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Протестировано на 20+ лет службы. Расширенная гарантия 
                  и сервисное обслуживание по всей России
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={32} className="text-slate-700" />
                </div>
                <CardTitle className="text-xl">Премиум-дизайн</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Утонченные материалы, безукоризненная отделка, 
                  гармонично вписывается в любой интерьер
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Популярные категории
            </h2>
            <p className="text-xl text-slate-600">
              Выберите технику для вашего дома
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Холодильники", icon: "Refrigerator", count: "24 модели" },
              { name: "Духовые шкафы", icon: "ChefHat", count: "18 моделей" },
              { name: "Стиральные машины", icon: "Washing", count: "16 моделей" },
              { name: "Посудомойки", icon: "Droplets", count: "12 моделей" }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={category.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-slate-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">LuxAppliances</h3>
              <p className="text-slate-400 mb-4">
                Премиальная бытовая техника для современного дома
              </p>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} className="text-slate-400" />
                <span className="text-slate-400">8 (800) 123-45-67</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Холодильники</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Духовые шкафы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Стиральные машины</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Посудомойки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Установка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Запчасти</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <p>Москва, ул. Тверская, 1</p>
                <p>info@luxappliances.ru</p>
                <p>Пн-Вс: 9:00-21:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LuxAppliances. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;