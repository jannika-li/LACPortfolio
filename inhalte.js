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
  heroText: `Welcome to my learning journal. This is Jannika's first real leadership role — and, if she's honest,
    a lot is going wrong. Her team doesn't quite listen to her yet, decisions don't land the way she intends, and the
    confidence she expected to feel simply hasn't arrived. But she isn't starting from zero: years on the water as a
    sailor gave her instincts about crews, storms, and steady hands at the helm that most first-time leaders don't have.
    This logbook documents her attempt to translate that
    <span class="text-ink font-medium">sailing knowledge</span> into leadership — week by week, mistake by mistake —
    while gathering advice and perspectives from the people she meets along the way.`,

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

   💡 TIPP zu Bildern/Videos, die NICHTS mit Segeln zu tun haben:
   In der Story dieses Logbuchs sind das die Menschen, Tipps und Eindrücke,
   die Jannika auf ihrem Weg zu einer besseren Führungsrolle trifft (z. B.
   ein Zitat einer Kollegin, ein Foto aus einem Workshop, ein Artikel-Link).
   Schreib das gern kurz in die caption, z. B. "Tipp von meiner Mentorin"
   oder "Eindruck aus dem Teammeeting diese Woche".

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
      "The strongest leaders don't carry pressure alone, they build teams that think, adapt, and protect together."
    ],
    detail: {
      reflection: `
        <p>Welches Problem habe ich diese woche?</p>
        <p>From an outside perspective, the skipper and the crew are often evaluated as separate entities,
        with the immense pressure of crossing the finish line resting solely on the captain’s shoulders. 
        But a true skipper does not just stand passively at the helm. Even when the waves tower high, the
        leader's primary duty is to read the elements, set a definitive, unwavering course, and forge a 
        fragmented group of sailors into a single, united front. Most importantly, the skipper acts as a 
        shield, absorbing the brutal impact of the external elements and protecting the crew’s safety so 
        they can focus on their tasks without fear. Because the crew experiences this fierce protection 
        and clear direction from their captain, a profound sense of loyalty is born. They don't just 
        follow orders; they actively seek to return the favor.</p>
        <p>This directly transfers to corporate leadership. When a leader absorbs external pressure, like 
        harsh KPI demands, and actively defends the team's psychological safety, crisis leadership becomes
        a two-way promise of protection. By safeguarding the workforce from strategic errors and external 
        chaos, the leader inspires the team to reciprocate. The crew transforms into a highly adaptive, 
        loyal early-warning system. Bound by mutual trust, team members proactively step up during 
        unforeseen crises, taking ownership to shield their leader from risks and ensuring the organization
        weathers any storm together.</p>
        <p><strong>I want future me to remember: The strongest leaders don't carry pressure alone,
        they build teams that think, adapt, and protect together.</strong></p>`,
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
        <p>Welches problem habe ich diese woche?</p>
        <p>In the open ocean, the greatest threat to a voyage isn't always a roaring storm; often, it is the dreaded
        "doldrums", the eerie, complete absence of wind that leaves a vessel stranded and helplessly drifting. A 
        ship cannot move on a fixed track like an automated engine; it requires an external force to propel it 
        forward. When the horizon remains dead calm and the sails hang lifelessly, frustration settles in, and the 
        crew's energy begins to evaporate. In these moments of absolute stagnation, a skilled skipper knows that 
        survival depends entirely on crew morale. By deliberately injecting energy, creativity, and a spirited, 
        playful attitude into the daily routine on deck, the leader shifts the atmosphere. This spark of internal 
        morale acts like catching a sudden, unexpected breeze, instantly snapping the sails back to life and 
        transforming a stagnant drift into a motivated, purposeful journey.</p>
        <p>This directly transfers to the workplace, where underutilization and a temporary lack of systemic purpose 
        can completely kill a team's momentum. Because humans are not machines built for mindless repetition, being
        underchallenged is just as dangerous as being overworked. When the external "wind" of a deeper meaning is 
        missing from a task, a leader must step in to protect the team's well-being. By intentionally introducing 
        elements of fun, gamification, and playfulness, the leader boosts morale and revitalizes engagement, turning
        a period of professional stagnation into a highly motivated, tight-knit drive forward.</p>
        <p><strong>I want future me to remeber: Humans aren't machines, they require active engagement rather 
        than just repetetive tasks</strong></p>`,
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
      "Decode diversity in language to unleash potential"
    ],
    detail: {
      reflection: `
        <p>Welches Problem habe ich diese woche?</p>
        <p>A diverse team is like a sailboat crew navigating open waters, where the individual team members
        act as the vessel's sails. Because of their varied backgrounds, these sails are cut from different 
        fabrics, shaped in unique geometries, and designed to catch the wind at entirely different angles. 
        An inexperienced captain, expecting uniformity, might try to trim every single sail exactly the 
        same way. When a specific sail fails to draw power under those rigid settings, the captain quickly
        blames the material, misjudging it as weak, flawed, or ineffective. A master sailor, however, knows
        that the sail isn't broken, it simply reacts differently to the wind. Instead of forcing compliance
        or penalizing a sail that doesn't fit a standard mold, the expert skipper patiently adjusts the 
        rigging, learns the unique tension of each sheet, and aligns them all toward a shared destination.
        They don't try to change the wind or replace the crew; they optimize how the ship harnesses the 
        distinct, collective power of every sail to surge forward.</p>
        <p>This directly transfers to inclusive leadership, where a manager must decode diverse communication
        styles rather than penalizing employees through the narrow lens of their own cultural or gender expectations.
        Forcing conformity only suffocates a team's potential. By establishing a clear, shared course and adjusting 
        the organizational "rigging" to accommodate different perspectives, an inclusive leader unlocks the true 
        collective power of diversity, transforming individual differences into a powerful, unified drive.</p>
        <p><strong>I want future me to remeber: Decode diversity in language to unleash potential</strong></p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-3-Assignment-Tasks-3796fc3d3bd5800abcbfdf9613ae25a0?source=copy_link"
    }
  },
  {
    id: 4,
    title: "Female Leaders",
    tag: "Challenging leadership stereotypes and unlocking the potential of female leaders.",
    icon: "ti-sailboat",
    keyLearnings: [
      "In leadership, actions often build trust more powerfully than words.",
      "Leadership credibility is built through visible competence."
    ],
    detail: {
      reflection: `
        <p>Welches Probleme habe ich diese Woche?</p>
        <p>When the wind shifts unexpectedly on the open ocean, an experienced captain doesn't waste precious
        time arguing with the weather or shouting at the storm. You cannot negotiate with a gale-force headwind; 
        you master it by adjusting your sails and keeping a firm hand on the helm. In turbulent seas, a captain's 
        true authority isn't proven by shouting over the roar of the waves, but by the steady, unyielding course 
        of the vessel itself. As the ship cuts cleanly through punishing countercurrents, the flawless execution 
        of every maneuver speaks for itself, silently proving the skipper’s absolute capability to the crew and 
        anyone watching from the shore.</p>
        <p>This directly transfers to modern leadership, where female leaders frequently face shifting winds of 
        systemic bias. In these unpredictable waters, trying to verbally debate or address every single disparity 
        through dialogue is rarely the most effective path. True communication transcends the spoken word. Instead
        of fighting the wind, a leader builds lasting, gender-blind trust through strategic visibility and 
        undeniable competence. By letting tangible results and decisive actions "speak a thousand words," a leader
        effortlessly demonstrates captaincy, commands authority, and lets the undeniable success of the journey 
        permanently silence the skeptics.</p>
        <p><strong>I want future me to remeber: In leadership, actions often build trust more powerfully than 
        words.</p>
        
        <p>Imagine two captains standing on the docks of a bustling harbor, each looking to recruit a crew for a
        grueling voyage across open waters. No seasoned sailor would ever entrust their life to a captain whose 
        name they have never heard, or whose ability to navigate a treacherous storm has never been witnessed. 
        Because the stakes on the ocean are life and death, sailors rely heavily on a captain's reputation, past 
        observations, and visible proof of seamanship. A captain whose skills remain entirely hidden in the shadows 
        is automatically assumed to be inexperienced, or worse, reckless. Exceptional seamanship alone is not enough
        to command a ship; great captains understand that they must make their competence visible to the maritime
        community long before the vessel ever leaves the safety of the harbor.</p>
        <p>This directly transfers to corporate leadership dynamics. While women often lean toward humility, expecting 
        their hard work to speak for itself, they frequently only gain true credibility among peers once their 
        competence is decisively demonstrated. Conversely, many professional environments (and often male peers) 
        grant trust primarily based on highly visible performance. As a leader, relying on silent competence is a 
        risk. True captaincy requires stepping out of the shadows and ensuring that your strategic capabilities and 
        results are clearly visible and ready to be demonstrated at any given moment</p>
        <p><strong>I want future me to remeber: Leadership credibility is built through visible competence.</strong>
</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-4-Assignment-Tasks-37a6fc3d3bd58050b85cfb29a15cbda4?source=copy_link"
    }
  },
  {
    id: 5,
    title: "Dealing with Diversity",
    tag: "Understanding diversity, unlocking perspectives, and creating stronger teams.",
    icon: "ti-sailboat",
    keyLearnings: [
      "Diversity creates value when leaders embrace differences and build shared ways of working"
    ],
    detail: {
      reflection: `
        <p>Was für ein Problem habe ich diese Woche?</p>
        <p>A truly elite racing yacht is not built from a single, uniform substance. Instead, it is a high-performance
        hull constructed from completely different materials, some sections are woven from ultra-flexible carbon 
        fiber to absorb shock, others are forged from rigid titanium to bear immense loads, and some utilize 
        lightweight composites to maximize speed. If a boatbuilder blindly treats all these materials the same way, 
        forcing them into identical molds without recognizing how differently they handle physical stress, the hull 
        will inevitably crack and fracture under pressure. A master builder must first deeply understand and respect
        the unique material properties of each distinct piece. Only after doing so can they apply the binding resin
        (the common, unbreakable basis) that fuses these diverse components into a single, unified vessel. The 
        resulting hull is fundamentally stronger, faster, and more resilient than anything made of just one material
        alone.</p>
        <p>This directly transfers to high-performance teamwork. Unlocking the true potential of a diverse team requires
        a deliberate, two-step balance of differentiation and integration. A leader cannot simply force conformity 
        or expect everyone to handle pressure identically. First, they must actively surface, understand, and value 
        individual differences. Only then can they establish a shared operational framework, the organizational 
        "resin", that binds those unique strengths together, enabling cohesive collaboration and transforming diverse
        perspectives into an unstoppable collective drive.</p>
        <p><strong>I want future me to remember: Diversity creates value when leaders embrace differences and build shared ways of working</strong></p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-5-Assignment-Tasks-37c6fc3d3bd5807d9a89c5633a947f28?source=copy_link"
    }
  },
  {
    id: 6,
    title: "Managing Conflicts",
    tag: "Conflict is inevitable, how we understand and navigate it defines stronger organizations.",
    icon: "ti-sailboat",
    keyLearnings: [
      "✏️ Key Learning hier eintragen, sobald du die Metapher ausgearbeitet hast"
    ],
    detail: {
      reflection: `
        <p>✏️ Metapher und Reflexionstext zu Woche 6 folgen noch — trage sie hier ein, sobald du sie
        ausgearbeitet hast. Du kannst mehrere &lt;p&gt;-Absätze verwenden und einzelne Wörter mit
        &lt;strong&gt;...&lt;/strong&gt; fett setzen.</p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-6-Assignment-Tasks-37d6fc3d3bd58034b4cafa61b8303734?source=copy_link"
    }
  },
  {
    id: 7,
    title: "Virtual Teams",
    tag: "Understanding virtual teamwork, connection, and collaboration in a digital world.",
    icon: "ti-sailboat",
    keyLearnings: [
      "Shared time creates shared identity, even in virtual teams."
    ],
    detail: {
      reflection: `
        <p>Welches Problem habe ich diese Woche?</p>
        <p>A crew doesn't become a synchronized unit by only enjoying perfect, sunny days. They become 
        a true team by continuously standing watch together, side-by-side through endless, uneventful calm 
        and grueling storms alike; it is the sheer amount of time spent sharing the same deck that creates an 
        unspoken, unbreakable rhythm. On a ship, you cannot choose to skip your watch just because you feel 
        unprepared or because the weather is miserable, half the battle is won simply by showing up at the helm 
        when your shift starts, proving to the rest of the crew that you can be relied upon to share the weight of 
        the journey.</p>
        <p>This directly translates to virtual teams, where consistent and continuous shared time serves as the 
        foundational driver of cohesion. Reliable bonding does not solely depend on flawless, high-quality 
        interactions or being perfectly prepared for every single discussion. Instead, a massive part of building 
        trust comes from the relentless, shared presence of being there together over time. Half the battle is 
        already won when everyone respects and prioritizes the scheduled time together, showing up consistently 
        regardless of the circumstances. Respecting the calendar and making the meeting a priority is what truly 
        builds an unbreakable virtual rhythm.</p>
        <p><strong>I want future me to remeber: Shared time creates shared identity, even in virtual teams.</strong>
        </p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-7-Assignment-Tasks-3606fc3d3bd5802e92d1e7ab71625e09?source=copy_link"
    }
  },
  {
    id: 8,
    title: "Digital Leadership",
    tag: "Navigating technological change through adaptive and forward-thinking leadership",
    icon: "ti-sailboat",
    keyLearnings: [
      "Digital transformation starts with leaders who embrace technology and lead by example."
    ],
    detail: {
      reflection: `
        <p>Was ist diese Woche mein Problem?</p>
        <p>Leading a digital team through change is very much like upgrading a traditional sailboat with advanced, 
        high-tech navigation instruments. A captain cannot simply buy the new digital charts, hand them to the 
        crew, and retreat to their cabin expecting the ship to sail faster. If the captain does not bother to learn
        how to read the new radar or program the autopilot, the crew will quickly lose confidence in the system and
        default to their old, inefficient ways of navigating. To truly steer the team forward, the captain must be 
        the first one at the helm actively operating the new technology, demonstrating its value in rough seas, and 
        proving that they are not just giving orders, but actively charting the course into the digital future.</p>
        <p>This highlights that digital transformation is fundamentally a leadership responsibility, rather than a technical
        one. Driving organization-wide adoption of new tools requires leaders to step out of the role of passive 
        observers and actively master and implement these technologies themselves. When a leader acts as a visionary
        role model, using the tools daily and navigating the learning curve firsthand, it builds trust and signals 
        to the entire team that the change is both necessary and valuable.</p>
        <p><strong>I want future me to remeber: Digital transformation starts with leaders who embrace technology and lead 
        by example.</strong></p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-8-Assignment-Tasks-35f6fc3d3bd5807b8affe04d612c9f41?source=copy_link"
    }
  },
  {
    id: 9,
    title: "Reinventing Organisations",
    tag: "Challenging traditional organizations and exploring new possibilities for the future of work.",
    icon: "ti-sailboat",
    keyLearnings: [
      "Taking responsibility is our biggest superpower - ownership beats inaction",
      "Experiment small, scale what works",
      "Look for win-win solutions, they exist"
    ],
    detail: {
      reflection: `
        <p>Welche Probleme habe ich diese Woche?</p>
        <p>No sailor expects to sail from port to destination in a perfectly straight line; the wind shifts, the currents 
        pull, and reaching the destination depends entirely on making countless small course corrections along the 
        way. Taking true responsibility on a ship means being willing to stand at the helm, make those constant 
        adjustments, and keep the vessel moving forward despite the unpredictable elements.</p>
        <p>This journey beautifully mirrors the realization that the most valuable skill in any modern organization is not 
        raw knowledge, but the willingness to take responsibility. Just like steering through unpredictable waters, 
        taking ownership requires immense energy, courage, and the readiness to make decisions despite deep 
        uncertainty. Many people struggle to take responsibility because traditional organizations often judge 
        imperfect decisions more harshly than they support them, driving people to hide behind rigid roles or 
        abandon ownership altogether.</p>
        <p>However, when an organization embraces a decentralized, "Teal" mindset, responsibility is distributed rather 
        than concentrated at the top. Team members are trusted to make thoughtful decisions after seeking advice, 
        shifting the focus from an impossible standard of perfection to continuous adaptation. The ultimate mindset 
        shift is recognizing that taking responsibility does not mean never making mistakes, it means staying engaged
        at the helm when things don’t go as planned. In navigation as in leadership, the only true mistake is 
        refusing to act or abandoning the wheel altogether; as long as you take ownership, learn, and adapt, you are 
        successfully moving forward</p>
        <p><strong>I want future me to remember: Taking responsibility is our biggest superpower, ownership beats 
        inaction</strong></p>
        
        <p>A fleet sails much farther and safer when each boat is free to explore the best route and immediately share what
        it learns with the rest. Instead of a single, highly risky decision forced upon every vessel simultaneously,
        a series of small, calculated experiments allows the whole fleet to discover the safest course together, 
        keeping the impact of a misstep localized and manageable.</p>
        <p>This approach offers a powerful alternative to how many traditional organizations handle change, where new 
        systems are abruptly rolled out to everyone at once, creating disruptive breaks and natural resistance. 
        Instead of attempting a massive transformation overnight, new processes, tools, or ways of working should 
        first be tested in small groups. These experiments create a safe harbor to gather continuous feedback and 
        refine ideas before expanding them. This is precisely where decentralized, "Teal" organizations excel: teams
        operate as autonomous units that can quickly experiment, adapt, and share their real-world learnings. By 
        testing on a small scale first, organizations dramatically reduce risk, learn faster, and allow change to 
        feel like a natural evolution rather than a disruptive shock</p>
        <p><strong>I want future me to remeber: When trying risky things, the whole organization doesn’t have to go all in. Small 
        groups can test the ideas and give advice to other groups - experiment small, scale what works</strong></p>
        
        <p>We often carry the limiting belief that a ship can only move forward if someone is bearing an exhausting burden on 
        their shoulders. However, the most successful vessels prove otherwise: when the crew is motivated, the owner 
        succeeds, and the passengers are genuinely satisfied, everyone benefits from the exact same journey, lifted 
        by the same wind.</p>
        <p>This mirrors a profound realization about the corporate world: we are deeply conditioned to believe that every solution 
        requires a loser, assuming that if one group benefits, another must inevitably suffer. Yet, decentralized 
        "Teal" organizations have proven in practice for years that this zero-sum mindset is false. Despite the 
        evidence, many people still struggle to believe that a company can create better outcomes for everyone 
        simultaneously, often rejecting new ideas simply because they seem too optimistic. Instead of settling for 
        compromises where everyone gives something up, leadership should focus on solutions where everyone gains. 
        True innovation means challenging the rules we have always accepted and realizing that the best solutions 
        are not those where someone wins at another's expense, they are the ones where the entire ecosystem moves 
        forward together.</p>
        <p><strong>I want future me to remeber: As a society we have grown so sceptical of things working 
        when nobody has to suffer and everybody can benefit, i want to find more win-win solutions in my everyday 
        life because they exist - look for win-win solutions, they exist</strong></p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-9-Assignment-Tasks-3616fc3d3bd580359ba6f2eb296f784b?source=copy_link"
    }
  },
  {
    id: 10,
    title: "Leadership and AI",
    tag: "Navigating the future of work through AI, adaptation, and human-centered leadership.",
    icon: "ti-sailboat",
    keyLearnings: [
      "Technology adoption follows leadership behavior, not just leadership communication",
      "Competitive advantage comes from mastering AI, not fearing it.",
      "AI generates possibilities. Humans define excellence"
    ],
    detail: {
      reflection: `
        <p>Was für Probleme hatte ich diese Woche?</p>
        <p>Imagine two captains preparing for the same voyage. One refuses to use modern navigation instruments 
        because they fear becoming dependent on them. The other blindly follows every recommendation the 
        instruments provide without questioning them. Neither captain is likely to reach the destination as 
        safely or efficiently as possible. The best captain understands that technology is neither a replacement
        for seamanship nor an enemy to be feared. Navigation systems can calculate routes, detect weather patterns,
        and identify hidden obstacles far faster than any human, but they cannot replace experience, judgment, or
        the responsibility of deciding when to trust the instruments and when to rely on instinct. The captain 
        remains in command, not because they reject technology, but because they know how to use it wisely.</p>
        <p>This dynamic perfectly mirrors our current relationship with artificial intelligence: AI is not replacing
        human expertise, it is reshaping it. The greatest competitive advantage will not come from technology alone,
        but from people who understand how to collaborate with it effectively. While AI excels at speed, automation,
        and processing vast amounts of information, it still relies entirely on human judgment, creativity, and 
        critical thinking to produce truly valuable outcomes. Blind reliance leads to errors, while total rejection 
        leads to obsolescence. Rather than fearing AI, leaders and professionals must actively experiment with it, 
        understand its strengths and limitations, and learn when and how to apply it. The future belongs to those who
        can bridge human intelligence with artificial intelligence, maintaining total command of the ship while using
        technology wisely to achieve superior results.</p>
        <p><strong>I want future me to remeber: Competitive advantage comes from mastering AI, not fearing 
        it.</strong></p>
        
        <p>The wind is one of the most powerful forces at sea, yet it has no intention of its own. It can carry 
        a ship swiftly toward its destination or push it dangerously off course; its strength alone is never enough.
        What determines the outcome is the captain's ability to read the conditions, adjust the sails, and channel 
        that raw force with precision. The more experienced the captain, the more purposefully they harness the wind,
        knowing when to trim the sails and when not to chase every fleeting gust that promises speed but leads away 
        from the destination. The wind provides momentum, but it never provides direction.</p>
        <p>Similarly, artificial intelligence is an incredibly powerful tool for accelerating creativity, but 
        it is not a substitute for human imagination, critical thinking, or creative direction. AI can generate 
        ideas, recognize patterns, and connect existing knowledge remarkably fast, making it an excellent partner
        for brainstorming and exploration. However, just like the wind, it provides momentum rather than direction.
        The quality of its output depends entirely on the clarity and specificity of the guidance it receives, 
        vague prompts produce generic results, while precise goals and continuous refinement lead to valuable 
        outcomes. Achieving excellence with AI ultimately requires leadership rather than just technical skills;
        it delivers its greatest value when guided by someone who knows where they want to go, critically evaluates
        every result, and refuses to settle for mediocrity.</p>
        <p><strong>I want future me to remember: AI generates possibilities. Humans define 
        excellence</strong></p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-10-Assignment-Tasks-3656fc3d3bd580508f4fdc959579efc7?source=copy_link"
    }
  },
  {
    id: 11,
    title: "Leadership and Ego",
    tag: "Discovering the hidden side of leadership: followers, ego, and lasting lessons",
    icon: "ti-sailboat",
    keyLearnings: [
      "The strongest leaders never stop evolving."
    ],
    detail: {
      reflection: `
        <p>Was hatte ich diese Woche für ein Problem?</p>
        <p>Mastering the art of sailing is not about memorizing every single rule in a handbook. A captain
        may study countless theoretical examples of sudden storms, hidden reefs, shifting tides, and navigational 
        errors, yet the sea will always find a way to present something completely unfamiliar. Every single voyage
        reveals another lesson that could never have been learned while standing safely on the shore. Ultimately, 
        the finest captains are not those who never make mistakes, but those who never stop learning from them.</p>
        <p>This realization beautifully mirrors the reality of leadership development. Examining an extensive list 
        of common leadership pitfalls reinforces a crucial truth: no leader can avoid every mistake, as leadership 
        is far too dynamic and complex for perfection to be a realistic goal. Instead, effective leadership is 
        defined by the humility to recognize shortcomings, seek feedback, and continuously improve. Just as the sea 
        constantly shifts, teams evolve, organizational needs change, and new challenges emerge every day, requiring
        leaders to adapt alongside them. Rather than striving to be flawless, leaders should focus on becoming better
        with every experience. Self-reflection and an openness to new perspectives are not optional leadership 
        qualities, they are essential for long-term success. Leadership is not about reaching a final destination 
        where there is nothing left to learn; it is about committing to a lifelong process of growth at the helm.</p>
        <p><strong>I want future me to remeber: The strongest leaders never stop evolving.</strong></p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-11-Assignment-Tasks-37a6fc3d3bd580eda4aeef30b8fa4dde?source=copy_link"
    }
  },
  {
    id: 12,
    title: "Becoming a Leader",
    tag: "Reflecting on the journey and embracing the future of leadership",
    icon: "ti-sailboat",
    keyLearnings: [
      "Great teams are not built on instant chemistry, but on commitment, trust, and shared growth."
    ],
    detail: {
      reflection: `
        <p>Was war diese Woche mein Problem?</p>
        <p>At the beginning of a voyage, a crew often moves like individual sailors rather than a single unit; 
        ropes are pulled at different moments, decisions are made with conflicting instincts, and everyone follows 
        their own separate rhythm. But after enough days spent navigating together at sea, something remarkable 
        happens. The crew begins to anticipate each other’s movements, one sailor adjusts a sail before a signal
        is given, while another notices a shift in the wind before it even becomes a problem. Without becoming 
        identical, they develop a shared, unspoken rhythm, and that is the exact moment a mere group of sailors 
        becomes a true crew.</p>
        <p>This beautifully illustrates that a successful team does not need to be built on immediate chemistry 
        or personal similarities. Strong collaboration can develop profoundly between people who might not naturally 
        choose each other as friends. A great team does not require its members to share the same personalities or
        spend their free time together; what truly matters is the willingness to contribute, show up reliably, 
        engage in honest dialogue, and support each other’s development. Over time, as each person brings their 
        unique strengths and perspectives to the deck, the group learns to mesh. Great teams are not created because
        the right people are naturally compatible from the very beginning; they are forged because people actively
        choose to invest in each other, recognize one another's strengths, and work together toward a shared
        goal.</p>
        <p><strong>I want future me to remeber: Great teams are not built on instant chemistry, but on commitment, 
        trust, and shared growth.</strong></p>`,
      media: { images: [], video: null, audio: null },
      notionUrl: "https://app.notion.com/p/Week-12-Assignment-Tasks-3776fc3d3bd5803fa123cc1dff556bb0?source=copy_link"
    }
  }
];
