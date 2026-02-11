import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Seção Principal (Hero) */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-around p-10">
        
        {/* Lado Esquerdo: Texto surgindo da Esquerda */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-6xl font-bold mb-4">Adrian Hatori</h1>
          <p className="text-xl text-slate-400 border-l-4 border-blue-500 pl-4">
            Dev Fullstack, Corretor e Filmmaker. <br />
            Criando experiências digitais com olhar cinematográfico.
          </p>
          
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
              Ver Projetos
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition">
              Contato
            </button>
          </div>
        </motion.div>

        {/* Lado Direito: Foto com Fade e Scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20"
        >
          {/* Por enquanto deixei um placeholder, depois você coloca sua foto na pasta public */}
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" 
            alt="Adrian Hatori"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Próxima Seção (Só pra você sentir o scroll) */}
      <section className="h-screen flex items-center justify-center bg-slate-900">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl text-slate-500"
        >
          Role para baixo para ver a mágica...
        </motion.h2>
      </section>
    </div>
  );
}

export default App;