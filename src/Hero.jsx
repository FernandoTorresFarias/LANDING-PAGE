import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import GuardianIcon from "./assets/guardian.png";
import Seguridadpng from "./assets/seguridad.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

      {/* ⭐ FONDO FULL BLACK & GOLD */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0f] to-[#000000]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ⭐ COLUMNA IZQUIERDA - TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* BADGE PREMIUM */}
            <div
              className="
                inline-flex items-center space-x-2
                bg-black/40 px-5 py-2 rounded-full mb-6
                backdrop-blur-xl border border-yellow-500/50
                shadow-[0_0_18px_rgba(245,197,24,0.4)]
              "
            >
              <img
                src={GuardianIcon}
                className="w-8 h-10 drop-shadow-[0_0_10px_rgba(245,197,24,0.8)]"
                alt="Guardian Icon"
              />
              <span className="text-sm font-semibold text-yellow-300 tracking-wide">
                Seguridad Profesional 24/7
              </span>
            </div>

            {/* TITULO PRINCIPAL */}
            <h1
              className="
                text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white
                drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
              "
            >
              Protegemos lo que más{" "}
              <span
                className="
                  bg-clip-text text-transparent 
                  bg-gradient-to-r from-yellow-400 to-yellow-600
                  drop-shadow-[0_0_18px_rgba(245,197,24,0.7)]
                "
              >
                valoras
              </span>
            </h1>

            {/* DESCRIPCIÓN */}
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Soluciones integrales de seguridad con tecnología avanzada y personal altamente capacitado.
              Brindamos confianza, profesionalismo y protección de primer nivel.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="
                  bg-yellow-500 hover:bg-yellow-400
                  text-lg text-black font-bold
                  shadow-[0_0_22px_rgba(245,197,24,0.7)]
                  hover:shadow-[0_0_32px_rgba(245,197,24,0.95)]
                  transition-all duration-300
                "
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="
                  text-lg border-2 border-yellow-500 text-yellow-300
                  hover:bg-yellow-500 hover:text-black
                  transition-all duration-300
                "
              >
                Conocer Más
              </Button>
            </div>
          </motion.div>

          {/* ⭐ COLUMNA DERECHA - IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* IMAGEN PRINCIPAL FULL GOLD */}
            <div
              className="
                relative rounded-2xl overflow-hidden
                shadow-[0_0_40px_rgba(245,197,24,0.25)]
                border border-yellow-500/40
              "
            >
              <img
                src={Seguridadpng}
                className="
                  w-full h-full object-cover 
                  opacity-95
                  drop-shadow-[0_0_20px_rgba(245,197,24,0.4)]
                "
                alt="Seguridad"
              />
            </div>

            {/* TARJETA DE EFECTIVIDAD */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="
                absolute -bottom-6 -left-6
                bg-black/70 p-6 rounded-xl backdrop-blur-md
                border border-yellow-500/50
                shadow-[0_0_25px_rgba(245,197,24,0.45)]
              "
            >
              <div className="flex items-center space-x-4">

                <div
                  className="
                    bg-yellow-500/20 p-4 rounded-full
                    border border-yellow-400/60
                    shadow-[0_0_18px_rgba(245,197,24,0.6)]
                  "
                >
                  <img
                    src={GuardianIcon}
                    className="w-8 h-10 drop-shadow-[0_0_10px_rgba(245,197,24,0.9)]"
                    alt="Icon"
                  />
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">
                    99.9%
                  </p>
                  <p className="text-sm text-yellow-300 font-medium">Efectividad</p>
                </div>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;