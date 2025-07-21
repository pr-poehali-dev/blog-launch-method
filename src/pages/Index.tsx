import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">СТАРТ С НУЛЯ. БЕЗ ГОЛОВЫ. БЕЗ МОНТАЖА.</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                От 415 до 10 000 подписчиков за 
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> 3 месяца</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-white/90 font-medium">
                Метод "без говорящей головы" — честно, просто, по-настоящему
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-bold text-lg px-8 py-6">
                  <Icon name="Play" className="mr-2" />
                  Получить практикум за 2990 ₽
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6">
                  <Icon name="BarChart3" className="mr-2" />
                  Посмотреть результаты
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-yellow-300">10K</div>
                  <div className="text-sm text-white/80">подписчиков</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-yellow-300">90</div>
                  <div className="text-sm text-white/80">дней</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-yellow-300">0</div>
                  <div className="text-sm text-white/80">бюджета</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <img 
                src="/img/f65946c3-1feb-4299-8918-2009ad5c7b7f.jpg" 
                alt="Blog Growth Illustration" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black text-center mb-12 text-slate-800">
              🟦 СТАРТ БЫЛ НЕ КРАСИВЫЙ
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-600">
                      <Icon name="Calendar" />
                      Октябрь 2024
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Я зарегистрировал Instagram в 2020 году. С намерением: «буду писать, делиться, развиваться».
                    </p>
                    <p className="text-slate-600">
                      Но… ничего не делал. Просто потреблял. Смотрел, как растут другие. Завидовал по‑тихому.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <Card className="bg-blue-50 border-blue-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-800">415 подписчиков</span>
                      <Badge variant="secondary">Старт</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex items-center justify-center">
                  <Icon name="ArrowDown" className="text-orange-500" size={32} />
                </div>
                
                <Card className="bg-green-50 border-green-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-green-800">10,000 подписчиков</span>
                      <Badge className="bg-green-600">29 декабря</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-12">
            🟨 КАК РАБОТАЕТ МОЙ МЕТОД
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-4xl font-bold mb-4 text-yellow-300">
                "Метод без головы"
              </h3>
              <p className="text-xl text-blue-100">
                Без "встань в кадр, скажи речь, добавь титры, сделай монтаж"
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Video" className="text-yellow-300" />
                    Короткие Reels (5-6 сек)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-100">
                    <li>▶ Я иду. Сижу. Думаю. Читаю</li>
                    <li>▶ Поверх — цепляющий заголовок</li>
                    <li>▶ Ниже — текст 3-5 строк</li>
                    <li>▶ В конце — призыв к действию</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Images" className="text-yellow-300" />
                    Карусели (5-8 слайдов)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-100">
                    <li>▶ Первый — заголовок-крючок</li>
                    <li>▶ Раскрытие темы по слайдам</li>
                    <li>▶ Последний — удар или облегчение</li>
                    <li>▶ Иногда аудио, всегда — мысль</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-16 text-orange-400">
            📈 РЕЗУЛЬТАТЫ В ЦИФРАХ
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-none text-white text-center hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">1.2М</div>
                <div className="text-orange-100">просмотров карусели</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-none text-white text-center hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">700K</div>
                <div className="text-blue-100">просмотров поста</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500 to-teal-600 border-none text-white text-center hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">435K</div>
                <div className="text-green-100">просмотров видео</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500 to-pink-600 border-none text-white text-center hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">90</div>
                <div className="text-purple-100">дней роста</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-2xl text-slate-300 mb-8">
              Без бюджета. Без продюсера. Без говорящей головы.
            </p>
            <p className="text-xl text-orange-400 font-semibold">
              📌 Просто я. Мои мысли. Мои тексты. Мой ритм.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-16 text-slate-800">
            🟫 МНЕ ПИШУТ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-green-500 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <p className="text-slate-600 mb-4 italic">
                  "Ты как будто озвучил то, что я чувствую."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                  <span className="text-sm text-slate-500">Подписчик</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <p className="text-slate-600 mb-4 italic">
                  "После твоего поста стало легче дышать."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                  <span className="text-sm text-slate-500">Читатель</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <p className="text-slate-600 mb-4 italic">
                  "Брат, я не знаю кто ты, но я подписался — потому что это настоящее."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                  <span className="text-sm text-slate-500">Фоловер</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black mb-8 text-orange-400">
              🟥 Я СОБРАЛ ЭТО В ПРАКТИКУМ
            </h2>
            
            <p className="text-xl mb-12 text-slate-300">
              Всё, что я делаю — можно разобрать по шагам. Я это и сделал.
            </p>
            
            <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-none text-white mb-12">
              <CardContent className="p-8">
                <div className="text-6xl font-black mb-4">2990 ₽</div>
                <div className="text-xl text-orange-100 mb-6">Разовый платёж. Сразу доступ.</div>
                <p className="text-orange-100 mb-8">
                  Без воды. Без затягиваний. Без рассылок на 12 недель.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                  <div>
                    <h4 className="font-bold mb-2">📦 Внутри:</h4>
                    <ul className="text-orange-100 space-y-1 text-sm">
                      <li>— Формула "текстовых Reels"</li>
                      <li>— Как оформлять карусели</li>
                      <li>— Как искать темы</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">🎯 Бонусы:</h4>
                    <ul className="text-orange-100 space-y-1 text-sm">
                      <li>— Как снимать на телефон</li>
                      <li>— Как не выгорать</li>
                      <li>— Упаковка блога</li>
                    </ul>
                  </div>
                </div>
                
                <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-bold text-xl px-12 py-6">
                  <Icon name="ShoppingCart" className="mr-2" />
                  Получить практикум сейчас
                </Button>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-900 border-green-700">
                <CardHeader>
                  <CardTitle className="text-green-400">🟩 ЭТО ДЛЯ КОГО:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-green-200 space-y-2">
                    <li>✔️ Хочешь развивать блог без кадра</li>
                    <li>✔️ Устал от сложных стратегий</li>
                    <li>✔️ Хочешь настоящих читателей</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-red-900 border-red-700">
                <CardHeader>
                  <CardTitle className="text-red-400">🟥 НЕ ДЛЯ КОГО:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-red-200 space-y-2">
                    <li>✖️ Ищешь кнопку "бабло"</li>
                    <li>✖️ Не готов выкладывать</li>
                    <li>✖️ Хочешь проснуться знаменитым</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-black mb-8">
            🟫 МОЙ СОВЕТ
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Если бы я вернулся в октябрь 2024-го, я бы начал всё точно так же.
          </p>
          
          <div className="space-y-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-bold text-xl px-12 py-6 mr-4">
              <Icon name="Rocket" className="mr-2" />
              Начать сегодня за 2990 ₽
            </Button>
            <p className="text-orange-200">
              Поехали! 🚀
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}