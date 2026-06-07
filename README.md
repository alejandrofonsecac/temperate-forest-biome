# 🌳 Floresta Sazonal Temperada — Museu Virtual

Projeto escolar desenvolvido para a 3ª série do Ensino Médio como parte do
trabalho **Museu Virtual dos Biomas do Mundo**.

---

## 🗂️ Estrutura do Projeto

```
floresta-sazonal-temperada/
├── frontend/     ← Aplicação React + TypeScript + TailwindCSS
└── backend/      ← (Em breve) API Spring Boot para o quiz
```

---

## 🚀 Como Rodar o Frontend

### Pré-requisitos
- **Node.js** v18 ou superior → https://nodejs.org
- **npm** (já vem junto com o Node)

### Passo a passo

```bash
# 1. Acesse a pasta do frontend
cd floresta-sazonal-temperada/frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:3000
```

### Build para produção

```bash
npm run build   # Gera a pasta dist/
npm run preview # Pré-visualiza o build
```

---

## 📄 Páginas do Site

| Rota       | Descrição                                      |
|------------|------------------------------------------------|
| `/`        | Página principal com todas as seções           |
| `/fauna`   | Galeria completa com 17 animais (filtro + busca)|
| `/flora`   | Galeria completa com 16 plantas (filtro + busca)|
| `/quiz`    | Quiz com 10 questões (múltipla escolha + somatória)|

---

## 🧩 Seções da Página Principal

1. **Hero** — Apresentação visual do bioma com animações Anime.js
2. **Caracterização** — Localização, clima, temperatura, solo, sazonalidade
3. **Biodiversidade** — Panorama da fauna/flora e adaptações sazonais
4. **Fauna** — Carrossel com 5 animais destaque + link para galeria
5. **Flora** — Carrossel com 5 plantas destaque + link para galeria
6. **Impactos Humanos** — Ameaças e estratégias de conservação
7. **Referências** — Fontes bibliográficas e digitais

---
## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **SpringBoot**
- **TailwindCSS 3** com configuração personalizada
- **React Router v6** para navegação
- **Anime.js** para animações (Hero)
- **Lucide React** para ícones
- **Vite** como bundler
- **IntersectionObserver API** para animações de scroll

---

## 📁 Onde Editar Conteúdo

| O que mudar            | Arquivo                          |
|------------------------|----------------------------------|
| Dados dos animais      | `src/data/faunaData.ts`          |
| Dados das plantas      | `src/data/floraData.ts`          |
| Questões do quiz       | `src/pages/Quiz.tsx` (topo do arquivo) |
| Seção de impactos      | `src/components/sections/ImpactosHumanos.tsx` |
| Seção de caracterização| `src/components/sections/Caracterizacao.tsx`  |
| Referências            | `src/components/sections/Referencias.tsx`     |
| Menu de navegação      | `src/components/layout/Header.tsx`            |
| Cores e tipografia     | `tailwind.config.ts` + `src/styles/globals.css`|

---

## 🔌 Integração com Backend (Spring Boot)

Quando o backend estiver pronto, localize o comentário
`PRÓXIMO PASSO` em `src/pages/Quiz.tsx` e substitua
os dados locais pela chamada à API:

```typescript
// Troque a constante questoesLocais por:
const [questoes, setQuestoes] = useState<Questao[]>([]);

useEffect(() => {
  fetch('/api/quiz/questoes')
    .then(r => r.json())
    .then(setQuestoes);
}, []);
```

O proxy do Vite já está configurado em `vite.config.ts`
para redirecionar `/api/*` → `http://localhost:8080`.

---

## 📚 Fontes Científicas Principais

- IUCN Red List — https://www.iucnredlist.org
- Archibold, O.W. — *Ecology of World Vegetation* (1995)
- Whittaker, R.H. — *Communities and Ecosystems* (1975)
- Global Forest Watch — https://www.globalforestwatch.org
- Euro+Med Plantbase — https://europlusmed.org
- IOC World Bird List v14.1

---

## 👥 Integrantes do Grupo

- Vinícius
- Leo  
- Jorge

**Bioma:** Floresta Sazonal Temperada  
**Disciplina:** Biologia — 3ª série do Ensino Médio
