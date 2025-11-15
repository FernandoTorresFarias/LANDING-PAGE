import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Clientes Satisfechos" },
  { number: "15+", label: "Años de Experiencia" },
  { number: "24/7", label: "Monitoreo Continuo" },
  { number: "99.9%", label: "Tasa de Efectividad" }
];

const Statas = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-[#020617] to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
              className="text-center"
            >
              <div
                className="
                  text-4xl md:text-5xl font-extrabold mb-2
                  text-transparent bg-clip-text
                  bg-gradient-to-b from-yellow-300 to-yellow-600
                  drop-shadow-[0_0_18px_rgba(245,197,24,0.7)]
                "
              >
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statas;