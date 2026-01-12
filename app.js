/* =========================================
   1. DATA: Question Bank (Sample)
   ========================================= */
const questionBank = [
    // =========================================================================
    // PHASE 1: Intro & Hardware (Chapters 1)
    // Topics: SoC, Screens, Sensors, Network History, App Types
    // =========================================================================
    
    {
        id: 101,
        phase: 1,
        text: "Dans l'architecture moderne d'un smartphone, quel composant regroupe CPU, GPU, Modem et DSP sur une seule puce ?",
        code: null,
        options: [
            "La carte mère",
            "Le SoC (System on Chip)",
            "Le BIOS",
            "La mémoire ROM",
            "Le Kernel",
            "L'accumulateur"
        ],
        correctIndices: [1],
        explanation: "Le SoC (System on Chip) intègre tous les composants essentiels (processeur, graphique, modem, etc.) pour économiser de l'espace et de l'énergie."
    },
    {
        id: 102,
        phase: 1,
        text: "Quelle technologie d'écran offre un contraste 'infini' en éteignant complètement les pixels noirs, économisant ainsi de la batterie ?",
        code: null,
        options: [
            "IPS LCD",
            "TFT LCD",
            "OLED / AMOLED",
            "Retina Display",
            "CRT",
            "Plasma"
        ],
        correctIndices: [2],
        explanation: "Les écrans OLED/AMOLED n'ont pas de rétroéclairage global ; chaque pixel émet sa propre lumière. Le noir correspond à un pixel éteint."
    },
    {
        id: 103,
        phase: 1,
        text: "Quel composant matériel est spécifiquement chargé de traiter les signaux numériques en temps réel (audio, vidéo) pour soulager le CPU ?",
        code: null,
        options: [
            "Le GPU (Graphics Processing Unit)",
            "Le DSP (Digital Signal Processor)",
            "Le NPU (Neural Processing Unit)",
            "Le Modem 5G",
            "La RAM LPDDR",
            "Le contrôleur d'alimentation"
        ],
        correctIndices: [1],
        explanation: "Le DSP (Digital Signal Processor) est spécialisé dans le traitement rapide des signaux comme le son et l'image."
    },
    {
        id: 104,
        phase: 1,
        text: "Quelle génération de réseau mobile a introduit pour la première fois l'Internet mobile via le protocole WAP, bien que très lent ?",
        code: null,
        options: [
            "1G",
            "2G (GPRS/EDGE)",
            "3G",
            "4G LTE",
            "5G",
            "GSM pur"
        ],
        correctIndices: [1],
        explanation: "La 2G a permis l'envoi de SMS et l'accès rudimentaire à internet via le WAP, avant l'arrivée du haut débit avec la 3G."
    },
    {
        id: 105,
        phase: 1,
        text: "Parmi les capteurs suivants, lequel est essentiel pour détecter l'orientation physique de l'écran (portrait/paysage) ?",
        code: null,
        options: [
            "Le capteur de proximité",
            "Le baromètre",
            "L'accéléromètre",
            "Le capteur d'empreintes",
            "Le capteur de luminosité",
            "Le magnétomètre"
        ],
        correctIndices: [2],
        explanation: "L'accéléromètre mesure l'accélération linéaire et permet de déterminer l'orientation de l'appareil par rapport à la gravité."
    },
    {
        id: 106,
        phase: 1,
        text: "Quelle est la principale caractéristique d'une application dite 'Native' par rapport à une application 'Hybride' ?",
        code: null,
        options: [
            "Elle est développée en HTML/CSS uniquement.",
            "Elle ne peut pas accéder au GPS.",
            "Elle est développée spécifiquement pour l'OS (ex: Java/Kotlin pour Android) et accède directement au matériel.",
            "Elle est toujours plus lente qu'une application Web.",
            "Elle ne nécessite aucune installation.",
            "Elle fonctionne sur iOS et Android avec le même code."
        ],
        correctIndices: [2],
        explanation: "Les apps natives sont optimisées pour le système spécifique et ont un accès direct et performant aux API matérielles (Caméra, Capteurs)."
    },
    {
        id: 107,
        phase: 1,
        text: "Quel est le rôle principal de l'ISP (Image Signal Processor) au sein du SoC ?",
        code: null,
        options: [
            "Gérer la connexion 5G.",
            "Traiter les données brutes du capteur photo pour améliorer la qualité (réduction de bruit, HDR).",
            "Afficher les graphismes 3D des jeux.",
            "Sécuriser les données biométriques.",
            "Charger la batterie plus vite.",
            "Exécuter le code Java."
        ],
        correctIndices: [1],
        explanation: "L'ISP traite les signaux venant des capteurs photo pour produire l'image finale (démosaïçage, balance des blancs, etc.)."
    },
    {
        id: 108,
        phase: 1,
        text: "Concernant la mémoire, quelle affirmation est vraie pour la ROM (Read Only Memory) dans les smartphones modernes ?",
        code: null,
        options: [
            "C'est une mémoire volatile qui s'efface quand on éteint le téléphone.",
            "Elle sert uniquement à la mémoire vive (RAM).",
            "C'est le stockage interne non volatile (Flash) où sont installés l'OS et les données utilisateur.",
            "Elle est toujours extensible via microSD sur tous les modèles.",
            "Elle est gravée en usine et ne peut jamais être mise à jour.",
            "Elle est gérée par le GPU."
        ],
        correctIndices: [2],
        explanation: "Bien qu'appelée ROM par héritage, c'est aujourd'hui de la mémoire Flash réinscriptible utilisée pour le stockage persistant."
    },
    {
        id: 109,
        phase: 1,
        text: "Quelle innovation majeure l'iPhone a-t-il popularisée en 2007, changeant l'industrie mobile ?",
        code: null,
        options: [
            "Le stylet obligatoire.",
            "L'écran tactile résistif.",
            "L'écran tactile capacitif multi-touch utilisable au doigt.",
            "La batterie amovible.",
            "Le clavier physique complet.",
            "La connectivité 5G."
        ],
        correctIndices: [2],
        explanation: "L'iPhone a imposé l'écran capacitif multi-touch, rendant l'interface fluide et utilisable sans stylet."
    },
    {
        id: 110,
        phase: 1,
        text: "Quel capteur est responsable d'éteindre l'écran lorsque vous portez le téléphone à votre oreille pendant un appel ?",
        code: null,
        options: [
            "Le Gyroscope",
            "Le capteur de proximité",
            "Le capteur de lumière ambiante",
            "L'accéléromètre",
            "Le capteur Hall",
            "Le podomètre"
        ],
        correctIndices: [1],
        explanation: "Le capteur de proximité détecte la présence d'objets proches (comme l'oreille) pour désactiver l'écran et éviter les touches accidentelles."
    },

    // =========================================================================
    // PHASE 2: Plateforme Android & Architecture (Chapters 2)
    // Topics: Layers (Kernel, HAL, Framework), DVM vs ART, Versions, Build Tools
    // =========================================================================

    {
        id: 201,
        phase: 2,
        text: "Quelle est la différence majeure entre Dalvik et ART (Android Runtime) concernant la compilation ?",
        code: null,
        options: [
            "Dalvik utilise AOT (Ahead-of-Time), ART utilise JIT.",
            "Dalvik utilise JIT (Just-in-Time), ART utilise principalement AOT (Ahead-of-Time).",
            "Dalvik compile le Java en C++, ART compile le Kotlin.",
            "ART ne supporte pas le multithreading.",
            "Dalvik est plus rapide au démarrage que ART.",
            "Il n'y a aucune différence, c'est juste un changement de nom."
        ],
        correctIndices: [1],
        explanation: "Dalvik (JIT) compile le code au moment de l'exécution. ART (AOT) précompile le code lors de l'installation, offrant de meilleures performances au lancement."
    },
    {
        id: 202,
        phase: 2,
        text: "Dans l'architecture Android, à quelle couche appartient la gestion directe des pilotes matériels (Display, Audio, Camera) ?",
        code: null,
        options: [
            "Application Framework",
            "Android Runtime",
            "Noyau Linux (Kernel)",
            "Libraries Natives (C/C++)",
            "System Apps",
            "Content Providers"
        ],
        correctIndices: [2],
        explanation: "Le Noyau Linux (Kernel) est la base du système et gère l'interaction bas niveau avec le matériel via les drivers."
    },
    {
        id: 203,
        phase: 2,
        text: "Quel outil est officiellement utilisé par Android Studio pour l'automatisation de la construction (build), la gestion des dépendances et la compilation ?",
        code: null,
        options: [
            "Maven",
            "Ant",
            "Gradle",
            "Make",
            "CMake",
            "Jenkins"
        ],
        correctIndices: [2],
        explanation: "Gradle est le système de build automatisé standard pour Android, gérant la compilation du code et l'intégration des librairies."
    },
    {
        id: 204,
        phase: 2,
        text: "Que contient le fichier AndroidManifest.xml obligatoire dans chaque projet ?",
        code: null,
        options: [
            "Le code source Java de l'activité principale.",
            "Les styles et couleurs de l'application.",
            "La déclaration des composants (Activities, Services), des permissions et du package.",
            "Les images et icônes de l'application.",
            "La configuration de Gradle.",
            "La base de données SQLite."
        ],
        correctIndices: [2],
        explanation: "Le Manifest est la carte d'identité de l'app : il déclare au système les activités, services, récepteurs et les permissions nécessaires."
    },
    {
        id: 205,
        phase: 2,
        text: "Quelle couche de l'architecture Android fournit les classes Java de base pour le développement (Activity Manager, Notification Manager, View System) ?",
        code: null,
        options: [
            "Linux Kernel",
            "Hardware Abstraction Layer (HAL)",
            "Libraries Natives",
            "Java API Framework (Application Framework)",
            "Android Runtime",
            "Applications Système"
        ],
        correctIndices: [3],
        explanation: "Le Framework Applicatif (Java API Framework) expose les API de haut niveau utilisées par les développeurs pour créer des apps."
    },
    {
        id: 206,
        phase: 2,
        text: "A quoi sert ADB (Android Debug Bridge) ?",
        code: null,
        options: [
            "À dessiner les interfaces graphiques.",
            "À communiquer avec un appareil (réel ou virtuel) pour installer des apps et déboguer.",
            "À compiler le code Java en Bytecode.",
            "À gérer la base de données SQL.",
            "À publier l'application sur le Play Store.",
            "À émuler le processeur ARM."
        ],
        correctIndices: [1],
        explanation: "ADB est un outil en ligne de commande client-serveur permettant d'envoyer des commandes (install, logcat, shell) à un appareil Android."
    },
    {
        id: 207,
        phase: 2,
        text: "Qu'est-ce qu'un fichier APK (Android Package) ?",
        code: null,
        options: [
            "Un fichier source non compilé.",
            "Une archive (format ZIP) contenant le code compilé (DEX), les ressources et le manifeste, prête à être installée.",
            "Un fichier exclusif au Google Play Store.",
            "Le noyau du système Android.",
            "Un outil de développement.",
            "Une machine virtuelle."
        ],
        correctIndices: [1],
        explanation: "L'APK est le format de fichier final généré pour la distribution et l'installation de l'application sur le système Android."
    },
    {
        id: 208,
        phase: 2,
        text: "Dans les versions d'Android, quel nom de code correspond à la version qui a introduit ART en remplacement optionnel ou définitif (Android 5.0) ?",
        code: null,
        options: [
            "Donut",
            "Froyo",
            "Lollipop",
            "KitKat",
            "Cupcake",
            "Gingerbread"
        ],
        correctIndices: [2],
        explanation: "Android 5.0 Lollipop a marqué la transition majeure vers ART (Android Runtime) comme runtime par défaut."
    },
    {
        id: 209,
        phase: 2,
        text: "Quel composant de l'architecture permet aux applications Java d'utiliser des fonctionnalités écrites en C/C++ (comme OpenGL ou WebKit) ?",
        code: null,
        options: [
            "JNI (Java Native Interface) via les Bibliothèques Natives",
            "Le Manifest",
            "Le Gestionnaire de Paquets",
            "Le Code PIN",
            "Le View System",
            "Le Content Provider"
        ],
        correctIndices: [0],
        explanation: "Les bibliothèques natives (C/C++) sont accessibles au Framework Java via JNI, permettant la performance pour le graphisme (OpenGL) ou le web."
    },
    {
        id: 210,
        phase: 2,
        text: "Quelle est la particularité du fichier R.java généré automatiquement ?",
        code: null,
        options: [
            "Il contient tout le code source de l'application.",
            "Il contient les identifiants (IDs) uniques de toutes les ressources (layouts, strings, images) du projet.",
            "Il gère la connexion internet.",
            "C'est un fichier de configuration du Kernel.",
            "Il contient les logs d'erreur.",
            "Il peut être modifié manuellement pour changer les IDs."
        ],
        correctIndices: [1],
        explanation: "La classe R agit comme un pont entre le XML et le Java, attribuant un ID hexadécimal unique à chaque ressource (ex: R.id.button1)."
    },
    {
        id: 211,
        phase: 2,
        text: "Que signifie AVD dans le contexte des outils Android ?",
        code: null,
        options: [
            "Android Video Decoder",
            "Android Virtual Device (l'émulateur)",
            "Advanced View Display",
            "Application Version Definition",
            "Audio Visual Data",
            "Android Verified Developer"
        ],
        correctIndices: [1],
        explanation: "AVD Manager permet de créer et gérer des appareils virtuels (émulateurs) pour tester l'application sur différentes configurations."
    },
    {
        id: 212,
        phase: 2,
        text: "Pourquoi le développement Android utilise-t-il XML en plus de Java/Kotlin ?",
        code: null,
        options: [
            "Pour écrire la logique métier complexe.",
            "Pour définir la structure des interfaces graphiques (Layouts) et les ressources (Strings, Colors) de manière déclarative.",
            "Pour gérer la base de données.",
            "Pour compiler le code plus vite.",
            "Car Java ne peut pas afficher de texte.",
            "Pour crypter les données."
        ],
        correctIndices: [1],
        explanation: "XML est utilisé pour séparer la présentation (Layouts) et les données statiques (Ressources) de la logique de programmation (Java/Kotlin)."
    },
    // =========================================================================
    // PHASE 3: Development, UI, & Lifecycle (Chapter 3)
    // Topics: Activity Lifecycle, Layouts, Intents, Event Listeners, R class
    // =========================================================================

    {
        id: 301,
        phase: 3,
        text: "Quelle méthode du cycle de vie est TOUJOURS appelée en premier lors de la création d'une Activity ?",
        code: null,
        options: [
            "onStart()",
            "onResume()",
            "onCreate()",
            "onRestart()",
            "onInit()",
            "onBegin()"
        ],
        correctIndices: [2],
        explanation: "onCreate() est le point d'entrée où l'on initialise l'activité (setContentView, liaison des variables) avant qu'elle ne devienne visible."
    },
    {
        id: 302,
        phase: 3,
        text: "Analysez le code suivant. Que se passe-t-il exactement à la ligne 'startActivity' ?",
        code: `Intent i = new Intent(this, SecondActivity.class);
startActivity(i);`,
        options: [
            "L'application plante car l'intent est vide.",
            "Le système lance une Activity explicite définie par la classe SecondActivity.",
            "Le système ouvre le navigateur web par défaut.",
            "Le système demande à l'utilisateur de choisir une application.",
            "L'activité actuelle est détruite immédiatement.",
            "Rien ne se passe."
        ],
        correctIndices: [1],
        explanation: "C'est un Intent EXPLICITE. On fournit le contexte actuel et la classe cible exacte, ce qui sert à naviguer au sein de la même application."
    },
    {
        id: 303,
        phase: 3,
        text: "Quel Layout utiliseriez-vous pour aligner des composants (boutons, textes) les uns à la suite des autres, verticalement ou horizontalement ?",
        code: null,
        options: [
            "RelativeLayout",
            "LinearLayout",
            "FrameLayout",
            "ConstraintLayout",
            "TableLayout",
            "AbsoluteLayout"
        ],
        correctIndices: [1],
        explanation: "LinearLayout organise ses enfants en une seule rangée (horizontale) ou une seule colonne (verticale) selon l'attribut orientation."
    },
    {
        id: 304,
        phase: 3,
        text: "Dans le cycle de vie, quelle méthode est appelée juste avant que l'activité ne devienne visible par l'utilisateur (mais pas encore interactive) ?",
        code: null,
        options: [
            "onCreate()",
            "onStart()",
            "onResume()",
            "onPause()",
            "onStop()",
            "onVisible()"
        ],
        correctIndices: [1],
        explanation: "onStart() rend l'activité visible à l'écran. Elle est suivie de onResume() qui rend l'activité interactive (au premier plan)."
    },
    {
        id: 305,
        phase: 3,
        text: "Quelle est la différence fondamentale entre 'match_parent' et 'wrap_content' dans un fichier XML de layout ?",
        code: null,
        options: [
            "'match_parent' prend la taille du contenu, 'wrap_content' prend tout l'espace.",
            "'match_parent' prend toute la taille disponible du parent, 'wrap_content' s'adapte à la taille de son propre contenu.",
            "'match_parent' est pour la largeur, 'wrap_content' pour la hauteur uniquement.",
            "Ce sont des synonymes obsolètes.",
            "'wrap_content' force une taille fixe en pixels.",
            "'match_parent' ne fonctionne que dans un LinearLayout."
        ],
        correctIndices: [1],
        explanation: "match_parent remplit le conteneur parent. wrap_content rétrécit la vue pour qu'elle soit juste assez grande pour contenir son texte/image."
    },
    {
        id: 306,
        phase: 3,
        text: "Analysez ce code. Quel type d'Intent est utilisé ici ?",
        code: `Intent intent = new Intent(Intent.ACTION_VIEW);
intent.setData(Uri.parse("https://www.google.com"));
startActivity(intent);`,
        options: [
            "Intent Explicite",
            "Intent Implicite",
            "Intent Système",
            "Intent Broadcast",
            "PendingIntent",
            "ServiceIntent"
        ],
        correctIndices: [1],
        explanation: "C'est un Intent IMPLICITE. On déclare une ACTION (voir) et une DONNÉE (url), sans nommer l'application cible. Android cherchera une app compatible (navigateur)."
    },
    {
        id: 307,
        phase: 3,
        text: "Si une Activity A lance une Activity B, quel est l'état de l'Activity A si elle est encore partiellement visible (ex: B est une fenêtre de dialogue) ?",
        code: null,
        options: [
            "Stopped (Arrêtée)",
            "Paused (En pause)",
            "Destroyed (Détruite)",
            "Resumed (Active)",
            "Created (Créée)",
            "Running (En cours)"
        ],
        correctIndices: [1],
        explanation: "Si l'activité perd le focus mais reste visible (même partiellement), elle passe en onPause(). Si elle était totalement masquée, elle passerait en onStop()."
    },
    {
        id: 308,
        phase: 3,
        text: "À quoi sert la méthode 'findViewById(R.id.monBouton)' ?",
        code: null,
        options: [
            "À créer un nouveau bouton.",
            "À changer la couleur du bouton.",
            "À récupérer dans le code Java l'instance de la vue définie dans le fichier XML.",
            "À supprimer le bouton de l'écran.",
            "À définir le layout du bouton.",
            "À lancer l'événement de clic."
        ],
        correctIndices: [2],
        explanation: "Elle lie le design (XML) à la logique (Java). Elle cherche dans l'arbre des vues l'objet qui a l'ID spécifié pour pouvoir le manipuler."
    },
    {
        id: 309,
        phase: 3,
        text: "Que se passe-t-il si vous ne déclarez pas votre nouvelle Activity dans le fichier AndroidManifest.xml ?",
        code: null,
        options: [
            "L'application fonctionne normalement.",
            "L'activité se lance mais sans interface.",
            "L'application plante (crash) avec une ActivityNotFoundException au moment de lancer l'activité.",
            "Le compilateur refuse de générer l'APK.",
            "L'activité devient un Service.",
            "L'activité est ignorée par le système."
        ],
        correctIndices: [2],
        explanation: "Toute Activity doit être déclarée dans le Manifest. Sinon, le système refuse de la lancer et lève une exception fatal."
    },
    {
        id: 310,
        phase: 3,
        text: "Quelle interface doit-on implémenter pour gérer le clic sur un bouton ?",
        code: null,
        options: [
            "View.OnTouchListener",
            "View.OnClickListener",
            "View.OnLongClickListener",
            "Activity.OnClick",
            "Button.PressListener",
            "Mouse.ClickListener"
        ],
        correctIndices: [1],
        explanation: "L'interface standard est View.OnClickListener, qui oblige à redéfinir la méthode onClick(View v)."
    },
    {
        id: 311,
        phase: 3,
        text: "Dans quel dossier des ressources (res) place-t-on les fichiers XML définissant les chaînes de caractères (Strings) ?",
        code: null,
        options: [
            "res/layout",
            "res/drawable",
            "res/values",
            "res/mipmap",
            "res/xml",
            "res/raw"
        ],
        correctIndices: [2],
        explanation: "Le dossier 'values' contient les fichiers de valeurs simples : strings.xml (textes), colors.xml (couleurs), dimens.xml (dimensions)."
    },
    {
        id: 312,
        phase: 3,
        text: "Analysez ce code. Que fait la méthode 'setContentView' ?",
        code: `protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
}`,
        options: [
            "Elle sauvegarde les données de l'activité.",
            "Elle définit le fichier XML d'interface graphique à afficher pour cette activité.",
            "Elle connecte l'activité à internet.",
            "Elle ferme l'activité.",
            "Elle crée un nouveau layout vide.",
            "Elle initialise les variables."
        ],
        correctIndices: [1],
        explanation: "setContentView inflate (gonfle) le fichier XML spécifié (activity_main) pour construire l'interface graphique de l'écran."
    },
    {
        id: 313,
        phase: 3,
        text: "Quel composant Android permet d'effectuer des tâches en arrière-plan sans interface utilisateur ?",
        code: null,
        options: [
            "Activity",
            "Service",
            "BroadcastReceiver",
            "ContentProvider",
            "Fragment",
            "Intent"
        ],
        correctIndices: [1],
        explanation: "Un Service est conçu pour les opérations longues (téléchargement, lecture musique) qui doivent continuer même si l'utilisateur change d'application."
    },
    {
        id: 314,
        phase: 3,
        text: "Quel est le rôle d'un BroadcastReceiver ?",
        code: null,
        options: [
            "Afficher une interface graphique.",
            "Stocker des données dans une base SQL.",
            "Écouter et réagir aux annonces/événements du système (batterie faible, SMS reçu, démarrage terminé).",
            "Gérer les clics utilisateurs.",
            "Diffuser de la musique.",
            "Envoyer des emails."
        ],
        correctIndices: [2],
        explanation: "Le BroadcastReceiver est un composant dormant qui se réveille uniquement pour intercepter des messages globaux (Broadcasts) du système ou d'autres apps."
    },
    {
        id: 315,
        phase: 3,
        text: "Quelle méthode est appelée pour détruire une activité et libérer ses ressources ?",
        code: null,
        options: [
            "onStop()",
            "onPause()",
            "onDelete()",
            "onDestroy()",
            "onFinish()",
            "onKill()"
        ],
        correctIndices: [3],
        explanation: "onDestroy() est la dernière méthode du cycle de vie, appelée avant que l'activité ne soit complètement supprimée de la mémoire."
    },
    // =========================================================================
    // PHASE 4: Persistence & Data (Chapter 4)
    // Topics: SharedPreferences, Internal/External Storage, SQLite, ContentProviders
    // =========================================================================

    {
        id: 401,
        phase: 4,
        text: "Quelle méthode de stockage est la plus adaptée pour sauvegarder de petites quantités de données primitives (ex: score, pseudo, réglages) ?",
        code: null,
        options: [
            "SQLite",
            "Fichier texte interne",
            "SharedPreferences",
            "Stockage Externe (SD Card)",
            "Cloud Firebase",
            "Cache mémoire"
        ],
        correctIndices: [2],
        explanation: "SharedPreferences est optimisé pour stocker des paires clé-valeur simples (boolean, int, string) comme des préférences utilisateur."
    },
    {
        id: 402,
        phase: 4,
        text: "Quelle est la différence critique entre les méthodes 'commit()' et 'apply()' de SharedPreferences ?",
        code: `SharedPreferences.Editor editor = prefs.edit();
editor.putString("key", "value");
// editor.commit(); vs editor.apply();`,
        options: [
            "commit() est asynchrone, apply() est synchrone.",
            "apply() écrit en arrière-plan (asynchrone) sans bloquer l'UI, tandis que commit() écrit immédiatement (synchrone) et retourne un succès/échec.",
            "commit() supprime les données, apply() les ajoute.",
            "apply() ne fonctionne que sur Android 10+.",
            "commit() est plus rapide que apply().",
            "Il n'y a aucune différence."
        ],
        correctIndices: [1],
        explanation: "Il est recommandé d'utiliser apply() pour ne pas figer l'interface utilisateur, car commit() bloque le thread principal jusqu'à la fin de l'écriture."
    },
    {
        id: 403,
        phase: 4,
        text: "Dans le contexte des fichiers sous Android, quelle permission est souvent nécessaire pour écrire sur le stockage externe (External Storage) ?",
        code: null,
        options: [
            "INTERNET",
            "ACCESS_FINE_LOCATION",
            "WRITE_EXTERNAL_STORAGE",
            "READ_CONTACTS",
            "CAMERA",
            "BLUETOOTH"
        ],
        correctIndices: [2],
        explanation: "L'écriture sur le stockage partagé/externe nécessite explicitement la permission WRITE_EXTERNAL_STORAGE (bien que cela évolue avec Scoped Storage)."
    },
    {
        id: 404,
        phase: 4,
        text: "Quelle classe Java permet de faciliter la création et la mise à jour de la structure d'une base de données SQLite ?",
        code: null,
        options: [
            "SQLiteDatabase",
            "SQLiteOpenHelper",
            "Cursor",
            "ContentValues",
            "DBManager",
            "SQLHelper"
        ],
        correctIndices: [1],
        explanation: "SQLiteOpenHelper est une classe utilitaire qui offre les méthodes onCreate() et onUpgrade() pour gérer le cycle de vie de la base de données."
    },
    {
        id: 405,
        phase: 4,
        text: "Analysez le code SQLite suivant. Quelle erreur empêchera l'insertion ?",
        code: `db.execSQL("CREATE TABLE users (id INTEGER, name TEXT)");
ContentValues v = new ContentValues();
v.put("nom", "Alice"); // <-- Regardez ici
db.insert("users", null, v);`,
        options: [
            "La table 'users' n'a pas de clé primaire.",
            "La clé 'nom' ne correspond pas à la colonne 'name' définie dans la table.",
            "Il manque le point-virgule dans la requête SQL.",
            "La méthode insert() ne prend pas de ContentValues.",
            "On ne peut pas insérer de texte dans un champ TEXT.",
            "La base de données n'est pas ouverte."
        ],
        correctIndices: [1],
        explanation: "La colonne a été créée sous le nom 'name', mais le code tente d'insérer une valeur pour la clé 'nom'. La correspondance échouera."
    },
    {
        id: 406,
        phase: 4,
        text: "Quel objet est retourné par une requête de lecture (query) sur une base SQLite pour parcourir les résultats ?",
        code: null,
        options: [
            "ResultSet",
            "List<String>",
            "Cursor",
            "Array",
            "Pointer",
            "Map"
        ],
        correctIndices: [2],
        explanation: "Android utilise un objet Cursor qui pointe vers les lignes de résultats. On utilise cursor.moveToNext() pour lire les données."
    },
    {
        id: 407,
        phase: 4,
        text: "Quel mode d'ouverture de fichier permet d'ajouter des données à la fin d'un fichier existant sans l'écraser ?",
        code: `openFileOutput("data.txt", MODE_...);`,
        options: [
            "MODE_PRIVATE",
            "MODE_WORLD_READABLE",
            "MODE_APPEND",
            "MODE_WRITE",
            "MODE_ADD",
            "MODE_UPDATE"
        ],
        correctIndices: [2],
        explanation: "MODE_APPEND ouvre le fichier et place le curseur d'écriture à la fin, préservant le contenu existant."
    },
    {
        id: 408,
        phase: 4,
        text: "À quoi sert un ContentProvider ?",
        code: null,
        options: [
            "À fournir du contenu internet.",
            "À partager des données structurées de manière sécurisée entre différentes applications (ex: Contacts, SMS).",
            "À gérer les mises en page (Layouts).",
            "À télécharger des fichiers.",
            "À crypter la base de données.",
            "À lire des fichiers MP3."
        ],
        correctIndices: [1],
        explanation: "Le ContentProvider est le mécanisme standard d'Android pour exposer des données (comme le carnet d'adresses) à d'autres applications."
    },
    {
        id: 409,
        phase: 4,
        text: "Dans une base SQLite, quel type de données est utilisé pour stocker du texte ?",
        code: null,
        options: [
            "VARCHAR",
            "STRING",
            "TEXT",
            "CHAR",
            "BLOB",
            "LONGTEXT"
        ],
        correctIndices: [2],
        explanation: "SQLite utilise un typage dynamique simplifié. Les chaînes de caractères sont stockées sous le type TEXT."
    },
    {
        id: 410,
        phase: 4,
        text: "Quelle méthode est appelée automatiquement dans SQLiteOpenHelper lorsque la version de la base de données augmente ?",
        code: null,
        options: [
            "onCreate()",
            "onUpdate()",
            "onUpgrade()",
            "onChange()",
            "onNewVersion()",
            "onMigrate()"
        ],
        correctIndices: [2],
        explanation: "onUpgrade(db, oldVersion, newVersion) est déclenchée quand le numéro de version passé au constructeur est supérieur à celui du fichier existant."
    },
    {
        id: 411,
        phase: 4,
        text: "Où sont stockés physiquement les fichiers créés avec 'openFileOutput(name, MODE_PRIVATE)' ?",
        code: null,
        options: [
            "Sur la carte SD.",
            "Dans le dossier public 'Downloads'.",
            "Dans le répertoire privé interne de l'application (/data/data/package/files).",
            "Dans le cloud.",
            "Dans la mémoire RAM uniquement.",
            "Dans le dossier cache."
        ],
        correctIndices: [2],
        explanation: "Ces fichiers sont stockés dans la mémoire interne protégée de l'application. Seule l'application (ou root) peut y accéder."
    },
    {
        id: 412,
        phase: 4,
        text: "Quelle classe utilise-t-on pour insérer des valeurs dans une base SQLite de manière propre (clé/valeur) ?",
        code: `... values = new ...();
values.put("colonne", "valeur");`,
        options: [
            "HashMap",
            "ContentValues",
            "Bundle",
            "Intent",
            "ArrayList",
            "Map"
        ],
        correctIndices: [1],
        explanation: "ContentValues est une structure spécialisée utilisée par les méthodes insert() et update() de SQLiteDatabase."
    },
    // =========================================================================
    // BATCH 4: COMPLETING PHASES 1 & 2, EXPANDING PHASE 3
    // =========================================================================

    // --- PHASE 1 ADDITIONAL (Goal: Reach ~25) ---

    {
        id: 111,
        phase: 1,
        text: "Quel appareil, ancêtre du smartphone, permettait de gérer un agenda et des contacts mais ne téléphonait pas à l'origine ?",
        code: null,
        options: ["Le Pager", "Le PDA (Assistant Numérique Personnel)", "Le Walkman", "La GameBoy", "Le Minitel", "Le GPS autonome"],
        correctIndices: [1],
        explanation: "Le PDA était un assistant de poche pour l'organisation, avant de fusionner avec le téléphone pour devenir le smartphone."
    },
    {
        id: 112,
        phase: 1,
        text: "Quelle génération de réseau a permis pour la première fois le streaming vidéo fluide et les appels vidéo de bonne qualité ?",
        code: null,
        options: ["1G", "2G", "3G", "4G", "EDGE", "GPRS"],
        correctIndices: [3],
        explanation: "Bien que la 3G ait introduit la vidéo, c'est la 4G qui a véritablement permis le streaming fluide et la HD."
    },
    {
        id: 113,
        phase: 1,
        text: "Quelle est la fonction principale du GPU dans un SoC mobile ?",
        code: null,
        options: ["Gérer les appels téléphoniques", "Calculer les coordonnées GPS", "Traiter et afficher les éléments graphiques (2D/3D) à l'écran", "Stocker les photos", "Gérer la sécurité biométrique", "Refroidir le processeur"],
        correctIndices: [2],
        explanation: "Le GPU (Graphics Processing Unit) soulage le CPU de toutes les tâches liées au rendu visuel et aux jeux."
    },
    {
        id: 114,
        phase: 1,
        text: "Pourquoi les écrans LCD consomment-ils généralement plus d'énergie que les écrans OLED pour afficher du noir ?",
        code: null,
        options: ["Car les cristaux liquides chauffent.", "Car le rétroéclairage reste allumé sur toute la surface même pour les zones noires.", "Car ils utilisent plus de voltage.", "C'est faux, le LCD consomme moins.", "Car ils ont plus de pixels.", "Car ils sont plus anciens."],
        correctIndices: [1],
        explanation: "Le LCD nécessite un rétroéclairage constant. Pour faire du noir, il bloque la lumière, mais la lampe derrière est toujours allumée."
    },
    {
        id: 115,
        phase: 1,
        text: "Quel composant du SoC assure la connectivité sans fil (4G, 5G, Wi-Fi, Bluetooth) ?",
        code: null,
        options: ["Le NPU", "Le Modem", "Le GPU", "La ROM", "Le DSP", "L'Accéléromètre"],
        correctIndices: [1],
        explanation: "Le Modem est le sous-système dédié à la gestion de toutes les communications radio et réseaux."
    },
    {
        id: 116,
        phase: 1,
        text: "Qu'est-ce que la densité de pixels (PPI/DPI) ?",
        code: null,
        options: ["La luminosité maximale de l'écran.", "Le nombre de pixels par pouce (précision de l'image).", "La taille totale de l'écran en cm.", "Le nombre de couleurs affichables.", "La vitesse de rafraîchissement (Hz).", "L'épaisseur de la dalle."],
        correctIndices: [1],
        explanation: "Plus la densité (DPI) est élevée, plus les pixels sont petits et l'image nette (ex: Retina)."
    },
    {
        id: 117,
        phase: 1,
        text: "Quel est l'avantage principal d'un processeur 'Octa-core' (8 cœurs) ?",
        code: null,
        options: ["Il a 8 fois plus de mémoire.", "Il peut traiter plusieurs tâches en parallèle (multitâche) efficacement.", "Il consomme 8 fois moins de batterie.", "Il est 8 fois plus grand physiquement.", "Il ne chauffe jamais.", "Il remplace le GPU."],
        correctIndices: [1],
        explanation: "Avoir plusieurs cœurs permet de répartir les tâches : certains cœurs puissants pour les jeux, d'autres économes pour le fond."
    },
    {
        id: 118,
        phase: 1,
        text: "Quelle technologie a succédé aux écrans tactiles résistifs (qui nécessitaient une pression) ?",
        code: null,
        options: ["L'écran Capacitif", "L'écran Holographique", "L'écran à tube cathodique", "L'écran infrarouge", "Le Clavier BlackBerry", "La souris"],
        correctIndices: [0],
        explanation: "L'écran capacitif utilise l'électricité statique du corps humain, permettant le multi-touch et une grande fluidité."
    },
    {
        id: 119,
        phase: 1,
        text: "Dans l'évolution mobile, qu'est-ce que l'Internet des Objets (IoT) ?",
        code: null,
        options: ["Un nouveau navigateur web.", "La connexion d'objets du quotidien (montres, frigos, voitures) à internet.", "Un virus informatique.", "La 6G.", "Un type de carte SIM.", "Le Dark Web."],
        correctIndices: [1],
        explanation: "L'IoT désigne l'extension d'internet à des objets physiques via des capteurs et des connexions sans fil."
    },
    {
        id: 120,
        phase: 1,
        text: "Quel capteur permet de compter vos pas (podomètre) en détectant les mouvements ?",
        code: null,
        options: ["Le Baromètre", "Le Capteur de proximité", "L'Accéléromètre", "Le Micro", "La Caméra", "Le Capteur d'empreinte"],
        correctIndices: [2],
        explanation: "L'accéléromètre détecte les secousses rythmées de la marche pour compter les pas."
    },
    {
        id: 121,
        phase: 1,
        text: "Quelle entreprise a racheté Android Inc. en 2005 ?",
        code: null,
        options: ["Apple", "Microsoft", "Google", "Samsung", "Nokia", "Facebook"],
        correctIndices: [2],
        explanation: "Google a racheté Android pour développer son propre OS mobile ouvert."
    },
    {
        id: 122,
        phase: 1,
        text: "Quelle est la définition d'un 'System on Chip' (SoC) ?",
        code: null,
        options: ["Un logiciel de dessin.", "Un circuit intégré unique regroupant processeur, mémoire, graphique et modem.", "Une application système.", "Un type de batterie externe.", "Un écran flexible.", "Un câble de chargement."],
        correctIndices: [1],
        explanation: "Le SoC est le 'cerveau' tout-en-un du smartphone."
    },
    {
        id: 123,
        phase: 1,
        text: "Quel système d'exploitation mobile, basé sur Linux, est aujourd'hui le plus utilisé au monde ?",
        code: null,
        options: ["iOS", "Windows Phone", "Android", "Symbian", "BlackBerry OS", "Tizen"],
        correctIndices: [2],
        explanation: "Android détient environ 70-73% de parts de marché mondial."
    },
    {
        id: 124,
        phase: 1,
        text: "Quelle innovation réseau permet une latence extrêmement faible, idéale pour les voitures autonomes ?",
        code: null,
        options: ["3G", "4G", "5G", "Wi-Fi 4", "Bluetooth 2.0", "NFC"],
        correctIndices: [2],
        explanation: "La 5G offre des débits élevés et surtout une latence quasi-nulle critique pour les objets connectés et véhicules."
    },
    {
        id: 125,
        phase: 1,
        text: "Quel composant gère la sécurité biométrique et le stockage des mots de passe dans le SoC ?",
        code: null,
        options: ["Le DSP", "Le Secure Enclave / Security Module", "Le GPU", "La RAM", "L'écran", "Le port USB"],
        correctIndices: [1],
        explanation: "Une zone sécurisée dédiée (Secure Enclave) isole les données sensibles du reste du système."
    },

    // --- PHASE 2 ADDITIONAL (Goal: Reach ~20) ---

    {
        id: 213,
        phase: 2,
        text: "Quel est le format de fichier recommandé par Google pour la publication sur le Play Store aujourd'hui (plus optimisé que l'APK) ?",
        code: null,
        options: [
            "EXE",
            "AAB (Android App Bundle)",
            "JAR",
            "DMG",
            "ZIP",
            "ISO"
        ],
        correctIndices: [1],
        explanation: "L'AAB permet au Play Store de générer des APKs sur-mesure pour chaque appareil utilisateur, réduisant le poids du téléchargement."
    },
    {
        id: 214,
        phase: 2,
        text: "Quelle couche d'Android permet à l'OS de communiquer avec le matériel spécifique (écran, audio) sans connaître les détails du fabricant ?",
        code: null,
        options: [
            "Kernel",
            "HAL (Hardware Abstraction Layer)",
            "Framework",
            "App Runtime",
            "System Server",
            "Zygote"
        ],
        correctIndices: [1],
        explanation: "La HAL fournit une interface standard que le Framework appelle, rendant Android agnostique du matériel sous-jacent."
    },
    {
        id: 215,
        phase: 2,
        text: "Quel outil de compilation convertit le bytecode Java (.class) en bytecode Android (.dex) ?",
        code: null,
        options: [
            "javac",
            "D8 / R8 (anciennement dx)",
            "gcc",
            "make",
            "adb",
            "aapt"
        ],
        correctIndices: [1],
        explanation: "Le compilateur D8 (remplaçant dx) transforme les fichiers .class Java standards en format .dex lisible par DVM/ART."
    },
    {
        id: 216,
        phase: 2,
        text: "Quelle version d'Android a introduit le système de permissions dynamiques (demande à l'exécution) ?",
        code: null,
        options: [
            "Android 4.4 (KitKat)",
            "Android 6.0 (Marshmallow)",
            "Android 2.3 (Gingerbread)",
            "Android 8.0 (Oreo)",
            "Android 10",
            "Android 1.0"
        ],
        correctIndices: [1],
        explanation: "Avant Marshmallow (6.0), toutes les permissions étaient acceptées à l'installation. Depuis, l'utilisateur doit valider les accès sensibles au moment de l'usage."
    },
    {
        id: 217,
        phase: 2,
        text: "Quel est le rôle du fichier 'build.gradle' (Module: app) ?",
        code: null,
        options: [
            "Contenir le code Java.",
            "Définir les dépendances (librairies), la version du SDK et les règles de compilation du module.",
            "Dessiner les icônes.",
            "Gérer la base de données.",
            "Configurer l'émulateur.",
            "Lister les contacts."
        ],
        correctIndices: [1],
        explanation: "C'est le script de configuration principal pour Gradle, indiquant quelles bibliothèques inclure et quelle version d'Android cibler."
    },
    {
        id: 218,
        phase: 2,
        text: "Quel outil permet d'optimiser l'alignement des données dans l'APK final pour réduire la consommation RAM ?",
        code: null,
        options: [
            "zipalign",
            "signer",
            "compiler",
            "debugger",
            "logcat",
            "lint"
        ],
        correctIndices: [0],
        explanation: "zipalign est un outil crucial de l'étape de build qui aligne les données non compressées sur des frontières de 4 octets."
    },
    {
        id: 219,
        phase: 2,
        text: "Que signifie NDK dans le développement Android ?",
        code: null,
        options: [
            "New Development Kit",
            "Native Development Kit",
            "Network Data Kit",
            "Node Development Kit",
            "Null Device Kernel",
            "Next Droid Kit"
        ],
        correctIndices: [1],
        explanation: "Le NDK permet de développer des parties de l'application en code natif (C/C++) pour la performance."
    },
    {
        id: 220,
        phase: 2,
        text: "Lequel de ces systèmes n'est PAS un concurrent direct ou historique d'Android ?",
        code: null,
        options: [
            "iOS",
            "BlackBerry OS",
            "Windows Mobile",
            "Photoshop",
            "Symbian",
            "KaiOS"
        ],
        correctIndices: [3],
        explanation: "Photoshop est un logiciel de retouche photo, pas un OS mobile."
    },

    // --- PHASE 3 ADDITIONAL (Goal: Add ~10-15 here, continue in next batch) ---

    {
        id: 316,
        phase: 3,
        text: "Analysez le code XML. Quelle sera l'orientation des éléments ?",
        code: `<LinearLayout 
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="horizontal">
    ...
</LinearLayout>`,
        options: [
            "Verticale (haut en bas)",
            "Horizontale (gauche à droite)",
            "Diagonale",
            "Circulaire",
            "Aléatoire",
            "Superposée"
        ],
        correctIndices: [1],
        explanation: "L'attribut android:orientation='horizontal' dispose les vues enfants les unes à côté des autres."
    },
    {
        id: 317,
        phase: 3,
        text: "Quelle méthode permet de récupérer le texte saisi par l'utilisateur dans un EditText ?",
        code: null,
        options: [
            "editText.getString()",
            "editText.getText().toString()",
            "editText.content()",
            "editText.val()",
            "editText.read()",
            "editText.fetch()"
        ],
        correctIndices: [1],
        explanation: "getText() retourne un objet Editable, il faut appeler toString() pour obtenir la chaîne de caractères String."
    },
    {
        id: 318,
        phase: 3,
        text: "Quel dossier ressource est spécifiquement optimisé pour stocker les icônes de lancement (launcher icons) ?",
        code: null,
        options: [
            "res/drawable",
            "res/mipmap",
            "res/values",
            "res/layout",
            "res/raw",
            "res/anim"
        ],
        correctIndices: [1],
        explanation: "Le dossier mipmap est conçu pour les icônes d'application car il gère mieux les mises à l'échelle par le launcher système."
    },
    {
        id: 319,
        phase: 3,
        text: "Que fait le code suivant ?",
        code: `Toast.makeText(this, "Erreur", Toast.LENGTH_SHORT).show();`,
        options: [
            "Il ferme l'application.",
            "Il envoie un rapport d'erreur.",
            "Il affiche un petit message éphémère en bas de l'écran.",
            "Il écrit 'Erreur' dans les logs.",
            "Il ouvre une fenêtre de dialogue bloquante.",
            "Il fait vibrer le téléphone."
        ],
        correctIndices: [2],
        explanation: "Un Toast est une petite notification visuelle temporaire qui ne bloque pas l'interaction utilisateur."
    },
    {
        id: 320,
        phase: 3,
        text: "Dans un RelativeLayout, quel attribut permet de placer une vue EN DESSOUS d'une autre ?",
        code: null,
        options: [
            "android:layout_toRightOf",
            "android:layout_below",
            "android:layout_above",
            "android:layout_alignParentBottom",
            "android:orientation='vertical'",
            "android:gravity='bottom'"
        ],
        correctIndices: [1],
        explanation: "layout_below prend l'ID d'une autre vue pour positionner la vue actuelle juste sous celle-ci."
    },
    {
        id: 321,
        phase: 3,
        text: "Quel attribut XML permet d'ajouter une marge interne (espace entre la bordure de la vue et son contenu) ?",
        code: null,
        options: [
            "android:layout_margin",
            "android:padding",
            "android:spacing",
            "android:gap",
            "android:border",
            "android:elevation"
        ],
        correctIndices: [1],
        explanation: "Padding est l'espace INTÉRIEUR (entre le bord et le texte/contenu). Margin est l'espace EXTÉRIEUR (autour de la vue)."
    },
    {
        id: 322,
        phase: 3,
        text: "Quelle méthode permet de fermer l'activité courante et de revenir à la précédente ?",
        code: null,
        options: [
            "close()",
            "exit()",
            "finish()",
            "stop()",
            "kill()",
            "return()"
        ],
        correctIndices: [2],
        explanation: "finish() termine l'activité actuelle et la retire de la pile, affichant ainsi l'activité qui était dessous."
    },
    {
        id: 323,
        phase: 3,
        text: "À quoi sert la méthode 'Log.d(TAG, message)' ?",
        code: null,
        options: [
            "Afficher un message à l'utilisateur.",
            "Écrire un message de débogage dans la console Logcat.",
            "Sauvegarder des données dans un fichier.",
            "Envoyer une erreur au serveur.",
            "Dessiner à l'écran.",
            "Rien, c'est obsolète."
        ],
        correctIndices: [1],
        explanation: "Log.d (Debug) écrit des messages techniques visibles uniquement par le développeur dans l'outil Logcat."
    },
    {
        id: 324,
        phase: 3,
        text: "Quel est l'ID de ressource correct pour accéder à une image nommée 'logo.png' placée dans 'res/drawable' ?",
        code: null,
        options: [
            "R.image.logo",
            "R.drawable.logo",
            "R.id.logo",
            "R.layout.logo",
            "R.file.logo",
            "@drawable/logo"
        ],
        correctIndices: [1],
        explanation: "En Java, les ressources sont accessibles via la classe R. Les images dans drawable sont sous R.drawable.nom_sans_extension."
    },
    {
        id: 325,
        phase: 3,
        text: "Comment définir une couleur personnalisée #FF0000 (Rouge) dans 'colors.xml' ?",
        code: null,
        options: [
            "<color name='myRed'>#FF0000</color>",
            "<string name='red'>#FF0000</string>",
            "<int name='red'>#FF0000</int>",
            "<hex>#FF0000</hex>",
            "<style name='red'>#FF0000</style>",
            "<var name='red'>#FF0000</var>"
        ],
        correctIndices: [0],
        explanation: "La balise <color> est utilisée dans colors.xml pour définir des codes hexadécimaux réutilisables."
    },
    // =========================================================================
    // BATCH 5: DEEP DIVE PHASE 3 & EXPANDING PHASE 4
    // =========================================================================

    // --- PHASE 3: DEVELOPMENT & UI (Goal: Reach ~50) ---

    {
        id: 326,
        phase: 3,
        text: "Quelle méthode permet de passer des données simples (String, int) à une nouvelle activité via un Intent ?",
        code: `Intent i = new Intent(this, TargetActivity.class);
i.____("cle", "valeur");`,
        options: [
            "setData",
            "putExtra",
            "addValue",
            "push",
            "send",
            "attach"
        ],
        correctIndices: [1],
        explanation: "putExtra() est utilisé pour ajouter des données supplémentaires (extras) à l'intent sous forme clé-valeur."
    },
    {
        id: 327,
        phase: 3,
        text: "Dans le cycle de vie, si l'utilisateur appuie sur le bouton 'Home', quelles méthodes sont appelées successivement ?",
        code: null,
        options: [
            "onPause() -> onStop()",
            "onStop() -> onDestroy()",
            "onPause() -> onResume()",
            "onDestroy() uniquement",
            "onSaveInstanceState() uniquement",
            "onRestart() -> onStart()"
        ],
        correctIndices: [0],
        explanation: "L'activité passe au second plan (Pause) puis n'est plus visible du tout (Stop), mais n'est pas forcément détruite."
    },
    {
        id: 328,
        phase: 3,
        text: "Quel attribut XML permet de changer la couleur de fond d'une vue ?",
        code: null,
        options: [
            "android:src",
            "android:textColor",
            "android:background",
            "android:color",
            "android:tint",
            "android:fill"
        ],
        correctIndices: [2],
        explanation: "android:background accepte une couleur (#RGB) ou une référence à un drawable/image."
    },
    {
        id: 329,
        phase: 3,
        text: "Quelle est la classe parente commune de toutes les Activity modernes (avec ActionBar/ToolBar) ?",
        code: null,
        options: [
            "Activity",
            "FragmentActivity",
            "AppCompatActivity",
            "Context",
            "Application",
            "Service"
        ],
        correctIndices: [2],
        explanation: "AppCompatActivity (de la bibliothèque AndroidX) est standard pour assurer la rétrocompatibilité des fonctionnalités UI."
    },
    {
        id: 330,
        phase: 3,
        text: "Que se passe-t-il si vous lancez une opération réseau (téléchargement) directement dans le Thread Principal (UI Thread) ?",
        code: null,
        options: [
            "Ça fonctionne parfaitement.",
            "L'application lève une NetworkOnMainThreadException et plante.",
            "L'opération est automatiquement déplacée en arrière-plan.",
            "Le réseau est plus lent.",
            "L'écran clignote.",
            "Le téléphone redémarre."
        ],
        correctIndices: [1],
        explanation: "Android interdit les opérations bloquantes (réseau, disque lourd) sur le thread principal pour éviter de figer l'interface (ANR)."
    },
    {
        id: 331,
        phase: 3,
        text: "Comment récupérer la valeur d'une ressource String dans le code Java ?",
        code: null,
        options: [
            "R.string.mon_texte",
            "getString(R.string.mon_texte)",
            "getResources().getText('mon_texte')",
            "Strings.get('mon_texte')",
            "this.text.mon_texte",
            "xml.read(R.string.mon_texte)"
        ],
        correctIndices: [1],
        explanation: "getString(ID) est la méthode contextuelle qui va chercher la traduction correcte du texte selon la langue du système."
    },
    {
        id: 332,
        phase: 3,
        text: "Quel est l'avantage principal d'un ConstraintLayout par rapport à des LinearLayouts imbriqués ?",
        code: null,
        options: [
            "Il est plus simple à écrire manuellement.",
            "Il permet de créer des interfaces complexes 'plates' (sans imbrication profonde), améliorant les performances.",
            "Il n'utilise pas de XML.",
            "Il est compatible uniquement avec Android 10.",
            "Il gère mieux le texte.",
            "Il n'y a aucun avantage."
        ],
        correctIndices: [1],
        explanation: "Réduire la profondeur de la hiérarchie des vues (View Hierarchy) accélère le rendu graphique. ConstraintLayout permet cela."
    },
    {
        id: 333,
        phase: 3,
        text: "Quel type de Listener permet de détecter un appui long sur une vue ?",
        code: null,
        options: [
            "OnClickListener",
            "OnTouchListener",
            "OnLongClickListener",
            "OnHoverListener",
            "OnDragListener",
            "OnFocusChangeListener"
        ],
        correctIndices: [2],
        explanation: "OnLongClickListener se déclenche après une pression maintenue (environ 500ms)."
    },
    {
        id: 334,
        phase: 3,
        text: "Analysez ce code. Que fait 'finish()' ici ?",
        code: `public void onClick(View v) {
    Intent intent = new Intent(this, HomeActivity.class);
    startActivity(intent);
    finish(); 
}`,
        options: [
            "Il ferme l'application entière.",
            "Il détruit l'activité actuelle pour qu'on ne puisse pas y revenir avec le bouton Retour.",
            "Il termine l'intent.",
            "Il valide un formulaire.",
            "Il arrête le processeur.",
            "Il sauvegarde les données."
        ],
        correctIndices: [1],
        explanation: "finish() détruit l'activité appelante. L'utilisateur arrivera sur HomeActivity et s'il fait 'Retour', il sortira de l'app ou ira à l'écran précédent Home, mais pas à l'actuel."
    },
    {
        id: 335,
        phase: 3,
        text: "Quel composant UI permet à l'utilisateur de saisir du texte ?",
        code: null,
        options: [
            "TextView",
            "EditText",
            "Button",
            "ImageView",
            "ScrollView",
            "Spinner"
        ],
        correctIndices: [1],
        explanation: "EditText est une sous-classe de TextView qui est éditable et gère le clavier virtuel."
    },
    {
        id: 336,
        phase: 3,
        text: "Dans le fichier strings.xml, comment déclare-t-on une chaîne de caractères ?",
        code: null,
        options: [
            "<text id='hello'>Bonjour</text>",
            "<string name='hello'>Bonjour</string>",
            "<value name='hello'>Bonjour</value>",
            "<char key='hello'>Bonjour</char>",
            "<str>Bonjour</str>",
            "<content>Bonjour</content>"
        ],
        correctIndices: [1],
        explanation: "La balise <string> avec un attribut name est le standard XML Android."
    },
    {
        id: 337,
        phase: 3,
        text: "Quel événement cycle de vie est idéal pour libérer des ressources lourdes (caméra, GPS) quand l'utilisateur ne voit plus l'app ?",
        code: null,
        options: [
            "onCreate",
            "onStart",
            "onStop",
            "onResume",
            "onRestart",
            "onContentChanged"
        ],
        correctIndices: [2],
        explanation: "onStop() signifie que l'activité n'est plus visible. C'est le bon moment pour arrêter les capteurs pour économiser la batterie."
    },
    {
        id: 338,
        phase: 3,
        text: "Quelle méthode permet de récupérer l'Intent qui a démarré l'activité actuelle (pour lire les données passées) ?",
        code: null,
        options: [
            "new Intent()",
            "getIntent()",
            "fetchIntent()",
            "readIntent()",
            "this.intent",
            "Context.intent()"
        ],
        correctIndices: [1],
        explanation: "getIntent() retourne l'objet Intent qui a servi à lancer l'Activity, permettant d'accéder aux Extras (paramètres)."
    },
    {
        id: 339,
        phase: 3,
        text: "À quoi sert le dossier 'res/layout-land' ?",
        code: null,
        options: [
            "À stocker les images de paysages.",
            "À définir une mise en page spécifique pour le mode Paysage (Landscape).",
            "C'est une erreur, ce dossier n'existe pas.",
            "À stocker les layouts pour les tablettes uniquement.",
            "À définir la langue par défaut.",
            "À gérer les thèmes sombres."
        ],
        correctIndices: [1],
        explanation: "Le suffixe -land indique au système d'utiliser ces fichiers XML lorsque le téléphone est tourné à l'horizontale."
    },
    {
        id: 340,
        phase: 3,
        text: "Quelle méthode permet d'afficher un layout XML dans une Activity ?",
        code: null,
        options: [
            "setView()",
            "drawLayout()",
            "setContentView()",
            "inflate()",
            "show()",
            "render()"
        ],
        correctIndices: [2],
        explanation: "setContentView(R.layout.nom) est la méthode standard appelée dans onCreate."
    },

    // --- PHASE 4 ADDITIONAL (Goal: Reach ~35) ---

    {
        id: 413,
        phase: 4,
        text: "Comment supprimer une donnée spécifique dans SharedPreferences ?",
        code: `editor.____("key");
editor.apply();`,
        options: [
            "delete",
            "remove",
            "clear",
            "erase",
            "drop",
            "pop"
        ],
        correctIndices: [1],
        explanation: "editor.remove('clé') supprime une entrée spécifique. editor.clear() supprime tout."
    },
    {
        id: 414,
        phase: 4,
        text: "Quelle requête SQL permet de créer une table 'notes' avec un id et un contenu ?",
        code: null,
        options: [
            "NEW TABLE notes (id INT, content TEXT)",
            "CREATE TABLE notes (id INTEGER PRIMARY KEY, content TEXT)",
            "ADD TABLE notes (id KEY, content STRING)",
            "MAKE TABLE notes",
            "INSERT TABLE notes",
            "UPDATE TABLE notes"
        ],
        correctIndices: [1],
        explanation: "La syntaxe correcte SQLite est CREATE TABLE nom (colonnes types)."
    },
    {
        id: 415,
        phase: 4,
        text: "Quelle méthode de SQLiteOpenHelper est appelée si la version de la base de données passe de 1 à 2 ?",
        code: null,
        options: [
            "onCreate",
            "onUpgrade",
            "onDowngrade",
            "onSave",
            "onChange",
            "onVersion"
        ],
        correctIndices: [1],
        explanation: "onUpgrade gère la migration (ex: ajout de table, modif de colonnes) quand le numéro de version change."
    },
    {
        id: 416,
        phase: 4,
        text: "Quel est le risque principal d'utiliser le mode MODE_WORLD_READABLE (désormais déprécié) pour un fichier ?",
        code: null,
        options: [
            "Le fichier est trop gros.",
            "N'importe quelle autre application malveillante peut lire vos données.",
            "Le fichier s'efface tout seul.",
            "L'application devient lente.",
            "Le fichier est crypté.",
            "Aucun risque."
        ],
        correctIndices: [1],
        explanation: "Cela rendait le fichier public à tout le système, créant une faille de sécurité majeure."
    },
    {
        id: 417,
        phase: 4,
        text: "Pour lire un fichier texte brut inclus dans l'application (non modifiable), quel dossier utilise-t-on ?",
        code: null,
        options: [
            "res/values",
            "res/raw",
            "assets",
            "res/layout",
            "res/xml",
            "res/bin"
        ],
        correctIndices: [1], // Also assets, but raw is in the PDF context usually
        explanation: "Le dossier res/raw est utilisé pour les fichiers statiques (son, texte) accessibles via R.raw.nom."
    },
    {
        id: 418,
        phase: 4,
        text: "Que retourne la méthode 'db.insert()' en cas de succès ?",
        code: null,
        options: [
            "True",
            "L'ID de la nouvelle ligne insérée (long)",
            "Le nom de la table",
            "0",
            "Void (rien)",
            "Un curseur"
        ],
        correctIndices: [1],
        explanation: "Elle retourne le Row ID de la ligne insérée, ou -1 en cas d'erreur."
    },
    {
        id: 419,
        phase: 4,
        text: "Quelle méthode permet de fermer le curseur après utilisation pour libérer la mémoire ?",
        code: null,
        options: [
            "cursor.end()",
            "cursor.stop()",
            "cursor.close()",
            "cursor.finish()",
            "cursor.destroy()",
            "cursor.exit()"
        ],
        correctIndices: [2],
        explanation: "Il est impératif d'appeler close() sur un curseur (et une DB) quand on a fini pour éviter les fuites de mémoire."
    },
    {
        id: 420,
        phase: 4,
        text: "Dans une architecture propre, où devrait se trouver le code de gestion de la base de données ?",
        code: null,
        options: [
            "Dans l'Activity directement.",
            "Dans une classe séparée (ex: DatabaseManager / Repository).",
            "Dans le fichier layout XML.",
            "Dans le Manifest.",
            "Dans le dossier res/values.",
            "Dans la classe R."
        ],
        correctIndices: [1],
        explanation: "Séparer la logique de données (DAO/Repository) de l'interface (Activity) est une bonne pratique (MVC/MVVM)."
    },
    // =========================================================================
    // BATCH 6: FINALIZING PHASE 3 & 4 (COMPLETING THE SET)
    // =========================================================================

    // --- PHASE 3 FINAL PUSH (Goal: Hit ~50) ---

    {
        id: 341,
        phase: 3,
        text: "Quelle méthode permet de sauvegarder l'état de l'activité (ex: texte saisi) avant qu'elle ne soit détruite par une rotation d'écran ?",
        code: null,
        options: [
            "onStop()",
            "onSaveInstanceState()",
            "onPause()",
            "onPersist()",
            "onBackup()",
            "onRotate()"
        ],
        correctIndices: [1],
        explanation: "onSaveInstanceState(Bundle) est appelée avant la destruction temporaire pour sauvegarder des paires clé-valeur restaurables dans onCreate."
    },
    {
        id: 342,
        phase: 3,
        text: "Comment rendre un bouton invisible mais qui occupe toujours sa place dans le layout ?",
        code: `button.setVisibility(View._____);`,
        options: [
            "GONE",
            "INVISIBLE",
            "VISIBLE",
            "HIDDEN",
            "TRANSPARENT",
            "OPAQUE"
        ],
        correctIndices: [1],
        explanation: "INVISIBLE masque la vue mais garde son espace. GONE masque la vue et libère l'espace (les autres vues bougent)."
    },
    {
        id: 343,
        phase: 3,
        text: "Quelle est l'unité recommandée pour définir la taille du texte (textSize) en XML ?",
        code: null,
        options: [
            "dp (Density-independent Pixels)",
            "px (Pixels)",
            "sp (Scale-independent Pixels)",
            "pt (Points)",
            "mm (Millimeters)",
            "in (Inches)"
        ],
        correctIndices: [2],
        explanation: "sp est comme dp mais respecte en plus les préférences de taille de police de l'utilisateur (accessibilité)."
    },
    {
        id: 344,
        phase: 3,
        text: "Analysez ce code. Que se passe-t-il ?",
        code: `Intent intent = new Intent(Intent.ACTION_DIAL);
intent.setData(Uri.parse("tel:123456"));
startActivity(intent);`,
        options: [
            "L'appel est lancé immédiatement sans confirmation.",
            "Le numéroteur (Dialer) s'ouvre avec le numéro 123456 pré-rempli.",
            "Le système demande la permission d'appel.",
            "L'application plante.",
            "Un SMS est envoyé.",
            "Le contact 123456 est ajouté."
        ],
        correctIndices: [1],
        explanation: "ACTION_DIAL ouvre le clavier téléphonique. Pour appeler directement (sans clic utilisateur), il faudrait ACTION_CALL (et une permission)."
    },
    {
        id: 345,
        phase: 3,
        text: "Quel fichier XML définit les couleurs principales de l'application (colorPrimary, colorAccent) ?",
        code: null,
        options: [
            "strings.xml",
            "styles.xml ou themes.xml",
            "colors.xml",
            "manifest.xml",
            "layout.xml",
            "dimens.xml"
        ],
        correctIndices: [1], // colors.xml defines the values, but styles/themes defines the *roles* (colorPrimary)
        explanation: "C'est dans themes.xml (ou styles.xml) qu'on associe les attributs de thème (colorPrimary) aux couleurs définies."
    },
    {
        id: 346,
        phase: 3,
        text: "Que signifie l'attribut XML 'android:id=\"@+id/monTexte\"' ?",
        code: null,
        options: [
            "Il référence un ID existant.",
            "Il crée (déclare) un nouvel ID de ressource nommé 'monTexte'.",
            "Il supprime un ID.",
            "Il lie le texte à une base de données.",
            "C'est une erreur de syntaxe.",
            "Il définit la valeur du texte."
        ],
        correctIndices: [1],
        explanation: "Le symbole '+' indique au compilateur de créer une nouvelle entrée dans la classe R.id si elle n'existe pas."
    },
    {
        id: 347,
        phase: 3,
        text: "Quel est le cycle de vie correct lors d'une rotation d'écran ?",
        code: null,
        options: [
            "onPause -> onResume",
            "onStop -> onStart",
            "onPause -> onStop -> onDestroy -> onCreate -> onStart -> onResume",
            "Rien ne se passe, l'activité pivote juste.",
            "onRotate() est appelé.",
            "onRestart -> onStart"
        ],
        correctIndices: [2],
        explanation: "Par défaut, une rotation détruit complètement l'activité et la recrée pour charger les ressources (layouts) adaptés à la nouvelle orientation."
    },
    {
        id: 348,
        phase: 3,
        text: "Quelle méthode permet d'exécuter un bloc de code sur le Thread UI depuis un Thread secondaire ?",
        code: null,
        options: [
            "runOnUi()",
            "runOnUiThread(Runnable)",
            "startUi()",
            "execute()",
            "main()",
            "sync()"
        ],
        correctIndices: [1],
        explanation: "runOnUiThread() permet de poster une action sur la file d'attente du thread principal, seule façon de modifier l'interface depuis un background thread."
    },
    {
        id: 349,
        phase: 3,
        text: "Quel Layout permet de superposer des éléments (ex: mettre un texte sur une image) ?",
        code: null,
        options: [
            "LinearLayout",
            "FrameLayout",
            "TableLayout",
            "FlowLayout",
            "GridBagLayout",
            "VerticalLayout"
        ],
        correctIndices: [1],
        explanation: "FrameLayout empile ses enfants les uns sur les autres (z-order), le dernier ajouté étant au-dessus."
    },
    {
        id: 350,
        phase: 3,
        text: "Quelle méthode est appelée lorsque l'utilisateur revient sur l'activité après avoir utilisé une autre application ?",
        code: null,
        options: [
            "onCreate",
            "onNewIntent",
            "onRestart",
            "onBack",
            "onRestore",
            "onLoad"
        ],
        correctIndices: [2],
        explanation: "onRestart() est appelé après onStop() et avant onStart() lorsque l'activité redevient visible."
    },

    // --- PHASE 4 FINAL PUSH (Goal: Hit ~35) ---

    {
        id: 421,
        phase: 4,
        text: "Dans le code 'getSharedPreferences(\"MaPrefs\", MODE_PRIVATE)', que signifie 'MaPrefs' ?",
        code: null,
        options: [
            "Le nom de la clé.",
            "Le nom du fichier XML qui sera créé.",
            "La valeur par défaut.",
            "Le mot de passe.",
            "Le nom de l'activité.",
            "Le dossier de stockage."
        ],
        correctIndices: [1],
        explanation: "C'est le nom du fichier physique (MaPrefs.xml) qui sera stocké dans le dossier shared_prefs."
    },
    {
        id: 422,
        phase: 4,
        text: "Quelle méthode SQL est équivalente à 'db.delete(\"users\", null, null)' ?",
        code: null,
        options: [
            "DROP TABLE users",
            "DELETE FROM users",
            "TRUNCATE users",
            "REMOVE users",
            "SELECT * FROM users",
            "UPDATE users SET null"
        ],
        correctIndices: [1],
        explanation: "Passer null à la clause WHERE de delete() supprime toutes les lignes de la table, comme un DELETE FROM sans condition."
    },
    {
        id: 423,
        phase: 4,
        text: "Quelle instruction permet de récupérer un 'FileInputStream' pour lire un fichier interne ?",
        code: null,
        options: [
            "new File()",
            "openFileInput(\"nom_fichier\")",
            "getAssets().open()",
            "new Reader()",
            "System.in",
            "files.get()"
        ],
        correctIndices: [1],
        explanation: "openFileInput() est la méthode de contexte pour ouvrir un flux de lecture sur un fichier privé de l'app."
    },
    {
        id: 424,
        phase: 4,
        text: "Quel est le type de retour de la méthode 'db.update()' ?",
        code: null,
        options: [
            "void",
            "boolean",
            "int (nombre de lignes affectées)",
            "Cursor",
            "String",
            "long"
        ],
        correctIndices: [2],
        explanation: "Elle retourne un entier indiquant combien de lignes ont été modifiées. 0 signifie qu'aucune ligne ne correspondait au critère."
    },
    {
        id: 425,
        phase: 4,
        text: "Pourquoi faut-il fermer une base de données (db.close()) ?",
        code: null,
        options: [
            "Pour valider les transactions.",
            "Pour libérer les ressources système (mémoire, descripteurs de fichiers).",
            "Pour supprimer les données.",
            "Pour crypter le fichier.",
            "C'est optionnel, le Garbage Collector le fait.",
            "Pour accélérer le téléphone."
        ],
        correctIndices: [1],
        explanation: "Garder des connexions ouvertes inutilement peut provoquer des fuites de mémoire et empêcher d'autres processus d'accéder au fichier."
    },
    {
        id: 426,
        phase: 4,
        text: "Quelle méthode permet de vérifier si une colonne est nulle dans un Curseur ?",
        code: null,
        options: [
            "cursor.isNull(index)",
            "cursor.isEmpty()",
            "cursor.getString() == null",
            "cursor.hasData()",
            "cursor.checkNull()",
            "cursor.isVoid()"
        ],
        correctIndices: [0],
        explanation: "isNull(columnIndex) est la méthode sûre pour vérifier l'absence de valeur avant de tenter de lire."
    },
    {
        id: 427,
        phase: 4,
        text: "Quelle est la particularité du dossier 'cache' (getCacheDir()) ?",
        code: null,
        options: [
            "Les fichiers y sont cryptés.",
            "Le système peut effacer ces fichiers automatiquement si l'espace manque.",
            "Il est accessible par toutes les applications.",
            "Il est sur la carte SD uniquement.",
            "Il est limité à 1 Mo.",
            "Il ne peut contenir que des images."
        ],
        correctIndices: [1],
        explanation: "C'est un stockage temporaire. L'application doit pouvoir recréer ces données si le système les supprime."
    },
    {
        id: 428,
        phase: 4,
        text: "Quel mot-clé SQL est utilisé pour s'assurer qu'une colonne (comme l'ID) s'incrémente toute seule ?",
        code: null,
        options: [
            "AUTO_FILL",
            "AUTOINCREMENT",
            "SERIAL",
            "SEQUENCE",
            "ADD_ONE",
            "NEXT_VAL"
        ],
        correctIndices: [1],
        explanation: "En SQLite : INTEGER PRIMARY KEY AUTOINCREMENT."
    },
    {
        id: 429,
        phase: 4,
        text: "Que contient l'objet 'Bundle' passé à la méthode onCreate() ?",
        code: `protected void onCreate(Bundle savedInstanceState) { ... }`,
        options: [
            "Les données de l'Intent.",
            "L'état sauvegardé de l'activité (si elle a été recréée), sinon null.",
            "Les préférences utilisateur.",
            "La base de données.",
            "Les permissions.",
            "Le layout XML."
        ],
        correctIndices: [1],
        explanation: "savedInstanceState permet de restaurer l'interface (ex: position du scroll, texte) après une rotation ou une interruption."
    },
    {
        id: 430,
        phase: 4,
        text: "Quelle est la limite principale des fichiers SharedPreferences ?",
        code: null,
        options: [
            "Ils ne sont pas sécurisés.",
            "Ils ne sont pas adaptés pour stocker de gros volumes de données structurées.",
            "Ils s'effacent au redémarrage.",
            "Ils ne supportent pas les Strings.",
            "Ils sont lents à lire.",
            "Ils nécessitent Internet."
        ],
        correctIndices: [1],
        explanation: "C'est un fichier XML chargé entièrement en mémoire. Trop de données ralentiraient le démarrage de l'app."
    },
    {
        id: 431,
        phase: 4,
        text: "Pour stocker une image prise par l'utilisateur, quelle option est recommandée ?",
        code: null,
        options: [
            "SharedPreferences (en Base64)",
            "Base de données SQLite (BLOB)",
            "Système de fichiers (File Storage) avec référence dans la DB.",
            "Fichier XML",
            "Logs",
            "RAM"
        ],
        correctIndices: [2],
        explanation: "Stocker de gros binaires (images) en base de données ou XML est inefficace. On stocke le fichier sur disque et son chemin (path) en base."
    },
    {
        id: 432,
        phase: 4,
        text: "Quelle méthode permet de savoir combien de résultats contient un Cursor ?",
        code: null,
        options: [
            "cursor.length()",
            "cursor.size()",
            "cursor.getCount()",
            "cursor.rows()",
            "cursor.total()",
            "cursor.hasNext()"
        ],
        correctIndices: [2],
        explanation: "getCount() retourne le nombre total de lignes dans le jeu de résultats."
    }
]; // END OF QUESTION BANK

