export const profile = {
  name: 'Данил Степанюк',
  role: 'QA Engineer · Middle+',
  nick: 'illuminaty',
  tagline:
    'Тестирую веб, мобильные приложения и бэкенд — от пользовательского сценария до очереди сообщений и записи в базе. Кросс-браузерно и кросс-платформенно: Windows, macOS, Linux, iOS, Android. Одинаково глубоко погружаюсь в домен: телеком и CCaaS, маркетплейсы, мессенджеры, платежи. Ищу команду, где качество — часть инженерной культуры, а не последний этап перед релизом.',
  location: 'Екатеринбург, Россия',
  format: 'Удалённо · полная занятость · готов к редким командировкам',
  telegram: 'https://t.me/illumianty',
  telegramLabel: '@illumianty',
  email: 'danya5660@yandex.ru',
  setka: 'https://set.ki/account/GifzLYQ',
  english: 'Английский — B1 (чтение документации, переписка)',
  russian: 'Русский — родной',
  education: 'НТСК, 2014 — среднее специальное',
  employment: 'Полная занятость, есть самозанятость',
};

export const ticker = [
  'smoke suite · passed',
  'regression · 8h → 4h',
  'WebRTC calls · verified',
  'macOS · safari · webkit',
  'REST API · postman',
  'RabbitMQ · queue checked',
  'Redis · cache invalidation',
  'APNs / FCM · delivered',
  'WebSocket · reconnect ok',
  'MySQL · data integrity',
  'cross-browser · chrome / firefox / edge',
  'docker-compose · env up',
  'pytest + playwright · green',
  'allure report · published',
];

export type Metric = {
  num?: number; dec?: number; suffix?: string; display?: string;
  label: string; note: string; accent: string; viz: 'spark' | 'bars' | 'tags' | 'split';
  delta?: string; series?: number[]; tags?: string[];
};

