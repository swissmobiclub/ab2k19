var config = {
    apiKey: "AIzaSyAKZpMePoky8sUknTe5c9efa9YQHUuoLjY",
    authDomain: "app-builders-2019.firebaseapp.com",
    databaseURL: "https://app-builders-2019.firebaseio.com",
    projectId: "app-builders-2019",
    storageBucket: "app-builders-2019.appspot.com",
    messagingSenderId: "858424880509"
};
firebase.initializeApp(config);

// save a reference to the firestore database
// to access it in the future
var db = firebase.firestore();

new Vue({
    el: '#speakers',
    data: {
        speakers: [
            {
                "biography": "Rebecca is an Android Engineer and Google Developer Expert for Android. She works remotely for Over which is a mobile design application. She loves travelling and contributing to the development community in any way she can, whether it is with blog posts, talks or videos, she loves to share her learnings with others.",
                "company": "Over",
                "firstName": "Rebecca",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Android Engineer",
                "lastName": "Franks",
                "picture": "img/speakers/rebecca.jpg",
                "speakerId": 1,
                "twitter": "riggaroo"
            },
            {
                "biography": "Soroush Khanlou is a New York-based iOS consultant. He’s written apps for the New Yorker, David Chang’s Ando, Rap Genius, and non-profits like Urban Archive. He blogs about programming at khanlou.com, mostly making fun of view controllers. In his free time, he runs, bakes bread and pastries, and collects suitcases.",
                "company": "",
                "firstName": "Soroush",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Freelancer",
                "lastName": "Khanlou",
                "picture": "img/speakers/soroush.jpg",
                "speakerId": 2,
                "twitter": "khanlou"
            },
            {
                "biography": "Gui is a developer, podcaster and reverse engineer. He writes for 9to5mac, co-hosts the Stacktrace podcast and loves to uncover Apple mysteries and leaks by reverse-engineering OS and app releases. He’s also the creator of the WWDC app for Mac and other open source projects.",
                "company": "",
                "firstName": "Guilherme",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Reverse Engineer",
                "lastName": "Rambo",
                "picture": "img/speakers/guilherme.jpg",
                "speakerId": 11,
                "twitter": "_inside"
            },
            {
                "biography": "Adrian Kosmaczewski is a writer, a software developer and a trainer. He is the author of five books about mobile software development, and has shipped mobile, web and desktop apps for iOS, Android, Mac OS X, Windows and Linux since 1996. Adrian holds a Master in Information Technology from the University of Liverpool. When not coding or teaching, Adrian likes to spend time with his wife Claudia, his cat Max and his Olivetti Lettera 22 typewriter.",
                "company": "De Programmatica Ipsum",
                "firstName": "Adrian",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Software humanist and editor",
                "lastName": "Kosmaczewski",
                "picture": "img/speakers/adrian.jpg",
                "speakerId": 13,
                "twitter": "akosma"
            },
            {
                "biography": "Emerging from the foggy plains of northern Italy 🇮🇹 after working at a smartwatch startup, Sebastiano moved with his curls to London 🇬🇧 💂 to do great things at AKQA and then Novoda. Regularly speaking at conferences and brain-dumping on the 'net got him into the Google Developers Experts programme in 2014. Nowadays he's working on some rather cool Kotlin stuff for JetBrains.",
                "company": "Jetbrains",
                "firstName": "Sebastiano",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Software Engineer",
                "lastName": "Poggi",
                "picture": "img/speakers/sebastiano.jpg",
                "speakerId": 14,
                "twitter": "seebrock3r"
            },
            {
                "biography": "Google Developer Expert Android, Pay and IoT since 2015. Worked in different startups in Singapore, Moscow, and London (including Revolut), now working at Lyft in San Francisco. Love to speak about Android development and other technological solutions at conferences and in the podcast.",
                "company": "Lyft",
                "firstName": "Denis",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Software Engineer",
                "lastName": "Nekliudov",
                "picture": "img/speakers/denis.jpg",
                "speakerId": 15,
                "twitter": "seebrock3r"
            },
            {
                "biography": "Co-Founder, Swift development lead at Qminder. Maintainer of Swift libraries and apps, contributor to Swift Weekly Brief. Passionate about mobile applications, open source and inclusivity. 14+ years of experience in programming.",
                "company": "Qminder",
                "firstName": "Kristaps",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Co-founder and Swift developer",
                "lastName": "Grinbergs",
                "picture": "img/speakers/kristaps.jpg",
                "speakerId": 16,
                "twitter": "fassko"
            },
            {
                "biography": "Alexis Aubry is an engineer at Wire in Berlin, where he works on the iOS client. Chat with him about accessibility, machine learning and open-source.",
                "company": "Wire",
                "firstName": "Alexis",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "iOS Engineer",
                "lastName": "Aubry",
                "picture": "img/speakers/alexis.jpg",
                "speakerId": 17,
                "twitter": "_alexaubry"
            },
            {
                "biography": "Brandon led the iOS and Android engineering teams at Kickstarter for 5 and a half years, where he helped push the team towards functional programming, eventually open sourcing both apps. He now consults with companies to help tame complexity and build features that are testable, and co-hosts Point-Free with Stephen Celis, a video series exploring functional programming and Swift.",
                "company": "Point-Free",
                "firstName": "Brandon",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Consultant",
                "lastName": "Williams",
                "picture": "img/speakers/brandon.jpg",
                "speakerId": 18,
                "twitter": "mbrandonw"
            },
            {
                "biography": "Jonas has been dabbling with Android since its release and with iOS when reference counting was still a thing. He now works at Liip, building apps for big and smaller clients. He enjoys seeing synergies between both platforms, in particular with Swift and Kotlin.",
                "company": "Liip",
                "firstName": "Jonas",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Mobile Developer",
                "lastName": "Schmid",
                "picture": "img/speakers/jonas.jpg",
                "speakerId": 19,
                "twitter": "jonas_schmid"
            },
            {
                "biography": "Aleksandar is indie app developer at Radiant Tap on (extended) hiatus, currently heading a contracting agency building enterprise iOS software for discerning clients. In last few years was co-organizer of iOS Developers Meetup group in Serbia and introduced several generations of students to iOS development work using Swift through iOS Akademija school. Semi-regularly blogs (https://aplus.rs) about Swift and iOS and is most passionate about UX, Auto Layout, Swift and app architecture. Outside of tech topics, talk to him about espresso, art drawing and Moto GP.",
                "company": "Radiant Tap",
                "firstName": "Aleksandar",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Founder",
                "lastName": "Vacić",
                "picture": "img/speakers/aleksandar.jpg",
                "speakerId": 20,
                "twitter": "radiantav"
            },
            {
                "biography": "I am Cecilia, developer, crafter for chiyogami and miniatures, and maybe something more. Something you might have not guessed about me: I was once a lift truck operator.",
                "company": "Spotify",
                "firstName": "Cecilia",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "iOS developer",
                "lastName": "Humlelu",
                "picture": "img/speakers/cecilia.jpg",
                "speakerId": 3,
                "twitter": "Humlelu"
            },
            {
                "biography": "I live in Munich with my wife, son and a dog. My favorite hobbies are watching movies and tasting new cousins. I love working on products helping other people to make their lives better.",
                "company": "Freeletics",
                "firstName": "Aydar",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "iOS Developer",
                "lastName": "Mukhametzyanov",
                "picture": "img/speakers/aydar.jpg",
                "speakerId": 21,
                "twitter": "aydarmukh"
            },
            {
                "biography": "Marco, Nicolas and Joseph are three software engineers working at Ubique with many years of experience in the mobile development field. They had many first hand experience with \"code sharing\" during the past years and they will be presenting their learnings during the talk \"Sharing Code between iOS and Android apps\".",
                "company": "Ubique",
                "firstName": "Marco",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Software Engineer",
                "lastName": "Zimmermann",
                "picture": "img/speakers/marco.jpg",
                "speakerId": 22,
                "website": "https://www.ubique.ch/en/appbuilders2019/"
            },
            {
                "biography": "Marco, Nicolas and Joseph are three software engineers working at Ubique with many years of experience in the mobile development field. They had many first hand experience with \"code sharing\" during the past years and they will be presenting their learnings during the talk \"Sharing Code between iOS and Android apps\".",
                "company": "Ubique",
                "firstName": "Nicolas",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Software Engineer",
                "lastName": "Märki",
                "picture": "img/speakers/nicolas.jpg",
                "speakerId": 23,
                "website": "https://www.ubique.ch/en/appbuilders2019/"
            },
            {
                "biography": "Marco, Nicolas and Joseph are three software engineers working at Ubique with many years of experience in the mobile development field. They had many first hand experience with \"code sharing\" during the past years and they will be presenting their learnings during the talk \"Sharing Code between iOS and Android apps\".",
                "company": "Ubique",
                "firstName": "Joseph",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Software Engineer",
                "lastName": "El Mallah",
                "picture": "img/speakers/joseph.jpg",
                "speakerId": 24,
                "website": "https://www.ubique.ch/en/appbuilders2019/"
            },
            {
                "biography": "Aspiring and swift junior intern manager. iOS wrangler. Building developer tools for fun and for profit. Critical OSS contributor. Encryptor and Decryptor in one person. Always learning. Always open to new ideas.",
                "company": "Swift Studio",
                "firstName": "Marcin",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "iOS developer",
                "lastName": "Krzyzanowski",
                "picture": "img/speakers/marcin.jpg",
                "speakerId": 4,
                "twitter": "krzyzanowskim"
            },
            {
                "biography": "I'm a geek/nerd, huge fan of Mobile Development, Artificial Intelligence, Quantum Computing and Software Engineering in general.",
                "company": "",
                "firstName": "Fernando",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Developer Advocate",
                "lastName": "Cejas",
                "picture": "img/speakers/fernando.jpg",
                "speakerId": 5,
                "twitter": "fernando_cejas"
            },
            {
                "biography": "Lara is a self-made Android developer based in Berlin. Her passion for Android made her transition from her background in science to software development. Her dream is to make apps more accessible for everyone. When she's not attending a tech meetup, you will find her playing video games.",
                "company": "Blinkist",
                "firstName": "Lara",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Android Developer",
                "lastName": "Martín",
                "picture": "img/speakers/lara.jpg",
                "speakerId": 6,
                "twitter": "lariki"
            },
            {
                "biography": "Anita Singh is a Senior Android Engineer at Blinkist and is based out of Berlin. She transitioned from backend to Android development four years ago, and has never looked back! She is passionate about building beautiful and responsive apps, and making Android development more approachable for everybody.",
                "company": "Blinkist",
                "firstName": "Anita",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Senior Android Engineer",
                "lastName": "Singh",
                "picture": "img/speakers/anita.jpg",
                "speakerId": 7,
                "twitter": "anitas3791"
            },
            {
                "biography": "Scott Chacon is the former cofounder of GitHub; now cofounder and CEO of Chatterbug, an online language learning school based in San Francisco and Berlin. He helped grow GitHub from 4 cofounders to 450 employees and a $2B valuation in 8 years. Scott is also the author of Pro Git, published by Apress and found online at git-scm.com. In unrelated news, he holds a WSET Level 3 certification in Wines and Spirits and hosts wine education nights for charity.",
                "company": "Chatterbug",
                "firstName": "Scott",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "CEO",
                "lastName": "Chacon",
                "picture": "img/speakers/scott.jpg",
                "speakerId": 8,
                "twitter": "chacon"
            },
            {
                "biography": "Janina is an Amsterdam-based iOS developer with an international background: she studied Computer Engineering at the University of British Columbia, and has worked in Vancouver, London, and Silicon Valley before making her way to Amsterdam. Janina’s passion lies in developing sleek and performant user interfaces, a focus she has honed in a variety of roles. At Apple, she was part of the team that launched Apple Music. Today, on Keepsafe’s iOS team, Janina is helping bring simplicity into mobile privacy and security.",
                "company": "Keepsafe",
                "firstName": "Janina",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "iOS Developer",
                "lastName": "Kutyn",
                "picture": "img/speakers/janina.jpg",
                "speakerId": 9,
                "twitter": "janinakutyn"
            },
            {
                "biography": "I have 15+ years of development experience from 8-bit MCU to HTML5 web apps, architecting solutions for mobile devices before it was trendy. In the Android Developer Relations team my focus is to provide an awesome developer experience around Play technologies like Billings and Android App Bundles.",
                "company": "Google",
                "firstName": "Pietro",
                "isLightning": false,
                "isStory": false,
                "jobTitle": "Android Developer Advocate",
                "lastName": "Maggi",
                "picture": "img/speakers/pietro.jpg",
                "speakerId": 10,
                "twitter": "pfmaggi"
            }
        ]
    }
});

