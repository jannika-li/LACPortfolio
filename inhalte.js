/* ══════════════════════════════════════════════════════════════════════════
   INHALTE.JS
   ═══════════════════════════════════════════════════════════════════════════
   HIER passiert 95% deiner Bearbeitung. Diese Datei enthält NUR Texte, Bilder,
   Links und Einstellungen — keine Layout-/Design-Logik. Die Datei logbuch.html
   liest diese Werte aus und baut daraus die Seite. Du musst logbuch.html in
   der Regel NIE anfassen.

   Jeder Abschnitt ist mit ✏️ markiert. Suche in deinem Editor (Strg+F) nach
   ✏️, um direkt zu allen Stellen zu springen, die du anpassen kannst/sollst.
   ══════════════════════════════════════════════════════════════════════════ */


/* ────────────────────────────────────────────────────────────────────────
   ✏️ 1) BENOTUNGSRELEVANTE WOCHEN
   ────────────────────────────────────────────────────────────────────────
   Trage hier einfach die Nummern der Wochen ein, die du zur Benotung
   eingereicht hast (0 = Vorbereitungswoche). Reihenfolge egal.

   Beispiel: [0, 1, 6, 9, 12]  →  Woche 0, 1, 6, 9 und 12 sind benotungsrelevant.

   Das ist die EINZIGE Stelle, an der du das festlegen musst — du musst NICHT
   mehr bei jeder einzelnen Woche weiter unten etwas ändern.
   ──────────────────────────────────────────────────────────────────────── */
const BENOTUNGSRELEVANTE_WOCHEN = [1, 2, 4, 7, 9, 10];


/* ────────────────────────────────────────────────────────────────────────
   ✏️ 2) BADGE-STIL: Foto der Professorin ODER Anker-Icon?
   ────────────────────────────────────────────────────────────────────────
   Jede benotungsrelevante Woche bekommt ein kleines rundes Badge. Du kannst
   wählen, ob dort ein Foto (z. B. deiner Professorin) oder einfach ein
   dezentes Anker-Icon erscheinen soll — für die GESAMTE Seite auf einmal.

   true  → Foto wird verwendet (siehe Abschnitt 3 für das Foto selbst)
   false → stattdessen erscheint überall ein einfaches Anker-Icon
   ──────────────────────────────────────────────────────────────────────── */
const ZEIGE_FOTO_BADGE = true;


/* ────────────────────────────────────────────────────────────────────────
   ✏️ 3) FOTO FÜR DAS BADGE
   ────────────────────────────────────────────────────────────────────────
   Wird nur benötigt, wenn ZEIGE_FOTO_BADGE = true ist.

   Am einfachsten: Trage hier den LINK zu einem Bild ein, z. B.:
     const FOTO_BADGE_URL = "https://example.com/mein-bild.jpg";

   Der lange Text weiter unten (PROFESSORIN_FOTO_BASE64) ist das aktuell
   eingebettete Foto — den brauchst du nicht zu verstehen oder zu bearbeiten.
   Wenn du ihn durch einen eigenen Bild-Link ersetzen willst, ändere einfach
   die Zeile "const FOTO_BADGE_URL = ..." direkt darunter.
   ──────────────────────────────────────────────────────────────────────── */
const PROFESSORIN_FOTO_BASE64 = "data:image/jpeg;base64,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";

// 👉 Diese Zeile bestimmt, welches Bild tatsächlich angezeigt wird:
const FOTO_BADGE_URL = PROFESSORIN_FOTO_BASE64;


/* ────────────────────────────────────────────────────────────────────────
   ✏️ 4) SEITENTEXTE (Titel, Navigationsleiste, Startseite, Fußzeile)
   ──────────────────────────────────────────────────────────────────────── */
const SEITENTEXTE = {
  browserTab:      "Logbook - Leadership Across Cultures - Jannika Eberhardt",

  navTitelKurz:    "Logbook",
  navTitelLang:    "- Leadership Aross Cultures - Jannika Eberhardt",

  heroKicker:      "Learning Journey 2026 · Hamburg",
  heroTitel:       "Setting Course: Navigating Cultural Waters",
  heroText: `Sailing the seas of global leadership. Welcome to my learning journal. This space serves as a record of my insights and media on
    <span class="text-ink font-medium">„Leadership Across Cultures"</span>,
    approached through the lens of a maritime journey. Discover the lessons learned when adventure meets diverse cultural horizons.`,

  legendeBenotet:      "documented and included in portfolio selection for final grading",
  legendeDokumentiert: "documented, but not in portfolio selection",

  etappenUeberschrift: "The Journey Stages",

  footerText:  "Digital Logbook · Leadership Across Cultures · Summer Semester 2026",
  footerRoute: "Hamburg → Vast Sea → Vast World"
};


