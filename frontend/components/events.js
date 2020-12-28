/*Vue.component('dbfz-event', { 
    props: ['event'],
    template: '<li> {{ event.name }} </li>'
})

let eventApp = new Vue ({ 
    el: '#eventApp',
    data: {
        eventList: [
            { id : 0, name : 'Dragon Ball fighterz Idian Ocean Championship' },
            { id : 1, name :"Tekken Tounanement"}
        ]
    }
})*/




let eventApp = new Vue({
    el: '#eventApp',
    data: {
        eventList: []
    },
    methods: {
        updateEvent() {
            axios.get('http://localhost:3000/eventsSets')
            
            .then(response => this.eventList = response.data)
            
            .catch(function (error) {
                console.log("Une erreur s'est produite" + error);
            })
            
        }
    }   
})