/* =========================================
   2. CONFIGURATION & STATE
   ========================================= */
const CHUNK_SIZE = 10; // Number of questions per page
const TOTAL_TIME_MS = 90 * 60 * 1000; // 1h 30min in ms

let state = {
    activeSession: false,
    currentPhase: 1,
    currentChunkStart: 0,
    startTime: null,
    endTime: null, // Calculated end time
    answers: {}, // map questionId -> array of selected indices
    isOvertime: false,
    validatedChunks: [] // Store "phase-chunkStart" strings to know what's locked
};

// DOM Elements
const views = {
    welcome: document.getElementById('view-welcome'),
    quiz: document.getElementById('view-quiz'),
    dashboard: document.getElementById('view-dashboard')
};

const ui = {
    timer: document.getElementById('timer-display'),
    progressBar: document.getElementById('progress-bar'),
    container: document.getElementById('questions-container'),
    phaseTitle: document.getElementById('phase-title'),
    chunkIndicator: document.getElementById('chunk-indicator'),
    btnNext: document.getElementById('btn-next-chunk'),
    btnValidate: document.getElementById('btn-validate-chunk'),
    resumeAlert: document.getElementById('resume-alert')
};

/* =========================================
   3. INITIALIZATION & STORAGE
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    checkActiveSession();
    updateHistoryUI();
});

function checkActiveSession() {
    const saved = localStorage.getItem('androidQuizSession');
    if (saved) {
        state = JSON.parse(saved);
        // Recalculate end time based on elapsed time if needed, 
        // but for simplicity we keep the original target end time logic
        ui.resumeAlert.classList.remove('hidden');
        ui.resumeAlert.innerText = `⚠️ Session active retrouvée (Phase ${state.currentPhase}).`;
    }
}

function saveSession() {
    localStorage.setItem('androidQuizSession', JSON.stringify(state));
}

function clearSession() {
    localStorage.removeItem('androidQuizSession');
    state.activeSession = false;
}

function saveHistory(scoreData) {
    const history = JSON.parse(localStorage.getItem('androidQuizHistory') || '[]');
    const attempt = {
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
        score: scoreData.global,
        time: ui.timer.innerText
    };
    history.push(attempt);
    localStorage.setItem('androidQuizHistory', JSON.stringify(history));
    updateHistoryUI();
}

function updateHistoryUI() {
    const history = JSON.parse(localStorage.getItem('androidQuizHistory') || '[]');
    const container = document.getElementById('history-content');
    if (history.length === 0) {
        container.innerHTML = '<p class="text-gray-500 italic">Aucune tentative terminée.</p>';
        return;
    }
    container.innerHTML = history.reverse().map((h, i) => `
        <div class="border-b py-2 flex justify-between">
            <div>
                <span class="font-bold">Tentative #${history.length - i}</span>
                <span class="text-sm text-gray-500 block">${h.date}</span>
            </div>
            <div class="text-right">
                <span class="font-bold text-android-dark">${h.score}%</span>
                <span class="text-xs text-gray-500 block">${h.time}</span>
            </div>
        </div>
    `).join('');
}

function toggleHistory() {
    const modal = document.getElementById('modal-history');
    modal.classList.toggle('hidden');
}

/* =========================================
   4. QUIZ ENGINE
   ========================================= */

