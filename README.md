# Rodrigo Silva | Data Analyst CV Website

Um site profissional de currículo moderno, responsivo e interativo construído com React 19, Tailwind CSS 4 e TypeScript.

## 🎨 Design & Estética

- **Tema**: Dark mode sofisticado com acentos em cyan/azul
- **Tipografia**: Fonte Geist para uma aparência moderna e limpa
- **Animações**: Transições suaves, efeito de digitação no título e animações de scroll
- **Responsividade**: Totalmente responsivo para desktop, tablet e mobile

## 🚀 Funcionalidades

- ✨ Animação de digitação dinâmica no título
- 📊 Seções bem estruturadas (Sobre, Experiência, Projetos, Habilidades, Contato)
- 🎯 Barras de progresso animadas para habilidades
- 🔗 Navegação suave entre seções
- 📱 Design responsivo e mobile-first
- 🎭 Efeitos visuais sofisticados com gradientes e blur
- 📈 Contador de visualizações usando localStorage
- 🎨 Paleta de cores profissional e consistente

## 📁 Estrutura do Projeto

```
rodrigo-silva-cv/
├── client/
│   ├── public/              # Arquivos estáticos
│   │   └── ...
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── ui/         # Componentes shadcn/ui
│   │   │   └── ...
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilitários
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Página principal do CV
│   │   │   └── NotFound.tsx # Página 404
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais e temas
│   └── index.html           # HTML template
├── server/                  # Backend placeholder
├── shared/                  # Tipos compartilhados
├── package.json             # Dependências
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── vite.config.ts           # Configuração Vite
```

## 🛠️ Stack Tecnológico

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter
- **Icons**: Lucide React
- **Animations**: CSS transitions & keyframes

## 📦 Instalação & Setup

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado)

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build de produção
pnpm preview
```

## 🎯 Seções do Site

### 1. **Header**
- Logo com gradiente cyan-blue
- Navegação com links suaves
- Fixed no topo com backdrop blur

### 2. **Hero Section**
- Foto de perfil circular com animação
- Título com efeito de digitação
- Descrição profissional
- Botões de CTA (Contato e Download CV)

### 3. **Sobre Mim**
- Descrição profissional
- Tags de habilidades principais
- Estilo card com hover effects

### 4. **Experiência**
- Timeline visual com 3 posições
- Datas, títulos e descrições
- Barra lateral colorida em cada card

### 5. **Projetos**
- Grid de 4 projetos
- Tags de tecnologias
- Links para projetos (placeholder)
- Hover effects sofisticados

### 6. **Habilidades**
- 4 categorias de habilidades
- Barras de progresso animadas
- Percentuais de proficiência
- Grid responsivo

### 7. **Contato**
- 3 canais de contato (Email, LinkedIn, GitHub)
- Cards interativos com ícones
- Links funcionais

### 8. **Footer**
- Ano dinâmico
- Copyright

## 🎨 Paleta de Cores

| Elemento | Cor | Valor |
|----------|-----|-------|
| Background | Slate 950 | `#0f172a` |
| Card Background | Slate 800 | `#1e293b` |
| Text Primary | White | `#ffffff` |
| Text Secondary | Gray 400 | `#9ca3af` |
| Accent | Cyan 400 | `#22d3ee` |
| Accent Hover | Cyan 600 | `#0891b2` |

## 🔧 Customização

### Alterar Informações Pessoais
Edite `/client/src/pages/Home.tsx`:
- Nome, título profissional
- Descrição pessoal
- Experiências profissionais
- Projetos
- Habilidades
- Informações de contato

### Alterar Cores
Edite `/client/src/index.css`:
- Variáveis CSS para tema escuro
- Paleta de cores OKLCH

### Alterar Fontes
Edite `/client/index.html`:
- Link do Google Fonts
- Edite `/tailwind.config.ts` para registrar novas fontes

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Opção 1: Manus (Recomendado)
O site está pronto para deploy na plataforma Manus:
1. Clique em "Publish" na interface do Manus
2. Configure domínio customizado se desejar
3. Site estará disponível em `xxx.manus.space`

### Opção 2: GitHub Pages
```bash
# Build
pnpm build

# Fazer push dos arquivos de dist/ para seu repositório
```

### Opção 3: Netlify/Vercel
1. Conecte seu repositório
2. Configure build command: `pnpm build`
3. Configure publish directory: `dist`

## 📊 Performance

- ⚡ Otimizado para Lighthouse
- 🎯 Core Web Vitals otimizados
- 📦 Bundle size mínimo
- 🔄 Lazy loading de componentes

## 🔐 Segurança

- ✅ Sem dados sensíveis no frontend
- ✅ HTTPS por padrão no Manus
- ✅ Proteção contra XSS
- ✅ Headers de segurança configurados

## 📝 Licença

MIT

## 👨‍💻 Autor

Rodrigo Silva - Data Analyst

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**
