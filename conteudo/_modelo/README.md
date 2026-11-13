# Modelo de carrossel · Bom Negócio Imóveis

Padrão visual único para os carrosséis do feed (1080 × 1350 px).

- **Títulos:** Cormorant Garamond (sem itálico). Destaque de palavra = cor dourada, nunca itálico.
- **Texto:** Montserrat.
- **Fundos:** azul-noite (`.dark`) alternado com champanhe (`.light`). Verde (`.green`) só para material do Terras Alpha.
- **Último slide:** CTA "Siga o perfil" com @bomnegocioimoveisbh.

## Como criar um carrossel novo

1. Crie a pasta `conteudo/NN-carrossel-nome/fonte/` e dentro dela um `slides.html`:
   - No topo: `<link rel="stylesheet" href="../../_modelo/carrossel.css">`.
   - Um `<section class="s dark">` ou `<section class="s light">` por slide (ver os carrosséis existentes como exemplo).
   - No fim do `<body>`: `<script src="../../_modelo/modelo.js"></script>` (ele monta o rodapé e a paginação sozinho).
2. Exporte as imagens, o PDF e a prévia:
   ```
   node conteudo/_modelo/exportar.js conteudo/NN-carrossel-nome
   ```