function startQuiz() {
    if (!state.activeSession) {
        // New Session
        state = {
            activeSession: true,
            currentPhase: 1,
            currentChunkStart: 0,
            startTime: Date.now(),
            endTime: Date.now() + TOTAL_TIME_MS,
            answers: {},
            isOvertime: false,
            validatedChunks: []
        };
    }
    
    switchView('quiz');
    startTimer();
    renderChunk();
}

function confirmRestart() {
    if(confirm("Êtes-vous sûr de vouloir recommencer ? La progression actuelle sera perdue.")) {
        clearSession();
        location.reload();
    }
}

function switchView(viewName) {
    Object.values(views).forEach(el => el.classList.add('hidden'));
    views[viewName].classList.remove('hidden');
}

/* --- Chunk Rendering --- */
function getQuestionsForPhase(phase) {
    return questionBank.filter(q => q.phase === phase);
}

function renderChunk() {
    const phaseQuestions = getQuestionsForPhase(state.currentPhase);
    const chunk = phaseQuestions.slice(state.currentChunkStart, state.currentChunkStart + CHUNK_SIZE);
    
    // UI Updates
    ui.phaseTitle.innerText = `Phase ${state.currentPhase} / 4`;
    ui.chunkIndicator.innerText = `Questions ${state.currentChunkStart + 1} - ${state.currentChunkStart + chunk.length}`;
    
    const progressPercent = ((state.currentPhase - 1) * 25) + ((state.currentChunkStart / Math.max(phaseQuestions.length, 1)) * 25);
    ui.progressBar.style.width = `${progressPercent}%`;

    ui.container.innerHTML = '';

    // Check if this chunk is already validated
    const chunkKey = `${state.currentPhase}-${state.currentChunkStart}`;
    const isValidated = state.validatedChunks.includes(chunkKey);

    chunk.forEach((q, index) => {
        const globalIndex = state.currentChunkStart + index;
        const savedAnswers = state.answers[q.id] || [];

        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-lg shadow-sm border border-gray-200";
        
        // Code Snippet logic
        let codeHtml = '';
        if (q.code) {
            codeHtml = `<pre class="code-block text-sm overflow-x-auto">${escapeHtml(q.code)}</pre>`;
        }

        // Options Logic
        const optionsHtml = q.options.map((opt, i) => {
            let classes = "option-card cursor-pointer p-4 rounded border border-gray-200 hover:bg-gray-50 transition relative";
            const isSelected = savedAnswers.includes(i);
            
            // Validation Styles
            if (isValidated) {
                if (q.correctIndices.includes(i)) classes += " correct"; // Green
                else if (isSelected && !q.correctIndices.includes(i)) classes += " wrong"; // Red
                else if (!isSelected) classes += " opacity-60";
            } else {
                if (isSelected) classes += " selected";
            }

            // Click handler attribute (disabled if validated)
            const onClickAttr = isValidated ? '' : `onclick="toggleOption(${q.id}, ${i})"`;

            return `
                <div class="${classes}" ${onClickAttr} id="opt-${q.id}-${i}">
                    <div class="flex items-start gap-3">
                        <div class="mt-1 w-5 h-5 border-2 rounded ${isSelected ? 'bg-android border-android' : 'border-gray-300'} flex items-center justify-center">
                            ${isSelected ? '<span class="text-white text-xs">✓</span>' : ''}
                        </div>
                        <span class="text-sm md:text-base">${escapeHtml(opt)}</span>
                    </div>
                </div>
            `;
        }).join('');

        // Explanation Block (Hidden until validated)
        const explanationHtml = isValidated ? `
            <div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 text-sm rounded animate-fade-in">
                <strong>Explication :</strong> ${q.explanation}
            </div>
        ` : '';

        card.innerHTML = `
            <div class="mb-4">
                <span class="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Q${q.id}</span>
                <h3 class="text-lg font-semibold mt-2 text-gray-800">${q.text}</h3>
            </div>
            ${codeHtml}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${optionsHtml}
            </div>
            ${explanationHtml}
        `;
        ui.container.appendChild(card);
    });

    // Button States
    if (isValidated) {
        ui.btnValidate.classList.add('hidden');
        ui.btnNext.classList.remove('hidden');
    } else {
        ui.btnValidate.classList.remove('hidden');
        ui.btnNext.classList.add('hidden');
    }

    saveSession();
}