/* ────────────────────────────────────────────────────────────────────────
   ✏️ 5) DIE WOCHEN — Inhalt, Bilder, Videos, Links
   ────────────────────────────────────────────────────────────────────────
   Für jede Woche kannst du anpassen:
     - title            → Überschrift der Woche
     - tag               → kurzer Untertitel
     - icon              → Icon-Name von tabler-icons.io (z. B. "ti-anchor")
     - keyLearnings      → Stichpunkte auf der Kachel-Rückseite
     - reflection        → der Haupttext (einfaches HTML: <p>, <strong> etc.)
     - media.images      → Liste von Bildern: { src: "Bild-URL", caption: "Bildunterschrift" }
     - media.video        → { url: "YouTube-Embed-Link", caption: "..." } oder null
     - media.audio        → { src: "Audio-Datei-URL", caption: "..." } oder null
     - notionUrl          → Link zu deinem Notion-Protokoll dieser Woche

   Ob eine Woche benotungsrelevant ist, legst du NICHT hier fest, sondern
   ganz oben in Abschnitt 1 (BENOTUNGSRELEVANTE_WOCHEN).
   ──────────────────────────────────────────────────────────────────────── */
const weeksData = [
  {
    id: 0,
    title: "Objectives",
    tag: "Kurs abstecken vor Auslaufen",
    icon: "ti-flag-3",
    keyLearnings: [
      "Persönliche Lernziele definiert",
      "Erwartungen an interkulturelle Führung geklärt",
      "Kompass für das Semester justiert"
    ],
    detail: {
      reflection: `
        <p>Bevor eine Reise beginnt, muss der Kurs feststehen. In dieser ersten Etappe habe ich meine
        persönlichen Lernziele für das Modul „Leadership across Cultures" formuliert und sie mit meinen
        eigenen Erfahrungen aus deutsch-mexikanischen Familienkontexten verknüpft.</p>
        <p>Zentral war die Frage: Was bedeutet „Führung" eigentlich, wenn kulturelle Selbstverständlichkeiten
        nicht mehr gelten? Ich habe drei Leitfragen für das Semester festgelegt, die mich durch alle
        folgenden Wochen begleiten sollen — sie fungieren als mein Kompass.</p>`,
      media: {
        images: [
          { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80", caption: "Kursplanung — der Ausgangshafen" }
        ],
        video: null,
        audio: null
      },
      notionUrl: "https://app.notion.com/p/Week-0-Objectives-3256fc3d3bd580aa9b0fdd6ace9693e5?source=copy_link"
    }
  },
  {
    id: 1,
    title: "Social Identity Theory of Leadership",
    tag: "Grasping the Theory through Molly's Case",
    icon: "ti-map-2",
    keyLearnings: [
      "Crisis Leadership is a Two-Way Shield: Protect your crew’s psychological safety, and they will protect the ship from unexpected storms"
    ],
    detail: {
      reflection: `
        <p><strong>Key Learning: </strong>From an outside perspective, the leader and the team are often 
        treated as separate entities. While external pressure—such as hitting specific KPIs—rests entirely
        on the leader's shoulders, truly complex challenges can only be mastered by a well-functioning team.
        Instead of merely passing that external pressure down, a leader must understand, unite, and realign
        the team. When a leader understands and leverages this duality, the team develops a collective 
        intelligence and strength that enables its members to actively take ownership and protect the leader
        from risks.</p>
        <p>Crisis leadership is a two-way promise of protection. While the leader sets the strategic 
        direction and safeguards the collective against strategic errors, the workforce reciprocates by 
        proactively shielding the leadership from the unpredictable. This dynamic only emerges when employees 
        experience that their values and psychological safety are actively defended ("Identity Championing"). 
        Identity-driven leadership thus transforms a passive group into a highly adaptive, loyal early-warning
        system.</p>
        <p><strong>Metaphor: </strong>From an outside perspective, the skipper (leader) and the crew (team) are
        often evaluated separately. The pressure from the outside world—whether the boat crosses the finish 
        line first—usually rests solely on the leader's shoulders. In reality, however, the truly difficult 
        storms can only be weathered by a well-functioning team. Instead of passing that external pressure 
        down unfiltered, the leader must understand the crew, forge them into a united front, and set a clear 
        course. When a leader understands and leverages this duality, the crew develops a collective intelligence
        and strength, enabling crew members to support the leader by actively taking responsibility during 
        unforeseen dangers (storms), allowing the team to emerge from crises faster and stronger.</p>`,
      media: {
        images: [
          { src: "images/_DSC9150.jpg", caption: "Probe" },
          { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", caption: "Whiteboard-Mitschrift aus dem Seminar" }
        ],
        video: { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Kurzvortrag: Hofstede in der Praxis (Seminaraufzeichnung)" },
        audio: { src: "", caption: "Podcast-Reflexion (folgt)" }
      },
      notionUrl: "https://app.notion.com/p/Week-1-Assignment-Tasks-3256fc3d3bd58006a49fd1583d801e3b?source=copy_link"
    }
  },
  {
    id: 2,
    title: "FISH!-Philosophy",
    tag: "Philosophy that can build strong, engaging, customer-focused organisations",
    icon: "ti-messages",
    keyLearnings: [
      "Humans aren't machines; they require active engagement rather than just repetitive tasks"
    ],
    detail: {
      reflection: `
        <p><strong>Key Learning: </strong>Underemployment and underutilization can be significant challenges
        in certain industries and roles. Humans are not machines; they thrive on engagement rather than mere
        repetition. When a deeper sense of purpose is temporarily missing from a task, introducing elements 
        of fun and playfulness can drastically improve motivation, morale, and overall well-being.</p>
        <p><strong>Metaphor: </strong>In sailing, the greatest threat isn't always a storm; it is the "doldrums", 
        the complete absence of wind that leaves a ship stranded and stagnant. Similarly, in many industries, being
        underchallenged kills momentum because humans are not automated engines built to run on a fixed track. When 
        the external "wind" of a deep, systemic purpose is missing, a team must rely on their own crew morale. 
        Injecting energy, creativity, and a playful attitude acts like catching a sudden breeze, transforming a 
        stagnant drift into a motivated journey</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-2-Assignment-Tasks-Fish-3796fc3d3bd58014b709ce91ea0af425?source=copy_link"
    }
  },
  {
    id: 3,
    title: "Power of Talk",
    tag: "Discovering research to the different use of language of women and men",
    icon: "ti-sailboat",
    keyLearnings: [
      "Decoding diversity in language to unleash potential"
    ],
    detail: {
      reflection: `
        <p><strong>Key Learning: </strong>An inclusive leader decodes diverse communication styles rather 
        than penalizing them by judging them by their own lense. By establishing a shared course instead 
        of forcing conformity, leaders unlock the collective power of both gender and cultural diversity</p>
        <p><strong>Metaphor: </strong>A diverse team is like a sailboat crew navigating open waters. The team
        members are the sails, but their different cultural and gender backgrounds mean they are shaped
       differently and catch the wind at different angles.</p> 
       <p>An inexperienced captain might expect every sail to be trimmed exactly the same way. When one sail
       doesn't catch the wind as expected, the captain might blame the fabric, calling it weak or ineffective.</p>
       <p>An inclusive leader, however, acts as a master sailor. They understand that the sails aren't flawed; 
       they just react differently to the wind. Instead of forcing every sail into the same rigid position, or 
       penalizing the ones that don't fit the mold, the leader adjusts the rigging, teaches the crew how to read 
       the unique tension of each sail, and establishes a shared course. They don't change the wind, nor do they 
       replace the sails; they optimize how the ship uses the collective power of all sails to move forward together</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-3-Assignment-Tasks-3796fc3d3bd5800abcbfdf9613ae25a0?source=copy_link"
    }
  },
  {
    id: 4,
    title: "Female Leaders",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning 1 hier eintragen",
      "✏️ Key Learning 2 hier eintragen"
    ],
    detail: {
      reflection: `
        <p>✏️ Hier deinen Reflexionstext zu Woche 4 eintragen — du kannst mehrere &lt;p&gt;-Absätze
        verwenden und einzelne Wörter mit &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-4-Assignment-Tasks-37a6fc3d3bd58050b85cfb29a15cbda4?source=copy_link"
    }
  },
  {
    id: 5,
    title: "Dealing with Diversity",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning 1 hier eintragen",
      "✏️ Key Learning 2 hier eintragen"
    ],
    detail: {
      reflection: `
        <p>✏️ Hier deinen Reflexionstext zu Woche 5 eintragen — du kannst mehrere &lt;p&gt;-Absätze
        verwenden und einzelne Wörter mit &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-5-Assignment-Tasks-37c6fc3d3bd5807d9a89c5633a947f28?source=copy_link"
    }
  },
  {
    id: 6,
    title: "Managing Conflicts",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning 1 hier eintragen",
      "✏️ Key Learning 2 hier eintragen"
    ],
    detail: {
      reflection: `
        <p>✏️ Hier deinen Reflexionstext zu Woche 6 eintragen — du kannst mehrere &lt;p&gt;-Absätze
        verwenden und einzelne Wörter mit &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-6-Assignment-Tasks-37d6fc3d3bd58034b4cafa61b8303734?source=copy_link"
    }
  },
  {
    id: 7,
    title: "Virtual Teams",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning 1 hier eintragen",
      "✏️ Key Learning 2 hier eintragen"
    ],
    detail: {
      reflection: `
        <p>✏️ Hier deinen Reflexionstext zu Woche 7 eintragen — du kannst mehrere &lt;p&gt;-Absätze
        verwenden und einzelne Wörter mit &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-7-Assignment-Tasks-3606fc3d3bd5802e92d1e7ab71625e09?source=copy_link"
    }
  },
  {
    id: 8,
    title: "Digital Leadership",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning 1 hier eintragen",
      "✏️ Key Learning 2 hier eintragen"
    ],
    detail: {
      reflection: `
        <p>✏️ Hier deinen Reflexionstext zu Woche 8 eintragen — du kannst mehrere &lt;p&gt;-Absätze
        verwenden und einzelne Wörter mit &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-8-Assignment-Tasks-35f6fc3d3bd5807b8affe04d612c9f41?source=copy_link"
    }
  },
  {
    id: 9,
    title: "Reinventing Organisations",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "Ownership beats inaction",
      "Experiment small, scale what works",
      "Look for win-win solutions, they exist"
    ],
    detail: {
      reflection: `
        <p><strong> Key Learning: Ownership beats inaction. </strong></p>
        <p>During my internship, I realized that the most valuable skill isn't knowledge—it's taking responsibility.
        And that is much harder than it sounds. Responsibility requires energy, courage, and a willingness to make 
        decisions despite uncertainty.</p>
        <p>I believe many people struggle to take responsibility even for their own lives. As a result, the idea of 
        making important decisions for an organization can feel overwhelming. But organizations only become truly 
        adaptable when people stop waiting for someone else to act.</p>
        What stood out to me about Teal organizations is that responsibility is distributed rather than concentrated.
        Team members are trusted to make decisions after seeking advice from the people affected. The focus shifts from
        making the perfect decision to making a thoughtful one and continuously improving it. In more traditional 
        organizations, decisions are often judged more harshly than they are supported, making people afraid to take ownership
        in the first place.</p>
        <p>The biggest mindset shift for me was realizing that responsibility and self-criticism are not the same thing. 
        Taking responsibility does not mean never making mistakes. It means staying engaged when things don't go as planned. 
        As long as you take ownership, learn, and adapt, you are moving the organization forward. A real mistake is not making 
        an imperfect decision—it is refusing to act or abandoning responsibility altogether.</p>
        <p>Teal organizations make responsibility feel natural because people can show up as themselves. They are not hiding
        behind roles or titles. Improving the organization feels personal because they are improving the environment they are 
        part of every day. When people genuinely care about their workplace, taking responsibility no longer feels like carrying
        a burden—it feels like creating something they believe in.</p>
        <p><strong>Metaphor: </strong>No sailor expects to sail in a perfectly straight line. Reaching the destination depends
        on making countless small course corrections. Taking responsibility means being willing to steer, adjust, and keep moving forward.</p>
        <p><strong>Key Learning: Experiment small, scale what works. </strong></p>
        <p>Many organizations introduce new systems by rolling them out to everyone at once. For employees, this often feels 
        like a disruptive break from familiar ways of working, which naturally creates resistance. But meaningful change rarely 
        happens overnight.</p>
        <p>Instead of transforming an entire organization at once, new processes, tools, or ways of working should first be tested 
        in small groups whenever possible. These experiments create a safe environment to learn what works, gather continuous feedback, 
        and refine ideas before expanding them.</p>
        <p>This is one of the strengths of Teal organizations. Teams operate as small, autonomous units where members can quickly 
        experiment, adapt, and share their learnings with other teams. If something doesn't work, the impact remains limited. If it 
        does, the solution has already been improved through real experience before being adopted more broadly.</p>
        <p>By experimenting on a small scale first, organizations reduce risk, learn faster, and make change feel like a natural 
        evolution rather than a disruptive transformation.</p>
        <p><strong>Metaphor: </strong>A fleet sails farther when each boat is free to explore the best route and share what it learns.
        Instead of one risky decision for everyone, many small experiments help the whole fleet find the safest course together.</p>
        <p><strong>Key Learning: Look for win-win solutions, they exist</strong></p>
        <p>One of the biggest lessons I took away from my internship is how deeply we believe that every solution requires someone to 
        lose. We often assume that if one group benefits, another must inevitably suffer.</p>
        <p>Yet we are looking at a way of organizing companies that has already been proven in practice. There are organizations that 
        have been working successfully with Teal principles for years. Despite this evidence, many people still struggle to believe that
        an organization can create better outcomes for everyone involved.</p>
        <p>This made me question how often we reject new ideas simply because they seem too optimistic. Instead of searching for compromises
        where everyone gives something up, we should spend more time looking for solutions where everyone gains something. These solutions 
        exist, but they often require us to challenge long-held assumptions and be willing to do things differently.</p>
        <p>Innovation is not only about creating new products or technologies. Sometimes it means rethinking the rules we have always accepted.
        If an idea has already proven that it can make work more meaningful, organizations more adaptable, and people more fulfilled, then it 
        deserves to be taken seriously. The best solutions are not always those where someone wins at another person's expense—they are the 
        ones where everyone moves forward together.</p>
        <p><strong>Metaphor: </strong>We often believe that a ship can only move forward because someone is carrying the burden. But the best 
        vessels prove otherwise: when the crew is motivated, the owner succeeds, and the passengers are satisfied, everyone benefits from the 
        same journey.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-9-Assignment-Tasks-3616fc3d3bd580359ba6f2eb296f784b?source=copy_link"
    }
  },
  {
    id: 10,
    title: "Leadership and AI",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning 1 hier eintragen",
      "✏️ Key Learning 2 hier eintragen"
    ],
    detail: {
      reflection: `
        <p>✏️ Hier deinen Reflexionstext zu Woche 10 eintragen — du kannst mehrere &lt;p&gt;-Absätze
        verwenden und einzelne Wörter mit &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-10-Assignment-Tasks-3656fc3d3bd580508f4fdc959579efc7?source=copy_link"
    }
  },
  {
    id: 11,
    title: "Leadership and Ego",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning 1 hier eintragen",
      "✏️ Key Learning 2 hier eintragen"
    ],
    detail: {
      reflection: `
        <p>✏️ Hier deinen Reflexionstext zu Woche 11 eintragen — du kannst mehrere &lt;p&gt;-Absätze
        verwenden und einzelne Wörter mit &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-11-Assignment-Tasks-37a6fc3d3bd580eda4aeef30b8fa4dde?source=copy_link"
    }
  },
  {
    id: 12,
    title: "Becoming a Leader",
    tag: "✏️ Kurzbeschreibung hier ergänzen",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning 1 hier eintragen",
      "✏️ Key Learning 2 hier eintragen"
    ],
    detail: {
      reflection: `
        <p>✏️ Hier deinen Reflexionstext zu Woche 12 eintragen — du kannst mehrere &lt;p&gt;-Absätze
        verwenden und einzelne Wörter mit &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-12-Assignment-Tasks-3776fc3d3bd5803fa123cc1dff556bb0?source=copy_link"
    }
  }
];
