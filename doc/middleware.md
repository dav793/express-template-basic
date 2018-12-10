
# MIDDLEWARE

## ¿Qué es?
Funciones de middleware son funciones que tienen acceso a los objetos request y response y la función next,
en el ciclo request-response de la aplicación.

Se pueden concatenar funciones de middleware para formar un pipeline, que se puede reutilizar para
ejecutar en diferentes escenarios.

La función next ejecuta la siguiente función middleware en el pipeline.

Las funciones de middleware pueden:
* Ejecutar código
* Hacer cambios a los objetos request o response
* Terminar el ciclo request-response
* Invocar el siguiente middleware en el pipeline

El orden del middleware en el pipeline es importante. Las funciones se ejecutan en el orden en que se carguen.

## ¿Cómo se cargan a la aplicación?
```typescript
app.use(miMiddleware);
```

## ¿Cómo se escriben?
```typescript
const miMiddleware = (req, res, next) => {
    // hacer algo
    next();
};
```





