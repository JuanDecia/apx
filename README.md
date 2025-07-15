# 🚀 APX - Desarrollador Software

![GitHub last commit](https://img.shields.io/github/last-commit/JuanDecia/apx?color=blue&logo=github) 
![GitHub repo size](https://img.shields.io/github/repo-size/JuanDecia/apx?label=tama%C3%B1o) 
![GitHub](https://img.shields.io/github/license/JuanDecia/apx?color=green)

Proyecto educativo desarrollado, donde se aplican conceptos fundamentales como APIs, bases de datos y arquitectura de software. 
Este repositorio contiene ejercicios, proyectos prácticos y ejemplos de código para fortalecer habilidades en desarrollo server-side por el momento.

---

## 📂 Estructura del repositorio
  ```bash
  /
  ├── modulos/ # Material organizado por unidades temáticas
  ├── proyectos/ # Proyectos completos desarrollados
  ├── ejercicios/ # Prácticas y desafíos de código
  └── recursos/ # Documentación adicional y herramientas
  ```

---

## 🛠 Tecnologías usadas

| Frontend         | Backend          | Bases de Datos   | Herramientas      |
|------------------|------------------|------------------|-------------------|
| ![JavaScript](https://skillicons.dev/icons?i=js) | ![Node.js](https://skillicons.dev/icons?i=nodejs) | | ![Git](https://skillicons.dev/icons?i=git) |
|  |  | | ![GitHub](https://skillicons.dev/icons?i=github) |
| | | | |

---

## 💡 Ejemplo de código (JSON + JavaScript)
```javascript
    // Datos JSON de ejemplo (podría venir de una API o archivo)
    const usuariosJSON = `{
      "usuarios": [
        { "id": 1, "nombre": "Juan", "esAdmin": true },
        { "id": 2, "nombre": "Ana", "esAdmin": false }
      ]
    }`;
    
    // 1. Parsear JSON a objeto JavaScript
    const datos = JSON.parse(usuariosJSON);
    
    // 2. Manipular datos
    datos.usuarios.push({ id: 3, nombre: "Carlos", esAdmin: false });
    
    // 3. Filtrar usuarios no administradores
    const usuariosNormales = datos.usuarios.filter(user => !user.esAdmin);
    
    // 4. Convertir de vuelta a JSON (para enviar a API o guardar)
    const nuevoJSON = JSON.stringify(datos, null, 2); // El '2' es para indentación
    
    console.log("Usuarios normales:", usuariosNormales);
    console.log("Nuevo JSON:", nuevoJSON);
    
    /* Salida:
    Usuarios normales: [ { "id": 2, "nombre": "Ana" }, { "id": 3, "nombre": "Carlos" } ]
    Nuevo JSON: {
      "usuarios": [
        { "id": 1, "nombre": "Juan", "esAdmin": true },
        { "id": 2, "nombre": "Ana", "esAdmin": false },
        { "id": 3, "nombre": "Carlos", "esAdmin": false }
      ]
    }
    */
```

---

## 📫 Contacto

¿Preguntas o feedback? ¡Me encantaría escucharte!  

**📧 Email**: [juandecia94@gmail.com](mailto:juandecia94@gmail.com)  
**🔗 LinkedIn**: [Juan Decia](https://www.linkedin.com/in/juan-decia/)  

⭐ ¡Dale estrellita al repo si te resulta útil!

---

