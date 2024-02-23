const { createApp } = Vue;

const endpoint = 'http://localhost:8888/Boolean_folder/php-todo-list-json/api/';

const app = createApp({
    name: 'PHP ToDO List JSON',

    data: () => ({
        tasks: [],
        newTask: '',
    }),

    methods: {
        addTask() {
            const data = {
                id: this.tasks.length + 1,
                text: this.newTask,
                done: false
            }

            const config = { headers: { 'Content-type': 'multipart/form-data' } }

            axios.post(endpoint, data, config)
        }
    },

    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data;
        })
    }
});

app.mount('#app');