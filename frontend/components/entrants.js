Vue.component('entrant-item', {
    props: ['entrant'],
    template: '<li>{{entrant}}</li>'
})

let entrantsApp = new Vue({
    el: '#entrantsApp',
    data: {
        entrantsList: []
    },
    methods: {
        updateEntrants() {
            axios.get('http://localhost:3000/eventEntrants')
            
            .then(response => this.entrantsList = response.data)
            
            .catch(function (error) {
                console.log("Une erreur s'est produite" + error);
            })
            
            
        }
       
    }   
})