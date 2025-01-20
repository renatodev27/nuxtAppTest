<template>

    <div class="container">
        <div class="table">
            <h4>LISTA DE TAREAS</h4>

            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Creado el</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.id">
                        <td><span v-text="task.task_id"></span></td>
                        <td><span v-text="task.title"></span></td>
                        <td><span v-text="task.description"></span></td>
                        <td><span v-text="task.datetime"></span></td>
                        <td>
                            <a href="#">Editar</a>
                            <a href="#" @click="deleteTask(task.task_id)">Eliminar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="form-new">
            <h4>NUEVA TAREA</h4>
            <input type="text" placeholder="Título" v-model="title">
            <br><br>
            <textarea rows="5" placeholder="Descripción" v-model="description"></textarea>
            <br><br>
            <button @click="newTask()">Guardar</button>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const config = useRuntimeConfig()

const tasks = ref([])

const title = ref('')
const description = ref('')

async function listTasks() {
    const response = await axios.get(`${config.public.apiBaseUrl}tasks`, {
        headers: {
            Authorization: `Bearer ifMki0DlpJAH4r1yontxoXCGvIhEn13L`,
        },
    })
    
    tasks.value = response.data.data
}

async function newTask() {

    const response = await axios.post(`${config.public.apiBaseUrl}tasks`, {
        title: title.value,
        description: description.value,
        datetime: new Date()
    },
    {
        headers: {
            Authorization: `Bearer ifMki0DlpJAH4r1yontxoXCGvIhEn13L`,
        }
    })

    if (response.status === 200) {
        title.value = ''
        description.value = ''
    }

    await listTasks()
}

async function deleteTask(id) {
    
    const response = await axios.delete(`${config.public.apiBaseUrl}tasks/${id}`, {
        headers: {
            Authorization: `Bearer ifMki0DlpJAH4r1yontxoXCGvIhEn13L`,
        }
    })

    console.log(response)

    await listTasks()
}

function __defineDateFormat() {
    const date = new Date()
    const hours = date.getHours()
    const mins = date.getMinutes()
    const seconds = date.getSeconds()

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = Number(date.getMonth()) + 1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1
    const year = date.getFullYear()

    return `${day}-${month}-${year}T${hours}:${mins}:${seconds}`
}

onMounted(async () => {
    await listTasks()
})

</script>
<style lang="css" scoped>
.container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
}

table {
    width: 100%;
}

.container table td:last-child a {
    margin: 5px;
}
</style>