new Vue({
    el: '#stories',
    data: {
        stories: [{"biography":"Vincent moved to Berlin over 6 years ago as one of SoundCloud’s first in-house iOS engineers. Since then, he led numerous high profile features and spearheaded the modularization of the application as iOS platform lead. He is now the director of engineering for media streaming. His team handles the transcoding and streaming backend infrastructure, as well as the embedded player and playback libraries present in all SoundCloud clients.","company":"SoundCloud","firstName":"Vincent","isLightning":false,"isStory":true,"jobTitle":"Director of Engineering - Media Streaming","lastName":"Garrigues","picture":"img/speakers/vincent.jpg","speakerId":12,"twitter":"garriguv"},{"biography":"Konstantin Haase is an open source developer, book author, and former opera star. In 2012, Konstantin received the Ruby Hero Award for his outstanding contributions to the community. He is a co-founder and leads the engineering department at Travis CI.","company":"Travis CI","firstName":"Konstantin","isLightning":false,"isStory":true,"jobTitle":"Head of Engineering","lastName":"Haase","picture":"img/speakers/konstantin.jpg","speakerId":25,"twitter":"konstantinhaase"}]
    }
});

new Vue({
    el: '#schedule',
    data: {
        talks: [],
        speakers: {}
    },
    mounted: function() {
        this.loadData();
    },
    methods: {
        loadData: function() {
            var self = this;

            db.collection("speakers").get().then((speakers) => {
                var spks = {};
                speakers.forEach((s) => {
                    var data = s.data();
                    spks[data["speakerId"]] = data;
                });
                self.speakers = spks;
                
                db.collection("talks").get().then((talks) => {
                    const dayOne = "Monday 29th";
                    const dayTwo = "Tuesday 30th";
                    var result = [[],[]];
                    talks.forEach((t) => {
                        var data = t.data();
                        // Check if there are multiple speakers.
                        if (data['speaker2'] != undefined && data['speaker3'] != undefined) {
                            // Check if data contains `speaker2` and `speaker3`, and create a new string where we encode the three names in one first name because ain't got time for that
                            const firstSpeaker = `${spks[data["speaker"]]["firstName"]} ${spks[data["speaker"]]["lastName"]}`;
                            const secondSpeaker = `${spks[data["speaker2"]]["firstName"]} ${spks[data["speaker2"]]["lastName"]}`;
                            const thirdSpeaker = `${spks[data["speaker3"]]["firstName"]} ${spks[data["speaker3"]]["lastName"]}`;
                            const names = `${firstSpeaker}, ${secondSpeaker}, ${thirdSpeaker}`;
                            data["speakerObj"] = { "firstName": names, "lastName": ""}
                        } else {
                            data["speakerObj"] = spks[data["speaker"]];
                        }
                        if (data["day"] === dayOne) {
                            result[0].push(data);
                        } else {
                            result[1].push(data);
                        }
                    });

                    var compare = function(a, b) {
                        if (a["time"] > b["time"]) {
                            return 1;
                        } else if (a["time"] < b["time"]) {
                            return -1;
                        } else {
                            return 0;
                        }
                    };

                    result[0].sort(compare);
                    result[1].sort(compare);
                    self.talks = result;
                });
            });

        }
    }
});