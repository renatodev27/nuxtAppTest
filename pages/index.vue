<template>

    <div class="container">
        <div class="table">
            <h4>LISTA DE TAREAS</h4>

            <table>
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
<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const tasks = ref([])
const title = ref('')
const description = ref('')

async function getTasks() {
    const response = await useFetch('api/tasks/')
    
    tasks.value = response.data.value
} 

onBeforeMount(async () => {
    await getTasks()
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