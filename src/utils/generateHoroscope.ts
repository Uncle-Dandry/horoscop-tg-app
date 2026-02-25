import type { HoroscopePeriod } from 'types/main';

type SupportedLanguage = 'ru' | 'en';

interface GenerateHoroscopeParams {
  sign: string;
  language: string;
  period?: HoroscopePeriod;
  date?: Date;
}

interface SegmentSet {
  intro: string[];
  focus: string[];
  connection: string[];
  closing: string[];
}

interface SegmentTailSet {
  focus: string[];
  connection: string[];
  closing: string[];
}

const SIGN_MESSAGES: Record<string, Record<SupportedLanguage, string>> = {
  aries: {
    ru: 'Твоя смелость сегодня звучит особенно красиво, когда рядом с ней живет мягкость.',
    en: 'Your courage sounds brightest today when it moves alongside gentleness.',
  },
  taurus: {
    ru: 'Твоя устойчивость похожа на тихую опору, на которую можно уверенно опереться.',
    en: 'Your steadiness feels like quiet ground you can trust with every step.',
  },
  gemini: {
    ru: 'Твоя любознательность подхватывает свежий ветер идей и несет тебя к открытиям.',
    en: 'Your curiosity catches a fresh breeze of ideas and carries you to discovery.',
  },
  cancer: {
    ru: 'Твоя чуткость сегодня особенно точна и помогает бережно распознать важное.',
    en: 'Your sensitivity is especially clear today and helps you notice what truly matters.',
  },
  leo: {
    ru: 'Твое теплое присутствие зажигает вокруг мягкий свет и добавляет людям уверенности.',
    en: 'Your warm presence lights a gentle glow around you and gives others confidence.',
  },
  virgo: {
    ru: 'Твое внимание к деталям сегодня напоминает искусство: точное, спокойное и красивое.',
    en: 'Your attention to detail feels like an art today: precise, calm, and graceful.',
  },
  libra: {
    ru: 'Твое чувство баланса находит нужные слова и возвращает разговору гармонию.',
    en: 'Your sense of balance finds the right words and brings harmony back to conversations.',
  },
  scorpio: {
    ru: 'Твоя глубина помогает услышать суть даже там, где слишком много внешнего шума.',
    en: 'Your depth helps you hear the essence even when the world is noisy.',
  },
  sagittarius: {
    ru: 'Твой оптимизм сегодня похож на ясный горизонт: он расширяет взгляд и вдохновляет идти дальше.',
    en: 'Your optimism feels like a clear horizon today, widening your view and your momentum.',
  },
  capricorn: {
    ru: 'Твоя дисциплина строит надежный ритм, в котором даже малые шаги становятся сильными.',
    en: 'Your discipline creates a reliable rhythm where even small steps become powerful.',
  },
  aquarius: {
    ru: 'Твой нестандартный взгляд превращает привычные вопросы в пространство для красивых решений.',
    en: 'Your original perspective turns ordinary questions into space for elegant answers.',
  },
  pisces: {
    ru: 'Твоя эмпатия сегодня словно тихая музыка, которая возвращает тепло и спокойствие.',
    en: 'Your empathy is like soft music today, bringing warmth and calm back to people.',
  },
};

