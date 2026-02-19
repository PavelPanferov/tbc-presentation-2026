import React from 'react';
import { SlideProps } from '../types';
import { BigTitle, SectionTitle, Card, SlideHeader, PipelineStep, PipelineArrow, PhoneFrame, MetricCard, TimelineItem, WDLogo, Tag } from './UI';
import { Shield, Zap, TrendingUp, Camera, Palette, FileText, Smartphone, AlertTriangle, CheckCircle, X } from 'lucide-react';

const TOTAL = 10;

/* ─── Slide 1: Title (Pink gradient BG like WD style) ─── */
const SlideTitle: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full wd-gradient-bg flex flex-col p-10 md:p-14 pb-20 overflow-hidden">
    {isActive && (
      <>
        <div className="anim-fade-up mb-4">
          <WDLogo />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <h1 className="font-display text-[8.5rem] md:text-[11.5rem] leading-[0.87] uppercase text-wd-dark tracking-tight anim-fade-up-d1 w-full">
            AI Marketing<br/>Platform<br/>для бизнеса
          </h1>
        </div>

        <div className="flex gap-16 text-sm anim-fade-up-d3">
          <div><span className="text-black/40 text-xs">Презентация:</span><br/><span className="font-semibold">TBC Bank</span></div>
          <div><span className="text-black/40 text-xs">Тема:</span><br/><span className="font-semibold">AI Platform для МСБ</span></div>
          <div><span className="text-black/40 text-xs">Агентство:</span><br/><span className="font-semibold">We Digital</span></div>
          <div><span className="text-black/40 text-xs">Год:</span><br/><span className="font-semibold">2026</span></div>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 2: Context ─── */
const SlideContext: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-16 pb-16 bg-white spray-bg">
    {isActive && (
      <>
        <SlideHeader tag="Контекст" slideNum={2} total={TOTAL} />
        <SectionTitle className="mb-8 anim-fade-up">TBC запускает<br/>направление для бизнеса</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard value="400K+" label="Зарегистрированных предприятий в УЗ" accent delay="0.1s" />
          <MetricCard value="Q2 2026" label="Старт бизнес-направления TBC" delay="0.2s" />
          <MetricCard value="#1" label='Цель: "Банк №1 для бизнеса"' delay="0.3s" />
        </div>

        <div className="anim-fade-up-d4">
          <Card accent>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-wd-purple/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-wd-purple" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Задача</h3>
                <p className="text-wd-gray">Стать top-of-mind среди предпринимателей. Привлечь МСБ-клиентов через спецпроект с AI — не просто реклама, а реальная помощь бизнесу.</p>
              </div>
            </div>
          </Card>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 3: Why Not Cadbury ─── */
const SlideWhyNot: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-16 pb-16 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Анализ" slideNum={3} total={TOTAL} />
        <SectionTitle className="mb-2 anim-fade-up">Почему НЕ копируем<br/>Cadbury × Shah Rukh Khan</SectionTitle>
        <p className="text-wd-muted mb-8 anim-fade-up-d1">Кейс 2021 года — не работает в 2026</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="anim-fade-up-d2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <AlertTriangle className="text-red-500" size={20} />
              </div>
              <h3 className="font-bold">Устарело</h3>
            </div>
            <p className="text-sm text-wd-gray">5 лет назад не было ChatGPT. Сейчас AI-генерации — обыденность. Один запрос в генератор делает то же самое. Эффект "wow" исчез.</p>
          </Card>

          <Card className="anim-fade-up-d3">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <X className="text-red-500" size={20} />
              </div>
              <h3 className="font-bold">Нет технологии</h3>
            </div>
            <p className="text-sm text-wd-gray">Voice cloning на узбекском языке не существует. Lip-sync ненадёжен — артефакты, "зловещая долина". Репутационный риск для амбассадора и TBC.</p>
          </Card>

          <Card className="anim-fade-up-d4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <Shield className="text-red-500" size={20} />
              </div>
              <h3 className="font-bold">Риски</h3>
            </div>
            <p className="text-sm text-wd-gray">Deepfake после утечки 15M профилей. Недобросовестный бизнес может использовать лицо амбассадора. Регуляторы уже обращают внимание.</p>
          </Card>
        </div>

        <div className="mt-6 p-4 bg-wd-purple/5 border border-wd-purple/15 rounded-xl anim-fade-up-d5">
          <p className="text-sm text-wd-dark font-medium">
            <span className="text-wd-purple font-bold">Наша позиция:</span> Вместо одноразового deepfake — sustainable-платформа, которая реально помогает бизнесу и живёт долго.
          </p>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 4: Our Proposal ─── */
const SlideProposal: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-16 pb-16 bg-white spray-left">
    {isActive && (
      <>
        <SlideHeader tag="Предложение" slideNum={4} total={TOTAL} />
        <SectionTitle className="mb-3 anim-fade-up">AI-платформа<br/>для бизнеса</SectionTitle>
        <p className="text-wd-gray mb-8 anim-fade-up-d1">Telegram Mini App 2.0 — предприниматель заходит, верифицируется, получает AI&#8209;инструменты. Бесплатно, с&nbsp;брендингом TBC.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 anim-fade-left">
            <Card accent>
              <div className="flex items-center gap-3 mb-2">
                <Camera className="text-wd-purple" size={22} />
                <h3 className="font-bold">AI Promo Visual Creator</h3>
              </div>
              <p className="text-sm text-wd-gray">Фото продукта → профессиональные маркетинговые визуалы для соцсетей и маркетплейсов</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-2">
                <Palette className="text-wd-pink" size={22} />
                <h3 className="font-bold">AI Brand Kit</h3>
              </div>
              <p className="text-sm text-wd-gray">SVG лого + палитра + шрифты + шаблоны — единый визуальный стиль бизнеса</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="text-wd-purple" size={22} />
                <h3 className="font-bold">AI Content Plan</h3>
              </div>
              <p className="text-sm text-wd-gray">Контент-план на 30 дней: темы, тексты, визуальные брифы, хэштеги</p>
            </Card>
          </div>

          <div className="flex items-center justify-center anim-fade-right">
            <img src="/tg-miniapp-mockup.png" alt="TBC AI Marketer — Telegram Mini App" className="w-[280px] rounded-2xl shadow-2xl" />
          </div>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 5: AI Visual Creator — Flow + Before/After ─── */
const SlidePipeline: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-16 pb-16 bg-white spray-right">
    {isActive && (
      <>
        <SlideHeader tag="Как это работает" slideNum={5} total={TOTAL} />
        <SectionTitle className="mb-2 anim-fade-up">Фото с телефона →<br/>маркетинговый визуал</SectionTitle>
        <p className="text-wd-gray mb-8 anim-fade-up-d1">Предприниматель загружает фото продукта — AI делает профессиональный маркетинг за секунды</p>

        <div className="grid grid-cols-2 gap-10 anim-fade-up-d2">
          {/* Before/After — big visuals */}
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              {/* Before */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 bg-wd-light">
                  <img src="/honey-real.png" alt="До — реальное фото с телефона" className="w-full h-56 object-cover" />
                </div>
                <p className="text-center text-sm text-wd-muted mt-2 font-medium">Фото с телефона</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <span className="text-2xl text-wd-purple font-bold">→</span>
                <span className="text-[10px] text-wd-purple font-semibold uppercase">AI</span>
              </div>

              {/* After */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden border-2 border-wd-purple/30 shadow-lg shadow-wd-purple/10">
                  <img src="/honey-after-v2.png" alt="После — маркетинговый визуал" className="w-full h-56 object-cover" />
                </div>
                <p className="text-center text-sm text-wd-purple mt-2 font-semibold">Маркетинговый визуал</p>
              </div>
            </div>

            <p className="text-xs text-wd-muted text-center">"Chimyon Asali" — готово для Instagram, Telegram-канала или Uzum</p>
          </div>

          {/* Flow description */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-wd-dark mb-2">Как работает флоу</h3>

            {[
              { step: '01', title: 'Загрузка фото', desc: 'Предприниматель фотографирует товар на телефон и загружает в Mini App' },
              { step: '02', title: 'AI удаляет фон', desc: 'Автоматическое отделение продукта от фона — чистый вырез за 2 секунды' },
              { step: '03', title: 'Генерация сцены', desc: 'AI создаёт профессиональную сцену: освещение, композиция, стилистика под категорию товара' },
              { step: '04', title: 'Брендинг и текст', desc: 'Название, слоган, контакты, лого TBC — всё на шаблоне, готовом к публикации' },
              { step: '05', title: 'Результат', desc: '3-5 визуалов в разных форматах: Instagram, Telegram, Uzum карточка' },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-3 anim-fade-up`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <span className="text-xs font-bold text-wd-purple bg-wd-purple/10 px-2 py-1 rounded-md flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <span className="text-sm font-semibold text-wd-dark">{item.title}</span>
                  <p className="text-xs text-wd-gray mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 6: Brand Kit ─── */
const SlideBrandKit: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-16 pb-16 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Продукт" slideNum={6} total={TOTAL} />
        <SectionTitle className="mb-2 anim-fade-up">AI Brand Kit</SectionTitle>
        <p className="text-wd-gray mb-8 anim-fade-up-d1">Название бизнеса → полный бренд-кит: логотип, палитра, шаблоны</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="anim-fade-left">
            <Card accent>
              <h3 className="font-bold mb-4">Что получает предприниматель</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-wd-purple/10 to-wd-pink/10 border border-wd-purple/10 flex items-center justify-center text-xl">🎯</div>
                  <div>
                    <span className="font-medium text-wd-dark">SVG Логотип</span>
                    <p className="text-xs text-wd-muted">3 варианта, векторный формат</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    <div className="w-7 h-7 rounded-lg bg-wd-purple" />
                    <div className="w-7 h-7 rounded-lg bg-wd-pink" />
                    <div className="w-7 h-7 rounded-lg bg-gray-300" />
                    <div className="w-7 h-7 rounded-lg bg-wd-dark" />
                  </div>
                  <div>
                    <span className="font-medium text-wd-dark">Цветовая палитра</span>
                    <p className="text-xs text-wd-muted">4 цвета + HEX коды</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-wd-light border border-gray-200 flex items-center justify-center">
                    <span className="text-lg font-bold text-wd-dark">Aa</span>
                  </div>
                  <div>
                    <span className="font-medium text-wd-dark">Шрифтовая пара</span>
                    <p className="text-xs text-wd-muted">Заголовки + текст</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-wd-light border border-gray-200 flex items-center justify-center text-xl">📄</div>
                  <div>
                    <span className="font-medium text-wd-dark">Шаблоны</span>
                    <p className="text-xs text-wd-muted">Instagram, Telegram, визитка</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="anim-fade-right">
            <Card>
              <h3 className="font-bold mb-4">Себестоимость генерации</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-wd-dark">Бюджет (PNG лого)</span>
                    <span className="font-bold text-green-600">$0.05</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-wd-dark">Оптимум (SVG лого)</span>
                    <span className="font-bold text-blue-600">$0.24</span>
                  </div>
                </div>
                <div className="p-3 bg-wd-purple/5 border border-wd-purple/20 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-wd-dark">Премиум (5 лого + визуалы)</span>
                    <span className="font-bold text-wd-purple">$0.52</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-wd-light rounded-lg">
                <p className="text-xs text-wd-gray">
                  <span className="text-wd-dark font-medium">Recraft V3</span> — единственная модель с нативной генерацией SVG. Чистый вектор без конвертации.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 7: Mockup UI ─── */
const SlideMockup: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-16 pb-16 bg-wd-light">
    {isActive && (
      <>
        <SlideHeader tag="Интерфейс" slideNum={7} total={TOTAL} />
        <SectionTitle className="mb-2 anim-fade-up">Telegram<br/>Mini App 2.0</SectionTitle>
        <p className="text-wd-gray mb-6 anim-fade-up-d1">Fullscreen режим, нативные платежи, home screen shortcuts</p>

        <div className="grid grid-cols-3 gap-6 anim-fade-up-d2">
          {/* Screen 1: Home */}
          <PhoneFrame title="Главная">
            <div className="space-y-3">
              <div className="bg-wd-purple/20 rounded-xl p-3 border border-wd-purple/30 text-center">
                <Smartphone size={24} className="text-wd-purple mx-auto mb-1" />
                <div className="text-xs font-bold">Добро пожаловать!</div>
                <div className="text-[10px] text-gray-400 mt-1">Создайте первый визуал</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                  <Camera size={16} className="mx-auto mb-1 text-wd-purple" />
                  <div className="text-[10px]">Визуалы</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                  <Palette size={16} className="mx-auto mb-1 text-wd-pink" />
                  <div className="text-[10px]">Бренд-кит</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                  <FileText size={16} className="mx-auto mb-1 text-green-400" />
                  <div className="text-[10px]">Контент-план</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                  <TrendingUp size={16} className="mx-auto mb-1 text-yellow-400" />
                  <div className="text-[10px]">Мои работы</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                <div className="text-[10px] text-gray-500">Последние генерации</div>
                <div className="flex gap-1 mt-1">
                  <div className="w-12 h-12 rounded bg-gradient-to-br from-amber-500/20 to-wd-purple/20" />
                  <div className="w-12 h-12 rounded bg-gradient-to-br from-blue-500/20 to-wd-pink/20" />
                  <div className="w-12 h-12 rounded bg-gradient-to-br from-green-500/20 to-wd-purple/20" />
                </div>
              </div>
            </div>
          </PhoneFrame>

          {/* Screen 2: Generation */}
          <PhoneFrame title="Генерация визуала">
            <div className="space-y-3">
              <div className="bg-gray-700/30 rounded-xl p-3 border border-dashed border-gray-500 text-center">
                <div className="text-2xl mb-1">📸</div>
                <div className="text-[10px] text-gray-400">Загрузите фото продукта</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 mb-1">Категория</div>
                <div className="bg-white/5 rounded-lg p-2 text-xs border border-white/10">Еда и напитки ▼</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 mb-1">Название товара</div>
                <div className="bg-white/5 rounded-lg p-2 text-xs border border-white/10 text-gray-400">Chimyon Asali</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 mb-1">Слоган</div>
                <div className="bg-white/5 rounded-lg p-2 text-xs border border-white/10 text-gray-400">Натуральный мёд из Чимгана</div>
              </div>
              <button className="w-full py-2.5 bg-wd-purple rounded-xl text-xs font-bold">
                Сгенерировать визуалы
              </button>
              <div className="text-center text-[9px] text-gray-600">Powered by TBC Business</div>
            </div>
          </PhoneFrame>

          {/* Screen 3: Result */}
          <PhoneFrame title="Результат">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle size={14} className="text-green-400" />
                <span className="text-green-400">3 визуала готовы</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="h-24 bg-gradient-to-br from-amber-500/20 to-wd-purple/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400">Instagram карточка</span>
                </div>
                <div className="h-16 bg-gradient-to-br from-blue-500/20 to-wd-pink/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400">Telegram баннер</span>
                </div>
                <div className="h-16 bg-gradient-to-br from-green-500/20 to-wd-purple/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400">Uzum карточка</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-wd-purple/20 border border-wd-purple/30 rounded-lg text-[10px] text-wd-purple">Скачать все</button>
                <button className="flex-1 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px]">Перегенерировать</button>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 8: Roadmap ─── */
const SlideRoadmap: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-16 pb-16 bg-white spray-right">
    {isActive && (
      <>
        <SlideHeader tag="Roadmap" slideNum={8} total={TOTAL} />
        <SectionTitle className="mb-8 anim-fade-up">Поэтапное развитие<br/>платформы</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <TimelineItem phase="1" title="MVP — Апрель 2026" description="AI Promo Visual Creator: фото → маркетинговые визуалы. Базовый бренд-кит. Telegram Mini App." active delay="0.1s" />
            <TimelineItem phase="2" title="Фаза 2 — Май" description="Профессиональные аватарки для предпринимателей. Личный бренд для Telegram, LinkedIn, визитки." delay="0.2s" />
            <TimelineItem phase="3" title="Фаза 3 — Июнь" description="Мини бренд-кит: расширенная палитра, 5 шаблонов, контент-план на 30 дней." delay="0.3s" />
            <TimelineItem phase="4" title="Фаза 4 — Q3" description="Баннеры для наружки, макеты для печати, карточки маркетплейсов." delay="0.4s" />
            <TimelineItem phase="5" title="Опция — Q3+" description="Лимитированный контент с амбассадорами для топ-клиентов." delay="0.5s" />
          </div>

          <div className="space-y-5 anim-fade-right">
            <Card accent>
              <h3 className="font-bold mb-3">Каждая фаза =</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <div className="accent-dot" />
                  <span>Повод для PR</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="accent-dot" />
                  <span>Новая волна пользователей</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="accent-dot" />
                  <span>Новый контакт с МСБ</span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-bold mb-3">Роль амбассадоров</h3>
              <p className="text-sm text-wd-gray mb-3">Не в AI-генерации, а в промо платформы:</p>
              <div className="space-y-2 text-sm text-wd-dark">
                <div className="flex items-start gap-3"><div className="accent-dot mt-1.5" /><span>Реальные видео: "Я пользуюсь этой платформой"</span></div>
                <div className="flex items-start gap-3"><div className="accent-dot mt-1.5" /><span>Реальные съёмки для маркетинга TBC Business</span></div>
                <div className="flex items-start gap-3"><div className="accent-dot mt-1.5" /><span>Фаза 5: лимитированные бонусы для топ-клиентов</span></div>
              </div>
            </Card>

            <Card>
              <h3 className="font-bold mb-2">Брендинг</h3>
              <p className="text-sm text-wd-gray">"Powered by TBC Business" — тонкий, не агрессивный. Предприниматель хочет использовать, а не скрывать.</p>
            </Card>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 9: Budget & ROI ─── */
const SlideBudget: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-start px-12 md:px-16 pt-8 pb-16 bg-white spray-bg">
    {isActive && (
      <>
        <SlideHeader tag="Бюджет" slideNum={9} total={TOTAL} />
        <h2 className="font-display text-[2.8rem] md:text-[3.8rem] leading-[0.95] uppercase text-wd-dark tracking-tight mb-4 anim-fade-up">Стоимость создания<br/>AI платформы</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: cost breakdown */}
          <Card accent className="anim-fade-up-d1 !p-4">
            <h3 className="font-bold mb-2 text-sm">Смета по этапам</h3>
            <div className="space-y-0">
              {[
                { label: 'Аналитика и проектирование', amount: '49 586 000' },
                { label: 'Разработка Telegram Mini App', amount: '52 640 000' },
                { label: 'AI-пайплайн', amount: '48 240 000' },
                { label: 'Безопасность и модерация', amount: '25 004 000' },
                { label: 'Тестирование и запуск', amount: '28 710 000' },
                { label: 'Управление проектом', amount: '22 800 000' },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between items-center py-2 ${i < 5 ? 'border-b border-gray-100' : ''}`}>
                  <span className="text-sm text-wd-dark">{item.label}</span>
                  <span className="text-sm font-bold text-wd-dark whitespace-nowrap">{item.amount}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t-2 border-wd-purple/20 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-wd-dark">Итого</span>
                <span className="text-base font-display tracking-tight text-wd-dark">226 980 000</span>
              </div>
              <div className="flex justify-between items-center text-xs text-wd-muted">
                <span>НДС 12%</span>
                <span>27 237 600</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-sm font-bold text-wd-purple">Итого с НДС</span>
                <span className="text-lg font-display tracking-tight wd-gradient-text">254 217 600 сум</span>
              </div>
            </div>
          </Card>

          {/* Right: ROI + what's included */}
          <div className="space-y-5">
            <Card className="anim-fade-up-d2">
              <h3 className="font-bold mb-3 text-wd-purple">ROI для TBC</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-wd-gray">Целевой охват</span>
                  <span className="font-bold text-wd-dark">10,000+ МСБ</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-wd-gray">Конверсия в клиентов</span>
                  <span className="font-bold text-wd-dark">1-3%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-wd-gray">Доход на клиента / год</span>
                  <span className="font-bold text-wd-dark">~$1,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-bold text-wd-dark">ROI</span>
                  <span className="font-display text-3xl wd-gradient-text">6.7x — 20x</span>
                </div>
              </div>
            </Card>

            <Card className="anim-fade-up-d3">
              <h3 className="font-bold mb-3">Что входит</h3>
              <div className="space-y-2">
                {[
                  'Полный UX/UI дизайн и прототипы',
                  'Telegram Mini App 2.0 (React)',
                  'AI-пайплайн генерации визуалов',
                  'Серверная инфраструктура в УЗ',
                  'Бета-тест и отладка с реальными бизнесами',
                  'Проектное управление и демо для TBC',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className="text-wd-purple flex-shrink-0" />
                    <span className="text-wd-dark">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ─── Slide 10: Discussion (Pink gradient BG) ─── */
const SlideDiscussion: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-16 pb-16 bg-white spray-left">
    {isActive && (
      <>
        <SlideHeader tag="Обсуждение" slideNum={10} total={TOTAL} />
        <SectionTitle className="mb-8 anim-fade-up">Что дальше?</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { q: 'Брендинг TBC на визуалах', desc: 'Какой формат? Watermark, лейбл, орнамент?' },
              { q: 'Категории бизнеса', desc: 'С каких начинаем? Еда, одежда, услуги?' },
              { q: 'Роль амбассадоров', desc: 'Промо-видео для платформы? Фаза 5 (лимитированные генерации)?' },
              { q: 'Язык платформы', desc: 'Русский? Узбекский? Оба?' },
            ].map((item, i) => (
              <Card key={i} className={`anim-fade-up-d${i + 1}`}>
                <h3 className="font-bold text-wd-dark mb-1">{item.q}</h3>
                <p className="text-sm text-wd-gray">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <Card accent className="anim-fade-up-d2">
              <h3 className="font-bold mb-3">Следующие шаги</h3>
              <div className="space-y-3">
                {[
                  { n: '1', title: 'Go/No-Go решение', sub: 'До конца февраля' },
                  { n: '2', title: 'POC — работающий прототип', sub: '2-3 недели: фото → 3 визуала' },
                  { n: '3', title: 'MVP — Telegram Mini App', sub: '8-10 недель к запуску TBC Business' },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-wd-purple/10 text-wd-purple text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">{step.n}</div>
                    <div>
                      <span className="text-sm font-medium text-wd-dark">{step.title}</span>
                      <p className="text-xs text-wd-muted">{step.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="anim-fade-up-d4">
              <h3 className="font-bold mb-3">Критический путь</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-wd-purple" /><span>Решение TBC → до конца февраля</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-wd-pink" /><span>POC → март</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500" /><span>MVP → апрель (синхрон с запуском)</span></div>
              </div>
            </Card>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ─── Export All ─── */
export const ALL_SLIDES: React.FC<SlideProps>[] = [
  SlideTitle,
  SlideContext,
  SlideWhyNot,
  SlideProposal,
  SlidePipeline,
  SlideBrandKit,
  SlideMockup,
  SlideRoadmap,
  SlideBudget,
  SlideDiscussion,
];
