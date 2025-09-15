import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange via-pink to-yellow">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-md">
        <div className="text-3xl font-bold text-white">СРАКАСТИ</div>
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#hero" className="hover:text-accent transition-colors">Главная</a>
          <a href="#about" className="hover:text-accent transition-colors">О бренде</a>
          <a href="#flavors" className="hover:text-accent transition-colors">Вкусы</a>
          <a href="#stores" className="hover:text-accent transition-colors">Где купить</a>
          <a href="#promos" className="hover:text-accent transition-colors">Акции</a>
        </div>
        <Icon name="Menu" className="md:hidden text-white" size={24} />
      </nav>

      {/* Hero Section */}
      <section id="hero" className="px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            СРАКАСТИ
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 font-semibold">
            Сухарики для тех, кто живет ярко! 🔥
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-white/20 backdrop-blur-md border-0 text-white transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🧄</div>
              <h3 className="text-2xl font-bold mb-2">ЧЕСНОК</h3>
              <p className="text-white/80">Острый вкус для смелых</p>
            </Card>
            <Card className="p-8 bg-white/20 backdrop-blur-md border-0 text-white transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🌶️</div>
              <h3 className="text-2xl font-bold mb-2">ПЕРЕЦ ЧИЛИ</h3>
              <p className="text-white/80">Огненный характер</p>
            </Card>
            <Card className="p-8 bg-white/20 backdrop-blur-md border-0 text-white transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🦀</div>
              <h3 className="text-2xl font-bold mb-2">КРАБ</h3>
              <p className="text-white/80">Морские приключения</p>
            </Card>
          </div>
          <img 
            src="/img/b95be3a0-cf5b-4186-aed2-812e879f36e9.jpg" 
            alt="Сухарики СРАКАСТИ" 
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl mb-12"
          />
          <Button size="lg" className="text-2xl px-12 py-6 bg-accent text-black font-bold hover:bg-accent/90">
            Попробовать сейчас!
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black text-primary mb-8">О БРЕНДЕ</h2>
          <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
            Мы создаем сухарики для поколения мечтателей! Наша миссия — дать вам энергию 
            для ярких впечатлений и незабываемых моментов. От школьной перемены до студенческой 
            вечеринки — СРАКАСТИ всегда с вами! 🚀
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">ЭНЕРГИЯ</h3>
              <p className="text-gray-600">Заряжаем на подвиги</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">МОЛОДОСТЬ</h3>
              <p className="text-gray-600">Понимаем ваши мечты</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">КАЧЕСТВО</h3>
              <p className="text-gray-600">Только лучшие ингредиенты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="px-6 py-20 bg-gradient-to-r from-pink to-orange">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white text-center mb-16">НАШИ ВКУСЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-8 bg-white rounded-3xl transform hover:scale-105 transition-transform">
              <div className="text-8xl text-center mb-6">🧄</div>
              <h3 className="text-3xl font-bold text-primary mb-4 text-center">ЧЕСНОК</h3>
              <p className="text-gray-600 text-lg mb-6 text-center">
                Острый, ароматный вкус для тех, кто не боится быть замеченным. 
                Идеально для вечеринок и встреч с друзьями.
              </p>
              <div className="bg-orange/20 rounded-2xl p-4 text-center">
                <span className="text-primary font-bold">Остроты: 🔥🔥🔥</span>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-3xl transform hover:scale-105 transition-transform">
              <div className="text-8xl text-center mb-6">🌶️</div>
              <h3 className="text-3xl font-bold text-primary mb-4 text-center">ПЕРЕЦ ЧИЛИ</h3>
              <p className="text-gray-600 text-lg mb-6 text-center">
                Огненный вкус для настоящих экстремалов! Проверь свои границы 
                и почувствуй адреналин в каждом кусочке.
              </p>
              <div className="bg-pink/20 rounded-2xl p-4 text-center">
                <span className="text-primary font-bold">Остроты: 🔥🔥🔥🔥🔥</span>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-3xl transform hover:scale-105 transition-transform">
              <div className="text-8xl text-center mb-6">🦀</div>
              <h3 className="text-3xl font-bold text-primary mb-4 text-center">КРАБ</h3>
              <p className="text-gray-600 text-lg mb-6 text-center">
                Нежный морской вкус с легкой солинкой. Для тех, кто мечтает 
                о приключениях и дальних путешествиях.
              </p>
              <div className="bg-blue/20 rounded-2xl p-4 text-center">
                <span className="text-primary font-bold">Остроты: 🔥🔥</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Where to Buy Section */}
      <section id="stores" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black text-primary mb-8">ГДЕ КУПИТЬ</h2>
          <p className="text-2xl text-gray-600 mb-12">Найди СРАКАСТИ рядом с собой!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 bg-orange/10 border-2 border-orange rounded-2xl">
              <Icon name="ShoppingCart" className="mx-auto mb-4 text-orange" size={48} />
              <h3 className="text-xl font-bold text-primary mb-2">Супермаркеты</h3>
              <p className="text-gray-600">Пятёрочка, Магнит, Дикси</p>
            </Card>
            
            <Card className="p-6 bg-pink/10 border-2 border-pink rounded-2xl">
              <Icon name="Coffee" className="mx-auto mb-4 text-pink" size={48} />
              <h3 className="text-xl font-bold text-primary mb-2">Кафе</h3>
              <p className="text-gray-600">Студенческие столовые</p>
            </Card>
            
            <Card className="p-6 bg-yellow/10 border-2 border-yellow rounded-2xl">
              <Icon name="Smartphone" className="mx-auto mb-4 text-yellow" size={48} />
              <h3 className="text-xl font-bold text-primary mb-2">Онлайн</h3>
              <p className="text-gray-600">Яндекс Еда, Самокат</p>
            </Card>
            
            <Card className="p-6 bg-blue/10 border-2 border-blue rounded-2xl">
              <Icon name="MapPin" className="mx-auto mb-4 text-blue" size={48} />
              <h3 className="text-xl font-bold text-primary mb-2">Киоски</h3>
              <p className="text-gray-600">Возле вузов и школ</p>
            </Card>
          </div>
          
          <Button size="lg" className="bg-primary text-white text-xl px-8 py-4 hover:bg-primary/90">
            <Icon name="MapPin" className="mr-2" size={20} />
            Найти ближайший магазин
          </Button>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promos" className="px-6 py-20 bg-gradient-to-r from-yellow to-orange">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-12">АКЦИИ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white rounded-3xl transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-3xl font-bold text-primary mb-4">Студенческая скидка</h3>
              <p className="text-gray-600 text-lg mb-6">
                Покажи студенческий билет и получи 20% скидку на все вкусы!
              </p>
              <Button className="bg-orange text-white font-bold">
                Получить скидку
              </Button>
            </Card>
            
            <Card className="p-8 bg-white rounded-3xl transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">🎁</div>
              <h3 className="text-3xl font-bold text-primary mb-4">Собери коллекцию</h3>
              <p className="text-gray-600 text-lg mb-6">
                Купи все 3 вкуса и получи фирменную сумку СРАКАСТИ в подарок!
              </p>
              <Button className="bg-pink text-white font-bold">
                Узнать больше
              </Button>
            </Card>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">🔥 Горячее предложение!</h3>
            <p className="text-xl mb-6">
              Первые 100 покупателей получают эксклюзивную упаковку с автографом основателя!
            </p>
            <Button size="lg" className="bg-accent text-black font-bold text-xl px-8 py-4">
              Успеть купить!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl font-black text-orange mb-6">СРАКАСТИ</div>
          <p className="text-xl text-gray-400 mb-8">Живи ярко, ешь смело! 🚀</p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <Icon name="Instagram" className="text-pink hover:scale-110 transition-transform cursor-pointer" size={32} />
            <Icon name="MessageCircle" className="text-blue hover:scale-110 transition-transform cursor-pointer" size={32} />
            <Icon name="Youtube" className="text-orange hover:scale-110 transition-transform cursor-pointer" size={32} />
          </div>
          
          <div className="text-gray-500">
            <p>&copy; 2024 СРАКАСТИ. Все права защищены.</p>
            <p className="mt-2">Для настоящих мечтателей от 12 до 23 лет ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;