const GENERIC_SEGMENTS: Record<SupportedLanguage, Record<HoroscopePeriod, SegmentSet>> = {
  ru: {
    daily: {
      intro: [
        'Этот день раскрывается неторопливо, как утренний свет в тихом окне.',
        'Сегодня воздух будто мягче обычного: в нем легко услышать себя.',
        'День складывается плавно и приглашает выбирать спокойные, ясные шаги.',
        'Сегодняшний ритм похож на ровное дыхание: уверенное и теплое.',
        'Сегодня многое решается без шума, через внутреннюю ясность и доброту.',
        'С утра день звучит мягко и будто поддерживает каждый осознанный выбор.',
        'Сегодня легко удерживать спокойный курс и не терять внутреннюю опору.',
        'В этом дне есть тихая ясность, которая помогает идти без суеты.',
        'Свет этого дня располагает к бережным решениям и ясным мыслям.',
        'День как будто просит мягкости к себе и к миру вокруг.',
        'Сегодня особенно хорошо идти в своем темпе, не сравнивая себя с другими.',
        'В воздухе дня чувствуется спокойная уверенность и внутреннее тепло.',
        'Этот день любит простоту: она приводит к самым точным результатам.',
        'Сегодня важно не ускоряться, а слушать себя и двигаться ровно.',
        'Ритм дня поддерживает тех, кто выбирает ясность вместо спешки.',
      ],
      focus: [
        'Выбери одно важное дело и веди его бережно, как тонкую линию света.',
        'Небольшой шаг сейчас отзовется красивым результатом ближе к вечеру.',
        'Спокойный фокус на главном сохранит силы и принесет тихую радость.',
        'Когда идешь шаг за шагом, день будто сам раскрывает нужные двери.',
        'Короткий и живой план сегодня работает лучше, чем длинные обещания.',
      ],
      connection: [
        'Теплый разговор сегодня способен снять лишнюю тяжесть и вернуть легкость.',
        'Мягкое внимание к словам другого человека создаст настоящее взаимопонимание.',
        'Говори чуть медленнее и добрее: так тебя услышат глубже.',
        'Искренний знак поддержки сегодня может стать для кого-то маленьким чудом.',
        'Даже один добрый жест сегодня звучит громче любых объяснений.',
      ],
      closing: [
        'К вечеру оставь место тишине, чтобы сердце спокойно собрало силы.',
        'Пусть вечер будет мягким: немного покоя вернет ясность и тепло.',
        'Заверши день с благодарностью к себе, даже за самые маленькие шаги.',
        'Небольшой отдых сегодня станет самой полезной частью твоего ритма.',
        'Доброе отношение к себе вечером поможет завтра проснуться светлее.',
      ],
    },
    weekly: {
      intro: [
        'Эта неделя раскрывается как длинная спокойная дорога, где важен не рывок, а ритм.',
        'На этой неделе у тебя есть шанс двигаться мягко и уверенно, без внутренней спешки.',
        'Неделя принесет ровное течение дел, если ты оставишь место для пауз и дыхания.',
        'Ближайшие дни настроены на бережный рост и ясные, зрелые решения.',
        'Эта неделя просит простоты: чем спокойнее шаг, тем крепче результат.',
        'Неделя начинается спокойно и предлагает строить планы без лишнего давления.',
        'В эти дни лучше всего работает устойчивый темп и ясные ориентиры.',
        'Эта неделя словно дает время на зрелые решения и аккуратные действия.',
        'Ближайшие дни подходят для мягкого, но уверенного движения вперед.',
        'Неделя благоволит последовательности: маленькие шаги сложатся в крупный итог.',
        'Сейчас важнее качество ритма, чем скорость отдельных рывков.',
        'В пространстве этой недели много поддержки для терпеливого роста.',
        'Неделя даст больше, если идти в ней размеренно и с вниманием к себе.',
        'Это подходящее время, чтобы выбрать главное и держаться выбранного курса.',
        'Неделя звучит спокойно и ясно, помогая не распыляться на лишнее.',
      ],
      focus: [
        'В начале недели задай одно главное направление, и остальное подтянется естественно.',
        'Середина недели благоприятна для аккуратных действий, которые дают долгий эффект.',
        'Раздели большие задачи на маленькие: так неделя пройдет легче и продуктивнее.',
        'Не пытайся ускорить все сразу, пусть прогресс будет устойчивым и красивым.',
        'Твоя сила недели - в терпении, которое превращает намерение в результат.',
      ],
      connection: [
        'В отношениях на этой неделе особенно важны мягкий тон и уважение к границам.',
        'Один честный разговор в ближайшие дни может заметно укрепить доверие.',
        'Внимание к близким вернется в ответ теплом и спокойной поддержкой.',
        'Если слушать сердцем, неделя подарит больше согласия, чем ты ожидаешь.',
        'Твоя доброжелательность на этой неделе станет точкой опоры для других.',
      ],
      closing: [
        'К концу недели позволь себе выдохнуть и отметить путь, который ты уже прошел.',
        'Финал недели стоит встретить в тишине и заботе о себе - это укрепит внутренний ресурс.',
        'Небольшой ритуал отдыха в конце недели поможет закрыть ее с чувством гармонии.',
        'Оставь в конце недели время на любимые мелочи: в них рождается ощущение дома.',
        'Пусть завершение недели будет добрым и светлым, без требований к идеалу.',
      ],
    },
  },
  en: {
    daily: {
      intro: [
        'Today unfolds slowly, like morning light crossing a quiet room.',
        'The air feels softer today, making it easier to hear your own heart.',
        'This day moves in a gentle rhythm and welcomes clear, peaceful choices.',
        'Today carries a steady pulse that favors calm confidence over haste.',
        'Many things resolve best today through quiet clarity and kindness.',
        'Morning arrives with a gentle tone that supports thoughtful choices.',
        'Today makes it easier to keep a calm course and steady inner ground.',
        'There is a quiet clarity in this day that helps you move without hurry.',
        'The light of today favors kind decisions and clear thinking.',
        'This day seems to ask for softness toward yourself and others.',
        'Today works best when you move at your own pace without comparison.',
        'The atmosphere carries calm confidence and a touch of warmth.',
        'This day loves simplicity, and simplicity brings precise results.',
        'Today is less about speed and more about listening to yourself.',
        'The rhythm of the day supports those who choose clarity over rush.',
      ],
      focus: [
        'Choose one meaningful task and guide it gently, like tending a small flame.',
        'A small step now can echo into a beautiful result by evening.',
        'A calm focus on what matters most will protect your energy.',
        'When you move step by step, the day opens the right doors for you.',
        'A short and honest plan will serve you better than grand promises.',
      ],
      connection: [
        'A warm conversation today can lift a hidden weight from both sides.',
        'Gentle attention to another person\'s words will build real understanding.',
        'Speak a little slower and kinder today, and your message will travel deeper.',
        'One sincere gesture of support can feel like a quiet miracle.',
        'Even a small act of kindness will resonate loudly today.',
      ],
      closing: [
        'By evening, leave room for silence so your heart can gather strength.',
        'Let the evening stay soft; a little rest will restore warmth and focus.',
        'End the day with gratitude for yourself, including the smallest wins.',
        'A brief pause tonight may become the most helpful part of your day.',
        'Kindness to yourself this evening will make tomorrow brighter.',
      ],
    },
    weekly: {
      intro: [
        'This week opens like a long, quiet road where rhythm matters more than speed.',
        'In the coming days, gentle consistency will carry you farther than pressure.',
        'This week supports steady movement, especially when you leave room to breathe.',
        'The next few days are tuned to calm growth and thoughtful decisions.',
        'This week asks for simplicity; the softer the step, the stronger the outcome.',
        'The week begins calmly and invites plans without extra pressure.',
        'In these days, steady rhythm and clear priorities work best.',
        'This week gives room for mature choices and careful action.',
        'The coming days are ideal for gentle but confident forward movement.',
        'This week favors consistency; small steps can grow into large outcomes.',
        'Right now, quality of rhythm matters more than bursts of speed.',
        'There is strong support this week for patient, grounded growth.',
        'The week gives more when you move through it with balance and self-attention.',
        'This is a good time to choose what matters most and stay with it.',
        'The week sounds calm and clear, helping you avoid unnecessary scatter.',
      ],
      focus: [
        'Set one clear direction at the start of the week and let the rest align around it.',
        'Midweek favors careful actions that create lasting results.',
        'Break larger goals into small pieces, and the week will feel lighter and clearer.',
        'Do not rush every moment; sustainable progress is your strongest strategy now.',
        'Your strength this week is patient effort that turns intention into form.',
      ],
      connection: [
        'In relationships this week, a softer tone and clear boundaries will do wonders.',
        'One honest conversation in the coming days can deepen trust in a meaningful way.',
        'Attention to loved ones will return to you as calm support.',
        'If you listen with your full heart, this week will offer more harmony than expected.',
        'Your kindness this week can become an anchor for someone nearby.',
      ],
      closing: [
        'At week\'s end, pause and honor how far you have already come.',
        'Close the week with rest and self-care; that is how your inner strength renews.',
        'A small ritual of rest this weekend can bring a deep sense of balance.',
        'Leave time for familiar joys at the end of the week; they restore your center.',
        'Let the week finish gently, without asking yourself for perfection.',
      ],
    },
  },
};