export const metrics: Metric[] = [
  { num: 4.5, dec: 1, suffix: '+', label: 'Года коммерческого QA-опыта', note: 'Отсчёт с ноября 2021: ИНПУТ ЛАБ → Southmedia', accent: 'var(--color-brand)', viz: 'spark', series: [1, 2, 3, 4, 5, 6, 7] },
  { display: '8 → 4 ч', delta: '−50%', label: 'Время регрессионного прогона', note: 'Замер до и после: приоритизация набора, отдельный smoke, параллельные проверки', accent: 'var(--color-pass)', viz: 'bars', series: [8, 7, 6, 5, 4] },
  { num: 5, label: 'ОС и платформ в покрытии', note: 'Windows, macOS, Linux, iOS, Android — десктоп, мобильные и нативные приложения', accent: 'var(--color-cyan)', viz: 'tags', tags: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'] },
  { num: 4, label: 'Браузера в кросс-проверках', note: 'Chrome, Safari, Firefox, Edge; на iOS все они на WebKit, поэтому Safari обязателен', accent: 'var(--color-magenta)', viz: 'tags', tags: ['Chrome', 'Safari', 'Firefox', 'Edge'] },
  { display: '1 : 4', label: 'Соотношение QA и разработки', note: 'Единственный QA на четырёх разработчиков и PM в Agile-команде', accent: 'var(--color-flaky)', viz: 'split' },
  { num: 20, suffix: '+', label: 'Автотестов в личном фреймворке', note: 'pytest + Playwright, Page Object, Allure-отчёты, запуск в CI', accent: 'var(--color-skip)', viz: 'spark', series: [2, 5, 8, 11, 14, 18, 20] },
  { display: '50 / 50', label: 'Баланс backend и frontend', note: 'Среднее по проектам; смещается в сторону бэка на интеграционных фазах', accent: 'var(--color-brand)', viz: 'split' },
  { num: 11, suffix: '+', label: 'Лет в IT и телекоме', note: 'Техподдержка и связь → инженерия качества: домен телефонии знаю изнутри', accent: 'var(--color-pass)', viz: 'spark', series: [2, 4, 6, 8, 9, 10, 11] },
];

export const levelLegend = [
  '1 — знаком с инструментом',
  '2 — применял на проекте',
  '3 — использую регулярно',
  '4 — работаю ежедневно',
  '5 — выстраиваю процесс и учу других',
];

export type Skill = { name: string; level: number; group: string; evidence: string };

export const skillGroups = [
  { id: 'all', label: 'Все', accent: 'var(--color-brand)' },
  { id: 'manual', label: 'Тестирование', accent: 'var(--color-brand)' },
  { id: 'backend', label: 'Backend и данные', accent: 'var(--color-cyan)' },
  { id: 'mobile', label: 'Платформы и браузеры', accent: 'var(--color-flaky)' },
  { id: 'auto', label: 'Автоматизация', accent: 'var(--color-skip)' },
  { id: 'devops', label: 'Инфраструктура', accent: 'var(--color-pass)' },
];

export const skills: Skill[] = [
  { name: 'Функциональное и регрессионное тестирование', level: 5, group: 'manual', evidence: 'Полный цикл на четырёх продуктах, smoke и регресс перед каждым релизом' },
  { name: 'Тест-дизайн и тестовая документация', level: 5, group: 'manual', evidence: 'Чек-листы, тест-кейсы, баг-репорты; классы эквивалентности, границы, состояния' },
  { name: 'Работа с требованиями и груминг', level: 5, group: 'manual', evidence: 'Нахожу пробелы и противоречия в постановках до старта разработки' },
  { name: 'Кросс-браузерное тестирование', level: 4, group: 'manual', evidence: 'Chrome, Safari, Firefox, Edge; отличия WebKit, Gecko и Chromium в вёрстке и медиа' },
  { name: 'REST API и Postman', level: 5, group: 'backend', evidence: 'Контракты, коды ответов, негативные сценарии, авторизация, идемпотентность' },
  { name: 'Интеграции: VoIP / WebRTC / WebSocket', level: 4, group: 'backend', evidence: 'Звонки, события реального времени, реконнекты, OTP, push APNs и FCM' },
  { name: 'SQL и MySQL', level: 4, group: 'backend', evidence: 'Проверка целостности данных, выборки для локализации дефекта' },
  { name: 'RabbitMQ и Redis', level: 4, group: 'backend', evidence: 'Доставка сообщений в очереди, инвалидация кэша, гонки и рассинхрон' },
  { name: 'Логи и трафик: Charles, DevTools', level: 4, group: 'backend', evidence: 'Подмена ответов, разбор запросов, локализация «фронт или бэк»' },
  { name: 'macOS и Safari (WebKit)', level: 4, group: 'mobile', evidence: 'Автоплей и медиа-политики, разрешения микрофона, отличия рендера от Chromium' },
  { name: 'Windows и Linux-окружения', level: 4, group: 'mobile', evidence: 'Chrome, Firefox, Edge; проверка стендов и логов сервисов в Linux' },
  { name: 'Android: Android Studio, ADB', level: 4, group: 'mobile', evidence: 'Логи, permissions, WebView, входящий звонок при свёрнутом приложении' },
  { name: 'iOS: Xcode, реальные устройства', level: 4, group: 'mobile', evidence: 'Разрешения, push, прерывания, смена аудиомаршрута, поведение в фоне' },
  { name: 'Адаптив и device mode', level: 4, group: 'mobile', evidence: 'Брейкпоинты, тач-жесты, плотности пикселя, проверка на реальных экранах' },
  { name: 'Python, pytest, Playwright', level: 3, group: 'auto', evidence: 'Личный фреймворк: Page Object, фикстуры, параметризация, ~20 сценариев' },
  { name: 'Allure и отчётность', level: 3, group: 'auto', evidence: 'Шаги, вложения, история прогонов, публикация отчёта из CI' },
  { name: 'AI-инструменты: Claude, Cursor', level: 4, group: 'auto', evidence: 'Черновики тестов, генерация данных, разбор логов, code review' },
  { name: 'Docker и docker-compose', level: 4, group: 'devops', evidence: 'Поднимаю тестовые окружения и зависимости локально' },
  { name: 'Git, GitLab CI, GitHub Actions', level: 3, group: 'devops', evidence: 'Ветки, ревью, пайплайны сборки и прогона тестов' },
  { name: 'Linux и Bash', level: 3, group: 'devops', evidence: 'Логи сервисов, права, сети, скрипты для рутинных проверок' },
];

export const browsers = [
  { id: 'chrome', name: 'Chrome', icon: 'Chrome' },
  { id: 'safari', name: 'Safari', icon: 'Compass' },
  { id: 'firefox', name: 'Firefox', icon: 'Flame' },
  { id: 'edge', name: 'Edge', icon: 'Globe' },
  { id: 'webview', name: 'WebView / native', icon: 'Tablet' },
];

export const stateMeta = {
  full: { label: 'Основная проверка', glyph: '✓', color: 'var(--color-pass)' },
  partial: { label: 'Выборочная проверка', glyph: '◐', color: 'var(--color-flaky)' },
  na: { label: 'Не применяется', glyph: '—', color: '#6b7c9e' },
};

export type Cell = { s: 'full' | 'partial' | 'na'; n: string };
export type EnvRow = { id: string; name: string; sub: string; icon: string; cells: Record<string, Cell> };

export const envMatrix: EnvRow[] = [
  {
    id: 'windows', name: 'Windows 10 / 11', sub: 'основная desktop-среда', icon: 'Monitor',
    cells: {
      chrome: { s: 'full', n: 'Основной desktop-прогон: полный регресс, DevTools, снятие трафика через Charles, проверка загрузок и клавиатурных сценариев.' },
      safari: { s: 'na', n: 'Safari для Windows не выпускается с 2012 года. Проверка WebKit вынесена на macOS и iOS — это корректная замена, а не пропуск.' },
      firefox: { s: 'full', n: 'Движок Gecko: отличия в вёрстке форм, скролле, работе с медиа и буфером обмена. Ловит баги, невидимые в Chromium.' },
      edge: { s: 'full', n: 'Тот же Chromium, но свои политики безопасности, корпоративные настройки и обработка разрешений на микрофон.' },
      webview: { s: 'na', n: 'Desktop-WebView в зоне моих задач не использовался — нативные клиенты тестировались на мобильных платформах.' },
    },
  },
  {
    id: 'macos', name: 'macOS', sub: 'Safari и WebKit', icon: 'Apple',
    cells: {
      chrome: { s: 'full', n: 'Сверка с Windows-прогоном: рендер шрифтов, инерционный скролл, горячие клавиши, работа с буфером обмена.' },
      safari: { s: 'full', n: 'Ключевая проверка WebKit: политики автоплея, доступ к микрофону для WebRTC, поведение вкладок в фоне, отличия в CSS и дата-инпутах.' },
      firefox: { s: 'partial', n: 'Выборочные проверки критичных сценариев, когда нужно отделить баг движка от бага платформы.' },
      edge: { s: 'partial', n: 'Точечно, чтобы подтвердить Chromium-поведение именно на macOS, а не только на Windows.' },
      webview: { s: 'na', n: 'Нативные macOS-клиенты в моих проектах не тестировались.' },
    },
  },
  {
    id: 'linux', name: 'Linux', sub: 'стенды и сервисы', icon: 'Terminal',
    cells: {
      chrome: { s: 'full', n: 'Проверка веб-клиента на машине, где поднят стенд: удобно сопоставлять поведение UI с логами сервисов в реальном времени.' },
      safari: { s: 'na', n: 'Safari для Linux не существует. WebKit закрывается проверками на macOS и iOS.' },
      firefox: { s: 'full', n: 'Часто основной браузер в Linux-окружениях, поэтому регресс идёт здесь в полном объёме.' },
      edge: { s: 'partial', n: 'Выборочно, при подозрении на специфичное поведение Chromium-сборки.' },
      webview: { s: 'na', n: 'Не применялось в текущих проектах.' },
    },
  },
  {
    id: 'ios', name: 'iOS / iPadOS', sub: 'реальные устройства', icon: 'Apple',
    cells: {
      chrome: { s: 'partial', n: 'На iOS Chrome работает на WebKit, а не на Blink. Проверяю отличия оболочки и базовые сценарии, а не другой движок.' },
      safari: { s: 'full', n: 'Главная мобильная среда: разрешения микрофона, автоплей, поведение при сворачивании и входящем звонке, работа с push.' },
      firefox: { s: 'partial', n: 'Тот же WebKit под капотом: проверяю оболочку, авторизацию и критичные пути.' },
      edge: { s: 'partial', n: 'Выборочно, для полноты картины по оболочкам на WebKit.' },
      webview: { s: 'full', n: 'Нативное приложение и встроенные WebView-экраны: permissions, прерывания, смена аудиомаршрута, фон.' },
    },
  },
  {
    id: 'android', name: 'Android', sub: 'устройства и эмуляторы', icon: 'Smartphone',
    cells: {
      chrome: { s: 'full', n: 'Основной мобильный браузер: адаптив, тач-жесты, поведение при потере сети, фоновые сценарии.' },
      safari: { s: 'na', n: 'Safari недоступен на Android — проверка не применяется.' },
      firefox: { s: 'partial', n: 'Выборочная проверка Gecko на мобильных, когда есть подозрение на движок-специфичный дефект.' },
      edge: { s: 'partial', n: 'Точечно, для подтверждения поведения Chromium-оболочки.' },
      webview: { s: 'full', n: 'WebView внутри приложения: разрешения, логи через ADB, входящий звонок при свёрнутом приложении, восстановление после kills.' },
    },
  },
];

export const coverageNote =
  'На iOS все браузеры работают на WebKit, поэтому Safari — обязательная среда, а не альтернатива Chrome. Дополнительно проверяю адаптив через DevTools device mode, разные плотности пикселя и поведение на реальных устройствах, а не только в эмуляции.';

export type Job = {
  company: string; role: string; period: string; duration: string; place: string;
  url?: string; accent: string; context: string;
  wins: { title: string; text: string }[];
  duties: string[]; process: string[]; stack: string[];
};

export const jobs: Job[] = [
  {
    company: 'АИМ Southmedia',
    role: 'Старший QA Engineer',
    period: 'Апрель 2024 — Октябрь 2026',
    duration: '2 года 7 месяцев',
    place: 'Краснодар · удалённо',
    url: 'https://southmedia.ru',
    accent: 'var(--color-brand)',
    context:
      'Облачная CCaaS-платформа: контакт-центр, IP-телефония, омниканальные коммуникации. B2B SaaS на микросервисной архитектуре. Под тестированием Web (desktop и mobile), iOS, Android и Backend API. Команда: четыре разработчика, PM и я — единственный QA.',
    wins: [
      { title: 'Регресс 8 → 4 часа', text: 'Пересобрал регрессионный набор: выделил smoke, приоритизировал сценарии по риску, убрал пересечения. Время прогона сократилось вдвое без потери покрытия критичных путей.' },
      { title: 'Безопасность конфигураций', text: 'Обнаружил API-ключи и креды в конфигах. Инициировал вынос секретов в переменные окружения и обновление уязвимых зависимостей.' },
      { title: 'Чистая тестовая база', text: 'Провёл рефакторинг тестовой кодовой базы: устранил дублирующие проверки, сократил количество файлов и стоимость поддержки.' },
    ],
    duties: [
      'Полный цикл тестирования: анализ требований и груминг → тест-дизайн → прогон → релиз и пост-релизная проверка.',
      'Функциональное, регрессионное, smoke и кроссплатформенное тестирование Web, iOS и Android.',
      'Кросс-браузерные проверки: Chrome, Safari, Firefox, Edge на Windows и macOS, включая WebRTC и медиа-сценарии.',
      'Интеграционные сценарии: VoIP и WebRTC-звонки, WebSocket-события, генерация и валидация OTP, push-уведомления APNs и FCM.',
      'Backend: REST API через Postman, проверка данных в MySQL, сообщений в RabbitMQ, состояния кэша в Redis.',
      'Анализ трафика и логов через Charles и DevTools, локализация дефекта до конкретного сервиса.',
      'Тестовая документация: чек-листы, тест-кейсы и баг-репорты в Jira, Yandex Tracker и WEEEK.',
      'Поднятие тестовых окружений через Docker и docker-compose.',
    ],
    process: [
      'На груминге выявлял пробелы в требованиях до начала разработки — это снимало часть дефектов ещё на этапе постановки.',
      'Соотношение backend и frontend в среднем 50/50, смещалось в зависимости от фазы релиза.',
      'Высокая частота релизов: поддерживал актуальность регрессионного набора и smoke-проверок.',
      'Автоматизация: личный фреймворк на Python (pytest, Playwright, Allure, Page Object), около 20 сценариев, запуск в CI.',
      'Claude и Claude Code использовал для code review, генерации тестовых данных и разбора логов.',
    ],
    stack: ['Postman', 'Charles', 'DevTools', 'MySQL', 'RabbitMQ', 'Redis', 'WebRTC', 'WebSocket', 'APNs', 'FCM', 'Safari', 'Chrome', 'Firefox', 'Edge', 'Docker', 'docker-compose', 'Jira', 'Yandex Tracker', 'WEEEK', 'pytest', 'Playwright', 'Allure'],
  },
  {
    company: 'ООО «ИНПУТ ЛАБ»',
    role: 'Старший QA Engineer',
    period: 'Ноябрь 2021 — Декабрь 2023',
    duration: '2 года 2 месяца',
    place: 'Москва · удалённо',
    url: 'https://new.vmeste.ru',
    accent: 'var(--color-skip)',
    context:
      'Продуктовая студия с несколькими параллельными проектами: мессенджер, маркетплейс, B2B-кабинет клиента и сервисы оплаты. Кроссплатформенное тестирование Android, iOS, Web (desktop и mobile) и Backend.',
    wins: [
      { title: 'Четыре домена параллельно', text: 'Переключался между мессенджером, маркетплейсом, B2B-кабинетом и платёжными сервисами — каждый со своей моделью данных и рисками.' },
      { title: 'Соответствие ТЗ и макетам', text: 'Проверял новые фичи не только на функциональность, но и на соответствие техническому заданию и дизайну в Figma.' },
      { title: 'Стабильные релизы', text: 'Регулярные smoke и регрессионные прогоны перед выпуском, поддержка актуальной тестовой документации по всем проектам.' },
    ],
    duties: [
      'Тестирование Android, iOS, Web (desktop и mobile) и Backend.',
      'Кросс-браузерные и кросс-платформенные проверки, адаптив на реальных устройствах.',
      'Применение техник тест-дизайна и теории тестирования на практике.',
      'Ведение тестовой документации: чек-листы, тест-кейсы, баг-репорты.',
      'Проверка новых фич перед выпуском на соответствие ТЗ и дизайну в Figma.',
      'Проведение smoke-тестов и полного регресса.',
      'Взаимодействие с проджект-менеджерами, аналитиком, frontend- и backend-разработчиками.',
    ],
    process: [
      'Платёжные сценарии проверялись с повышенным вниманием к негативным веткам и повторным операциям.',
      'В мессенджере ключевыми были сценарии доставки, статусов и поведения при нестабильной сети.',
      'В маркетплейсе — каталог, корзина, оформление заказа и права ролей в B2B-кабинете.',
    ],
    stack: ['Android', 'iOS', 'Web', 'Backend', 'Safari', 'Chrome', 'Figma', 'Smoke', 'Regression', 'Test design', 'Bug tracking'],
  },
];

export const earlyCareer = [
  { period: 'Март 2021 — Октябрь 2021', company: 'Связной', role: 'Специалист IT-отдела', text: 'Техническая поддержка розничных точек, прошивка оборудования, проверка связи до точек.' },
  { period: 'Январь 2015 — Апрель 2021', company: 'CONVEX, НТЦ Интек', role: 'Специалист технической поддержки', text: 'Телеком и мобильная связь: приём и закрытие заявок, техническая помощь абонентам. Шесть лет доменной базы, которая позже пригодилась в CCaaS.' },
];

export type StackCat = { id: string; title: string; icon: string; accent: string; wide?: boolean; items: { name: string; icon: string }[] };

export const stack: StackCat[] = [
  { id: 'testing', title: 'Тестирование и API', icon: 'Bug', accent: 'var(--color-brand)', items: [
    { name: 'Postman', icon: 'Send' }, { name: 'Charles', icon: 'Network' }, { name: 'DevTools', icon: 'Code2' },
    { name: 'REST', icon: 'Globe' }, { name: 'WebSocket', icon: 'Activity' }, { name: 'Smoke / Regression', icon: 'ListChecks' },
  ]},
  { id: 'backend', title: 'Backend и данные', icon: 'Database', accent: 'var(--color-cyan)', items: [
    { name: 'MySQL', icon: 'Database' }, { name: 'RabbitMQ', icon: 'Boxes' }, { name: 'Redis', icon: 'Layers' },
    { name: 'Linux', icon: 'Terminal' }, { name: 'Bash', icon: 'Terminal' }, { name: 'Микросервисы', icon: 'Server' },
  ]},
  { id: 'mobile', title: 'Мобильные платформы', icon: 'Smartphone', accent: 'var(--color-flaky)', items: [
    { name: 'Android Studio', icon: 'Smartphone' }, { name: 'ADB', icon: 'Terminal' }, { name: 'Xcode', icon: 'Apple' },
    { name: 'APNs / FCM', icon: 'Radio' }, { name: 'WebRTC', icon: 'PhoneCall' }, { name: 'Реальные устройства', icon: 'Tablet' },
  ]},
  { id: 'auto', title: 'Автоматизация и AI', icon: 'FlaskConical', accent: 'var(--color-skip)', items: [
    { name: 'Python', icon: 'Braces' }, { name: 'pytest', icon: 'FlaskConical' }, { name: 'Playwright', icon: 'Play' },
    { name: 'Allure', icon: 'BarChart3' }, { name: 'Page Object', icon: 'Layers' }, { name: 'Claude', icon: 'Sparkles' }, { name: 'Cursor', icon: 'Bot' },
  ]},
  { id: 'devops', title: 'Инфраструктура и CI/CD', icon: 'Container', accent: 'var(--color-pass)', items: [
    { name: 'Docker', icon: 'Container' }, { name: 'docker-compose', icon: 'Boxes' }, { name: 'Git', icon: 'GitBranch' },
    { name: 'GitLab CI', icon: 'Workflow' }, { name: 'GitHub Actions', icon: 'Github' },
  ]},
  { id: 'process', title: 'Процессы и трекеры', icon: 'Users', accent: 'var(--color-magenta)', items: [
    { name: 'Jira', icon: 'ListChecks' }, { name: 'Yandex Tracker', icon: 'ListChecks' }, { name: 'WEEEK', icon: 'ListChecks' },
    { name: 'Figma', icon: 'Figma' }, { name: 'Agile / grooming', icon: 'Users' }, { name: 'TestRail / Qase', icon: 'FileText' },
  ]},
  { id: 'env', title: 'Операционные системы и браузеры', icon: 'Monitor', accent: 'var(--color-cyan)', wide: true, items: [
    { name: 'Windows 10 / 11', icon: 'Monitor' }, { name: 'macOS', icon: 'Apple' }, { name: 'Linux', icon: 'Terminal' },
    { name: 'iOS / iPadOS', icon: 'Apple' }, { name: 'Android', icon: 'Smartphone' },
    { name: 'Chrome', icon: 'Chrome' }, { name: 'Safari / WebKit', icon: 'Compass' }, { name: 'Firefox / Gecko', icon: 'Flame' },
    { name: 'Edge', icon: 'Globe' }, { name: 'WebView', icon: 'Tablet' }, { name: 'Device mode', icon: 'Laptop' },
  ]},
];

export const projects = [
  {
    name: 'QA Automation Framework',
    status: 'Активный',
    accent: 'var(--color-pass)',
    icon: 'FlaskConical',
    summary: 'Личный фреймворк автоматизации UI и API: около 20 сценариев на Python, pytest и Playwright, Page Object, Allure-отчёты и запуск в CI.',
    points: [
      'Page Object и разделение слоёв: страницы, шаги, данные, конфигурация.',
      'Фикстуры pytest, параметризация, переиспользуемые предусловия.',
      'Allure: шаги, вложения, скриншоты падений, история прогонов.',
      'Запуск в CI и публикация отчёта артефактом.',
    ],
    stack: ['Python', 'pytest', 'Playwright', 'Allure', 'Page Object', 'CI'],
  },
  {
    name: 'Этот сайт-портфолио',
    status: 'Задеплоен',
    accent: 'var(--color-brand)',
    icon: 'Rocket',
    summary: 'Astro и Tailwind CSS v4, светлая и тёмная темы, интерактивный стенд прогона, матрица окружений, печать в PDF, автоматический деплой на GitHub Pages через GitHub Actions.',
    points: [
      'Дизайн-система на токенах Tailwind v4, class-based переключение темы без мигания.',
      'Один requestAnimationFrame-цикл на все курсорные эффекты, поддержка prefers-reduced-motion.',
      'Печатная версия страницы: CV собирается в PDF прямо из браузера.',
      'CI: сборка и публикация артефакта Pages при каждом пуше в main.',
    ],
    stack: ['Astro', 'Tailwind v4', 'TypeScript', 'GitHub Actions', 'GitHub Pages'],
  },
  {
    name: 'QA Career Toolkit',
    status: 'В разработке',
    accent: 'var(--color-magenta)',
    icon: 'Sparkles',
    summary: 'Продукт для QA-инженеров: разбор вакансии против профиля, генерация сопроводительного письма и черновиков тест-кейсов по требованиям. Локальные модели через Ollama, облачный фолбэк через OpenRouter.',
    points: [
      'Модуль анализа вакансии: процент совпадения, список пробелов, план подготовки.',
      'Модуль тест-дизайна: чек-листы и тест-кейсы из user story, экспорт в формат трекера.',
      'История откликов и дашборд по этапам воронки.',
      'PWA, PostgreSQL, фоновые задачи, полный CI/CD и автотесты.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Ollama', 'OpenRouter', 'PWA'],
  },
];

export type TestCase = { id: string; name: string; group: string; ms: number; risk: number };

export const tests: TestCase[] = [
  { id: 'auth-01', name: 'Логин по email и паролю', group: 'Auth', ms: 1200, risk: 0.03 },
  { id: 'auth-02', name: 'OTP: генерация и TTL 60 секунд', group: 'Auth', ms: 900, risk: 0.07 },
  { id: 'auth-03', name: 'OTP: лимит попыток и блокировка', group: 'Auth', ms: 1400, risk: 0.05 },
  { id: 'auth-04', name: 'Восстановление пароля по ссылке', group: 'Auth', ms: 1100, risk: 0.03 },
  { id: 'call-01', name: 'Исходящий звонок через WebRTC', group: 'Calls', ms: 2600, risk: 0.22 },
  { id: 'call-02', name: 'Входящий звонок: accept и decline', group: 'Calls', ms: 2400, risk: 0.19 },
  { id: 'call-03', name: 'Смена аудиоустройства во время звонка', group: 'Calls', ms: 1800, risk: 0.26 },
  { id: 'call-04', name: 'Удержание и перевод звонка', group: 'Calls', ms: 2200, risk: 0.15 },
  { id: 'api-01', name: 'GET /contacts: пагинация и фильтры', group: 'API', ms: 700, risk: 0.02 },
  { id: 'api-02', name: 'POST /leads: валидация обязательных полей', group: 'API', ms: 800, risk: 0.03 },
  { id: 'api-03', name: 'POST /calls: идемпотентность запроса', group: 'API', ms: 950, risk: 0.06 },
  { id: 'api-04', name: 'Авторизация: 401 без токена', group: 'API', ms: 500, risk: 0.01 },
  { id: 'data-01', name: 'MySQL: целостность истории звонков', group: 'Data', ms: 1500, risk: 0.05 },
  { id: 'data-02', name: 'RabbitMQ: доставка события в очередь', group: 'Data', ms: 1300, risk: 0.11 },
  { id: 'data-03', name: 'Redis: инвалидация кэша профиля', group: 'Data', ms: 900, risk: 0.09 },
  { id: 'rt-01', name: 'WebSocket: реконнект после обрыва', group: 'Realtime', ms: 2000, risk: 0.28 },
  { id: 'rt-02', name: 'Push APNs и FCM: доставка уведомления', group: 'Realtime', ms: 1700, risk: 0.24 },
  { id: 'mob-01', name: 'Android: входящий звонок в фоне', group: 'Mobile', ms: 2100, risk: 0.2 },
  { id: 'mob-02', name: 'iOS: разрешение на микрофон', group: 'Mobile', ms: 1600, risk: 0.13 },
  { id: 'mob-03', name: 'macOS Safari: автоплей и WebRTC', group: 'Mobile', ms: 1900, risk: 0.17 },
  { id: 'mob-04', name: 'Web mobile: адаптив экрана звонка', group: 'Mobile', ms: 1200, risk: 0.06 },
];

export const suites = [
  { id: 'smoke', label: 'Smoke', groups: ['Auth', 'API'], note: 'Быстрая проверка критичного пути перед релизом' },
  { id: 'regression', label: 'Полный регресс', groups: ['Auth', 'Calls', 'API', 'Data', 'Realtime', 'Mobile'], note: 'Все группы, максимальное покрытие' },
  { id: 'api', label: 'API и данные', groups: ['API', 'Data'], note: 'Контракты, очереди, кэш, целостность' },
  { id: 'realtime', label: 'Realtime и звонки', groups: ['Calls', 'Realtime'], note: 'Самая нестабильная зона: сеть и устройства' },
  { id: 'mobile', label: 'Платформы и браузеры', groups: ['Mobile', 'Calls'], note: 'Устройства, разрешения, WebKit, фоновые сценарии' },
<<<<<<< HEAD
];
=======
];
>>>>>>> 881443f (a little update)
