const { createApp } = Vue;

const app = createApp({
    name: 'PHP ToDO List JSON',

    data: () => ({
        tasks: [
            {
                "id": 1,
                "text": "HTML",
                "done": true
            },
            {
                "id": 2,
                "text": "CSS",
                "done": true
            },
            {
                "id": 3,
                "text": "Responsive design",
                "done": true
            },
            {
                "id": 4,
                "text": "Javascript",
                "done": true
            }
        ]
    })
});

app.mount('#app');