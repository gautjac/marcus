// A curated collection of Stoic principles, each with a short quote, its
// attribution, a plain-language gloss, a brief framing, and a reflective prompt.
// Every entry is bilingual (fr + en); a Lang selects the copy at read time.
// All local — the daily experience never touches the network.

import type { Lang } from "./types";

// One language's worth of a principle's copy.
export interface PrincipleText {
  quote: string; // the source line, translated for this language
  author: string; // Marc Aurèle / Marcus Aurelius, etc.
  work?: string; // source work, in this language
  gloss: string; // one-line plain meaning
  framing: string; // 2–3 sentences of gentle context
  prompt: string; // a single reflective question
}

// The bilingual record for a principle.
export interface PrincipleData {
  id: string;
  fr: PrincipleText;
  en: PrincipleText;
}

// A principle already resolved to a single language — what the UI renders.
export interface Principle extends PrincipleText {
  id: string;
}

export const PRINCIPLES: PrincipleData[] = [
  {
    id: "dichotomie",
    fr: {
      quote: "Il y a ce qui dépend de nous et ce qui n'en dépend pas.",
      author: "Épictète",
      work: "Manuel, I",
      gloss: "Distingue ce que tu peux changer de ce que tu ne peux que traverser.",
      framing:
        "Nos jugements, nos désirs et nos actes nous appartiennent ; le reste — l'opinion des autres, le temps qu'il fait, ce qui est déjà arrivé — ne nous appartient pas. Toute la paix stoïcienne commence par tracer cette frontière avec honnêteté.",
      prompt: "Qu'est-ce qui, aujourd'hui, ne dépend vraiment pas de toi — et pourrais-tu poser ?",
    },
    en: {
      quote: "Some things are within our power, and some things are not.",
      author: "Epictetus",
      work: "Enchiridion, I",
      gloss: "Tell apart what you can change from what you can only pass through.",
      framing:
        "Our judgements, our desires, and our acts are ours; the rest — other people's opinions, the weather, what has already happened — is not. All Stoic peace begins by drawing that line honestly.",
      prompt: "What, today, truly isn't up to you — and could you set it down?",
    },
  },
  {
    id: "matin",
    fr: {
      quote: "Au lever, dis-toi : aujourd'hui je croiserai l'ingrat, le violent, l'envieux.",
      author: "Marc Aurèle",
      work: "Pensées, II, 1",
      gloss: "Prévois les frictions du jour pour ne pas t'en étonner.",
      framing:
        "Marc Aurèle se préparait chaque matin à rencontrer des gens difficiles, non par cynisme, mais pour que rien ne le prenne au dépourvu. Anticiper les heurts, c'est déjà leur ôter une part de leur pouvoir.",
      prompt: "Quelle friction attends-tu aujourd'hui, et comment veux-tu l'accueillir ?",
    },
    en: {
      quote: "When you rise, tell yourself: today I will meet the ungrateful, the violent, the envious.",
      author: "Marcus Aurelius",
      work: "Meditations, II, 1",
      gloss: "Expect the day's friction so it can't take you by surprise.",
      framing:
        "Each morning Marcus Aurelius braced to meet difficult people — not out of cynicism, but so that nothing could catch him off guard. To foresee a collision is already to strip it of some of its power.",
      prompt: "What friction do you expect today, and how do you want to meet it?",
    },
  },
  {
    id: "obstacle",
    fr: {
      quote: "L'obstacle à l'action fait avancer l'action. Ce qui gêne la route devient la route.",
      author: "Marc Aurèle",
      work: "Pensées, V, 20",
      gloss: "Ce qui te bloque peut devenir ton chemin.",
      framing:
        "Là où l'obstacle semble arrêter tout, le stoïcien voit la matière même du travail. La contrainte n'est pas l'ennemie de l'œuvre : bien souvent, elle en est la forme.",
      prompt: "Quel obstacle pourrais-tu retourner en point de départ ?",
    },
    en: {
      quote: "The impediment to action advances action. What stands in the way becomes the way.",
      author: "Marcus Aurelius",
      work: "Meditations, V, 20",
      gloss: "What blocks you can become your path.",
      framing:
        "Where an obstacle seems to halt everything, the Stoic sees the very material of the work. Constraint is not the enemy of what you make: more often than not, it is its shape.",
      prompt: "Which obstacle could you turn into a starting point?",
    },
  },
  {
    id: "present",
    fr: {
      quote: "Chacun ne vit que le présent, cet instant fugitif ; le reste est déjà vécu ou incertain.",
      author: "Marc Aurèle",
      work: "Pensées, III, 10",
      gloss: "Tu n'habites que maintenant ; le passé et l'avenir ne sont pas à perdre.",
      framing:
        "On ne peut perdre ni le passé ni l'avenir, puisqu'on ne les possède pas. Ce qui t'est réellement donné, c'est cet instant — mince, mais entier.",
      prompt: "Qu'y a-t-il dans cet instant précis, si tu cesses de courir devant ou derrière ?",
    },
    en: {
      quote: "Each of us lives only the present, this fleeting instant; the rest is already lived or uncertain.",
      author: "Marcus Aurelius",
      work: "Meditations, III, 10",
      gloss: "You live only in now; past and future aren't yours to lose.",
      framing:
        "You can lose neither the past nor the future, since you possess neither. What is truly given to you is this instant — thin, but whole.",
      prompt: "What is here in this exact moment, once you stop running ahead of it or behind it?",
    },
  },
  {
    id: "brievete",
    fr: {
      quote: "Ce n'est pas que nous ayons peu de temps, c'est que nous en perdons beaucoup.",
      author: "Sénèque",
      work: "De la brièveté de la vie, I",
      gloss: "La vie est assez longue pour qui ne la gaspille pas.",
      framing:
        "Sénèque ne se plaint pas de la brièveté de la vie mais de notre distraction. Le temps ne manque pas ; c'est l'attention qui fuit. Vivre pleinement, c'est habiter ses heures au lieu de les laisser filer.",
      prompt: "À quoi as-tu donné ton temps aujourd'hui — et l'aurais-tu choisi ?",
    },
    en: {
      quote: "It is not that we have too little time, but that we waste so much of it.",
      author: "Seneca",
      work: "On the Shortness of Life, I",
      gloss: "Life is long enough for anyone who doesn't squander it.",
      framing:
        "Seneca doesn't lament that life is short but that we are distracted. Time isn't scarce; it's attention that leaks away. To live fully is to inhabit your hours rather than let them slip past.",
      prompt: "What did you give your time to today — and would you have chosen it?",
    },
  },
  {
    id: "amor-fati",
    fr: {
      quote: "Ne demande pas que les choses arrivent comme tu le veux, mais veuille-les comme elles arrivent.",
      author: "Épictète",
      work: "Manuel, VIII",
      gloss: "Consens à ce qui est, plutôt que de te battre contre le réel.",
      framing:
        "Vouloir que le monde plie à nos désirs, c'est se condamner à la frustration. Consentir à ce qui advient — non par résignation, mais par lucidité — c'est retrouver le calme.",
      prompt: "Y a-t-il une chose que tu combats, alors qu'elle est déjà là ?",
    },
    en: {
      quote: "Do not ask that things happen as you wish, but wish them to happen as they do.",
      author: "Epictetus",
      work: "Enchiridion, VIII",
      gloss: "Consent to what is, instead of fighting the real.",
      framing:
        "To demand that the world bend to our wishes is to sentence ourselves to frustration. To consent to what comes — not from resignation, but from clear sight — is to recover calm.",
      prompt: "Is there something you're fighting that is already here?",
    },
  },
  {
    id: "opinion",
    fr: {
      quote: "Ce ne sont pas les choses qui troublent les hommes, mais les jugements qu'ils portent sur elles.",
      author: "Épictète",
      work: "Manuel, V",
      gloss: "Le trouble vient de ton regard, pas de l'événement.",
      framing:
        "Entre l'événement et ta souffrance, il y a toujours un jugement. C'est là — et non dans les faits — que se joue ta tranquillité. Change le jugement, et l'événement change de poids.",
      prompt: "Quel jugement, plus que le fait lui-même, te pèse aujourd'hui ?",
    },
    en: {
      quote: "It is not things that trouble us, but our judgements about things.",
      author: "Epictetus",
      work: "Enchiridion, V",
      gloss: "The trouble comes from how you see it, not from the event.",
      framing:
        "Between an event and your suffering there is always a judgement. That is where your peace is decided — not in the facts. Change the judgement, and the event changes weight.",
      prompt: "Which judgement, more than the fact itself, weighs on you today?",
    },
  },
  {
    id: "mort",
    fr: {
      quote: "Fais chaque acte de ta vie comme si c'était le dernier.",
      author: "Marc Aurèle",
      work: "Pensées, II, 5",
      gloss: "La conscience de la fin donne du sérieux au présent.",
      framing:
        "Se souvenir qu'on mourra n'est pas morbide : c'est un aiguillon. Cela dépouille le trivial et rend au moment sa gravité douce. On agit mieux quand on sait que le temps est compté.",
      prompt: "Si aujourd'hui comptait vraiment, qu'est-ce que tu ferais avec plus de soin ?",
    },
    en: {
      quote: "Do every act of your life as though it were your last.",
      author: "Marcus Aurelius",
      work: "Meditations, II, 5",
      gloss: "Knowing the end is near lends the present its seriousness.",
      framing:
        "To remember that you will die isn't morbid: it's a goad. It strips away the trivial and returns to the moment its gentle gravity. We act better when we know time is counted.",
      prompt: "If today truly mattered, what would you do with more care?",
    },
  },
  {
    id: "colere",
    fr: {
      quote: "La meilleure vengeance est de ne pas ressembler à celui qui t'a offensé.",
      author: "Marc Aurèle",
      work: "Pensées, VI, 6",
      gloss: "Ne deviens pas ce que tu reproches à l'autre.",
      framing:
        "Répondre à la dureté par la dureté, c'est se laisser façonner par elle. Rester soi-même, mesuré, quand on nous provoque, est une victoire plus haute que toute riposte.",
      prompt: "Où risques-tu de devenir ce que tu reproches — et comment garder ta forme ?",
    },
    en: {
      quote: "The best revenge is not to be like the one who wronged you.",
      author: "Marcus Aurelius",
      work: "Meditations, VI, 6",
      gloss: "Don't become the thing you blame in another.",
      framing:
        "To answer harshness with harshness is to let it shape you. To stay yourself, measured, when provoked is a higher victory than any retort.",
      prompt: "Where might you become what you resent — and how do you keep your own shape?",
    },
  },
  {
    id: "possession",
    fr: {
      quote: "Ne dis jamais d'une chose : « je l'ai perdue », mais : « je l'ai rendue ».",
      author: "Épictète",
      work: "Manuel, XI",
      gloss: "Ce que tu as t'est prêté, non donné.",
      framing:
        "Nos biens, nos proches, notre santé nous sont confiés pour un temps. Les tenir comme des prêts, non comme des dus, adoucit la perte et approfondit la gratitude tant qu'ils sont là.",
      prompt: "Qu'est-ce que tu tiens aujourd'hui comme un dû, alors que c'est un prêt ?",
    },
    en: {
      quote: "Never say of anything, “I have lost it,” but rather, “I have given it back.”",
      author: "Epictetus",
      work: "Enchiridion, XI",
      gloss: "What you have is lent to you, not given.",
      framing:
        "Our belongings, our loved ones, our health are entrusted to us for a while. To hold them as loans, not as dues, softens their loss and deepens our gratitude while they last.",
      prompt: "What do you hold today as owed to you, when it is really a loan?",
    },
  },
  {
    id: "suffisance",
    fr: {
      quote: "N'est pas pauvre celui qui a peu, mais celui qui désire davantage.",
      author: "Sénèque",
      work: "Lettres à Lucilius, II",
      gloss: "La richesse, c'est de désirer ce qu'on a déjà.",
      framing:
        "Le manque n'est pas une quantité mais un rapport. On peut tout avoir et se sentir démuni, ou peu posséder et se sentir comblé. La mesure est intérieure.",
      prompt: "Qu'est-ce que tu as déjà, qui suffirait si tu le regardais vraiment ?",
    },
    en: {
      quote: "It is not the man who has too little who is poor, but the one who craves more.",
      author: "Seneca",
      work: "Letters to Lucilius, II",
      gloss: "Wealth is wanting what you already have.",
      framing:
        "Lack isn't a quantity but a relation. You can have everything and feel destitute, or own little and feel full. The measure is inward.",
      prompt: "What do you already have that would be enough, if you truly looked at it?",
    },
  },
  {
    id: "vertu",
    fr: {
      quote: "Nulle part l'homme ne se retire plus au calme qu'en sa propre âme.",
      author: "Marc Aurèle",
      work: "Pensées, IV, 3",
      gloss: "Ton refuge le plus sûr est en toi.",
      framing:
        "On cherche le repos au bord de la mer, à la montagne — alors qu'un refuge est toujours ouvert : le retour à soi. Une âme en ordre est une retraite qu'on peut regagner à tout instant.",
      prompt: "De quoi aurais-tu besoin pour retrouver, un moment, le calme au-dedans ?",
    },
    en: {
      quote: "Nowhere can a man withdraw to a calmer place than into his own soul.",
      author: "Marcus Aurelius",
      work: "Meditations, IV, 3",
      gloss: "Your surest refuge is within you.",
      framing:
        "We look for rest by the sea, in the mountains — when one refuge is always open: the return to yourself. A soul in order is a retreat you can regain at any moment.",
      prompt: "What would you need to find, for a moment, the calm within?",
    },
  },
  {
    id: "controle-parole",
    fr: {
      quote: "Nous avons deux oreilles et une seule bouche, pour écouter plus et parler moins.",
      author: "Épictète",
      gloss: "Écoute davantage que tu ne parles.",
      framing:
        "La retenue dans la parole est une discipline stoïcienne discrète mais réelle. Beaucoup de nos regrets viennent de mots dits trop vite. Écouter, c'est déjà agir avec justesse.",
      prompt: "Où aurais-tu gagné, aujourd'hui, à écouter plutôt qu'à répondre ?",
    },
    en: {
      quote: "We have two ears and one mouth, so that we may listen more and speak less.",
      author: "Epictetus",
      gloss: "Listen more than you speak.",
      framing:
        "Restraint in speech is a quiet but real Stoic discipline. Many of our regrets come from words said too quickly. To listen is already to act well.",
      prompt: "Where would you have gained today by listening instead of answering?",
    },
  },
  {
    id: "reputation",
    fr: {
      quote: "Combien perdent de temps à s'occuper de ce que fait autrui plutôt que d'eux-mêmes.",
      author: "Marc Aurèle",
      work: "Pensées, IV, 18",
      gloss: "Occupe-toi de ta propre conduite, pas de celle des autres.",
      framing:
        "Surveiller la vie des autres est une fuite : c'est toujours plus facile que de regarder la sienne. Le stoïcien ramène son attention sur son seul territoire — ses actes.",
      prompt: "Où ton attention part-elle vers les autres, alors qu'elle t'est plus utile ici ?",
    },
    en: {
      quote: "How much time is lost minding what others do, rather than one's own conduct.",
      author: "Marcus Aurelius",
      work: "Meditations, IV, 18",
      gloss: "Tend to your own conduct, not to other people's.",
      framing:
        "Watching other people's lives is an escape: it is always easier than looking at your own. The Stoic brings attention back to the one territory that is his — his own acts.",
      prompt: "Where does your attention drift toward others, when it serves you more right here?",
    },
  },
  {
    id: "epreuve",
    fr: {
      quote: "Le feu éprouve l'or, l'adversité les hommes forts.",
      author: "Sénèque",
      work: "De la Providence, V",
      gloss: "Les difficultés révèlent et forgent ce que tu es.",
      framing:
        "Sénèque voyait dans l'épreuve non une punition mais un entraînement. Ce qui nous met à l'épreuve nous montre aussi de quoi nous sommes faits — et nous en rend, parfois, plus solides.",
      prompt: "Quelle épreuve, avec le recul, t'a rendu plus solide ?",
    },
    en: {
      quote: "Fire tests gold, adversity tests the strong.",
      author: "Seneca",
      work: "On Providence, V",
      gloss: "Hardship both reveals and forges what you are.",
      framing:
        "Seneca saw in hardship not a punishment but a training. What tests us also shows us what we are made of — and sometimes leaves us the sturdier for it.",
      prompt: "Which hardship, looking back, left you stronger?",
    },
  },
  {
    id: "simplicite",
    fr: {
      quote: "En tout, cherche le chemin le plus court ; le plus court est celui de la nature.",
      author: "Marc Aurèle",
      work: "Pensées, IV, 51",
      gloss: "Fais simple ; l'essentiel est souvent le plus direct.",
      framing:
        "La complication est souvent un détour de l'ego. Aller au plus droit, au plus sain, au plus vrai : voilà une élégance morale que Marc Aurèle recommandait sans cesse.",
      prompt: "Où compliques-tu quelque chose qui gagnerait à être simple ?",
    },
    en: {
      quote: "In all things seek the shortest way; the shortest is the way of nature.",
      author: "Marcus Aurelius",
      work: "Meditations, IV, 51",
      gloss: "Keep it simple; the essential is often the most direct.",
      framing:
        "Complication is often a detour of the ego. To go by the straightest, soundest, truest route: this is a moral elegance Marcus Aurelius commended again and again.",
      prompt: "Where are you complicating something that would be better made simple?",
    },
  },
  {
    id: "gratitude",
    fr: {
      quote: "Ne pense pas tant à ce que tu n'as pas qu'à ce que tu as de plus précieux.",
      author: "Marc Aurèle",
      work: "Pensées, VII, 27",
      gloss: "Regarde d'abord ce qui est déjà là.",
      framing:
        "L'esprit glisse spontanément vers le manque. Marc Aurèle propose l'exercice inverse : contempler ce qu'on possède comme si on venait de l'obtenir, ou comme si on risquait de le perdre.",
      prompt: "Qu'est-ce que, aujourd'hui, tu accueillerais avec gratitude ?",
    },
    en: {
      quote: "Dwell not on what you lack, but on the most precious of what you already have.",
      author: "Marcus Aurelius",
      work: "Meditations, VII, 27",
      gloss: "Look first at what is already here.",
      framing:
        "The mind slides on its own toward what's missing. Marcus Aurelius proposes the opposite exercise: to regard what you have as if you had just gained it, or as if you might lose it.",
      prompt: "What, today, would you receive with gratitude?",
    },
  },
  {
    id: "impermanence",
    fr: {
      quote: "Tout n'est qu'un changement : l'univers vit de métamorphoses.",
      author: "Marc Aurèle",
      work: "Pensées, IV, 36",
      gloss: "Rien ne demeure ; le changement est la règle.",
      framing:
        "Tout ce qui existe se transforme sans cesse. S'attacher à la fixité, c'est souffrir de ce qui, par nature, doit passer. Épouser le flux apaise.",
      prompt: "Quel changement en cours pourrais-tu accueillir plutôt que retenir ?",
    },
    en: {
      quote: "All is change: the universe lives by transformation.",
      author: "Marcus Aurelius",
      work: "Meditations, IV, 36",
      gloss: "Nothing stays; change is the rule.",
      framing:
        "Everything that exists is forever transforming. To cling to fixity is to suffer over what, by its nature, must pass. To go with the flow brings calm.",
      prompt: "What change already under way could you welcome rather than hold back?",
    },
  },
  {
    id: "constance",
    fr: {
      quote: "Sois semblable au promontoire contre lequel les flots viennent sans cesse se briser.",
      author: "Marc Aurèle",
      work: "Pensées, IV, 49",
      gloss: "Tiens bon, calme, quoi qu'il se brise sur toi.",
      framing:
        "Le rocher ne se plaint pas des vagues ; il reste. La constance stoïcienne n'est pas la dureté, mais une stabilité tranquille au milieu de l'agitation.",
      prompt: "Face à quoi voudrais-tu tenir, calmement, comme un rocher ?",
    },
    en: {
      quote: "Be like the headland against which the waves break endlessly.",
      author: "Marcus Aurelius",
      work: "Meditations, IV, 49",
      gloss: "Hold firm and calm, whatever breaks against you.",
      framing:
        "The rock doesn't complain of the waves; it stays. Stoic constancy isn't hardness but a quiet stability in the middle of the tumult.",
      prompt: "In the face of what would you want to stand, calmly, like a rock?",
    },
  },
  {
    id: "utilite-commune",
    fr: {
      quote: "Ce qui n'est pas utile à la ruche n'est pas utile à l'abeille.",
      author: "Marc Aurèle",
      work: "Pensées, VI, 54",
      gloss: "Ton bien est lié à celui du tout.",
      framing:
        "Les stoïciens se pensaient citoyens du monde, membres d'un seul corps. Ce qui sert l'ensemble finit par nous servir aussi. L'égoïsme est, à long terme, une erreur de calcul.",
      prompt: "En quoi ton geste d'aujourd'hui sert-il plus grand que toi ?",
    },
    en: {
      quote: "What is of no use to the hive is of no use to the bee.",
      author: "Marcus Aurelius",
      work: "Meditations, VI, 54",
      gloss: "Your good is bound to the good of the whole.",
      framing:
        "The Stoics thought of themselves as citizens of the world, members of a single body. What serves the whole ends up serving us too. Selfishness is, in the long run, a miscalculation.",
      prompt: "How does what you do today serve something larger than yourself?",
    },
  },
  {
    id: "desir",
    fr: {
      quote: "La liberté ne s'obtient pas en assouvissant ses désirs, mais en les supprimant.",
      author: "Épictète",
      gloss: "On est libre quand on cesse de vouloir ce qui échappe.",
      framing:
        "Multiplier les désirs, c'est multiplier ses chaînes. Épictète propose l'inverse : réduire ce dont on croit avoir besoin, jusqu'à ne plus dépendre que de soi.",
      prompt: "Quel désir, si tu le relâchais, te rendrait un peu plus libre ?",
    },
    en: {
      quote: "Freedom is won not by satisfying your desires, but by removing them.",
      author: "Epictetus",
      gloss: "You're free when you stop wanting what escapes you.",
      framing:
        "To multiply desires is to multiply your chains. Epictetus proposes the reverse: to pare down what you believe you need, until you depend on nothing but yourself.",
      prompt: "Which desire, if you loosened your grip on it, would leave you a little freer?",
    },
  },
  {
    id: "role",
    fr: {
      quote: "Souviens-toi que tu es acteur d'une pièce voulue telle par l'auteur.",
      author: "Épictète",
      work: "Manuel, XVII",
      gloss: "Joue bien le rôle qui t'échoit, sans choisir la pièce.",
      framing:
        "Nous ne choisissons pas toujours notre situation, mais nous choisissons comment l'habiter. Bien jouer son rôle, quel qu'il soit, voilà ce qui dépend de nous.",
      prompt: "Quel rôle t'est donné en ce moment, et comment le jouer bien ?",
    },
    en: {
      quote: "Remember that you are an actor in a play, and the playwright chooses its kind.",
      author: "Epictetus",
      work: "Enchiridion, XVII",
      gloss: "Play well the part you're given, without choosing the play.",
      framing:
        "We don't always choose our situation, but we choose how to inhabit it. To play your role well, whatever it is — that is what is up to you.",
      prompt: "What role are you given right now, and how do you play it well?",
    },
  },
  {
    id: "matin-travail",
    fr: {
      quote: "Au petit jour, quand il te coûte de t'éveiller, dis-toi : je m'éveille pour l'œuvre d'un homme.",
      author: "Marc Aurèle",
      work: "Pensées, V, 1",
      gloss: "Tu es né pour agir, non pour rester sous les draps.",
      framing:
        "Marc Aurèle luttait, comme nous, contre l'inertie du matin. Son remède : se rappeler qu'il existe une tâche qui n'attend que lui. L'action est notre nature, non la torpeur.",
      prompt: "Pour quelle œuvre, aujourd'hui, valait-il la peine de te lever ?",
    },
    en: {
      quote: "At dawn, when it is hard to wake, tell yourself: I am rising to do the work of a human being.",
      author: "Marcus Aurelius",
      work: "Meditations, V, 1",
      gloss: "You were born to act, not to stay under the covers.",
      framing:
        "Marcus Aurelius struggled, as we do, against the morning's inertia. His remedy: to recall that there is a task waiting for him alone. Action is our nature, not torpor.",
      prompt: "For what work, today, was it worth getting up?",
    },
  },
  {
    id: "jugement-autrui",
    fr: {
      quote: "Quand quelqu'un te fait du tort, demande-toi ce qu'il tenait pour bien ou mal.",
      author: "Marc Aurèle",
      work: "Pensées, VII, 26",
      gloss: "Comprendre le tort de l'autre, c'est déjà s'en alléger.",
      framing:
        "Personne ne se trompe volontairement selon les stoïciens : celui qui te blesse suit une idée fausse du bien. Le comprendre ne l'excuse pas, mais te libère de la rancune.",
      prompt: "Qui t'a blessé récemment — et que cherchait-il peut-être, à sa manière ?",
    },
    en: {
      quote: "When someone wrongs you, ask what he held to be good or evil.",
      author: "Marcus Aurelius",
      work: "Meditations, VII, 26",
      gloss: "To understand another's wrong is already to lighten it.",
      framing:
        "For the Stoics no one errs on purpose: whoever hurts you is following a false idea of the good. Understanding this doesn't excuse him, but it frees you from resentment.",
      prompt: "Who wronged you lately — and what, in his own way, might he have been after?",
    },
  },
  {
    id: "peur",
    fr: {
      quote: "Nous souffrons plus souvent en imagination qu'en réalité.",
      author: "Sénèque",
      work: "Lettres à Lucilius, XIII",
      gloss: "La plupart de tes peurs n'arriveront jamais.",
      framing:
        "L'esprit anticipe des catastrophes qui, le plus souvent, ne viennent pas. Nommer clairement la peur, la mesurer, suffit souvent à la dégonfler.",
      prompt: "Quelle crainte t'occupe, qui n'est peut-être qu'imaginée ?",
    },
    en: {
      quote: "We suffer more often in imagination than in reality.",
      author: "Seneca",
      work: "Letters to Lucilius, XIII",
      gloss: "Most of your fears will never come to pass.",
      framing:
        "The mind rehearses catastrophes that, more often than not, never arrive. To name a fear plainly, to take its measure, is often enough to deflate it.",
      prompt: "What dread occupies you that may be only imagined?",
    },
  },
  {
    id: "action-juste",
    fr: {
      quote: "Ne perds plus de temps à discuter de ce que doit être l'homme de bien. Sois-le.",
      author: "Marc Aurèle",
      work: "Pensées, X, 16",
      gloss: "Agis bien plutôt que d'en parler.",
      framing:
        "La philosophie stoïcienne n'est pas un discours mais une pratique. À un moment, les définitions doivent céder la place au geste. Sois, ne commente pas.",
      prompt: "Qu'est-ce que tu pourrais faire aujourd'hui, au lieu d'en parler ?",
    },
    en: {
      quote: "Waste no more time arguing what a good person should be. Be one.",
      author: "Marcus Aurelius",
      work: "Meditations, X, 16",
      gloss: "Act well rather than talk about it.",
      framing:
        "Stoic philosophy isn't a discourse but a practice. At some point definitions must give way to the deed. Be it; don't comment on it.",
      prompt: "What could you do today, instead of talking about it?",
    },
  },
  {
    id: "acceptation-corps",
    fr: {
      quote: "Tu es une petite âme qui porte un cadavre, disait Épictète.",
      author: "Marc Aurèle",
      work: "Pensées, IV, 41",
      gloss: "Ne te réduis pas à ton corps ; l'essentiel est ailleurs.",
      framing:
        "Formule rude, mais libératrice : ce qui te définit n'est pas ta chair fragile, c'est ton âme, tes jugements, ta manière d'être. Le corps sert ; il ne commande pas.",
      prompt: "Où laisses-tu le corps décider, alors que l'esprit sait mieux ?",
    },
    en: {
      quote: "You are a little soul carrying a corpse, as Epictetus used to say.",
      author: "Marcus Aurelius",
      work: "Meditations, IV, 41",
      gloss: "Don't reduce yourself to your body; the essential is elsewhere.",
      framing:
        "A blunt formula, but a freeing one: what defines you isn't your fragile flesh, it's your soul, your judgements, your way of being. The body serves; it does not command.",
      prompt: "Where do you let the body decide, when the mind knows better?",
    },
  },
  {
    id: "bienveillance",
    fr: {
      quote: "Les hommes sont faits les uns pour les autres : instruis-les, ou supporte-les.",
      author: "Marc Aurèle",
      work: "Pensées, VIII, 59",
      gloss: "Face aux autres : aide, ou endure avec patience.",
      framing:
        "Marc Aurèle ne prêchait pas une bienveillance naïve, mais une patience active. Devant autrui, deux voies droites : l'aider à voir mieux, ou le supporter sans aigreur.",
      prompt: "Avec qui pourrais-tu être, aujourd'hui, un peu plus patient ?",
    },
    en: {
      quote: "People are made for one another: teach them, then, or bear with them.",
      author: "Marcus Aurelius",
      work: "Meditations, VIII, 59",
      gloss: "Before others: help, or endure with patience.",
      framing:
        "Marcus Aurelius preached no naive kindness, but an active patience. Facing another person, two straight paths: help him see better, or bear with him without bitterness.",
      prompt: "With whom could you be, today, a little more patient?",
    },
  },
  {
    id: "vue-d-en-haut",
    fr: {
      quote: "Contemple les choses d'en haut : les foules, les armées, les fêtes, tout ce grouillement.",
      author: "Marc Aurèle",
      work: "Pensées, VII, 48",
      gloss: "Prends de la hauteur ; le tracas rétrécit vu de loin.",
      framing:
        "S'élever en pensée au-dessus de sa propre vie remet les proportions en place. Vu de haut, ce qui nous obsède paraît minuscule, et l'urgence se dissout.",
      prompt: "Ce qui te préoccupe, comment le vois-tu si tu prends de la hauteur ?",
    },
    en: {
      quote: "Look at things from above: the crowds, the armies, the festivals, all that teeming.",
      author: "Marcus Aurelius",
      work: "Meditations, VII, 48",
      gloss: "Rise higher; the worry shrinks seen from far off.",
      framing:
        "To rise in thought above your own life sets the proportions right. From above, what obsesses us looks tiny, and the urgency dissolves.",
      prompt: "What worries you — how does it look if you rise above it?",
    },
  },
  {
    id: "constance-interieure",
    fr: {
      quote: "Que les circonstances extérieures ne te troublent pas : c'est en toi qu'est le pouvoir.",
      author: "Marc Aurèle",
      work: "Pensées, VII, 2",
      gloss: "Le calme ne vient pas du dehors, mais de toi.",
      framing:
        "On attend souvent que les conditions s'arrangent pour être en paix. Les stoïciens renversent l'ordre : la paix se décide en soi, quelles que soient les conditions.",
      prompt: "Qu'attends-tu du dehors, que tu pourrais te donner toi-même ?",
    },
    en: {
      quote: "Do not let outer circumstances trouble you: the power is within you.",
      author: "Marcus Aurelius",
      work: "Meditations, VII, 2",
      gloss: "Calm doesn't come from outside, but from you.",
      framing:
        "We often wait for conditions to sort themselves out before we can be at peace. The Stoics reverse the order: peace is decided within, whatever the conditions.",
      prompt: "What are you waiting on from outside that you could give yourself?",
    },
  },
  {
    id: "travail-bien-fait",
    fr: {
      quote: "Une bonne action est sa propre récompense.",
      author: "Sénèque",
      work: "De la vie heureuse, IX",
      gloss: "Bien agir se suffit à soi-même.",
      framing:
        "Attendre reconnaissance ou salaire d'un bon acte, c'est en diminuer la valeur. L'acte juste porte en lui-même sa lumière ; le reste est superflu.",
      prompt: "Qu'as-tu fait de bien, sans attendre qu'on le remarque ?",
    },
    en: {
      quote: "A good deed is its own reward.",
      author: "Seneca",
      work: "On the Happy Life, IX",
      gloss: "Acting well is enough in itself.",
      framing:
        "To expect thanks or payment for a good act is to diminish its worth. The right deed carries its own light; the rest is superfluous.",
      prompt: "What did you do well, without waiting for it to be noticed?",
    },
  },
  {
    id: "flux-attention",
    fr: {
      quote: "La qualité de ta vie dépend de la qualité de tes pensées.",
      author: "Marc Aurèle",
      work: "Pensées, V, 16",
      gloss: "Ton âme se teinte de ce que tu penses.",
      framing:
        "L'âme prend la couleur de ses pensées habituelles, disait Marc Aurèle. Ce que tu nourris en toi te façonne. Soigner ses pensées, c'est soigner sa vie.",
      prompt: "Quelle pensée reviens-tu à ruminer — et te nourrit-elle vraiment ?",
    },
    en: {
      quote: "The quality of your life depends on the quality of your thoughts.",
      author: "Marcus Aurelius",
      work: "Meditations, V, 16",
      gloss: "Your soul takes the colour of what you think.",
      framing:
        "The soul takes the colour of its habitual thoughts, said Marcus Aurelius. What you feed within yourself shapes you. To tend your thoughts is to tend your life.",
      prompt: "Which thought do you keep chewing over — and does it truly nourish you?",
    },
  },
  {
    id: "petit-pas",
    fr: {
      quote: "Aucun grand ouvrage ne se fait d'un coup ; laisse le temps agir.",
      author: "Épictète",
      gloss: "Les choses mûrissent ; ne force pas la vigne.",
      framing:
        "Épictète comparait la maturation intérieure à celle du raisin : d'abord la fleur, puis le fruit vert, puis la grappe mûre. Vouloir sauter les étapes, c'est tout gâcher.",
      prompt: "Qu'essaies-tu de précipiter, qui demanderait plutôt de la patience ?",
    },
    en: {
      quote: "No great work is done at a stroke; let time do its part.",
      author: "Epictetus",
      gloss: "Things ripen; don't force the vine.",
      framing:
        "Epictetus likened inner ripening to that of the grape: first the blossom, then the green fruit, then the ripe cluster. To try to skip the stages is to spoil the whole.",
      prompt: "What are you trying to rush that would rather ask for patience?",
    },
  },
  {
    id: "solitude-utile",
    fr: {
      quote: "Retire-toi en toi-même autant que tu le peux ; fréquente ceux qui te rendent meilleur.",
      author: "Sénèque",
      work: "Lettres à Lucilius, VII",
      gloss: "Choisis tes fréquentations ; elles te transforment.",
      framing:
        "Sénèque savait qu'on ressort d'une foule moins bon qu'on n'y est entré. Se retirer un peu, s'entourer de qui nous élève : c'est une hygiène de l'âme.",
      prompt: "Qui, autour de toi, te rend meilleur — et vois-tu assez cette personne ?",
    },
    en: {
      quote: "Withdraw into yourself as much as you can; keep the company of those who make you better.",
      author: "Seneca",
      work: "Letters to Lucilius, VII",
      gloss: "Choose your company; it remakes you.",
      framing:
        "Seneca knew that we come away from a crowd worse than we went in. To withdraw a little, to surround yourself with those who raise you up: this is a hygiene of the soul.",
      prompt: "Who, around you, makes you better — and do you see that person enough?",
    },
  },
  {
    id: "maitrise-reaction",
    fr: {
      quote: "On ne peut empêcher les oiseaux de voler au-dessus de sa tête, mais bien d'y faire leur nid.",
      author: "Épictète",
      gloss: "Tu ne choisis pas les pensées qui passent, mais celles que tu gardes.",
      framing:
        "Les impressions surgissent sans qu'on les invite. La liberté n'est pas de les empêcher, mais de ne pas les laisser s'installer. Entre l'impulsion et l'acte, il y a toi.",
      prompt: "Quelle pensée passagère aurais-tu intérêt à ne pas laisser nicher ?",
    },
    en: {
      quote: "You cannot stop the birds flying over your head, but you can stop them nesting in your hair.",
      author: "Epictetus",
      gloss: "You don't choose the thoughts that pass, only the ones you keep.",
      framing:
        "Impressions arise uninvited. Freedom isn't in preventing them, but in not letting them settle in. Between the impulse and the act, there is you.",
      prompt: "Which passing thought would you do well not to let build a nest?",
    },
  },
  {
    id: "modestie-savoir",
    fr: {
      quote: "Il est impossible d'apprendre ce qu'on croit déjà savoir.",
      author: "Épictète",
      gloss: "L'humilité est la porte du progrès.",
      framing:
        "Se croire arrivé, c'est fermer la porte à tout apprentissage. Épictète voyait dans la conscience de son ignorance le premier pas de toute sagesse.",
      prompt: "Sur quoi te crois-tu sûr, alors qu'il resterait à apprendre ?",
    },
    en: {
      quote: "It is impossible to learn what one believes one already knows.",
      author: "Epictetus",
      gloss: "Humility is the doorway to progress.",
      framing:
        "To think yourself arrived is to shut the door on all learning. Epictetus saw in the awareness of one's own ignorance the first step of all wisdom.",
      prompt: "What are you sure of, where there is still something left to learn?",
    },
  },
  {
    id: "detachement-resultat",
    fr: {
      quote: "Fais ce qui te revient et laisse advenir le reste.",
      author: "Épictète",
      work: "Manuel (esprit)",
      gloss: "Donne le meilleur au geste ; le résultat ne t'appartient pas.",
      framing:
        "On confond souvent l'effort et l'issue. Le stoïcien s'engage entièrement dans ce qui dépend de lui — l'intention, le soin — et lâche le résultat, qui dépend d'un monde plus vaste.",
      prompt: "Où t'accroches-tu au résultat, au lieu de soigner ta part ?",
    },
    en: {
      quote: "Do what is yours to do, and let the rest come as it will.",
      author: "Epictetus",
      work: "Enchiridion (in spirit)",
      gloss: "Give the deed your best; the outcome isn't yours.",
      framing:
        "We often confuse the effort with the result. The Stoic gives himself wholly to what is up to him — the intention, the care — and lets go of the outcome, which belongs to a wider world.",
      prompt: "Where do you cling to the outcome, instead of tending your own part?",
    },
  },
  {
    id: "valeur-temps",
    fr: {
      quote: "Tout t'échappe et rien n'est plus fugitif ; ressaisis-toi.",
      author: "Sénèque",
      work: "Lettres à Lucilius, I",
      gloss: "Le temps file ; reprends-toi doucement.",
      framing:
        "Sénèque conseillait de tenir chaque jour comme une vie entière. Non par angoisse, mais pour cesser de remettre à demain ce qui donne du sens à aujourd'hui.",
      prompt: "Qu'as-tu tendance à remettre à demain, qui compte pourtant ?",
    },
    en: {
      quote: "Everything slips away and nothing is more fleeting; take hold of yourself.",
      author: "Seneca",
      work: "Letters to Lucilius, I",
      gloss: "Time is slipping; gently gather yourself.",
      framing:
        "Seneca advised holding each day as if it were a whole life. Not out of dread, but to stop deferring to tomorrow what gives today its meaning.",
      prompt: "What do you tend to put off until tomorrow that matters all the same?",
    },
  },
  {
    id: "harmonie-nature",
    fr: {
      quote: "Vivre en accord avec la nature : voilà le souverain bien.",
      author: "Sénèque",
      work: "De la vie heureuse, III",
      gloss: "Vivre juste, c'est vivre accordé à ce qui est.",
      framing:
        "Pour les stoïciens, « nature » désigne à la fois l'ordre du monde et notre nature raisonnable. S'y accorder, c'est cesser de lutter contre soi et contre le réel.",
      prompt: "En quoi te sens-tu, aujourd'hui, accordé — ou en lutte avec ce qui est ?",
    },
    en: {
      quote: "To live in agreement with nature: therein lies the highest good.",
      author: "Seneca",
      work: "On the Happy Life, III",
      gloss: "To live rightly is to live in tune with what is.",
      framing:
        "For the Stoics, “nature” means both the order of the world and our own rational nature. To live in tune with it is to stop fighting yourself and the real.",
      prompt: "In what way do you feel, today, in tune — or at war with what is?",
    },
  },
  {
    id: "bienveillance-soi",
    fr: {
      quote: "Nous devons parfois nous pardonner d'être seulement humains.",
      author: "Sénèque",
      work: "De la colère (esprit)",
      gloss: "Sois patient aussi envers toi-même.",
      framing:
        "La discipline stoïcienne n'est pas une flagellation. Reconnaître ses limites sans s'y complaire, se relever sans se mépriser : c'est aussi cela, la sagesse.",
      prompt: "De quoi pourrais-tu, aujourd'hui, te pardonner doucement ?",
    },
    en: {
      quote: "Sometimes we must forgive ourselves for being only human.",
      author: "Seneca",
      work: "On Anger (in spirit)",
      gloss: "Be patient with yourself, too.",
      framing:
        "Stoic discipline isn't self-flagellation. To acknowledge your limits without indulging them, to rise again without contempt for yourself: this too is wisdom.",
      prompt: "What could you, today, gently forgive yourself for?",
    },
  },
];

/** Resolve a bilingual record to a single language's flat Principle. */
function resolve(data: PrincipleData, lang: Lang): Principle {
  return { id: data.id, ...data[lang] };
}

/**
 * Pick the day's principle deterministically from a YYYY-MM-DD date string.
 * Stable through the day; rotates day to day across the full list.
 */
export function principleForDate(dateISO: string, lang: Lang): Principle {
  const [y, m, d] = dateISO.split("-").map(Number);
  // Days since epoch (UTC noon avoids DST edges); pure integer arithmetic.
  const dayNumber = Math.floor(Date.UTC(y, m - 1, d) / 86400000);
  const idx = ((dayNumber % PRINCIPLES.length) + PRINCIPLES.length) % PRINCIPLES.length;
  return resolve(PRINCIPLES[idx], lang);
}

export function principleById(id: string, lang: Lang): Principle | undefined {
  const data = PRINCIPLES.find((p) => p.id === id);
  return data ? resolve(data, lang) : undefined;
}
