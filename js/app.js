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
        speakers: []
    },
    mounted: function() {
        this.loadData();
    },
    methods: {
        loadData: function() {
            var self = this;

            db.collection("speakers").where("isStory", "==", false).get().then((speakers) => {
                var result = [];
                speakers.forEach((s) => {
                    result.push(s.data());
                });
                self.speakers = result;
            });

        }
    }
});

new Vue({
    el: '#stories',
    data: {
        stories: []
    },
    mounted: function() {
        this.loadData();
    },
    methods: {
        loadData: function() {
            var self = this;

            db.collection("speakers").where("isStory", "==", true).get().then((speakers) => {
                var result = [];
                speakers.forEach((s) => {
                    result.push(s.data());
                });
                self.stories = result;
            });

        }
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