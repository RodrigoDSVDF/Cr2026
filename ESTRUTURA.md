# 📁 Estrutura Completa do Projeto

## Visão Geral da Arquitetura

```
rodrigo-silva-cv/
│
├── 📄 Arquivos de Configuração
│   ├── package.json                 # Dependências e scripts
│   ├── tsconfig.json                # Configuração TypeScript
│   ├── tailwind.config.ts           # Configuração Tailwind CSS
│   ├── vite.config.ts               # Configuração Vite
│   ├── .gitignore                   # Arquivos ignorados pelo Git
│   └── README.md                    # Documentação principal
│
├── 📂 client/                       # Frontend (React)
│   │
│   ├── 📂 public/                   # Arquivos estáticos
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── ...
│   │
│   ├── 📂 src/                      # Código-fonte
│   │   │
│   │   ├── 📂 components/           # Componentes reutilizáveis
│   │   │   ├── 📂 ui/              # shadcn/ui components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── sonner.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── tooltip.tsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── ErrorBoundary.tsx    # Tratamento de erros
│   │   │   ├── Map.tsx              # Integração Google Maps
│   │   │   └── ...
│   │   │
│   │   ├── 📂 contexts/             # React Contexts
│   │   │   ├── ThemeContext.tsx     # Gerenciamento de tema
│   │   │   └── ...
│   │   │
│   │   ├── 📂 hooks/                # Custom Hooks
│   │   │   ├── useTheme.ts
│   │   │   └── ...
│   │   │
│   │   ├── 📂 lib/                  # Utilitários
│   │   │   ├── utils.ts             # Funções auxiliares
│   │   │   └── ...
│   │   │
│   │   ├── 📂 pages/                # Páginas/Rotas
│   │   │   ├── Home.tsx             # 🎯 Página principal do CV
│   │   │   ├── NotFound.tsx         # Página 404
│   │   │   └── ...
│   │   │
│   │   ├── App.tsx                  # Componente raiz com rotas
│   │   ├── main.tsx                 # Entry point React
│   │   └── index.css                # Estilos globais e temas
│   │
│   └── index.html                   # Template HTML principal
│
├── 📂 server/                       # Backend (Express)
│   ├── index.ts                     # Servidor Express
│   └── ...
│
├── 📂 shared/                       # Código compartilhado
│   ├── const.ts                     # Constantes
│   └── ...
│
└── 📂 .manus-logs/                  # Logs da aplicação
    ├── devserver.log                # Logs do servidor
    ├── browserConsole.log           # Console do navegador
    ├── networkRequests.log          # Requisições HTTP
    └── sessionReplay.log            # Eventos de interação
```

## 📄 Descrição Detalhada dos Arquivos

### Configuração (Raiz)

| Arquivo | Propósito |
|---------|-----------|
| `package.json` | Define dependências, scripts e metadados do projeto |
| `tsconfig.json` | Configuração do compilador TypeScript |
| `tailwind.config.ts` | Customizações do Tailwind CSS (cores, fontes, etc) |
| `vite.config.ts` | Configuração do bundler Vite |
| `.gitignore` | Arquivos/pastas ignorados pelo Git |
| `README.md` | Documentação principal do projeto |
| `ESTRUTURA.md` | Este arquivo - documentação da estrutura |

### Frontend - Client

#### `client/index.html`
- Template HTML principal
- Meta tags (viewport, charset, etc)
- Links para Google Fonts (Geist)
- Script de analytics (Umami)
- Div raiz para React: `<div id="root"></div>`

#### `client/src/main.tsx`
- Entry point da aplicação React
- Renderiza o componente `App` na div root
- Importa estilos globais

#### `client/src/App.tsx`
- Componente raiz da aplicação
- Define rotas com Wouter
- Configura ThemeProvider (dark mode)
- Configura TooltipProvider
- Renderiza Toaster para notificações

#### `client/src/index.css`
- Estilos globais com Tailwind
- Definição de variáveis CSS para tema escuro
- Temas OKLCH para cores
- Estilos de scrollbar customizados
- Animações globais

#### `client/src/pages/Home.tsx` 🎯
**Página principal do CV com todas as seções:**

1. **Header**
   - Logo com gradiente
   - Navegação responsiva
   - Links suaves para seções

2. **Hero Section**
   - Foto de perfil circular
   - Animação de digitação no título
   - Descrição profissional
   - Botões de CTA

3. **Seção Sobre**
   - Descrição pessoal
   - Tags de habilidades principais

4. **Seção Experiência**
   - Timeline visual
   - 3 posições profissionais
   - Datas, títulos, empresas e descrições

5. **Seção Projetos**
   - Grid de 4 projetos
   - Cards com tags de tecnologia
   - Links para projetos

6. **Seção Habilidades**
   - 4 categorias (Programação, BI, Data Science, Soft Skills)
   - Barras de progresso animadas
   - Percentuais de proficiência

