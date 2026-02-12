import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

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

  // Typing animation
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

  // View counter
  useEffect(() => {
    const views = parseInt(localStorage.getItem("cvViews") || "0") + 1;
    localStorage.setItem("cvViews", views.toString());
    setViewCount(views);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".card, .project-card").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950/95 to-slate-950/80 backdrop-blur-md border-b border-cyan-500/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            RS
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">
              Sobre
            </a>
            <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition">
              Experiência
            </a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition">
              Projetos
            </a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition">
              Habilidades
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="w-64 h-64 flex-shrink-0">
              <div className="w-full h-full rounded-full border-4 border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                <div className="text-6xl text-cyan-400">👤</div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Rodrigo Silva
              </h1>
              <div className="text-2xl font-semibold text-cyan-400 mb-6 h-8">
                {typedTitle}
              </div>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Transformando dados complexos em decisões estratégicas. Especialista em construir narrativas de dados através de Dashboards interativos, automação inteligente e Machine Learning aplicado ao negócio.
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2">
                  <Mail size={18} />
                  Entre em Contato
                </Button>
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 gap-2">
                  <Download size={18} />
                  Baixar CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 pb-20">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
            Sobre Mim
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-cyan-500" />
          </h2>
          <div className="card bg-slate-800/50 border border-cyan-500/20 rounded-lg p-8 backdrop-blur-sm hover:border-cyan-500/40 transition">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sou um Analista de Dados apaixonado por transformar dados em insights acionáveis. Com experiência em Python, SQL, Power BI e Machine Learning, desenvolvo soluções que otimizam processos e impulsionam resultados de negócio.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Atualmente, estou focado em construir dashboards interativos com Streamlit e automação de processos de ETL. Meu objetivo é ajudar empresas a tomarem decisões baseadas em dados de forma mais eficiente.
            </p>
            <div className="flex flex-wrap gap-3">
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
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/30 cursor-pointer transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
            Experiência
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-cyan-500" />
          </h2>
          <div className="space-y-6">
            {[
              {
                date: "Jan 2022 - Presente",
                title: "Analista de Dados Pleno",
                company: "Empresa Tech Inovadora",
                description:
                  "Desenvolvimento de dashboards em Power BI para análise de performance comercial. Implementação de pipelines ETL com Python e automação de relatórios.",
              },
              {
                date: "Mar 2020 - Dez 2021",
                title: "Analista Financeiro",
                company: "Consultoria Financeira",
                description:
                  "Análise de dados financeiros, criação de modelos preditivos e relatórios gerenciais automatizados.",
              },
              {
                date: "Ago 2018 - Fev 2020",
                title: "Estagiário de Análise de Dados",
                company: "Startup de Tecnologia",
                description:
                  "Suporte em análise de dados, criação de visualizações e documentação de processos.",
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="card bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/40 transition relative pl-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-l-lg" />
                <div className="text-sm font-semibold text-cyan-400 mb-2">
                  {exp.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <div className="text-cyan-400 font-semibold mb-3">
                  {exp.company}
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
            Projetos
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-cyan-500" />
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Dashboard de Vendas",
                description:
                  "Dashboard interativo em Power BI com análise de performance de vendas em tempo real.",
                tags: ["Power BI", "SQL", "Excel"],
                link: "#",
              },
              {
                title: "Sistema de Recomendação",
                description:
                  "Modelo de Machine Learning para recomendação de produtos com Python e Scikit-learn.",
                tags: ["Python", "ML", "Pandas"],
                link: "#",
              },
              {
                title: "ETL Automatizado",
                description:
                  "Pipeline ETL com Python para extração e transformação de dados de múltiplas fontes.",
                tags: ["Python", "ETL", "SQL"],
                link: "#",
              },
              {
                title: "App Streamlit",
                description:
                  "Aplicação web interativa com Streamlit para análise exploratória de dados.",
                tags: ["Streamlit", "Python", "Pandas"],
                link: "#",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="project-card bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                >
                  Ver Projeto <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
            Habilidades
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-cyan-500" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Programação",
                skills: [
                  { name: "Python", level: 90 },
                  { name: "SQL", level: 80 },
                  { name: "Excel", level: 75 },
                ],
              },
              {
                category: "Ferramentas BI",
                skills: [
                  { name: "Power BI", level: 90 },
                  { name: "Streamlit", level: 85 },
                  { name: "Tableau", level: 80 },
                ],
              },
              {
                category: "Data Science",
                skills: [
                  { name: "Machine Learning", level: 85 },
                  { name: "Pandas", level: 95 },
                  { name: "Scikit-learn", level: 85 },
                ],
              },
              {
                category: "Soft Skills",
                skills: [
                  { name: "Comunicação", level: 90 },
                  { name: "Liderança", level: 80 },
                  { name: "Resolução de Problemas", level: 95 },
                ],
              },
            ].map((skillGroup, idx) => (
              <div key={idx} className="card bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
            Contato
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-cyan-500" />
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "rodrigo@example.com",
                link: "rodrigoeng857@gmail.com",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                value: "https://www.linkedin.com/in/rodrigo-s-45724116a/",
                link: "https://www.linkedin.com/in/rodrigo-s-45724116a/",
              },
              {
                icon: Github,
                title: "GitHub",
                value: "github.com/rodrigosilva",
                link: "https://github.com/RodrigoDSVDF",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.link}
                  className="contact-item bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition group"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-gray-400 text-sm">{contact.value}</p>
                </a>
              );
            })}
          </div>
        </section>

        {/* View Counter */}
        <div className="text-center text-gray-500 text-sm mb-8">
          Esta página foi visualizada {viewCount} vez{viewCount !== 1 ? "es" : ""}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Rodrigo Silva. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
