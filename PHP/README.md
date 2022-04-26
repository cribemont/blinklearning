# PHP Question

1/ Ese codigo basicamente dara un infinite loop haciendo echo de "2222...2n" en la pantalla
El problema reside en que el scope de la variable $i es local en el loop, ya que el while se inicia con $i = 1 y nunca cambia.
Se incrementa solo para el echo (++$var siendo un incremento y luego value);
Una solucion a ese problema en caso de que solo queramos incrementar $i seria poner == para comparar y cambiar $i++ dentro del loop (sin el echo sino asignando el valor a $i);