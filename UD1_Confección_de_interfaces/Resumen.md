# PRINCIPIOS DEL DISEÑO (PARTE 1)
## Introducción
**¿Qué es el pensamiento visual?**

> El *pensamiento visual* es una herramienta para exponer, presentar, transmitir o comunicar las ideas mediante dibujos sencillos y de fácil reconocimiento.

Para realizar el diseño de la interfaz, se deben hacer varios puntos:
1. Estudio previo de las características propias del sitio
2. Escoger elementos del diseño
3. Patrón de colores característicos
4. Ubicación de cada uno de los componentes
## Interacción Persona - Ordenador (IPO)
> Es la disciplina que estudia el intercambio de información entre las personas y los ordenadores.

***OBJETIVO:*** el intercambio de información debe ser lo más eficiente posible, es decir, que se incremente la satisfacción del usuario de un sitio web y su experiencia de uso para que desee volver a este.

*HANSEN* en 1971 enumeró los principios para el diseño de sistemas interactivos.

Estos principios son:
- Conocer al usuario
- Minimizar la memorización
- Optimizar las operaciones mediante la rápida ejecución de operaciones comunes
- Facilitar buenos mensajes de error y crear diseños que eviten los más comunes

Hay estudios que demuestran:
1. El 48% del código de una aplicación está dedicado a la interfaz (Estudio **Myers y Rosson [MYE92]**)
2. El 80% de los costes de mantenimiento de una aplicación son debidos a problemas del usuario con el sistema y aproximadamente el 64% son por problemas de usabilidad.
## Diseño de la interfaz
> Una **interfaz** es un conjunto de elementos gráficos y un diseño de su distribución que permite una mejor presentación y navegación a través de la aplicación.

Hay cuatro grupos de elementos en el **diseño de interfaces**:
- Elementos conceptuales (no visibles)
- Elementos visuales (forma, medida)
- Elementos de relación (ubicación)
- Elementos prácticos (contenido)

El proceso de diseño debe estar centrado en el usuario para recoger sus necesidades y mejorar su experiencia de usuario.

El diseño debe responder una de las cuestiones más importantes en este ámbito, *¿cómo debe ser desarrollado el sistema para asegurar la **usabilidad** y la **accesibilidad**?*

**Diferencia entre *UX* y *UI***

> La UX o User Experience responde a cómo el usuario se siente mientras usa cualquier producto o servicio digital que tu empresa ofrece, en cambio, la UI o User Interface responde a la guía de usuarios por la navegación y los llevará a tomar dichas acciones de manera natural.
## Fases del desarrollo de una interfaz
### Análisis de requisitos
Un software es de calidad si cumple con todos los requisitos definidos.

Para ello, hay que aplicar técnicas de análisis como:
- **Análisis etnológico:** observar el trabajo de los usuarios
- **Análisis de implicados** (stakeholders)
- **Clasificar a los usuarios:** perfiles y roles
- **Análisis contextual de tareas**
- **Objetos** (físicos y conceptuales)
- **Plataforma** (posibilidades y restricciones)
- **Objetivos** (funcionales, de *usabilidad* y de *accesibilidad*)
### Diseño
Se deben tener en cuenta los **factores humanos** como:
1. La percepción y comprensión
2. La atención selectiva
3. La motivación

El diseño debe estar pensado con el **modelo conceptual del usuario** y no solo para la funcionalidad.

Algunas tareas pueden ser:
- **Análisis de tareas** (descripción sistemática de las interacciones usuario-sistema)
- **Definir un *estilo* y una *estrategia* de diseño de la información** (estándares, metáforas, diseño gráfico, etc)
- **Diseño detallado**
### Prototipado
Desde el inicio del desarrollo debemos probar partes del sistema con multitud de objetivos:
1. **Verificar funcionalidades**
2. **Averiguar aspectos relacionados con la interfaz del sistema** (posición de controles, textos, colores, etc)
3. **Validar la navegación**
4. **Probar nuevas posibilidades técnicas**
5. etc.

Gracias al prototipado se permiten realizar este tipo de verificaciones y que el usuario pueda participar en el desarrollo.
### Implementación
Esta parte suele ser a la que se destinen más recursos personales ya que es recomendable realizar prototipos software para evaluarlos con los usuarios finales.

Además, también es recomendable realizar una evaluación para comprobar la consistencia global del producto antes de su puesta en marcha, teniendo en cuenta la **usabilidad** ya que la **accesibilidad** se puede conseguir con poco esfuerzo adicional a la codificación habitual.
### Lanzamiento
El éxito de un producto depende de dos factores:
1. **Que el usuario se sienta cómodo con el sistema** (usabilidad y accesibilidad)
2. **Que los responsables obtengan los resultados esperados** (funcionalidad)

Es importante tener constante feedback con el usuario.
### Evaluación
> La evaluación es el conjunto de metodologías y técnicas que analizan la usabilidad y la accesibilidad del sistema en diferentes etapas del ciclo de vida.