const SEGMENT_VARIATIONS: Record<SupportedLanguage, Record<HoroscopePeriod, SegmentSet>> = {
  ru: {
    daily: {
      intro: [
        'В такой атмосфере проще различать важное.',
        'Именно в этом темпе рождается внутренняя ясность.',
        'Пусть эта мягкость станет твоим ориентиром.',
        'Пусть день идет легко, оставляя место для света и дыхания.',
        'С самого утра пространство дня словно просит бережности к себе.',
        'Сегодня особенно полезно прислушиваться к тихим внутренним подсказкам.',
        'В этом дне есть редкая мягкость, которая помогает не суетиться.',
        'Светлый настрой сегодня приходит через простые и осознанные шаги.',
        'День благоволит тем, кто выбирает спокойствие вместо спешки.',
      ],
      focus: [
        'Так ты бережно сохранишь силы до вечера.',
        'Это укрепит ощущение опоры и порядка.',
        'Такой шаг даст больше, чем кажется сначала.',
        'Один аккуратный выбор сегодня сильнее, чем десять резких решений.',
        'Поступательное движение сейчас откроет больше возможностей к вечеру.',
        'Собранность без жесткости принесет самый ровный результат.',
        'Делай меньше, но точнее - и день ответит взаимностью.',
        'Твоя внимательность сейчас превращает рутину в уверенный прогресс.',
        'Размеренный темп поможет завершить важное без внутреннего напряжения.',
      ],
      connection: [
        'Твоя деликатность сегодня особенно ценна.',
        'Слова с теплом найдут самый короткий путь.',
        'Добрый тон поможет снять лишнее напряжение.',
        'Ласковая интонация сегодня творит почти незаметные, но важные чудеса.',
        'Когда ты говоришь с уважением, пространство вокруг становится спокойнее.',
        'Даже короткое сообщение с заботой может многое изменить к лучшему.',
        'Твое участие сейчас слышится особенно глубоко и искренне.',
        'Чуть больше такта в диалоге сегодня даст большой эффект.',
        'Сердечность в общении поможет обойти острые углы мягко.',
      ],
      closing: [
        'Пусть вечер вернет ощущение дома внутри себя.',
        'Немного тишины сейчас важнее любой спешки.',
        'Так день завершится светло и спокойно.',
        'Пусть финал дня будет тихим, как теплый свет в конце пути.',
        'Вечерняя передышка сейчас важнее лишних дел и оправданий.',
        'Забота о себе в конце дня подарит ясное утро завтра.',
        'Разреши себе замедлиться - это и есть мудрый итог дня.',
        'Небольшой уютный ритуал вечером вернет душевное равновесие.',
        'Заверши день спокойно, чтобы сохранить внутреннюю музыку.',
      ],
    },
    weekly: {
      intro: [
        'Неделя особенно щедра к тем, кто выбирает устойчивость.',
        'С каждым днем держать этот ритм будет легче.',
        'В этой размеренности уже есть будущий результат.',
        'Неделя просит не резкости, а доброй последовательности в шагах.',
        'В ближайшие дни многое получится через спокойную устойчивость.',
        'Эта неделя любит тех, кто действует ровно и осмысленно.',
        'Сейчас особенно важно держать курс мягко, но уверенно.',
        'В ритме этой недели много поддержки для зрелых решений.',
        'Неделя складывается гармоничнее, когда ты не торопишь итог.',
      ],
      focus: [
        'К концу недели это сложится в заметный прогресс.',
        'Такой подход сохранит устойчивость в плотном графике.',
        'Главное сейчас - поддерживать ритм, а не спешку.',
        'Один верный приоритет на неделю даст больше, чем лишняя многозадачность.',
        'Лучший вклад сейчас - делать регулярно, а не рывками.',
        'План без перегруза поможет пройти неделю легче и точнее.',
        'Твоя последовательность на этой неделе станет главным источником результата.',
        'Небольшие действия в нужном ритме дадут крепкий итог к выходным.',
        'Ставка на качество в деталях окупится заметно быстрее, чем кажется.',
      ],
      connection: [
        'Теплый диалог в эти дни укрепит доверие.',
        'Поддержка, которую ты дашь, вернется вовремя.',
        'Чем больше мягкости в словах, тем больше согласия вокруг.',
        'Доброжелательность в течение недели станет тихой силой в отношениях.',
        'Чем внимательнее ты слушаешь, тем прочнее становится контакт.',
        'Согласие проще найти, если оставлять место для разных взглядов.',
        'Теплая обратная связь в эти дни особенно поддерживает окружающих.',
        'Эта неделя хорошо откликается на уважение и ясные договоренности.',
        'Мягкость в словах сейчас помогает избежать лишних недопониманий.',
      ],
      closing: [
        'Финал недели лучше посвятить восстановлению и отдыху.',
        'Небольшая пауза поможет войти в новую неделю легче.',
        'Мягкое завершение недели вернет чувство целостности.',
        'В конце недели важно не только подвести итоги, но и выдохнуть.',
        'Подаренный себе покой в выходные укрепит силы на новый старт.',
        'Небольшое замедление к финалу недели вернет ясность и тепло.',
        'Пусть завершение недели будет бережным к телу и мыслям.',
        'Спокойный вечер выходного дня станет лучшей точкой опоры.',
        'Смысл этой недели ярче проявится, когда ты позволишь себе отдых.',
      ],
    },
  },
  en: {
    daily: {
      intro: [
        'In this atmosphere, it is easier to notice what matters.',
        'This pace naturally creates inner clarity.',
        'Let this softness become your guide for today.',
        'Let today move lightly, leaving room for breath and light.',
        'From the morning on, the day invites a kinder pace.',
        'Today it helps to follow the quiet hints of your inner voice.',
        'There is a rare softness in this day that keeps you from rushing.',
        'A brighter mood comes through simple and mindful steps today.',
        'This day supports calm choices more than hurried reactions.',
      ],
      focus: [
        'It helps you protect your energy through the evening.',
        'This strengthens your sense of structure and support.',
        'A step like this gives more than it first seems.',
        'One careful choice today is stronger than ten impulsive moves.',
        'Steady movement now opens more possibilities by evening.',
        'Composure without pressure brings the cleanest result.',
        'Do a little less, but with more precision, and the day will answer kindly.',
        'Your attentiveness can turn routine into confident progress.',
        'A measured pace helps you finish what matters without strain.',
      ],
      connection: [
        'Your delicacy is especially valuable today.',
        'Words with warmth travel the shortest distance.',
        'A kind tone helps release unnecessary tension.',
        'A gentle tone can create quiet but meaningful shifts today.',
        'When you speak with respect, the space around you becomes calmer.',
        'Even a short caring message can change the mood for the better.',
        'Your presence is heard deeply when it stays sincere and warm.',
        'A bit more tact in dialogue can bring a surprisingly strong effect.',
        'Heartfelt communication helps you pass sharp corners softly.',
      ],
      closing: [
        'Let the evening return a feeling of home inside you.',
        'A little quiet now matters more than any rush.',
        'This is how the day closes with lightness and calm.',
        'Let the day end quietly, like warm light at the end of a path.',
        'An evening pause matters more now than extra tasks.',
        'Caring for yourself tonight can gift you a clearer tomorrow.',
        'Allow yourself to slow down; that is wisdom, not delay.',
        'A small cozy ritual tonight can restore emotional balance.',
        'Close the day gently to keep your inner music intact.',
      ],
    },
    weekly: {
      intro: [
        'This week rewards those who choose steadiness.',
        'With each day, this rhythm becomes easier to keep.',
        'A meaningful result is already hidden in this pace.',
        'This week asks for kind consistency, not sharp acceleration.',
        'In the coming days, calm steadiness will open many doors.',
        'This is a week for thoughtful action carried by a stable rhythm.',
        'Right now, holding your course softly is more important than forcing speed.',
        'The rhythm of this week supports mature and clear choices.',
        'The week unfolds better when you do not rush the outcome.',
      ],
      focus: [
        'By week\'s end, this grows into visible progress.',
        'This approach keeps you stable in a crowded schedule.',
        'For now, protect rhythm instead of chasing speed.',
        'One clear priority for the week can beat overloaded multitasking.',
        'Your best move now is consistency over dramatic bursts.',
        'A realistic plan without overload will make the week lighter and sharper.',
        'Your consistency this week becomes your strongest engine of progress.',
        'Small actions in the right rhythm can build a solid weekend result.',
        'Attention to quality in details will pay off sooner than expected.',
      ],
      connection: [
        'Warm dialogue this week can deepen trust.',
        'The support you offer is likely to return on time.',
        'The more kindness in your words, the more harmony around you.',
        'Kindness through the week becomes a quiet strength in relationships.',
        'The better you listen, the stronger your connection becomes.',
        'Harmony comes easier when different views are given breathing room.',
        'Warm feedback this week can be deeply supportive for others.',
        'This week responds especially well to respect and clear agreements.',
        'Softer wording now helps prevent avoidable misunderstandings.',
      ],
      closing: [
        'Use the end of the week for restoration and rest.',
        'A short pause will help you enter the next week lighter.',
        'A gentle finish will bring back a sense of wholeness.',
        'At the end of the week, make space not only for results but for exhale.',
        'Rest given to yourself this weekend will support a stronger new start.',
        'A gentle slowdown near the weekend can restore warmth and clarity.',
        'Let the week close in a way that is kind to your body and mind.',
        'A calm weekend evening can become your best point of support.',
        'The meaning of this week appears brighter once you allow yourself rest.',
      ],
    },
  },
};

