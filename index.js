const { createApp } = Vue;

const App = {
    data() {
        return {
            info: null,
            full: null,
            action: "bye",
            name: "Jobs",
            from: "Other Steve",
            company: "Apple",
            sender: null,
            doit: "Drop",
            something: "Pretence",
            noun: "Flatulence",
            behavior: "Style",
            thing: "Year",
            tool: "Octopii",
            lang: "Swahili",
            ops: null
        }
    },
    mounted() {
        this.getOperations();
    },
    methods: {
        getDataOnChange(value) {
            axios
                .get('https://www.foaas.com' + value, {
                })
                .then((response) => {
                    this.full = response.data.message;
                    this.sender = this.from;
                })
        },
        getOperations() {
            axios
                .get('https://www.foaas.com/operations')
                .then((response) => {
                    this.ops = response.data.filter(function (e) {
                        return e.name.length < 30;
                    })
                })
        },
        onSelectChange(event) {
            if (document.getElementById("operation").value!="0") {
                this.getDataOnChange(this.params());
            }
        },
        onOptionsChange(event) {
            if (document.getElementById("operation").value!="0") {
                this.getDataOnChange(this.params());
            }
        },
        params() {
            return result = document.getElementById("operation").value
            .replace(":name", this.name)
            .replace(":from", this.from)
            .replace(":company", this.company)
            .replace(":do", this.doit)
            .replace(":something", this.something)
            .replace(":noun", this.noun)
            .replace(":behavior", this.behavior)
            .replace(":thing", this.thing)
            .replace(":tool", this.tool)
            .replace(":language", this.lang)
        }
    }
};

createApp(App).mount("#app");

// new Vue({
//     el: '#app',
//     data() {
//         return {
//             info: null,
//             full: null,
//             action: "bye",
//             name: "Jobs",
//             from: "Other Steve",
//             company: "Apple",
//             sender: null,
//             doit: "Drop",
//             something: "Pretence",
//             noun: "Flatulence",
//             behavior: "Style",
//             thing: "Year",
//             tool: "Octopii",
//             lang: "Swahili",
//             ops: null
//         }
//     },
//     mounted() {
//         this.getOperations();
//     },
//     methods: {
//         getDataOnChange(value) {
//             axios
//                 .get('https://www.foaas.com' + value, {
//                 })
//                 .then((response) => {
//                     this.full = response.data.message;
//                     this.sender = this.from;
//                 })
//         },
//         getOperations() {
//             axios
//                 .get('https://www.foaas.com/operations')
//                 .then((response) => {
//                     this.ops = response.data.filter(function (e) {
//                         return e.name.length < 30;
//                     })
//                 })
//         },
//         onSelectChange(event) {
//             if (document.getElementById("operation").value!="0") {
//                 this.getDataOnChange(this.params());
//             }
//         },
//         onOptionsChange(event) {
//             if (document.getElementById("operation").value!="0") {
//                 this.getDataOnChange(this.params());
//             }
//         },
//         params() {
//             return result = document.getElementById("operation").value
//             .replace(":name", this.name)
//             .replace(":from", this.from)
//             .replace(":company", this.company)
//             .replace(":do", this.doit)
//             .replace(":something", this.something)
//             .replace(":noun", this.noun)
//             .replace(":behavior", this.behavior)
//             .replace(":thing", this.thing)
//             .replace(":tool", this.tool)
//             .replace(":language", this.lang)
//         }
//     }
// });



