# 🎨 Instrucciones para Especialista Frontend

**Stack: Vue 3 + TypeScript + Tailwind + Flowbite + DaisyUI + Quasar (selectivo)**

---

## 1. 🎯 Propósito

Este documento define las **reglas, convenciones y responsabilidades** para el desarrollo del frontend del proyecto.

El objetivo es construir una interfaz:

- Escalable y mantenible
- Totalmente tipada
- Basada en composición y reutilización
- Visualmente consistente
- Independiente de la lógica de negocio

La **lógica vive en composables**, no en los componentes.

---

## 2. 🧰 Stack Tecnológico Obligatorio

### Core

- **Vue 3** (Composition API)
- **TypeScript** (`strict: true`)
- **Vite**

### UI / Estilos

- **Tailwind CSS**
- **Flowbite** (componentes base)
- **DaisyUI** (utilidades y temas)
- **Quasar** → ❗ _solo para componentes específicos_ (ej: `QSelect`, `QDialog`)

### Estado y Arquitectura

- **Pinia** (estado global)
- **Composables** (toda la lógica)
- **Vue Router**

---

## 3. 📂 Estructura de Carpetas

### La estructura está orientada a **composición y reutilización**, no a vistas monolíticas. ej:

```
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── css/
│   ├── main.css
│   └── tailwind.css
│
├── components/
│   ├── ui/
│   │   ├── Button.vue
│   │   ├── Modal.vue
│   │   └── Input.vue
│   │
│   └── layout/
│       └── AppHeader.vue
│
├── layouts/
│   ├── DefaultLayout.vue
│   └── AuthLayout.vue
│
├── pages/
│   ├── HomePage.vue
│   └── LoginPage.vue
│
├── composables/
│   ├── useAuth.ts
│   ├── useFetch.ts
│   └── useForm.ts
│
├── stores/
│   ├── auth.store.ts
│   └── ui.store.ts
│
├── router/
│   └── index.ts
│
├── services/
│   └── api.ts
│
├── types/
│   └── index.ts
│
├── App.vue
├── main.ts
├── vite-env.d.ts
└── shims-vue.d.ts

```

---

## 4. 🧠 Principios de Arquitectura

### Regla de Oro

- **Los componentes NO contienen lógica de negocio**
- **Separación clara**
- **Componentes → UI pura**
- **Composables → lógica, estado local, efectos**
- **Pinia → estado global**
- **Services → comunicación HTTP**
- **Pages → orquestan, no procesan**

---

## 5. 🧩 Componentes

## Reglas

- **Deben ser presentacionales**
- **Props estrictamente tipadas** ej:
  ```
    interface Props = {
      modelValue: string
      disabled?: boolean
    }
    const props  = defineProps<Props>()
  ```
- **Sin llamadas HTTP**
- **Sin lógica compleja**
- **Emiten eventos, no decisiones**

---

## 6. 🔁 Composables (Centro de la Lógica)

- **Toda la lógica debe vivir aquí ej: `user.ts`**

  ```
     export function useUsers() {
      const users = ref<User[]>([])
      const isLoading = ref(false)

      async function fetchUsers() {
        isLoading.value = true
        users.value = await api.get('/users')
        isLoading.value = false
      }

      return {
        users,
        fetchUsers,
        isLoading
      }
    }
  ```

- **Fetch de datos**
- **Validaciones**
- **Transformaciones**
- **Estados locales**
- **Integración con stores**

---

## 7. 🗃️ Estado Global (Pinia)

### Cuándo usar Pinia

- **Autenticación**
- **Usuario actual**
- **UI global (modales, loaders)**
- **Datos compartidos entre páginas**

### Cuándo NO usarlo

- **Estado local de un formulario**
- **Datos temporales**
- **Lógica de componentes**

---

## 8. 🎨 UI Libraries – Reglas de Uso

### Generales

Las clases `css` que existen en `Quasar` y `Tailwinds` solo pueden ser usadas en los componentes de quasar eje de clases:

- `hidden`

### Tailwind CSS

- **Base del styling**
- **Clases utilitarias**
- **Nada de CSS global innecesario**

### Flowbite

- **Componentes base (buttons, modals, dropdowns)**
- **Se pueden extender con Tailwind**

### DaisyUI

- **Temas**
- **Variantes rápidas**
- **Utilidades visuales**

### Quasar (Uso Restringido)

#### Solo usar para componentes específicos, por ejemplo:

- **QSelect**
- **QDialog**
- **QDatePicker**

#### No usar:

- **Layout**
- **Sistema de grid**
- **Theming global**

---

## 9. 🔌 Comunicación con API

Toda llamada HTTP debe pasar por `services/api.ts` ej:

```
interface Api {
  get: <T>(url: string) => Promise<T>
  post: <T>(url: string, data: unknown) => Promise<T>
}

const api: Api = {
  get: <T>(url: string): Promise<T> => { ... },
  post: <T>(url: string, data: unknown): Promise<T> => { ... }
}
```

Nunca llamar fetch o axios directamente desde componentes.

---

## 10. 📏 Convenciones Obligatorias

- **script setup `lang="ts"`**
- **Tipado estricto en props, emits y retornos**
- **Nombres de composables con use**
- **Un composable = una responsabilidad**
- **Nada de lógica en templates**
- **Cuando use clase css ` dark:*` colocar `!` para priorizar estilo tailwind\*** ej:
  ```
    dark:bg-gray-900!
  ```
- **Usa interface para**: Definir la estructura de componentes, objetos de la API, modelos de datos y contratos de clases.
- **Usa type para**: Tipos lógicos, uniones, alias de tipos simples o cuando necesitas manipular tipos (Pick, Omit, etc.).

---

## 11. ❌ Antipatrones

- **Lógica en componentes**
- **Stores gigantes**
- **Estilos inline**
- **Componentes dependientes de API**
- **Uso excesivo de Quasar**

---

## 12. ✅ Checklist antes de entregar

- **¿La lógica está en un composable?**
- **¿El componente es reutilizable?**
- **¿Todo está tipado?**
- **¿Pinia solo cuando aplica?**
- **¿UI consistente con Tailwind / Flowbite / DaisyUI?**

---

## 13. 📌 Fuente de Verdad

Este documento define cómo se escribe frontend en este proyecto.
Cualquier excepción debe estar justificada y documentada.
