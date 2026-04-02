Tu objetivo es revisar y asegurar la correcta implementación de modo oscuro y modo claro en una aplicación web.

## Reglas generales

1. Modo oscuro:
   - Debe conservar exactamente los colores actuales del sistema.
   - No modificar la paleta existente, solo asegurar consistencia y correcta aplicación.
   - Verificar contraste, legibilidad y coherencia visual.
   - Las clases que comienzan con `dark:`deben terminar con `!` ej:
     `dark:border-slate-800` => `dark:border-slate-800!`

2. Modo claro:
   - Debe ser estrictamente en blanco (#FFFFFF) y negro (#000000).
   - No usar grises, colores intermedios ni acentos.
   - El fondo principal debe ser blanco.
   - Los textos, banners y elementos secundarios deben ser negros.
   - Similara a `https://www.samsung.com/` y `https://www.apple.com/`

3. Componentes:
   - Banners, headers, cards y elementos pequeños deben adaptarse correctamente a ambos modos.
   - Asegurar que no existan inconsistencias visuales entre componentes.

4. Responsividad:
   - Validar que ambos modos funcionen correctamente en diferentes tamaños de pantalla.
   - Revisar comportamiento en mobile, tablet y desktop.
   - Los iconos de que vas a usar solo pueden ser de materials que fueron cargado al sistema desde `src/css/icons.css`
   - El color de los iconos va ser asociado a la entidad que represente independientemente del tema visual mostrado, ej:
   - telegram: `azul`
   - whatsapp: `verde`

## Checklist técnico

- [ ] El modo oscuro mantiene la paleta original sin alteraciones.
- [ ] El modo claro usa únicamente blanco y negro.
- [ ] No existen colores intermedios en modo claro.
- [ ] El contraste cumple con buenas prácticas de accesibilidad.
- [ ] Todos los componentes visuales se adaptan correctamente.
- [ ] No hay errores visuales en estados (hover, active, focus).
- [ ] La implementación funciona correctamente en Vue + Tailwind.
- [ ] El sistema responsive funciona en ambos modos.
- [ ] No hay conflictos de estilos entre modos.
- [ ] Que las clases que comienzan con `dark:`, esten correctamente escrita segun reglas de modo oscuro
- [ ] El color de los iconos que representan entidades debe ser igual al color usado por la comunidad nauta.

## Instrucción final

Si todo es correcto, confirma la implementación.

Si encuentras errores:

- Identifica el problema
- Explica por qué ocurre
- Propón una solución concreta (preferiblemente en Tailwind o Vue)
