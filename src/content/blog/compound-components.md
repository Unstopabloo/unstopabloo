---
title: Compound Components
description: Building a flexible UI system
category: Frontend
pubDate: 2024-05-20
readTime: 3min read
---

## Qué son

Los compound components son un patrón donde un componente padre expone subcomponentes que trabajan juntos compartiendo estado implícito. Ejemplo: `Card`, `Card.Header`, `Card.Body`.

## Ventajas

- API flexible y declarativa
- Composición sobre configuración
- Estado compartido sin prop drilling
- Mejor DX para consumidores

## Implementación

Usar React Context o slot composition para compartir estado entre padre e hijos. La clave es que el componente padre no renderiza todo el markup por sí solo.