const SEGMENT_TAILS: Record<SupportedLanguage, Record<HoroscopePeriod, SegmentTailSet>> = {
  ru: {
    daily: {
      focus: [
        'И ты это почувствуешь довольно быстро.',
        'И пространство дня ответит тебе поддержкой.',
        'И результат будет мягким, но ощутимым.',
      ],
      connection: [
        'Так легче сохранить тепло в контакте.',
        'Так рождается настоящее доверие.',
        'Так отношения становятся спокойнее и честнее.',
      ],
      closing: [
        'Пусть это станет тихой точкой опоры.',
        'Пусть финал дня будет добрым к тебе.',
        'Пусть это останется с тобой как ощущение света.',
      ],
    },
    weekly: {
      focus: [
        'Это создаст надежный фундамент на всю неделю.',
        'Такой ритм даст устойчивый и предсказуемый итог.',
        'Это поможет пройти неделю ровнее и спокойнее.',
      ],
      connection: [
        'Так в отношениях появится больше простого согласия.',
        'Так неделя пройдет в более теплом эмоциональном фоне.',
        'Так поддержка между людьми станет заметнее.',
      ],
      closing: [
        'Это лучший способ подготовить себя к новому старту.',
        'Так ты сохранишь силы и ясность на следующую неделю.',
        'Так завершение недели почувствуется цельным и легким.',
      ],
    },
  },
  en: {
    daily: {
      focus: [
        'You are likely to feel the effect quickly.',
        'The day will answer with a sense of support.',
        'The result will be gentle yet tangible.',
      ],
      connection: [
        'This keeps warmth alive in the connection.',
        'This is how trust quietly grows.',
        'This makes communication calmer and more honest.',
      ],
      closing: [
        'Let it become a quiet point of support.',
        'Let the end of the day stay kind to you.',
        'Let this remain with you as a feeling of light.',
      ],
    },
    weekly: {
      focus: [
        'This creates a reliable foundation for the whole week.',
        'This rhythm leads to a stable and predictable result.',
        'This helps the week move with less friction and more ease.',
      ],
      connection: [
        'This brings simpler harmony into relationships.',
        'This keeps the week emotionally warmer and steadier.',
        'This makes mutual support more visible between people.',
      ],
      closing: [
        'This is the best way to prepare for a fresh start.',
        'This protects your energy and clarity for next week.',
        'This lets the week end with wholeness and ease.',
      ],
    },
  },
};

