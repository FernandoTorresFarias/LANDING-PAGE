import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./button";
import { useToast } from "./use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Hola! Mi nombre es ${formData.name}.
Mensaje: ${formData.message}`;

    // WHATSAPP DE GUARDIAN DE ACERO
    const numeroWhatsApp = "+543804699955";

    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );

    toast({
      title: "¡Mensaje enviado!",
      description: "Abrimos WhatsApp para continuar la conversación.",
    });

    setFormData({ name: "", message: "" });
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-black via-[#020617] to-black"
    >
      <div className="container mx-auto px-4">

        {/* ⭐ TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(245,197,24,0.5)]">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos listos para proteger lo que más te importa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* ⭐ INFORMACIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">

              {/* Teléfono */}
              <div className="flex items-start space-x-4 group">
                <div className="
                  bg-yellow-500/15 p-3 rounded-lg border border-yellow-400/40
                  shadow-[0_0_12px_rgba(245,197,24,0.4)]
                  group-hover:shadow-[0_0_20px_rgba(245,197,24,0.7)]
                  transition-all
                ">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Teléfono</h3>
                  <p className="text-gray-300">+54 3804-699955</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="
                  bg-yellow-500/15 p-3 rounded-lg border border-yellow-400/40
                  shadow-[0_0_12px_rgba(245,197,24,0.4)]
                  group-hover:shadow-[0_0_20px_rgba(245,197,24,0.7)]
                  transition-all
                ">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-300">
                    guardiandeacero.srl@gmail.com
                  </p>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start space-x-4 group">
                <div className="
                  bg-yellow-500/15 p-3 rounded-lg border border-yellow-400/40
                  shadow-[0_0_12px_rgba(245,197,24,0.4)]
                  group-hover:shadow-[0_0_20px_rgba(245,197,24,0.7)]
                  transition-all
                ">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Dirección</h3>
                  <p className="text-gray-300">Pueyrredon 81</p>
                  <p className="text-gray-300">La Rioja, Argentina</p>
                </div>
              </div>

              {/* HORARIO FULL GOLD */}
              <div
                className="
                bg-black/60 p-8 rounded-2xl text-white
                border border-yellow-500/40
                shadow-[0_0_25px_rgba(245,197,24,0.3)]
                hover:shadow-[0_0_35px_rgba(245,197,24,0.5)]
                transition-all
              "
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-300 drop-shadow-[0_0_12px_rgba(245,197,24,0.5)]">
                  Horario de Atención
                </h3>
                <p className="mb-2">Lunes - Viernes: 8:00 a 12:30 hs</p>
                <p className="mb-2">Sábados: 9:00 a 12:30 hs</p>
                <p className="font-semibold mt-4 text-yellow-300">
                  Emergencias: 24/7
                </p>
              </div>
            </div>
          </motion.div>

          {/* ⭐ FORMULARIO FULL GOLD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="
                bg-black/75 p-8 rounded-2xl
                border border-yellow-500/40
                shadow-[0_0_25px_rgba(245,197,24,0.35)]
                hover:shadow-[0_0_40px_rgba(245,197,24,0.5)]
                transition-all
              "
            >
              <div className="space-y-6">

                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold text-yellow-300 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                      w-full px-4 py-3 rounded-lg
                      bg-black/60 border border-yellow-500/30
                      text-white
                      focus:border-yellow-400
                      focus:ring-2 focus:ring-yellow-500/40
                      outline-none transition-all
                    "
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold text-yellow-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="
                      w-full px-4 py-3 rounded-lg
                      bg-black/60 border border-yellow-500/30
                      text-white resize-none
                      focus:border-yellow-400
                      focus:ring-2 focus:ring-yellow-500/40
                      outline-none transition-all
                    "
                    placeholder="Contanos tus necesidades de seguridad..."
                  ></textarea>
                </div>

                {/* BOTÓN WHATSAPP FULL GOLD */}
                <Button
                  type="submit"
                  className="
                    w-full bg-yellow-500 hover:bg-yellow-400
                    text-lg py-6 text-black font-bold
                    shadow-[0_0_25px_rgba(245,197,24,0.6)]
                    hover:shadow-[0_0_40px_rgba(245,197,24,0.9)]
                    transition-all
                  "
                >
                  Enviar Mensaje por WhatsApp
                  <Send className="ml-2 w-5 h-5" />
                </Button>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;