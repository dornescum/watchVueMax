const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            fullname: '',
            lastName: ''
        };
    },
    watch: {
        // ================================================================
        // watch este indicat pt hhtp request, sau pt actiuni  care se vor updata in dom
        // =======================================================================
        counter (value){
            if (value > 50 || value < -50){
                const that = this
                setTimeout(()=> {
                    that.counter = 0;
                }, 2000)
            }
        },
        // recomandat sa fol acc nume cu argumetele din data()
        name(value){
            if (value === ''){
                this.fullname = '';
            } else {
                this.fullname = value; // dar value este by defalut
            }
            // this.fullname= this.name() + 'scharzmuller' \\ se poate scrie si asa
        },
        lastName(value){
            if (value === ''){
                this.fullname = '';
            } else {
                this.fullname = this.name + " " + value;
            }
        }
    },
    computed: {
        // dc este in computed nu mai nevoie in html {{ fullName FARA()!!}}
        fullName() {
            console.log('Running again...');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },
    methods: {
        outputFullname() {
            console.log('Running again...');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Schwarzmüller';
        },
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = ''
            this.lastName = ''
        },
    },
});

app.mount('#events');