# PHP Question

## Que pasa con <?php $i=0 while($i=1) echo ++$i; ?>

Ese codigo basicamente dara un infinite loop haciendo echo de "2222...2n" en la pantalla

El problema reside en que el scope de la variable $i es local en el loop, ya que el while se inicia con $i = 1 y nunca cambia.

Se incrementa solo para el echo (++$var siendo un incremento y luego value);

Una solucion a ese problema en caso de que solo queramos incrementar $i seria poner un operador de comparacion, para comparar y cambiar $i++ dentro del loop ( con ==, !=, <= o => );

## Como limpiar todos los espacios de un string

Ver archivos adjunto "clean_space.php"