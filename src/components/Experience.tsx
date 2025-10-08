import { Briefcase, Calendar, Building2, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { useState } from 'react';

const workExperiences = [
  {
    company: "PT Semen Padang",
    location: "Padang, Indonesia",
    position: "Maintenance Engineer Intern",
    period: "Oct 2025 - Present",
    description: "PT Semen Padang, established in 1910 in Indarung, West Sumatra, is Indonesia's first cement company and now part of PT Semen Indonesia (Persero) Tbk (SIGI). With an annual production capacity of 8 million tons, the company operates plants, packing facilities, warehouses, and its own port to support efficient distribution. Its products range from bagged and bulk cement to innovative materials such as interlock bricks and porous concrete. As a pioneer in the industry, PT Semen Padang contributes to national infrastructure development while promoting sustainability and community empowerment.",
    achievements: [
      "Conducted regular inspections of cement production motors, including temperature, vibration, and oil quality monitoring.",
      "Performed analysis of motor failures based on collected temperature, vibration, and oil quality data to identify root causes and improve maintenance efficiency."
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "PT Semen Padang",
    location: "Padang, Indonesia",
    position: "Web Programmer Intern",
    period: "Mar 2022 - Aug 2022",
    description: "PT Semen Padang, established in 1910 in Indarung, West Sumatra, is Indonesia's first cement company and now part of PT Semen Indonesia (Persero) Tbk (SIGI). With an annual production capacity of 8 million tons, the company operates plants, packing facilities, warehouses, and its own port to support efficient distribution. Its products range from bagged and bulk cement to innovative materials such as interlock bricks and porous concrete. As a pioneer in the industry, PT Semen Padang contributes to national infrastructure development while promoting sustainability and community empowerment.",
    achievements: [
      "Experienced in punctuality and discipline in completing tasks.",
      "Proficient in knowledge and applications within the field of Electrical Engineering.",
      "Able to work effectively in a team environment.",
      "Strong communication skills, both clear and effective.",
      "Skilled in utilizing information technology to support work efficiency.",
      "Actively engaged in professional development and continuous learning.",
      "Developed a web-based database system for substation equipment.",
      "Responsible for performing routine maintenance and inspections of substation equipment."
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "PT Semen Padang",
    location: "Padang, Indonesia",
    position: "Automation Engineer Intern",
    period: "Feb 2022 - Mar 2022",
    description: "PT Semen Padang, established in 1910 in Indarung, West Sumatra, is Indonesia's first cement company and now part of PT Semen Indonesia (Persero) Tbk (SIGI). With an annual production capacity of 8 million tons, the company operates plants, packing facilities, warehouses, and its own port to support efficient distribution. Its products range from bagged and bulk cement to innovative materials such as interlock bricks and porous concrete. As a pioneer in the industry, PT Semen Padang contributes to national infrastructure development while promoting sustainability and community empowerment.",
    achievements: [
      "Developed a lubrication system for the Indarung V kiln unit.",
      "Gaining knowledge in automation and control systems."
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    company: "PT Kilang Pertamina International",
    location: "Dumai, Indonesia",
    position: "Electrical and Instrumentation Engineer Intern",
    period: "Nov 2021 - Dec 2021",
    description: "PT Kilang Pertamina International (KPI) Dumai is one of Pertamina's refinery units located in Dumai, Riau. The refinery plays a strategic role in producing various petroleum products such as fuel, LPG, and other petrochemical derivatives to meet regional and national energy demands. It also focuses on operational reliability, safety, and environmental sustainability.",
    achievements: [
      "Gained knowledge in electrical and instrumentation systems."
    ],
    color: "from-orange-500 to-red-500"
  }
];

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
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
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in engineering and web development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
          
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-[41px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-300" />

                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <motion.div 
                            className={`p-2.5 bg-gradient-to-br ${exp.color} rounded-xl`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Briefcase className="w-5 h-5 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                              {exp.position}
                            </h3>
                            <div className="flex items-center gap-2 text-primary mb-1">
                              <Building2 className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg border border-primary/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.period}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.div
                      initial={false}
                      animate={{ height: expandedIndex === index ? 'auto' : '0px' }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed pb-4">
                        {exp.description}
                      </p>
                    </motion.div>

                    {/* Toggle button */}
                    <motion.button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="text-xs text-primary hover:text-primary/80 transition-colors self-start flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedIndex === index ? '← Hide' : 'Read more →'}
                    </motion.button>

                    {/* Achievements */}
                    <div className="space-y-2.5 pt-2">
                      <p className="text-sm text-primary">Key Achievements:</p>
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start gap-3 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          <motion.div 
                            className={`w-2 h-2 bg-gradient-to-br ${exp.color} rounded-full mt-2 flex-shrink-0`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {achievement}
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
      </div>
    </section>
  );
}