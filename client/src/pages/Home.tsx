import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Database, ShieldCheck, Brain, GraduationCap, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
// Importação da sua foto na pasta assets
import profilePic from "@/assets/ft01.png";

export default function Home() {
  const [viewCount, setViewCount] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Analista de Dados",
    "Python Developer",
    "BI Specialist",
    "Data Storyteller",
  ];

  // Efeito de Digitação
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

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

  // Contador de visualizações
  useEffect(() => {
    const views = parseInt(localStorage.getItem("cvViews") || "0") + 1;
    localStorage.setItem("cvViews", views.toString());
    setViewCount(views);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#020617]/95 backdrop-blur-md border-b border-cyan-500/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent uppercase">
            CURRÍCULO.DIGITAL
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experiência</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Formação</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-64 h-64 flex-shrink-0">
              <div className="w-full h-full rounded-2xl border-2 border-cyan-500/50 bg-slate-900 overflow-hidden shadow-2xl shadow-cyan-500/10">
                <img 
                  src={profilePic} 
                  alt="Rodrigo Silva" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-6xl font-extrabold mb-2 tracking-tight text-white">
                Rodrigo Silva
              </h1>
              <div className="text-2xl font-mono text-cyan-400 mb-6 h-8">
                {typedTitle}<span className="animate-pulse">|</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                Estrategista de Dados focado em transformar fluxos complexos em inteligência acionável. 
                Desenvolvedor focado em alta performance e arquitetura de dados aplicada.
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <Button className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-none px-8 gap-2" asChild>
                  <a href="mailto:rodrigoeng857@gmail.com">
                    <Mail size={18} /> rodrigoeng857@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl px-6 pb-20">
        
        {/* Resumo Section */}
        <section id="about" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500" /> RESUMO PROFISSIONAL
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900/50 border border-slate-800">
              <ShieldCheck className="text-cyan-400 mb-4" size={32} />
              <h3 className="font-bold mb-2">Segurança Estratégica</h3>
              <p className="text-sm text-slate-400">Disciplina operacional e gestão de riscos desenvolvida no CFO entre 2016 e 2025.</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800">
              <Brain className="text-emerald-400 mb-4" size={32} />
              <h3 className="font-bold mb-2">Performance Mental</h3>
              <p className="text-sm text-slate-400">Uso de táticas de xadrez e performance cognitiva para o concurso de Policial Legislativo.</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800">
              <Database className="text-blue-400 mb-4" size={32} />
              <h3 className="font-bold mb-2">Data Intelligence</h3>
              <p className="text-sm text-slate-400">Especializado em arquitetura de dados, automação Python e Dashboards estratégicos.</p>
            </div>
          </div>
        </section>

        {/* Experiência Section */}
        <section id="experience" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500" /> TRAJETÓRIA PROFISSIONAL
          </h2>
          <div className="space-y-6">
            {[
              { date: "2016 - 2025", title: "Vigilante / Segurança Estratégica", company: "CFO (Conselho Federal de Odontologia)", desc: "Gestão de segurança e controle operacional institucional." },
              { date: "Jan 2022 - Presente", title: "Projetos de Análise de Dados", company: "Portfolio Digital Labs", desc: "Arquitetura de dados, pipelines ETL e dashboards interativos." },
              { date: "2007 - 2011", title: "Serviço Militar", company: "Exército Brasileiro", desc: "Disciplina e formação em operações de logística e segurança." }
            ].map((exp, idx) => (
              <div key={idx} className="p-6 bg-slate-900/40 border border-slate-800 relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" />
                <span className="text-cyan-400 text-xs font-mono">{exp.date}</span>
                <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                <p className="text-emerald-400 text-sm mb-3">{exp.company}</p>
                <p className="text-slate-400 text-sm">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formação Acadêmica Section */}
        <section id="education" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500" /> FORMAÇÃO ACADÊMICA
          </h2>
          <div className="space-y-6">
            {[
              { 
                date: "2023 - 2026 (Previsão)", 
                title: "Bacharelado em Ciência de Dados", 
                institution: "Universidade Estácio", 
                status: "Cursando" 
              },
              { 
                date: "2016 - 2020", 
                title: "Gestão Financeira", 
                institution: "Unopar", 
                status: "Concluído" 
              }
            ].map((edu, idx) => (
              <div key={idx} className="p-6 bg-slate-900/40 border border-slate-800 relative flex items-start gap-4">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                <div className="mt-1">
                  <GraduationCap className="text-emerald-400" size={24} />
                </div>
                <div>
                  <span className="text-emerald-400 text-xs font-mono">{edu.date}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{edu.title}</h3>
                  <p className="text-slate-300 text-sm">{edu.institution}</p>
                  <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-400">
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cursos Complementares Section - NOVA SEÇÃO */}
        <section id="courses" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500" /> CURSOS COMPLEMENTARES
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Formação em Ciência de Dados com Python e R", provider: "Udemy" },
              { name: "Modelagem de Dados", provider: "Especialização" },
              { name: "MySQL / Banco de Dados Relacional", provider: "Udemy" },
              { name: "Curso Completo de Banco de Dados", provider: "Udemy" },
              { name: "Análise e Estatística em R", provider: "Estatística Aplicada" },
              { name: "Introdução ao Python e R", provider: "Tech Training" },
              { name: "Excel Intermediário", provider: "Corporativo" }
            ].map((course, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-slate-900/30 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-white">{course.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">{course.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfólio Section */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500" /> PORTFÓLIO DE PROJETOS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "Gestor de Táticas Cognitivas", 
                tags: ["React", "Python"], 
                desc: "Sistema para atletas mentais e concurseiros de alto rendimento.",
                link: "https://nexus-manual.com.br",
                btnLabel: "nexus-manual.com.br"
              },
              { 
                title: "Market Crypto Analysis", 
                tags: ["Streamlit", "Finance"], 
                desc: "Dashboard de análise de criptoativos em tempo real.",
                link: "https://marketcrypto.streamlit.app",
                btnLabel: "marketcrypto.streamlit.app"
              },
              { 
                title: "Análise PPDF 2022", 
                tags: ["Vite", "Analytics"], 
                desc: "Visualização de dados para o Concurso Polícia Penal 2022.",
                link: "https://aprovadosppdf2022.com",
                btnLabel: "aprovadosppdf2022.com"
              },
              { 
                title: "Mega-Sena Premium Analysis", 
                tags: ["Streamlit", "Python"], 
                desc: "Estatística preditiva e análise de tendências de dados.",
                link: "https://megasimulador.streamlit.app",
                btnLabel: "megasimulador.streamlit.app"
              },
              { 
                title: "Sistema Recomendador", 
                tags: ["ML", "Scikit-Learn"], 
                desc: "Algoritmos de sugestão baseados em comportamento de dados.",
                link: "#",
                btnLabel: "Ver Projeto"
              },
              { 
                title: "Automação de Fluxos ETL", 
                tags: ["Python", "Pandas"], 
                desc: "Processamento de grandes volumes de dados de múltiplas fontes.",
                link: "#",
                btnLabel: "Ver Projeto"
              }
            ].map((p, i) => (
              <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400">{p.title}</h4>
                    <ExternalLink size={16} className="text-slate-600" />
                  </div>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
                  <div className="flex gap-2 mb-6">
                    {p.tags.map(t => (
                      <span key={t} className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-800 text-cyan-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 rounded-none text-xs truncate" asChild>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    {p.btnLabel}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Conexões Section */}
        <section id="contact" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500" /> CONEXÕES PROFISSIONAIS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:rodrigoeng857@gmail.com" className="p-6 bg-slate-900 border border-slate-800 text-center hover:border-cyan-500/50 transition-all">
              <Mail className="mx-auto text-cyan-400 mb-3" size={24} />
              <h4 className="font-bold text-sm">E-mail</h4>
              <p className="text-xs text-slate-500 mt-2 truncate">rodrigoeng857@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-s-45724116a/" target="_blank" className="p-6 bg-slate-900 border border-slate-800 text-center hover:border-cyan-500/50 transition-all">
              <Linkedin className="mx-auto text-cyan-400 mb-3" size={24} />
              <h4 className="font-bold text-sm">LinkedIn</h4>
              <p className="text-xs text-slate-500 mt-2">Rodrigo S.</p>
            </a>
            <a href="https://github.com/RodrigoDSVDF" target="_blank" className="p-6 bg-slate-900 border border-slate-800 text-center hover:border-cyan-500/50 transition-all">
              <Github className="mx-auto text-cyan-400 mb-3" size={24} />
              <h4 className="font-bold text-sm">GitHub</h4>
              <p className="text-xs text-slate-500 mt-2">RodrigoDSVDF</p>
            </a>
          </div>
        </section>

        <div className="text-center text-slate-600 text-[10px] tracking-widest uppercase">
          Visualizações do Currículo: {viewCount} | Brasília, DF
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Rodrigo Silva // ESPECIALISTA EM DADOS
        </p>
      </footer>
    </div>
  );
}
