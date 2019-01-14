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
                    var result = [[],[],[],[]];
                    talks.forEach((t) => {
                        console.log(t);
                        var data = t.data();
                        data["speakerObj"] = spks[data["speaker"]];
                        if (data["day"] === "Monday 16th") {
                            if(data["room"] === "Room A") {
                                result[0].push(data);
                            } else if (data["room"] === "Room B") {
                                result[1].push(data);
                            } else {
                                result[0].push(data);
                                result[1].push(data);
                            }
                        } else {
                            if(data["room"] === "Room A") {
                                result[2].push(data);
                            } else if (data["room"] === "Room B") {
                                result[3].push(data);
                            } else {
                                result[2].push(data);
                                result[3].push(data);
                            }
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
                    result[2].sort(compare);
                    result[3].sort(compare);
                    console.log(result);
                    self.talks = result;
                });
            });

        }
    }
});