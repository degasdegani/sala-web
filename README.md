<h1 align="center">S.A.L.A Tecnologia</h1>

<p align="center">
  <strong>Website institucional</strong><br>
  Apresentação da empresa, dos produtos do ecossistema LIVO e captação de contato.
</p>

<p align="center">
<p align="center">
  <a href="https://sala-web.vercel.app"><strong>Ver em produção →</strong></a>
</p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-App_Router-000000?logo=nextdotjs&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white">
  <img alt="Vercel" src="https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white">
</p>

---

## Sobre

Site institucional da S.A.L.A Tecnologia, empresa responsável pelo ecossistema LIVO — plataformas SaaS de gestão para negócios de serviço.

O site apresenta a empresa, os produtos e converte visitante em contato. Foi construído do zero, sem construtor visual, o que permitiu controle direto sobre performance, semântica e SEO técnico — três coisas que ficam fora do alcance quando o HTML é gerado por uma ferramenta.

## Objetivos do projeto

1. **Carregamento rápido** — página institucional lenta perde o visitante antes de comunicar qualquer coisa
2. **SEO técnico** — ser encontrável por quem procura o produto sem conhecer a marca
3. **Identidade visual consistente** — o site é o primeiro contato com a marca dos produtos LIVO

---

## Decisões técnicas

### Conteúdo estático servido pela borda

As páginas institucionais não mudam entre requisições. Servi-las como HTML já pronto elimina processamento no servidor e entrega o conteúdo direto do ponto de distribuição mais próximo do visitante.

O efeito aparece no tempo até o primeiro conteúdo visível — a métrica que mais influencia abandono em site de apresentação, onde o visitante decide em poucos segundos se fica.

### SEO como parte da implementação, não como ajuste final

Metadados por página, tags Open Graph, hierarquia semântica de cabeçalhos e URLs legíveis foram tratados junto com cada página, e não numa passada no fim do projeto.

A diferença não é de esforço, é de resultado: SEO adicionado depois costuma esbarrar em estrutura de HTML construída sem pensar nisso, e a correção vira refatoração.

### Componentização por seção

Hero, cards de produto, chamada para ação e bloco de contato foram construídos como componentes parametrizados. Montar uma nova página de campanha passa a ser combinar seções existentes, em vez de duplicar layout — o que evita a divergência visual que aparece quando cada página é escrita do zero.

### Otimização de imagem e fonte

Imagens servidas em formato moderno com dimensionamento responsivo, e fontes carregadas com estratégia que evita deslocamento de layout durante o carregamento — aquele salto de conteúdo que acontece quando a fonte definitiva substitui a de fallback.

---

## Performance

Resultados do Lighthouse na versão de produção:

| Métrica        | Resultado |
| -------------- | --------- |
| Performance    | [88]      |
| Acessibilidade | [100]     |
| Boas práticas  | [100]     |
| SEO            | [100]     |

> Medido com Lighthouse em modo mobile, que simula rede e processador limitados.

---

## Stack

| Camada        | Tecnologias                             |
| ------------- | --------------------------------------- |
| **Framework** | Next.js (App Router), React, TypeScript |
| **Estilo**    | Tailwind CSS                            |
| **Animação**  | GSAP                                    |
| **Deploy**    | Vercel                                  |

---

## Rodando localmente

```bash
git clone https://github.com/degasdegani/sala-web.git
cd sala-web
npm install
npm run dev
```

Aplicação disponível em `http://localhost:3000`.

---

## Autor

**Eduardo Degani** — Desenvolvedor Full Stack
[LinkedIn](https://linkedin.com/in/eduardo-degani) · [GitHub](https://github.com/degasdegani) · contatodegani@gmail.com