function toggleOption(qId, optIndex) {
    if (!state.answers[qId]) state.answers[qId] = [];
    const arr = state.answers[qId];
    
    // Toggle logic (Check/Uncheck)
    if (arr.includes(optIndex)) {
        const idx = arr.indexOf(optIndex);
        arr.splice(idx, 1);
    } else {
        arr.push(optIndex);
    }
    
    state.answers[qId] = arr;
    renderChunk(); // Re-render to update classes
}

function validateCurrentChunk() {
    const chunkKey = `${state.currentPhase}-${state.currentChunkStart}`;
    if (!state.validatedChunks.includes(chunkKey)) {
        state.validatedChunks.push(chunkKey);
    }
    renderChunk();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextChunk() {
    const phaseQuestions = getQuestionsForPhase(state.currentPhase);
    
    // Are there more questions in this phase?
    if (state.currentChunkStart + CHUNK_SIZE < phaseQuestions.length) {
        state.currentChunkStart += CHUNK_SIZE;
    } else {
        // Move to next Phase
        if (state.currentPhase < 4) {
            state.currentPhase++;
            state.currentChunkStart = 0;
            alert(`Bravo ! Passage à la Phase ${state.currentPhase}.`);
        } else {
            finishExam();
            return;
        }
    }
    renderChunk();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================================
   5. SCORING & TIMER
   ========================================= */

function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        const now = Date.now();
        let diff = state.endTime - now;

        if (diff <= 0) {
            state.isOvertime = true;
            diff = Math.abs(diff); // Count UP
            ui.timer.classList.add('text-red-600', 'bg-red-50');
            ui.timer.innerText = "+ " + formatTime(diff);
        } else {
            ui.timer.innerText = formatTime(diff);
        }
    }, 1000);
}

