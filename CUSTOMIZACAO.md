# 🎨 Guia de Customização

Este documento descreve como customizar o site do seu CV para adicionar suas informações pessoais e ajustar o design conforme necessário.

## 📝 Editar Informações Pessoais

### 1. Alterar Nome e Título

**Arquivo**: `client/src/pages/Home.tsx`

Procure pela seção Hero e altere:

```typescript
// Linha ~100
<h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
  Rodrigo Silva  {/* ← Altere aqui */}
</h1>
```

### 2. Alterar Títulos Profissionais (Animação de Digitação)

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~25
const titles = [
  "Analista de Dados",      // ← Altere
  "Python Developer",       // ← Altere
  "BI Specialist",          // ← Altere
  "Data Storyteller"        // ← Altere
];
```

### 3. Alterar Descrição Profissional

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~110
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
  Transformando dados complexos em decisões estratégicas...
  {/* ← Altere este texto */}
</p>
```

### 4. Alterar Seção "Sobre Mim"

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~180
<p className="text-gray-300 mb-6 leading-relaxed">
  Sou um Analista de Dados apaixonado...
  {/* ← Altere este parágrafo */}
</p>
<p className="text-gray-300 mb-8 leading-relaxed">
  Atualmente, estou focado...
  {/* ← Altere este parágrafo */}
</p>
```

### 5. Alterar Habilidades Principais

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~195
{[
  "Python",
  "Pandas",
  "SQL",
  "Streamlit",
  "Power BI",
  "Machine Learning",
  "Excel Avançado",
  "ETL",
].map((skill) => (
  // ← Adicione ou remova habilidades neste array
))}
```

