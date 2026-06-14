# Vault Study · ISW-521

Repaso gamificado basado en `ISW521_Resumen_Examen_TDAH.docx`.

## Cómo ejecutar

Opción rápida:

1. Descomprimir el ZIP.
2. Abrir `index.html` en el navegador.

Opción recomendada:

```bash
python -m http.server 5500
```

Luego abrir:

```text
http://localhost:5500
```

## Qué incluye

- Dashboard estilo dark vault inspirado en la referencia visual.
- Sección de teoría + explicaciones por clase.
- Challenge gamificado con preguntas de opción múltiple.
- Estadísticas acumuladas.
- Tabla de puntajes persistente con `localStorage`.
- Exportación de progreso a JSON.
- Sin frameworks, sin dependencias externas, listo para ejecutar.

## Persistencia local

El progreso se guarda en el navegador usando la clave:

```text
isw521-vault-study-v1
```

Para limpiar todo desde la interfaz, usar el botón `Reset`.