7. **Seção Contato**
   - 3 canais (Email, LinkedIn, GitHub)
   - Cards interativos com ícones

8. **Footer**
   - Copyright com ano dinâmico
   - Contador de visualizações

#### `client/src/pages/NotFound.tsx`
- Página 404 para rotas não encontradas
- Link para voltar à home

#### `client/src/components/`

**Componentes UI (shadcn/ui):**
- `button.tsx` - Botões reutilizáveis
- `card.tsx` - Cards base
- `dialog.tsx` - Modais
- `dropdown-menu.tsx` - Menus dropdown
- `input.tsx` - Inputs de formulário
- `label.tsx` - Labels
- `select.tsx` - Selects
- `textarea.tsx` - Textareas
- `tooltip.tsx` - Tooltips
- `sonner.tsx` - Notificações toast
- E mais...

**Componentes Customizados:**
- `ErrorBoundary.tsx` - Tratamento de erros React
- `Map.tsx` - Integração com Google Maps

#### `client/src/contexts/ThemeContext.tsx`
- Gerencia tema (dark/light)
- Persiste preferência no localStorage
- Fornece hook `useTheme()` para componentes

#### `client/src/hooks/`
- `useTheme.ts` - Hook para acessar contexto de tema
- Outros hooks customizados conforme necessário

#### `client/src/lib/utils.ts`
- Funções utilitárias
- Helpers para manipulação de dados
- Funções de formatação

#### `client/public/`
- Arquivos estáticos (favicon, robots.txt)
- Imagens que não mudam
- Arquivos que são copiados para a build

### Backend - Server

#### `server/index.ts`
- Servidor Express
- Serve arquivos estáticos
- Fallback para index.html (client-side routing)
- Porta padrão: 3000

### Código Compartilhado

#### `shared/const.ts`
- Constantes usadas em frontend e backend
- URLs de API
- Configurações globais

## 🎨 Fluxo de Dados

```
index.html
    ↓
main.tsx (entry point)
    ↓
App.tsx (rotas e contextos)
    ↓
Home.tsx (página principal)
    ↓
Componentes UI + Lógica
    ↓
Renderização no navegador
```

## 🔄 Fluxo de Desenvolvimento

1. **Editar código** em `client/src/`
2. **Vite detecta mudanças** (HMR - Hot Module Replacement)
3. **Navegador atualiza automaticamente**
4. **Logs disponíveis em `.manus-logs/`**

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Build
pnpm build        # Cria build otimizada para produção

# Preview
pnpm preview      # Visualiza build de produção localmente

# Verificação
pnpm check        # Verifica tipos TypeScript
pnpm format       # Formata código com Prettier
```

## 🎯 Customizações Comuns

### Adicionar Nova Página
1. Criar arquivo em `client/src/pages/NovaPage.tsx`
2. Importar em `App.tsx`
3. Adicionar rota em `Router()`

### Adicionar Novo Componente
1. Criar em `client/src/components/MeuComponente.tsx`
2. Importar onde necessário
3. Usar em páginas ou outros componentes

### Alterar Cores
1. Editar variáveis CSS em `client/src/index.css`
2. Usar classes Tailwind nos componentes

### Adicionar Dependência
```bash
pnpm add nome-do-pacote
pnpm dev  # Reiniciar servidor
```

## 🚀 Deploy

### Manus
- Clique em "Publish" na interface
- Domínio automático: `xxx.manus.space`

### GitHub Pages
- Build: `pnpm build`
- Deploy pasta `dist/`

### Netlify/Vercel
- Conectar repositório
- Build command: `pnpm build`
- Publish directory: `dist`

## 📊 Estrutura de Dados

### Experiências (Home.tsx)
```typescript
{
  date: "Jan 2022 - Presente",
  title: "Analista de Dados Pleno",
  company: "Empresa Tech Inovadora",
  description: "..."
}
```

### Projetos (Home.tsx)
```typescript
{
  title: "Dashboard de Vendas",
  description: "...",
  tags: ["Power BI", "SQL"],
  link: "#"
}
```

### Habilidades (Home.tsx)
```typescript
{
  category: "Programação",
  skills: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 }
  ]
}
```

## 🔐 Variáveis de Ambiente

Injetadas automaticamente pelo Manus:
- `VITE_APP_ID` - ID da aplicação
- `VITE_APP_TITLE` - Título da app
- `VITE_ANALYTICS_ENDPOINT` - Endpoint de analytics
- `VITE_ANALYTICS_WEBSITE_ID` - ID do website para analytics

## 📝 Notas Importantes

1. **Não editar backend** - `server/` é apenas placeholder
2. **Manter estilos globais** - Não remover `@layer` do index.css
3. **Usar componentes UI** - Reutilizar shadcn/ui quando possível
4. **Responsividade** - Sempre testar em mobile
5. **Performance** - Evitar componentes não-memoizados em listas

---

**Última atualização**: Fevereiro 2026
