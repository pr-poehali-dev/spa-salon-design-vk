import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Массаж",
      description: "Расслабляющий, антицеллюлитный, спортивный",
      duration: "60-90 мин"
    },
    {
      icon: "Flower2",
      title: "Уход за лицом",
      description: "Чистка, пилинг, омолаживающие процедуры",
      duration: "60 мин"
    },
    {
      icon: "Droplets",
      title: "SPA-программы",
      description: "Комплексные процедуры для тела и души",
      duration: "120-180 мин"
    },
    {
      icon: "Leaf",
      title: "Обертывания",
      description: "Водорослевые, грязевые, шоколадные",
      duration: "60 мин"
    },
    {
      icon: "Heart",
      title: "Ароматерапия",
      description: "Релаксация с натуральными маслами",
      duration: "45 мин"
    },
    {
      icon: "Waves",
      title: "Баня & Сауна",
      description: "Традиционные и инфракрасные процедуры",
      duration: "90 мин"
    }
  ];

  const pricing = [
    { service: "Классический массаж (60 мин)", price: "3 500 ₽" },
    { service: "Массаж лица и головы (45 мин)", price: "2 800 ₽" },
    { service: "Антицеллюлитный массаж (90 мин)", price: "4 500 ₽" },
    { service: "Чистка лица ультразвуковая", price: "3 200 ₽" },
    { service: "Пилинг всего тела", price: "4 000 ₽" },
    { service: "Обертывание водорослевое", price: "3 800 ₽" },
    { service: "SPA-программа «Релакс» (180 мин)", price: "8 900 ₽" },
    { service: "Ароматерапия с массажем (90 мин)", price: "5 200 ₽" }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      avatar: "АП",
      rating: 5,
      text: "Прекрасное место для релаксации! Натуральная косметика и профессиональные мастера. Особенно понравился массаж с горячими камнями.",
      date: "2 недели назад"
    },
    {
      name: "Мария Иванова",
      avatar: "МИ",
      rating: 5,
      text: "Хожу сюда уже год. Атмосфера спокойствия и уюта. После SPA-программы чувствую себя заново рожденной. Рекомендую!",
      date: "1 месяц назад"
    },
    {
      name: "Екатерина Смирнова",
      avatar: "ЕС",
      rating: 5,
      text: "Отличный спа салон! Все процедуры на высшем уровне. Порадовала экологичность - только натуральные продукты без химии.",
      date: "3 недели назад"
    }
  ];

  const certificates = [
    { title: "Подарочный сертификат", amount: "5 000 ₽", discount: null },
    { title: "Подарочный сертификат", amount: "10 000 ₽", discount: null },
    { title: "SPA-день для двоих", amount: "15 000 ₽", discount: "Скидка 10%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={28} />
            <span className="text-2xl font-serif font-semibold text-primary">Эко СПА</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Прайс</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#promo" className="text-sm font-medium hover:text-primary transition-colors">Акции</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/projects/bfb52570-b032-41a2-8dbd-bd488c17e0c0/files/5d2b3f47-f3a2-4cf6-8ead-7ed19ec63f10.jpg"
          alt="Spa hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
            Натуральная забота о себе
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Эко-СПА с природными текстурами и органической косметикой
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
          >
            Записаться на процедуру
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
      </section>

      <section id="services" className="container py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий спектр процедур для вашего здоровья и красоты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-2 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {service.description}
                </p>
                <Badge variant="secondary" className="font-normal">
                  <Icon name="Clock" size={14} className="mr-1" />
                  {service.duration}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/bfb52570-b032-41a2-8dbd-bd488c17e0c0/files/08755231-1234-4693-bab1-53ecefece8f0.jpg"
                alt="Spa stones"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                Философия натуральности
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы используем только органическую косметику и природные материалы. 
                Наши процедуры основаны на древних традициях wellness и современных 
                методиках оздоровления.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                В нашем спа-салоне вы найдете гармонию тела и души, окруженные 
                натуральными текстурами дерева, камня и живых растений.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="px-4 py-2 text-base bg-primary/10 text-primary hover:bg-primary/20">
                  <Icon name="Check" size={16} className="mr-2" />
                  100% натуральная косметика
                </Badge>
                <Badge className="px-4 py-2 text-base bg-primary/10 text-primary hover:bg-primary/20">
                  <Icon name="Check" size={16} className="mr-2" />
                  Эко-материалы
                </Badge>
                <Badge className="px-4 py-2 text-base bg-primary/10 text-primary hover:bg-primary/20">
                  <Icon name="Check" size={16} className="mr-2" />
                  Сертифицированные мастера
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="container py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Прайс-лист
          </h2>
          <p className="text-lg text-muted-foreground">
            Прозрачные цены на все процедуры
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-2 animate-scale-in">
          <CardContent className="p-8">
            <div className="space-y-4">
              {pricing.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-lg">{item.service}</span>
                    <span className="text-xl font-semibold text-primary">{item.price}</span>
                  </div>
                  {index < pricing.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="reviews" className="bg-secondary/30 py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Отзывы наших гостей
            </h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о нас
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="border-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="promo" className="container py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Акции и предложения
          </h2>
          <p className="text-lg text-muted-foreground">
            Специальные предложения для вас
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-accent bg-gradient-to-br from-accent/10 to-accent/5 animate-scale-in">
            <CardContent className="p-8 text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground text-sm px-3 py-1">
                Новинка
              </Badge>
              <h3 className="text-3xl font-serif font-bold mb-3 text-primary">
                Первое посещение
              </h3>
              <p className="text-5xl font-bold text-accent mb-4">-20%</p>
              <p className="text-muted-foreground mb-6">
                Скидка на любую процедуру при первом визите
              </p>
              <Badge variant="outline" className="text-sm">
                Действует до конца месяца
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-8 text-center">
              <Badge className="mb-4 bg-primary text-primary-foreground text-sm px-3 py-1">
                Хит сезона
              </Badge>
              <h3 className="text-3xl font-serif font-bold mb-3 text-primary">
                День релакса
              </h3>
              <p className="text-4xl font-bold text-primary mb-4">7 990 ₽</p>
              <p className="text-muted-foreground mb-6">
                Массаж + SPA-программа + ароматерапия<br/>
                <span className="text-sm">(вместо 9 500 ₽)</span>
              </p>
              <Badge variant="outline" className="text-sm">
                Экономия 1 510 ₽
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
            Подарочные сертификаты
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon name="Gift" size={40} className="text-primary mx-auto mb-3" />
                  <h4 className="text-xl font-serif font-semibold mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-3xl font-bold text-primary mb-2">
                    {cert.amount}
                  </p>
                  {cert.discount && (
                    <Badge className="bg-accent text-accent-foreground">
                      {cert.discount}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-secondary/30 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/bfb52570-b032-41a2-8dbd-bd488c17e0c0/files/17b5c170-449f-45b0-8f45-4e6b407cf870.jpg"
                alt="Spa products"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                Контакты
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Природная, д. 15
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">
                      +7 (495) 123-45-67
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Время работы</p>
                    <p className="text-muted-foreground">
                      Ежедневно с 9:00 до 22:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">
                      info@ecospa.ru
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <p className="font-semibold mb-3">Мы в социальных сетях</p>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Instagram" className="text-primary" size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Facebook" className="text-primary" size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Send" className="text-primary" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-8">
        <div className="container text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Leaf" className="text-primary" size={24} />
            <span className="text-xl font-serif font-semibold text-primary">Эко СПА</span>
          </div>
          <p className="text-sm">
            © 2024 Эко СПА. Натуральная забота о себе.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
