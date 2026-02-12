import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin, ExternalLink, Brain, Database, LineChart, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [typedTitle, setTypedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Analista de Dados & BI",
    "Python Developer",
    "Arquiteto do Projeto Nexus",
    "Estrategista de Dados",
  ];

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCharIndex((prev) => prev - 1);
        setTypedTitle(currentTitle.substring(0, charIndex - 1));
      } else {
        setCharIndex((prev) => prev + 1);
        setTypedTitle(currentTitle.substring(0, charIndex + 1));
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-cyan-500/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
            NEXUS.ORIGIN
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            {["Sobre", "Projetos", "Skills", "Contato"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="w-64 h-64 rounded-2xl border-2 border-cyan-500/50 bg-slate-900 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent" />
                <div className="flex items-center justify-center h-full text-8xl">👤</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-emerald-500/30 rounded-full blur-2xl animate-pulse" />
            </motion.div>

            <div className="flex-1">
              <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
                Rodrigo <span className="text-cyan-400">Silva</span>
              </h1>
              <div className="text-2xl font-mono text-emerald-400 mb-6 min-h-[40px]">
                {typedTitle}<span className="animate-pulse">_</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                Especialista em converter fluxos complexos de informação em inteligência estratégica. 
                Arquiteto do ecossistema <span className="text-cyan-400 font-semibold">Nexus</span>, focado em alta performance mental e análise de dados aplicada a negócios e concursos.
              </p>
              <div className="flex gap-4">
                <Button className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-none px-8">
                  Ver Projetos
                </Button>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-none">
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Story Section */}
      <section id="sobre" className="py-24 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <ShieldCheck className="text-cyan-400 w-12 h-12" />
              <h3 className="text-xl font-bold">Fundação Estratégica</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Background sólido em segurança e vigilância no **CFO**, desenvolvendo atenção aos detalhes, gestão de riscos e disciplina operacional.
              </p>
            </div>
            <div className="space-y-4">
              <Brain className="text-emerald-400 w-12 h-12" />
              <h3 className="text-xl font-bold">Atleta Mental</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Praticante de metodologias de otimização cognitiva (Dual N-Back) e enxadrista, aplicando táticas de jogo na preparação para o concurso de **Policial Legislativo**.
              </p>
            </div>
            <div className="space-y-4">
              <Database className="text-blue-400 w-12 h-12" />
              <h3 className="text-xl font-bold">Data Driven</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Graduando em Ciência de Dados, transformando anos de lógica operacional em código Python e dashboards de Business Intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500" /> PROJETOS DE DESTAQUE
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Nexus Neuro-Scheduler",
                desc: "Micro-SaaS para gestão de táticas de estudo focado em atletas mentais e concurseiros de alto rendimento.",
                tech: ["React", "Python", "Tailwind"],
              },
              {
                title: "Análise PPDF 2022",
                desc: "Plataforma de visualização de dados de candidatos aprovados, facilitando a transparência e consulta de resultados.",
                tech: ["Data Analytics", "React", "Vite"],
              },
              {
                title: "Mega-Sena Premium Analysis",
                desc: "Dashboard em Streamlit com paywall para análise estatística de tendências e probabilidades lotéricas.",
                tech: ["Python", "Streamlit", "Pandas"],
              }
            ].map((p, i) => (
              <div key={i} className="group p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all">
                <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400">{p.title}</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex gap-2">
                  {p.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-tighter px-2 py-1 bg-slate-800 text-slate-400 border border-slate-700">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Rodrigo Silva // Desenvolvido com foco e lógica.
        </p>
      </footer>
    </div>
  );
}
