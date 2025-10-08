import { Users, Calendar, MapPin, Building2 } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

const organizations = [
  {
    name: "Neo Telemetri",
    location: "Universitas Andalas, Padang, Indonesia",
    role: "Operational Coordinator",
    period: "Jul 2021 - Jun 2022",
    description: "A university-level student activity unit at Andalas University that focuses on Information Technology (IT).",
    activities: [
      "Conducted monitoring and evaluation of organizational management.",
      "Facilitated divisional meetings to ensure effective coordination.",
      "Served as facilitator in organizational upgrading and development programs.",
      "Organized and delivered Organizational Training for members.",
      "Actively involved in Neo Challenge as part of organizational activities.",
      "Facilitated performance improvement programs and documented achievements."
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "OSIS - SMAN 1 Dumai",
    location: "Dumai, Indonesia",
    role: "Ministry of Internal Affairs",
    period: "Jan 2017 - Dec 2017",
    description: "The official student organization within the school serves as a platform for students to develop leadership, responsibility, and teamwork.",
    activities: [
      "Coordinated the Internal Affairs Department within the Student Council.",
      "Prepared and organized equipment to support Student Council and school events."
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "BEM KM UNAND",
    location: "Universitas Andalas, Padang, Indonesia",
    role: "Internal Audit Staff",
    period: "Jul 2019 - Dec 2019",
    description: "The highest student executive body, functioning as the student government at the university level.",
    activities: [
      "Supervised and monitored the performance of organizational board members, ensuring responsibilities were properly fulfilled.",
      "Provided necessary reminders and disciplinary actions to maintain accountability and improve overall organizational effectiveness."
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "FORISTEK",
    location: "Universitas Andalas, Padang, Indonesia",
    role: "Academic Staff",
    period: "Jan 2020 - Dec 2020",
    description: "A student activity unit at the Faculty of Engineering, Andalas University, that focuses on religious and spiritual development.",
    activities: [
      "Supervised and enhanced the academic performance of engineering students at Andalas University, with a particular focus on guiding and supporting members of Foristek in their educational growth."
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    name: "FORISTEK",
    location: "Universitas Andalas, Padang, Indonesia",
    role: "Syiar Staff",
    period: "Jan 2019 - Dec 2019",
    description: "A student activity unit at the Faculty of Engineering, Andalas University, that focuses on religious and spiritual development.",
    activities: [
      "Promoted Islamic understanding and values among engineering students.",
      "Provided reminders and guidance to encourage spiritual growth within the student community."
    ],
    color: "from-yellow-500 to-amber-500"
  },
  {
    name: "Mosque Youth Organization",
    location: "Masjid Al-Hidayah, Dumai, Indonesia",
    role: "Social Staff",
    period: "Aug 2017 - Jul 2018",
    description: "A youth community based at Al-Hidayah Mosque, Dumai, focusing on religious, educational, and social activities.",
    activities: [
      "Engaged in social and community service activities within the mosque environment."
    ],
    color: "from-teal-500 to-cyan-500"
  },
  {
    name: "SMOTHER - SMAN 1 Dumai",
    location: "Dumai, Indonesia",
    role: "Video Editor",
    period: "Jan 2017 - Dec 2017",
    description: "Smother is a student media organization that focuses on journalism, media production, and creative content.",
    activities: [
      "Edited video documentation, news reports, and other multimedia content as part of the Smother media organization."
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    name: "OSIS - SMAN 1 Dumai",
    location: "Dumai, Indonesia",
    role: "Staff of Internal Affairs",
    period: "Jan 2016 - Dec 2016",
    description: "The official student organization within the school serves as a platform for students to develop leadership, responsibility, and teamwork.",
    activities: [
      "Prepared and managed equipment for OSIS and school events to ensure smooth execution of activities."
    ],
    color: "from-pink-500 to-rose-500"
  }
];

export function Organization() {
  return (
    <section id="organization" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl backdrop-blur-sm border border-primary/20">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
            Organizational Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership and community involvement throughout my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group relative overflow-hidden">
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${org.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className={`p-2 bg-gradient-to-br ${org.color} rounded-xl`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Users className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {org.role}
                      </h3>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Building2 className="w-3.5 h-3.5 text-primary" />
                        <p className="text-primary text-sm">{org.name}</p>
                      </div>
                      <div className="flex items-start gap-1.5 mb-2">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">{org.location}</p>
                      </div>
                      <motion.div 
                        className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg inline-flex border border-primary/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {org.period}
                      </motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {org.description}
                  </p>

                  {/* Activities */}
                  <div className="space-y-2">
                    <p className="text-xs text-primary">Key Activities:</p>
                    {org.activities.map((activity, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start gap-2.5 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <motion.div 
                          className={`w-1.5 h-1.5 bg-gradient-to-br ${org.color} rounded-full mt-1.5 flex-shrink-0`}
                          whileHover={{ scale: 1.8 }}
                        />
                        <p className="text-xs text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                          {activity}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}