function formatTime(ms) {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function pad(n) { return n < 10 ? '0' + n : n; }

function finishExam() {
    clearInterval(state.timerInterval);
    const results = calculateResults();
    
    // Populate Dashboard
    document.getElementById('score-global').innerText = Math.round(results.global) + '%';
    document.getElementById('score-p1').innerText = Math.round(results.phases[1]) + '%';
    document.getElementById('score-p2').innerText = Math.round(results.phases[2]) + '%';
    document.getElementById('score-p3').innerText = Math.round(results.phases[3]) + '%';
    document.getElementById('score-p4').innerText = Math.round(results.phases[4]) + '%';
    
    const timeMsg = state.isOvertime 
        ? `<span class="text-red-500">Temps dépassé (+ ${ui.timer.innerText})</span>` 
        : ui.timer.innerText;
    document.getElementById('time-taken-display').innerHTML = `Temps final : ${timeMsg}`;

    // Feedback Message
    const msgEl = document.getElementById('score-message');
    if (results.global >= 80) {
        msgEl.innerHTML = "🏆 Expert Android ! Excellent travail.";
        msgEl.className = "text-xl font-bold mb-8 px-4 py-2 rounded inline-block bg-green-100 text-green-800";
    } else if (results.global >= 50) {
        msgEl.innerHTML = "✅ Validé. Quelques révisions nécessaires sur les phases faibles.";
        msgEl.className = "text-xl font-bold mb-8 px-4 py-2 rounded inline-block bg-yellow-100 text-yellow-800";
    } else {
        msgEl.innerHTML = "⚠️ Révisions nécessaires. Relisez le PDF.";
        msgEl.className = "text-xl font-bold mb-8 px-4 py-2 rounded inline-block bg-red-100 text-red-800";
    }

    saveHistory(results);
    clearSession(); // Clear active session so next load starts fresh
    switchView('dashboard');
}

function calculateResults() {
    let totalQuestions = 0;
    let totalCorrect = 0;
    let phases = {1:0, 2:0, 3:0, 4:0};
    let phaseCounts = {1:0, 2:0, 3:0, 4:0};

    questionBank.forEach(q => {
        const userSelection = state.answers[q.id] || [];
        // Strict scoring: All correct options must be selected, no wrong ones
        const isCorrect = 
            q.correctIndices.length === userSelection.length &&
            q.correctIndices.every(val => userSelection.includes(val));
        
        if (isCorrect) {
            totalCorrect++;
            phases[q.phase]++;
        }
        totalQuestions++;
        phaseCounts[q.phase]++;
    });

    return {
        global: (totalCorrect / totalQuestions) * 100,
        phases: {
            1: phaseCounts[1] ? (phases[1] / phaseCounts[1]) * 100 : 0,
            2: phaseCounts[2] ? (phases[2] / phaseCounts[2]) * 100 : 0,
            3: phaseCounts[3] ? (phases[3] / phaseCounts[3]) * 100 : 0,
            4: phaseCounts[4] ? (phases[4] / phaseCounts[4]) * 100 : 0
        }
    };
}

function retakeQuiz() {
    clearSession();
    location.reload();
}

// Utility
function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}