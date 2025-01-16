NUX CONFIGURATION

* nuxtConfig: Archivo de configuración ubicado en la raíz del proyecto, generalmente se usa para:
    - Agregar scripts personalizados
    - Registrar módulos
    - Cambiar de modos de renderizado
    - Definición de rutas
    - Definición de middlewares
    - Definición de plugins
    - runtimeConfig API: permite definir variables de entorno a través de la aplicación y solo están 
                         disponibles a nivel de servidor. Dentro de runtimeConfig.public se pueden definir
                         valores que estarán disponibles en el lado del cliente
    -  

* appConfig: Archivo que se utiliza para definir configuraciones específicas de la aplicación, valores que se pueden
             utilizar a través de la misma, entre ellas se encuentran por ejemplo:
    - Nombre de la aplicación
    - Algún título
    - Definir valores del tema
        - Oscuro o claro
        - Colores primarios, secundarios, etc

Es
NOTA: No es necesario saber typescript para compilar una aplicación nuxt, sin embargo es necesario que el archivo lleve el .ts (typescript extension)


VIEWS:

App.vue -> Nuxt reconocerá este archivo como el archivo raíz (punto de entrada) del proyecto que renderizará su 
           contenido con todas las rutas de la aplicación

Componentes: Esta carpeta se puede crear manualmente si es que no existe en la raíz del proyecto, y dentro de la misma
             puedes crear todos los componentes para usarlos en cualquier parte de la aplicación

Pages: Se definen las rutas y se espcifican dentro de la carpeta pages, cada archivo .vue dentro de esta carpeta es utilizada automáticamente como una ruta de la aplicación. Las páginas son pueden representarse como vistas completas, por ejemplo Home, About, Products, etc.


NOTA: El archivo main.js que es el encargado de crear y levantar a Vue app es manejado por nuxt detrás de la escena
