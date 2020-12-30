//import Vue from 'vue';
//import axios from 'axios';

new Vue({
    el: '#app',
    data() {
        return {
            info: null,
            full: null,
            action: "bye",
            from: "slarty",
            ops: null
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get('https://www.foaas.com/' + this.action + '/' + this.from)
                .then
                (response => (this.info = response.data.message + response.data.subtitle, this.full = response)
                )
        },
        getMoreData() {
            axios
                .get('https://www.foaas.com/' + this.action + '/' + this.from, {
                    headers: { Accept: 'text/html' }
                })
                .then
                (response => (

                    //this.info = response.data.message + response.data.subtitle + "XXX", 
                    this.info = "Blah McFuckity",
                    this.full = response.data
                    //  document.getElementById("ret").innerHTML = response.data
                )
                )
        },
        getOperations() {
            axios
                .get('https://www.foaas.com/operations')
                .then
                (response => (this.ops = response.data.filter(function (e) {
                    return e.name.length < 30;
                }))
                )
        },
        onChange(event) {
            console.log(event.target.value)
        }
    }
});



