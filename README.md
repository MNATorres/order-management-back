## Mi Backend
Este es un backend hecho con node, express y docker que proporciona una API REST para una aplicación web.

## Requisitos
Para ejecutar este backend necesitas tener instalado:

•  Docker 
•  Docker compose

## Instalación

### Para instalar este backend usando docker, sigue estos pasos:

1. Clona este repositorio usando el comando git clone:
   
    ```bash
   git clone https://github.com/MNATorres/order-management-back

2. Usa el comando npm install en la carpeta del proyecto
3. Construye la imagen de docker usando el comando docker-compose build 
5. Ejecuta el contenedor de docker usando el comando docker-compose up

## Uso
Este backend ofrece una API REST con las siguientes rutas y métodos:

•  GET /orders: devuelve un array con las ordenes.

•  POST /users: crea un array de ordenes.

•  DELETE /users/:id: elimina todas las ordenes.

## Próximos Pasos
Utilizar Typescript, agregar mas validaciones al código, testear las funciones. 


