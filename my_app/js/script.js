const { createApp } = Vue;

const endpoint = 'http://localhost:8888/Boolean_folder/php-todo-list-json/api/';

const app = createApp({
    name: 'PHP ToDO List JSON',

    data: () => ({
        tasks: []
    }),

    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data;
        })
    }
});

app.mount('#app');