### 6. Alterar Experiências Profissionais

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~230
{[
  {
    date: "Jan 2022 - Presente",
    title: "Analista de Dados Pleno",
    company: "Empresa Tech Inovadora",
    description: "Desenvolvimento de dashboards...",
  },
  {
    date: "Mar 2020 - Dez 2021",
    title: "Analista Financeiro",
    company: "Consultoria Financeira",
    description: "Análise de dados financeiros...",
  },
  // ← Altere ou adicione mais experiências aqui
].map((exp, idx) => (
```

**Para adicionar uma nova experiência**, adicione um novo objeto ao array:

```typescript
{
  date: "Data Início - Data Fim",
  title: "Seu Título",
  company: "Nome da Empresa",
  description: "Descrição das atividades...",
}
```

### 7. Alterar Projetos

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~300
{[
  {
    title: "Dashboard de Vendas",
    description: "Dashboard interativo em Power BI...",
    tags: ["Power BI", "SQL", "Excel"],
    link: "#",
  },
  // ← Altere ou adicione mais projetos aqui
].map((project, idx) => (
```

**Para adicionar um novo projeto**:

```typescript
{
  title: "Nome do Projeto",
  description: "Descrição do projeto",
  tags: ["Tag1", "Tag2", "Tag3"],
  link: "https://seu-link.com",
}
```

### 8. Alterar Habilidades com Níveis

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~350
{[
  {
    category: "Programação",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Excel", level: 85 },
    ],
  },
  // ← Altere categorias, nomes e níveis aqui
].map((skillGroup, idx) => (
```

O `level` é um número de 0 a 100 que representa a porcentagem de proficiência.

### 9. Alterar Informações de Contato

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~410
{[
  {
    icon: Mail,
    title: "Email",
    value: "rodrigo@example.com",  // ← Altere
    link: "mailto:rodrigo@example.com",  // ← Altere
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/rodrigosilva",  // ← Altere
    link: "https://linkedin.com/in/seu-perfil",  // ← Altere
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/rodrigosilva",  // ← Altere
    link: "https://github.com/seu-usuario",  // ← Altere
  },
].map((contact, idx) => (
```

## 🎨 Customizar Cores e Design

### 1. Alterar Paleta de Cores

**Arquivo**: `client/src/index.css`

Procure pela seção `:root` e altere as variáveis CSS:

```css
:root {
  --primary: var(--color-cyan-500);        /* Cor primária */
  --accent: oklch(0.6 0.15 200);          /* Cor de destaque */
  --background: oklch(0.08 0.01 260);     /* Fundo */
  --foreground: oklch(0.95 0.01 260);     /* Texto principal */
  --card: oklch(0.12 0.01 260);           /* Fundo dos cards */
  --border: oklch(0.2 0.01 260);          /* Bordas */
}
```

**Cores OKLCH explicadas**:
- `oklch(luminância saturação matiz)`
- Luminância: 0 (preto) a 1 (branco)
- Saturação: 0 (cinza) a 0.4 (cores vibrantes)
- Matiz: 0-360 (ângulo da cor no círculo cromático)

**Exemplos de cores**:
- Cyan: `oklch(0.6 0.15 200)`
- Azul: `oklch(0.5 0.15 260)`
- Verde: `oklch(0.6 0.15 140)`
- Vermelho: `oklch(0.6 0.15 30)`
- Roxo: `oklch(0.6 0.15 300)`

### 2. Alterar Fonte

**Arquivo**: `client/index.html`

Altere o link do Google Fonts:

```html
<!-- Padrão (Geist) -->
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />

<!-- Exemplo: Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

<!-- Exemplo: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

**Arquivo**: `tailwind.config.ts`

Altere o nome da fonte:

```typescript
fontFamily: {
  sans: ["Geist", "system-ui", "sans-serif"],  // ← Altere "Geist"
  mono: ["Geist Mono", "monospace"],
}
```

### 3. Alterar Tamanhos e Espaçamento

**Arquivo**: `client/src/pages/Home.tsx`

Procure pelas classes Tailwind e altere:

```typescript
// Exemplo: Alterar tamanho do título
<h1 className="text-5xl md:text-6xl font-bold">  {/* ← text-5xl = mobile, text-6xl = desktop */}

// Exemplo: Alterar espaçamento
<div className="gap-12 mb-12">  {/* ← gap-12 = espaço entre itens, mb-12 = margem inferior */}
```

**Tamanhos de texto comuns**:
- `text-sm` - Pequeno
- `text-base` - Normal
- `text-lg` - Grande
- `text-xl` - Muito grande
- `text-2xl` - Enorme
- `text-3xl` - Gigante
- `text-4xl`, `text-5xl`, `text-6xl` - Títulos

**Espaçamento comuns**:
- `gap-2`, `gap-4`, `gap-6`, `gap-8`, `gap-12` - Espaço entre itens
- `mb-4`, `mb-8`, `mb-12` - Margem inferior
- `mt-4`, `mt-8` - Margem superior
- `p-4`, `p-6`, `p-8` - Padding interno

### 4. Alterar Efeitos de Hover

**Arquivo**: `client/src/pages/Home.tsx`

Procure por classes com `hover:`:

```typescript
className="hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition"
//         ↑ Altere estas classes
```

**Exemplos de hover effects**:
- `hover:bg-cyan-500/10` - Muda fundo
- `hover:text-cyan-400` - Muda cor do texto
- `hover:scale-105` - Aumenta tamanho
- `hover:shadow-lg` - Adiciona sombra

## 🖼️ Adicionar Foto de Perfil

### 1. Adicionar Imagem Local

**Arquivo**: `client/public/profile.jpg`

1. Coloque sua foto em `client/public/profile.jpg`
2. Edite `client/src/pages/Home.tsx` e procure por:

```typescript
// Linha ~90
<div className="profile-placeholder" id="profileImage">
  <i className="fas fa-user"></i>
</div>
```

3. Altere para:

```typescript
<img 
  src="/profile.jpg" 
  alt="Rodrigo Silva"
  className="w-64 h-64 rounded-full border-4 border-cyan-400 object-cover shadow-2xl shadow-cyan-500/20"
/>
```

### 2. Usar URL Externa

Se preferir usar uma URL de imagem:

```typescript
<img 
  src="https://seu-site.com/profile.jpg" 
  alt="Rodrigo Silva"
  className="w-64 h-64 rounded-full border-4 border-cyan-400 object-cover shadow-2xl shadow-cyan-500/20"
/>
```

## 📱 Alterar Responsividade

**Arquivo**: `client/src/pages/Home.tsx`

Procure por classes com `md:`, `lg:`, etc:

```typescript
// md: = aplica em telas médias (640px+)
// lg: = aplica em telas grandes (1024px+)
className="text-5xl md:text-6xl"  // 5xl em mobile, 6xl em desktop
```

## 🔗 Alterar Links de Navegação

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:

```typescript
// Linha ~50
<nav className="hidden md:flex gap-8">
  <a href="#about">Sobre</a>
  <a href="#experience">Experiência</a>
  <a href="#projects">Projetos</a>
  <a href="#skills">Habilidades</a>
  <a href="#contact">Contato</a>
</nav>
```

Altere os `href` para adicionar/remover seções.

## 🚀 Adicionar Novas Seções

### Exemplo: Adicionar Seção de Educação

1. Edite `client/src/pages/Home.tsx`
2. Adicione uma nova seção após experiência:

```typescript
{/* EDUCAÇÃO */}
<section id="education" className="mb-20">
  <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
    Educação
    <div className="absolute bottom-0 left-0 w-16 h-1 bg-cyan-500" />
  </h2>
  <div className="space-y-6">
    {[
      {
        year: "2020",
        title: "Bacharelado em Ciência de Dados",
        institution: "Universidade XYZ",
        description: "Descrição do curso..."
      }
    ].map((edu, idx) => (
      <div key={idx} className="card bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
        <div className="text-sm font-semibold text-cyan-400 mb-2">{edu.year}</div>
        <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
        <div className="text-cyan-400 font-semibold mb-3">{edu.institution}</div>
        <p className="text-gray-400">{edu.description}</p>
      </div>
    ))}
  </div>
</section>
```

3. Adicione o link na navegação:

```typescript
<a href="#education">Educação</a>
```

## 🎯 Dicas de Customização

1. **Sempre fazer backup** - Copie o arquivo antes de fazer grandes alterações
2. **Testar no navegador** - Use `pnpm dev` para ver mudanças em tempo real
3. **Mobile first** - Sempre teste em dispositivos móveis
4. **Cores consistentes** - Use a mesma paleta em todo o site
5. **Textos concisos** - Mantenha descrições breves e objetivas
6. **Atualizar links** - Certifique-se de que todos os links funcionam

## 🐛 Troubleshooting

### Cores não aparecem
- Verifique se as classes Tailwind estão corretas
- Reinicie o servidor com `pnpm dev`

### Layout quebrado
- Verifique se não removeu classes importantes
- Procure por erros no console do navegador

### Animações não funcionam
- Verifique se a classe `transition` está presente
- Certifique-se de que o Tailwind está compilando

### Imagem não aparece
- Verifique o caminho da imagem
- Certifique-se de que o arquivo existe em `client/public/`

---

**Dúvidas?** Consulte a documentação do Tailwind CSS em https://tailwindcss.com
