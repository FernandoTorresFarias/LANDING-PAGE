import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera, Users, Lock, Bell, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Videovigilancia',
    description: 'Sistemas de cámaras de alta definición con monitoreo 24/7 y almacenamiento en la nube.',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Seguridad Física',
    description: 'Personal de seguridad altamente capacitado para proteger tus instalaciones.',
    color: 'cyan'
  },
  {
    icon: Lock,
    title: 'Control de Acceso',
    description: 'Sistemas biométricos y tarjetas inteligentes para gestión de accesos.',
    color: 'indigo'
  },
  {
    icon: Bell,
    title: 'Alarmas',
    description: 'Sistemas de alarma conectados con respuesta inmediata ante emergencias.',
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'Consultoría',
    description: 'Análisis de riesgos y diseño de planes de seguridad personalizados.',
    color: 'cyan'
  },
  {
    icon: Smartphone,
    title: 'Monitoreo Remoto',
    description: 'Acceso desde tu smartphone a todos los sistemas de seguridad en tiempo real.',
    color: 'indigo'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones integrales de seguridad adaptadas a tus necesidades específicas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`bg-${service.color}-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;