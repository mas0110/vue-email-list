const {
    createApp
} = Vue

createApp({
    data() {
        return {
            mail: [],
            listMail: [],
        }
    },
    created() {
        console.log(this.mail)
        console.log(this.listMail)
        this.generaMail()
    },
    methods: {
        async generaMail() {

            for (let i = 0; i < 10; i++) {
                const result = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail');
                this.mail.push(result.data.response);
            }
        },
        stampaMail() {

            for (let i = 0; i < 10; i++) {
                this.listMail.push(this.mail[i]);
            }
        },
        cancellaLista() {
            window.location.reload();

        }
    },
}).mount('#app')