Es un punto clave del modelo ya que permite recibir la retroalimentación  por parte del usuario y/o evaluadores expertos que se verá reflejada en el diseño de las interfaces.
## La accesibilidad
> La **accesibilidad web** consiste en desarrollar aplicaciones web que puedan ser utilizadas por el mayor número de usuarios con necesidades específicas.

Estas necesidades pueden ser debidas a limitaciones **derivadas del entorno** (navegadores antiguos, conexiones lentas, etc) o **derivadas de problemas visuales, auditivos, motrices y neurológicos** (dislexia, trastornos de la atención, etc).

> Las **pautas de accesibilidad** para el Contenido en la Web (*Web Content Accessibility Guidelines o WCAG*) son un conjunto de directrices desarrolladas por el **Word Wide Web Consortium** (W3C) que establecen estándares para mejorar la accesibilidad de los sitios web.

Alguna de estas pautas son:
1. **Perceptible:** capacidad de presentar la información y contenido
2. **Operable:** se centra en las funcionalidades y componentes
3. **Comprensible:** se centra en la claridad y comprensión, buscando la facilidad
4. **Robusto:** compatible con diferentes tecnologías y dispositivos.
## La usabilidad
> La **usabilidad** se refiere a la capacidad de un sitio web, aplicación o producto digital para ser fácil de usar y comprender por los usuarios.

Los sitios con buena *usabilidad* presentan:
- Navegación clara
- Estructura lógica de información
- Disposición de elementos facilitando las tareas

### Tipos de pruebas de usabilidad
1. **Pruebas de usuario:** se invita a usuarios reales a utilizar el producto o sitio web y se les pide que realicen tareas específicas
2. **Pruebas de tiempo de respuesta:** miden el tiempo que tarda un usuario en realizar la tarea. Mide la eficiencia y velocidad del producto
3. **Prueba eye-tracking:** con tecnologías de seguimiento ocular se pueden evaluar hacia donde miran los usuarios para captar su atención
4. **Pruebas A/B:** pruebas con diferentes versiones para determinar cuál es la más efectiva
## Guía de estilos
> Recogen los criterios y normas que deben seguir los desarrolladores de un sitio web para conseguir una apariencia uniforme y atractiva para el usuario.
> 
> Además, favorecen el desarrollo de una página web, tanto en el diseño como en su posterior mantenimiento.

***IMPORTANCIA DE LAS GUÍAS DE ESTILOS***

Para asegura la consistencia de las interfaces gráficas de una web es fundamental plasmar las pautas de estilo en una guía que pueda seguir el equipo de desarrollo (programadores, analistas, diseñadores gráficos, etc) durante el proceso de desarrollo del sitio.

En esta, generalmente se recogen:
1. Gama de colores
2. Iconos
3. Tipografía
4. Tamaño de letras
5. Logo
### Los colores
> La **teoría del color** es un conjunto de principios y directrices que pueden ayudar a los diseñadores a elegir y combinar colores de manera efectiva en sus proyectos, incluyendo el diseño web.

Además de esto, es importante conocer la identidad de la marca, la audiencia y las preferencias personales al tomar decisiones sobre los colores.
1. **Círculo cromático:** elegir y combinar colores de manera efectiva
2. **Armonía de colores:** combinación de colores de manera que sean visualmente atractivos y equilibrados
3. **Contraste:** diferencia visual entre dos o más elementos
4. **Psicología del color:** transmitir emociones y provocar así reacciones en nuestro cerebro
### Tipografía
Los textos son la base de la mayoría de los sitios web ya que lo más normal es transmitir la información mediante letras.

A la hora de elegir un tipo de tipografía es muy importante verificar si puede visualizarse correctamente en los distintos navegadores y no abusar de negrita, cursiva y subrayado.
## Prototipado
> El **diseño conceptual** de una web está formado por representaciones de las páginas y secciones que van a componer el sitio.
> 
> Las *fases del prototipado* sirven para definir los procesos, realizar cambios y pruebas antes de subir a producción una aplicación web.

### Sketch
> Un **sketch** es un dibujo o boceto inicial de un sitio web.

Este boceto estará realizado sobre papel, pizarra o cualquier formato que permita realizar modificaciones de manera rápida.

Es un diseñó poco detallado donde se visualiza por primera vez el conjunto de elementos fundamentales de una web.
### Wireframe
> Un **wireframe** es la representación de la estructura básica de la página web en la que se especifican los elementos de forma esquematizada.

Es un diseño a bajo nivel que se establece claramente la jerarquía de los elementos, los contenedores y la organización del contenido.
### Mockup
> Un **mockup** es una representación a medio nivel que se incluyen imágenes, tipografías y colores, aunque no tiene por qué ser definitivos.

La finalidad del mockup es conseguir una versión avanzada del diseño de la web que nos permita evaluarlo en su conjunto, la detección temprana de puntos débiles y la realización de cambios sin que sea demasiado costosa.
### Prototipado
> El **prototipado** es la representación más detallada de la web y dispone de interactividad para comprobar el comportamiento y la experiencia de usuario.

Por norma general, los colores, tipografías, iconos y demás elementos gráficos son los que se utilizará en la página web.

***(Cuando esté el resumen que hagamos en clase, pondré una imagen aquí)***
