# React Question

## Que pasa cuando se invoca setState()

Permite pasar cambios a componentes (localmente)

## Implementar un componente

Componente ListComponent que genera una lista desde un array.

Re-utilisable y auto-update si cambiamos la lista

Su implementacion podria ser la siguiente

```bash
import ListComponent from './ListComponent';

const list = ["Amarillo", "Azul", "Rojo", "Verde"];

<ListComponent list={list} />
```

En el folder ./list/ se puede encontrar un ejemplo de implementacion con create-react-app