// A curated collection of Stoic principles, each with a short quote, its
// attribution, a plain-French gloss, a brief framing, and a reflective prompt.
// All local — the daily experience never touches the network.

export interface Principle {
  id: string;
  quote: string;          // the source line (translated to FR)
  author: string;         // Marc Aurèle / Épictète / Sénèque
  work?: string;          // source work
  gloss: string;          // one-line plain-French meaning
  framing: string;        // 2–3 sentences of gentle context
  prompt: string;         // a single reflective question
}

export const PRINCIPLES: Principle[] = [
  {
    id: "dichotomie",
    quote: "Il y a ce qui dépend de nous et ce qui n'en dépend pas.",
    author: "Épictète",
    work: "Manuel, I",
    gloss: "Distingue ce que tu peux changer de ce que tu ne peux que traverser.",
    framing:
      "Nos jugements, nos désirs et nos actes nous appartiennent ; le reste — l'opinion des autres, le temps qu'il fait, ce qui est déjà arrivé — ne nous appartient pas. Toute la paix stoïcienne commence par tracer cette frontière avec honnêteté.",
    prompt: "Qu'est-ce qui, aujourd'hui, ne dépend vraiment pas de toi — et pourrais-tu poser ?",
  },
  {
    id: "matin",
    quote: "Au lever, dis-toi : aujourd'hui je croiserai l'ingrat, le violent, l'envieux.",
    author: "Marc Aurèle",
    work: "Pensées, II, 1",
    gloss: "Prévois les frictions du jour pour ne pas t'en étonner.",
    framing:
      "Marc Aurèle se préparait chaque matin à rencontrer des gens difficiles, non par cynisme, mais pour que rien ne le prenne au dépourvu. Anticiper les heurts, c'est déjà leur ôter une part de leur pouvoir.",
    prompt: "Quelle friction attends-tu aujourd'hui, et comment veux-tu l'accueillir ?",
  },
  {
    id: "obstacle",
    quote: "L'obstacle à l'action fait avancer l'action. Ce qui gêne la route devient la route.",
    author: "Marc Aurèle",
    work: "Pensées, V, 20",
    gloss: "Ce qui te bloque peut devenir ton chemin.",
    framing:
      "Là où l'obstacle semble arrêter tout, le stoïcien voit la matière même du travail. La contrainte n'est pas l'ennemie de l'œuvre : bien souvent, elle en est la forme.",
    prompt: "Quel obstacle pourrais-tu retourner en point de départ ?",
  },
  {
    id: "present",
    quote: "Chacun ne vit que le présent, cet instant fugitif ; le reste est déjà vécu ou incertain.",
    author: "Marc Aurèle",
    work: "Pensées, III, 10",
    gloss: "Tu n'habites que maintenant ; le passé et l'avenir ne sont pas à perdre.",
    framing:
      "On ne peut perdre ni le passé ni l'avenir, puisqu'on ne les possède pas. Ce qui t'est réellement donné, c'est cet instant — mince, mais entier.",
    prompt: "Qu'y a-t-il dans cet instant précis, si tu cesses de courir devant ou derrière ?",
  },
  {
    id: "brievete",
    quote: "Ce n'est pas que nous ayons peu de temps, c'est que nous en perdons beaucoup.",
    author: "Sénèque",
    work: "De la brièveté de la vie, I",
    gloss: "La vie est assez longue pour qui ne la gaspille pas.",
    framing:
      "Sénèque ne se plaint pas de la brièveté de la vie mais de notre distraction. Le temps ne manque pas ; c'est l'attention qui fuit. Vivre pleinement, c'est habiter ses heures au lieu de les laisser filer.",
    prompt: "À quoi as-tu donné ton temps aujourd'hui — et l'aurais-tu choisi ?",
  },
  {
    id: "amor-fati",
    quote: "Ne demande pas que les choses arrivent comme tu le veux, mais veuille-les comme elles arrivent.",
    author: "Épictète",
    work: "Manuel, VIII",
    gloss: "Consens à ce qui est, plutôt que de te battre contre le réel.",
    framing:
      "Vouloir que le monde plie à nos désirs, c'est se condamner à la frustration. Consentir à ce qui advient — non par résignation, mais par lucidité — c'est retrouver le calme.",
    prompt: "Y a-t-il une chose que tu combats, alors qu'elle est déjà là ?",
  },
  {
    id: "opinion",
    quote: "Ce ne sont pas les choses qui troublent les hommes, mais les jugements qu'ils portent sur elles.",
    author: "Épictète",
    work: "Manuel, V",
    gloss: "Le trouble vient de ton regard, pas de l'événement.",
    framing:
      "Entre l'événement et ta souffrance, il y a toujours un jugement. C'est là — et non dans les faits — que se joue ta tranquillité. Change le jugement, et l'événement change de poids.",
    prompt: "Quel jugement, plus que le fait lui-même, te pèse aujourd'hui ?",
  },
  {
    id: "mort",
    quote: "Fais chaque acte de ta vie comme si c'était le dernier.",
    author: "Marc Aurèle",
    work: "Pensées, II, 5",
    gloss: "La conscience de la fin donne du sérieux au présent.",
    framing:
      "Se souvenir qu'on mourra n'est pas morbide : c'est un aiguillon. Cela dépouille le trivial et rend au moment sa gravité douce. On agit mieux quand on sait que le temps est compté.",
    prompt: "Si aujourd'hui comptait vraiment, qu'est-ce que tu ferais avec plus de soin ?",
  },
  {
    id: "colere",
    quote: "La meilleure vengeance est de ne pas ressembler à celui qui t'a offensé.",
    author: "Marc Aurèle",
    work: "Pensées, VI, 6",
    gloss: "Ne deviens pas ce que tu reproches à l'autre.",
    framing:
      "Répondre à la dureté par la dureté, c'est se laisser façonner par elle. Rester soi-même, mesuré, quand on nous provoque, est une victoire plus haute que toute riposte.",
    prompt: "Où risques-tu de devenir ce que tu reproches — et comment garder ta forme ?",
  },
  {
    id: "possession",
    quote: "Ne dis jamais d'une chose : « je l'ai perdue », mais : « je l'ai rendue ».",
    author: "Épictète",
    work: "Manuel, XI",
    gloss: "Ce que tu as t'est prêté, non donné.",
    framing:
      "Nos biens, nos proches, notre santé nous sont confiés pour un temps. Les tenir comme des prêts, non comme des dus, adoucit la perte et approfondit la gratitude tant qu'ils sont là.",
    prompt: "Qu'est-ce que tu tiens aujourd'hui comme un dû, alors que c'est un prêt ?",
  },
  {
    id: "suffisance",
    quote: "N'est pas pauvre celui qui a peu, mais celui qui désire davantage.",
    author: "Sénèque",
    work: "Lettres à Lucilius, II",
    gloss: "La richesse, c'est de désirer ce qu'on a déjà.",
    framing:
      "Le manque n'est pas une quantité mais un rapport. On peut tout avoir et se sentir démuni, ou peu posséder et se sentir comblé. La mesure est intérieure.",
    prompt: "Qu'est-ce que tu as déjà, qui suffirait si tu le regardais vraiment ?",
  },
  {
    id: "vertu",
    quote: "Nulle part l'homme ne se retire plus au calme qu'en sa propre âme.",
    author: "Marc Aurèle",
    work: "Pensées, IV, 3",
    gloss: "Ton refuge le plus sûr est en toi.",
    framing:
      "On cherche le repos au bord de la mer, à la montagne — alors qu'un refuge est toujours ouvert : le retour à soi. Une âme en ordre est une retraite qu'on peut regagner à tout instant.",
    prompt: "De quoi aurais-tu besoin pour retrouver, un moment, le calme au-dedans ?",
  },
  {
    id: "controle-parole",
    quote: "Nous avons deux oreilles et une seule bouche, pour écouter plus et parler moins.",
    author: "Épictète",
    gloss: "Écoute davantage que tu ne parles.",
    framing:
      "La retenue dans la parole est une discipline stoïcienne discrète mais réelle. Beaucoup de nos regrets viennent de mots dits trop vite. Écouter, c'est déjà agir avec justesse.",
    prompt: "Où aurais-tu gagné, aujourd'hui, à écouter plutôt qu'à répondre ?",
  },
  {
    id: "reputation",
    quote: "Combien perdent de temps à s'occuper de ce que fait autrui plutôt que d'eux-mêmes.",
    author: "Marc Aurèle",
    work: "Pensées, IV, 18",
    gloss: "Occupe-toi de ta propre conduite, pas de celle des autres.",
    framing:
      "Surveiller la vie des autres est une fuite : c'est toujours plus facile que de regarder la sienne. Le stoïcien ramène son attention sur son seul territoire — ses actes.",
    prompt: "Où ton attention part-elle vers les autres, alors qu'elle t'est plus utile ici ?",
  },
  {
    id: "epreuve",
    quote: "Le feu éprouve l'or, l'adversité les hommes forts.",
    author: "Sénèque",
    work: "De la Providence, V",
    gloss: "Les difficultés révèlent et forgent ce que tu es.",
    framing:
      "Sénèque voyait dans l'épreuve non une punition mais un entraînement. Ce qui nous met à l'épreuve nous montre aussi de quoi nous sommes faits — et nous en rend, parfois, plus solides.",
    prompt: "Quelle épreuve, avec le recul, t'a rendu plus solide ?",
  },
  {
    id: "simplicite",
    quote: "En tout, cherche le chemin le plus court ; le plus court est celui de la nature.",
    author: "Marc Aurèle",
    work: "Pensées, IV, 51",
    gloss: "Fais simple ; l'essentiel est souvent le plus direct.",
    framing:
      "La complication est souvent un détour de l'ego. Aller au plus droit, au plus sain, au plus vrai : voilà une élégance morale que Marc Aurèle recommandait sans cesse.",
    prompt: "Où compliques-tu quelque chose qui gagnerait à être simple ?",
  },
  {
    id: "gratitude",
    quote: "Ne pense pas tant à ce que tu n'as pas qu'à ce que tu as de plus précieux.",
    author: "Marc Aurèle",
    work: "Pensées, VII, 27",
    gloss: "Regarde d'abord ce qui est déjà là.",
    framing:
      "L'esprit glisse spontanément vers le manque. Marc Aurèle propose l'exercice inverse : contempler ce qu'on possède comme si on venait de l'obtenir, ou comme si on risquait de le perdre.",
    prompt: "Qu'est-ce que, aujourd'hui, tu accueillerais avec gratitude ?",
  },
  {
    id: "impermanence",
    quote: "Tout n'est qu'un changement : l'univers vit de métamorphoses.",
    author: "Marc Aurèle",
    work: "Pensées, IV, 36",
    gloss: "Rien ne demeure ; le changement est la règle.",
    framing:
      "Tout ce qui existe se transforme sans cesse. S'attacher à la fixité, c'est souffrir de ce qui, par nature, doit passer. Épouser le flux apaise.",
    prompt: "Quel changement en cours pourrais-tu accueillir plutôt que retenir ?",
  },
  {
    id: "constance",
    quote: "Sois semblable au promontoire contre lequel les flots viennent sans cesse se briser.",
    author: "Marc Aurèle",
    work: "Pensées, IV, 49",
    gloss: "Tiens bon, calme, quoi qu'il se brise sur toi.",
    framing:
      "Le rocher ne se plaint pas des vagues ; il reste. La constance stoïcienne n'est pas la dureté, mais une stabilité tranquille au milieu de l'agitation.",
    prompt: "Face à quoi voudrais-tu tenir, calmement, comme un rocher ?",
  },
  {
    id: "utilite-commune",
    quote: "Ce qui n'est pas utile à la ruche n'est pas utile à l'abeille.",
    author: "Marc Aurèle",
    work: "Pensées, VI, 54",
    gloss: "Ton bien est lié à celui du tout.",
    framing:
      "Les stoïciens se pensaient citoyens du monde, membres d'un seul corps. Ce qui sert l'ensemble finit par nous servir aussi. L'égoïsme est, à long terme, une erreur de calcul.",
    prompt: "En quoi ton geste d'aujourd'hui sert-il plus grand que toi ?",
  },
  {
    id: "desir",
    quote: "La liberté ne s'obtient pas en assouvissant ses désirs, mais en les supprimant.",
    author: "Épictète",
    gloss: "On est libre quand on cesse de vouloir ce qui échappe.",
    framing:
      "Multiplier les désirs, c'est multiplier ses chaînes. Épictète propose l'inverse : réduire ce dont on croit avoir besoin, jusqu'à ne plus dépendre que de soi.",
    prompt: "Quel désir, si tu le relâchais, te rendrait un peu plus libre ?",
  },
  {
    id: "role",
    quote: "Souviens-toi que tu es acteur d'une pièce voulue telle par l'auteur.",
    author: "Épictète",
    work: "Manuel, XVII",
    gloss: "Joue bien le rôle qui t'échoit, sans choisir la pièce.",
    framing:
      "Nous ne choisissons pas toujours notre situation, mais nous choisissons comment l'habiter. Bien jouer son rôle, quel qu'il soit, voilà ce qui dépend de nous.",
    prompt: "Quel rôle t'est donné en ce moment, et comment le jouer bien ?",
  },
  {
    id: "matin-travail",
    quote: "Au petit jour, quand il te coûte de t'éveiller, dis-toi : je m'éveille pour l'œuvre d'un homme.",
    author: "Marc Aurèle",
    work: "Pensées, V, 1",
    gloss: "Tu es né pour agir, non pour rester sous les draps.",
    framing:
      "Marc Aurèle luttait, comme nous, contre l'inertie du matin. Son remède : se rappeler qu'il existe une tâche qui n'attend que lui. L'action est notre nature, non la torpeur.",
    prompt: "Pour quelle œuvre, aujourd'hui, valait-il la peine de te lever ?",
  },
  {
    id: "jugement-autrui",
    quote: "Quand quelqu'un te fait du tort, demande-toi ce qu'il tenait pour bien ou mal.",
    author: "Marc Aurèle",
    work: "Pensées, VII, 26",
    gloss: "Comprendre le tort de l'autre, c'est déjà s'en alléger.",
    framing:
      "Personne ne se trompe volontairement selon les stoïciens : celui qui te blesse suit une idée fausse du bien. Le comprendre ne l'excuse pas, mais te libère de la rancune.",
    prompt: "Qui t'a blessé récemment — et que cherchait-il peut-être, à sa manière ?",
  },
  {
    id: "peur",
    quote: "Nous souffrons plus souvent en imagination qu'en réalité.",
    author: "Sénèque",
    work: "Lettres à Lucilius, XIII",
    gloss: "La plupart de tes peurs n'arriveront jamais.",
    framing:
      "L'esprit anticipe des catastrophes qui, le plus souvent, ne viennent pas. Nommer clairement la peur, la mesurer, suffit souvent à la dégonfler.",
    prompt: "Quelle crainte t'occupe, qui n'est peut-être qu'imaginée ?",
  },
  {
    id: "action-juste",
    quote: "Ne perds plus de temps à discuter de ce que doit être l'homme de bien. Sois-le.",
    author: "Marc Aurèle",
    work: "Pensées, X, 16",
    gloss: "Agis bien plutôt que d'en parler.",
    framing:
      "La philosophie stoïcienne n'est pas un discours mais une pratique. À un moment, les définitions doivent céder la place au geste. Sois, ne commente pas.",
    prompt: "Qu'est-ce que tu pourrais faire aujourd'hui, au lieu d'en parler ?",
  },
  {
    id: "acceptation-corps",
    quote: "Tu es une petite âme qui porte un cadavre, disait Épictète.",
    author: "Marc Aurèle",
    work: "Pensées, IV, 41",
    gloss: "Ne te réduis pas à ton corps ; l'essentiel est ailleurs.",
    framing:
      "Formule rude, mais libératrice : ce qui te définit n'est pas ta chair fragile, c'est ton âme, tes jugements, ta manière d'être. Le corps sert ; il ne commande pas.",
    prompt: "Où laisses-tu le corps décider, alors que l'esprit sait mieux ?",
  },
  {
    id: "bienveillance",
    quote: "Les hommes sont faits les uns pour les autres : instruis-les, ou supporte-les.",
    author: "Marc Aurèle",
    work: "Pensées, VIII, 59",
    gloss: "Face aux autres : aide, ou endure avec patience.",
    framing:
      "Marc Aurèle ne prêchait pas une bienveillance naïve, mais une patience active. Devant autrui, deux voies droites : l'aider à voir mieux, ou le supporter sans aigreur.",
    prompt: "Avec qui pourrais-tu être, aujourd'hui, un peu plus patient ?",
  },
  {
    id: "vue-d-en-haut",
    quote: "Contemple les choses d'en haut : les foules, les armées, les fêtes, tout ce grouillement.",
    author: "Marc Aurèle",
    work: "Pensées, VII, 48",
    gloss: "Prends de la hauteur ; le tracas rétrécit vu de loin.",
    framing:
      "S'élever en pensée au-dessus de sa propre vie remet les proportions en place. Vu de haut, ce qui nous obsède paraît minuscule, et l'urgence se dissout.",
    prompt: "Ce qui te préoccupe, comment le vois-tu si tu prends de la hauteur ?",
  },
  {
    id: "constance-interieure",
    quote: "Que les circonstances extérieures ne te troublent pas : c'est en toi qu'est le pouvoir.",
    author: "Marc Aurèle",
    work: "Pensées, VII, 2",
    gloss: "Le calme ne vient pas du dehors, mais de toi.",
    framing:
      "On attend souvent que les conditions s'arrangent pour être en paix. Les stoïciens renversent l'ordre : la paix se décide en soi, quelles que soient les conditions.",
    prompt: "Qu'attends-tu du dehors, que tu pourrais te donner toi-même ?",
  },
  {
    id: "travail-bien-fait",
    quote: "Une bonne action est sa propre récompense.",
    author: "Sénèque",
    work: "De la vie heureuse, IX",
    gloss: "Bien agir se suffit à soi-même.",
    framing:
      "Attendre reconnaissance ou salaire d'un bon acte, c'est en diminuer la valeur. L'acte juste porte en lui-même sa lumière ; le reste est superflu.",
    prompt: "Qu'as-tu fait de bien, sans attendre qu'on le remarque ?",
  },
  {
    id: "flux-attention",
    quote: "La qualité de ta vie dépend de la qualité de tes pensées.",
    author: "Marc Aurèle",
    work: "Pensées, V, 16",
    gloss: "Ton âme se teinte de ce que tu penses.",
    framing:
      "L'âme prend la couleur de ses pensées habituelles, disait Marc Aurèle. Ce que tu nourris en toi te façonne. Soigner ses pensées, c'est soigner sa vie.",
    prompt: "Quelle pensée reviens-tu à ruminer — et te nourrit-elle vraiment ?",
  },
  {
    id: "petit-pas",
    quote: "Aucun grand ouvrage ne se fait d'un coup ; laisse le temps agir.",
    author: "Épictète",
    gloss: "Les choses mûrissent ; ne force pas la vigne.",
    framing:
      "Épictète comparait la maturation intérieure à celle du raisin : d'abord la fleur, puis le fruit vert, puis la grappe mûre. Vouloir sauter les étapes, c'est tout gâcher.",
    prompt: "Qu'essaies-tu de précipiter, qui demanderait plutôt de la patience ?",
  },
  {
    id: "solitude-utile",
    quote: "Retire-toi en toi-même autant que tu le peux ; fréquente ceux qui te rendent meilleur.",
    author: "Sénèque",
    work: "Lettres à Lucilius, VII",
    gloss: "Choisis tes fréquentations ; elles te transforment.",
    framing:
      "Sénèque savait qu'on ressort d'une foule moins bon qu'on n'y est entré. Se retirer un peu, s'entourer de qui nous élève : c'est une hygiène de l'âme.",
    prompt: "Qui, autour de toi, te rend meilleur — et vois-tu assez cette personne ?",
  },
  {
    id: "maitrise-reaction",
    quote: "On ne peut empêcher les oiseaux de voler au-dessus de sa tête, mais bien d'y faire leur nid.",
    author: "Épictète",
    gloss: "Tu ne choisis pas les pensées qui passent, mais celles que tu gardes.",
    framing:
      "Les impressions surgissent sans qu'on les invite. La liberté n'est pas de les empêcher, mais de ne pas les laisser s'installer. Entre l'impulsion et l'acte, il y a toi.",
    prompt: "Quelle pensée passagère aurais-tu intérêt à ne pas laisser nicher ?",
  },
  {
    id: "modestie-savoir",
    quote: "Il est impossible d'apprendre ce qu'on croit déjà savoir.",
    author: "Épictète",
    gloss: "L'humilité est la porte du progrès.",
    framing:
      "Se croire arrivé, c'est fermer la porte à tout apprentissage. Épictète voyait dans la conscience de son ignorance le premier pas de toute sagesse.",
    prompt: "Sur quoi te crois-tu sûr, alors qu'il resterait à apprendre ?",
  },
  {
    id: "detachement-resultat",
    quote: "Fais ce qui te revient et laisse advenir le reste.",
    author: "Épictète",
    work: "Manuel (esprit)",
    gloss: "Donne le meilleur au geste ; le résultat ne t'appartient pas.",
    framing:
      "On confond souvent l'effort et l'issue. Le stoïcien s'engage entièrement dans ce qui dépend de lui — l'intention, le soin — et lâche le résultat, qui dépend d'un monde plus vaste.",
    prompt: "Où t'accroches-tu au résultat, au lieu de soigner ta part ?",
  },
  {
    id: "valeur-temps",
    quote: "Tout t'échappe et rien n'est plus fugitif ; ressaisis-toi.",
    author: "Sénèque",
    work: "Lettres à Lucilius, I",
    gloss: "Le temps file ; reprends-toi doucement.",
    framing:
      "Sénèque conseillait de tenir chaque jour comme une vie entière. Non par angoisse, mais pour cesser de remettre à demain ce qui donne du sens à aujourd'hui.",
    prompt: "Qu'as-tu tendance à remettre à demain, qui compte pourtant ?",
  },
  {
    id: "harmonie-nature",
    quote: "Vivre en accord avec la nature : voilà le souverain bien.",
    author: "Sénèque",
    work: "De la vie heureuse, III",
    gloss: "Vivre juste, c'est vivre accordé à ce qui est.",
    framing:
      "Pour les stoïciens, « nature » désigne à la fois l'ordre du monde et notre nature raisonnable. S'y accorder, c'est cesser de lutter contre soi et contre le réel.",
    prompt: "En quoi te sens-tu, aujourd'hui, accordé — ou en lutte avec ce qui est ?",
  },
  {
    id: "bienveillance-soi",
    quote: "Nous devons parfois nous pardonner d'être seulement humains.",
    author: "Sénèque",
    work: "De la colère, esprit",
    gloss: "Sois patient aussi envers toi-même.",
    framing:
      "La discipline stoïcienne n'est pas une flagellation. Reconnaître ses limites sans s'y complaire, se relever sans se mépriser : c'est aussi cela, la sagesse.",
    prompt: "De quoi pourrais-tu, aujourd'hui, te pardonner doucement ?",
  },
];

/**
 * Pick the day's principle deterministically from a YYYY-MM-DD date string.
 * Stable through the day; rotates day to day across the full list.
 */
export function principleForDate(dateISO: string): Principle {
  const [y, m, d] = dateISO.split("-").map(Number);
  // Days since epoch (UTC noon avoids DST edges); pure integer arithmetic.
  const dayNumber = Math.floor(Date.UTC(y, m - 1, d) / 86400000);
  const idx = ((dayNumber % PRINCIPLES.length) + PRINCIPLES.length) % PRINCIPLES.length;
  return PRINCIPLES[idx];
}

export function principleById(id: string): Principle | undefined {
  return PRINCIPLES.find((p) => p.id === id);
}
