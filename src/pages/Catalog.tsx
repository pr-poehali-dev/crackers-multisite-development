import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';
import { Link } from "react-router-dom";

const Catalog = () => {
  const products = [
    {
      id: 1,
      category: "Холодильники",
      name: "LuxFrost Pro Max 680L",
      image: "/img/2488f635-bc71-476a-806e-5c01cabb4dda.jpg",
      price: "299 000 ₽",
      originalPrice: "349 000 ₽",
      rating: 4.9,
      reviews: 127,
      features: [
        "Инверторный компрессор",
        "No Frost система",
        "Wi-Fi управление",
        "A+++ энергоэффективность",
        "Зона свежести 0°C",
        "Сенсорная панель"
      ],
      specs: {
        volume: "680 л",
        freezer: "180 л", 
        dimensions: "180×70×65 см",
        warranty: "5 лет"
      }
    },
    {
      id: 2,
      category: "Духовые шкафы",
      name: "LuxBake Elite Steam",
      image: "/img/2488f635-bc71-476a-806e-5c01cabb4dda.jpg",
      price: "189 000 ₽",
      originalPrice: "219 000 ₽",
      rating: 4.8,
      reviews: 89,
      features: [
        "Паровая конвекция",
        "Пиролитическая очистка",
        "Sous-vide режим",
        "Сенсорный дисплей",
        "30 автопрограмм",
        "Встроенный термощуп"
      ],
      specs: {
        volume: "76 л",
        power: "3500 Вт",
        dimensions: "60×60×55 см",
        warranty: "3 года"
      }
    },
    {
      id: 3,
      category: "Стиральные машины",
      name: "LuxWash Perfect Care 12kg",
      image: "/img/2488f635-bc71-476a-806e-5c01cabb4dda.jpg",
      price: "159 000 ₽",
      originalPrice: "179 000 ₽",
      rating: 4.9,
      reviews: 203,
      features: [
        "Инверторный мотор",
        "Паровая обработка",
        "Bubble Soak технология",
        "SmartThings управление",
        "Eco Bubble система",
        "Детская защита"
      ],
      specs: {
        load: "12 кг",
        speed: "1400 об/мин",
        dimensions: "85×60×65 см",
        warranty: "10 лет на мотор"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">LuxAppliances</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-primary transition-colors">Главная</Link>
            <Link to="/catalog" className="text-primary font-semibold">Каталог</Link>
            <Link to="/about" className="text-slate-700 hover:text-primary transition-colors">О бренде</Link>
            <Link to="/contact" className="text-slate-700 hover:text-primary transition-colors">Контакты</Link>
          </div>
          <Button variant="default" className="bg-primary text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Консультация
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center text-sm text-slate-600 mb-6">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} className="mx-2" />
            <span className="text-slate-900">Каталог техники</span>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Каталог премиум-техники
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Инновационные решения для современного дома с детальными характеристиками
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="default" size="lg" className="bg-primary text-white">
              <Icon name="Grid3X3" size={18} className="mr-2" />
              Все категории
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Refrigerator" size={18} className="mr-2" />
              Холодильники
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="ChefHat" size={18} className="mr-2" />
              Духовые шкафы
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Washing" size={18} className="mr-2" />
              Стиральные машины
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {products.map((product) => (
            <Card key={product.id} className="border-0 shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    -15%
                  </Badge>
                </div>
                
                <div className="lg:col-span-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-3 text-slate-600">
                          {product.category}
                        </Badge>
                        <CardTitle className="text-2xl mb-2">{product.name}</CardTitle>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Icon 
                                key={i} 
                                name="Star" 
                                size={16} 
                                className={i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-slate-300"} 
                              />
                            ))}
                            <span className="ml-2 text-slate-600">{product.rating}</span>
                          </div>
                          <span className="text-slate-500">({product.reviews} отзывов)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{product.price}</div>
                        <div className="text-lg text-slate-500 line-through">{product.originalPrice}</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Ключевые особенности</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-600">
                              <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Технические характеристики</h4>
                        <div className="space-y-2">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-slate-200 pb-1">
                              <span className="text-slate-600 capitalize">
                                {key === 'volume' && 'Объем'}
                                {key === 'freezer' && 'Морозильная камера'}
                                {key === 'dimensions' && 'Размеры'}
                                {key === 'warranty' && 'Гарантия'}
                                {key === 'power' && 'Мощность'}
                                {key === 'load' && 'Загрузка'}
                                {key === 'speed' && 'Отжим'}
                              </span>
                              <span className="font-medium text-slate-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-primary text-white flex-1">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Добавить в корзину
                      </Button>
                      <Button variant="outline" size="lg">
                        <Icon name="Heart" size={18} className="mr-2" />
                        В избранное
                      </Button>
                      <Button variant="outline" size="lg">
                        <Icon name="BarChart" size={18} className="mr-2" />
                        Сравнить
                      </Button>
                      <Button variant="outline" size="lg">
                        <Icon name="Info" size={18} className="mr-2" />
                        Подробнее
                      </Button>
                    </div>
                    
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-green-600">
                          <Icon name="Truck" size={16} className="mr-2" />
                          Бесплатная доставка
                        </div>
                        <div className="flex items-center text-blue-600">
                          <Icon name="Wrench" size={16} className="mr-2" />
                          Установка в подарок
                        </div>
                        <div className="flex items-center text-amber-600">
                          <Icon name="Award" size={16} className="mr-2" />
                          Расширенная гарантия
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            <Icon name="RefreshCcw" size={18} className="mr-2" />
            Загрузить еще товары
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;