const SOFT_REPLACEMENTS: Record<SupportedLanguage, Array<[RegExp, string]>> = {
  ru: [
    [/\bагресси(я|и|ю|ей)\b/gi, 'напряжение'],
    [/\bссор(а|ы|у|ой|е)\b/gi, 'недопонимание'],
    [/\bдолж(ен|на|ны)\b/gi, 'можешь'],
  ],
  en: [
    [/\battack\b/gi, 'challenge'],
    [/\bfight\b/gi, 'discussion'],
    [/\bmust\b/gi, 'can'],
  ],
};

const normalizeLanguage = (language: string): SupportedLanguage => {
  return language.toLowerCase().includes('ru')
    ? 'ru'
    : 'en';
};

const normalizePeriod = (period: HoroscopePeriod | undefined): HoroscopePeriod => {
  return period === 'weekly'
    ? 'weekly'
    : 'daily';
};

const normalizeSign = (sign: string): string => {
  const normalized = sign.toLowerCase();

  return SIGN_MESSAGES[normalized]
    ? normalized
    : 'aries';
};

const getDayKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const getWeekKey = (date: Date): string => {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = utcDate.getUTCDay() || 7;

  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - dayNumber);

  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((utcDate.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);

  return `${utcDate.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
};

const getPeriodKey = (date: Date, period: HoroscopePeriod): string => {
  return period === 'weekly'
    ? getWeekKey(date)
    : getDayKey(date);
};

const hashString = (value: string): number => {
  let hash = 2166136261;

  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
};

const createRandom = (seed: number) => {
  let state = seed;

  return () => {
    state += 0x6D2B79F5;

    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
};

const pick = (random: () => number, values: string[]): string => {
  return values[Math.floor(random() * values.length)];
};

const buildSegmentPool = (base: string[], variation: string[], tail: string[] = ['']): string[] => {
  const pool: string[] = [];

  for (let i = 0; i < base.length; i += 1) {
    for (let j = 0; j < variation.length; j += 1) {
      for (let k = 0; k < tail.length; k += 1) {
        pool.push([
          base[i],
          variation[j],
          tail[k],
        ]
          .filter(Boolean)
          .join(' '));
      }
    }
  }

  return pool;
};

const sanitizeHoroscope = (value: string, language: SupportedLanguage): string => {
  const sanitized = SOFT_REPLACEMENTS[language]
    .reduce(
      (result, [pattern, replacement]) => result.replace(pattern, replacement),
      value,
    )
    .replace(/\s+/g, ' ')
    .trim();

  return sanitized;
};

export const generateHoroscope = ({
  sign,
  language,
  period,
  date = new Date(),
}: GenerateHoroscopeParams): string => {
  const normalizedLanguage = normalizeLanguage(language);
  const normalizedSign = normalizeSign(sign);
  const normalizedPeriod = normalizePeriod(period);
  const random = createRandom(
    hashString(`${normalizedSign}:${normalizedLanguage}:${normalizedPeriod}:${getPeriodKey(date, normalizedPeriod)}`),
  );
  const segments = GENERIC_SEGMENTS[normalizedLanguage][normalizedPeriod];
  const variations = SEGMENT_VARIATIONS[normalizedLanguage][normalizedPeriod];
  const tails = SEGMENT_TAILS[normalizedLanguage][normalizedPeriod];

  const introPool = buildSegmentPool(segments.intro, variations.intro);
  const focusPool = buildSegmentPool(segments.focus, variations.focus, tails.focus);
  const connectionPool = buildSegmentPool(segments.connection, variations.connection, tails.connection);
  const closingPool = buildSegmentPool(segments.closing, variations.closing, tails.closing);

  const horoscope = [
    pick(random, introPool),
    SIGN_MESSAGES[normalizedSign][normalizedLanguage],
    pick(random, focusPool),
    pick(random, connectionPool),
    pick(random, closingPool),
  ].join(' ');

  return sanitizeHoroscope(horoscope, normalizedLanguage);
};
