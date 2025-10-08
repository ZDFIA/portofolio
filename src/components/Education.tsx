import { GraduationCap, Award, Calendar, MapPin, Trophy } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

const education = [
  {
    institution: "Universitas Andalas",
    location: "Limau Manis Street, Pauh, Padang, West Sumatera, Indonesia",
    degree: "Bachelor of Electrical Engineering",
    gpa: "3.32/4.00",
    period: "Aug 2018 - Jul 2025",
    achievements: [
      "Recipient of PKM-GT (Student Creativity Program – Written Idea) Incentive, awarded by the Ministry of Education and Culture, Indonesia (2021)",
      "Director of Information Communication Technology, Engineering School Student Executive Board of the Faculty of Engineering (ES BEM KM FT) (2018-2019)",
      "Syiar Staff, Islamic Studies Forum of Engineering (FORISTEK) (2019)",
      "Academic Staff, Islamic Studies Forum of Engineering (FORISTEK) (2020)",
      "Internal Auditor, Student Executive Board (BEM KM) (2019)",
      "Operational Director, Neo Challenge (2021-2022)"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    institution: "SMAN 1 Dumai",
    location: "Soekarno-Hatta Street, Bukit Jln, Dumai Selatan, Dumai, Riau, Indonesia",
    degree: "Senior High School, Science",
    gpa: "89.00/100.00",
    period: "Aug 2015 - May 2018",
    achievements: [
      "Bronze Medal Certificate for English Proficiency Competition Grade 10-12 in the PCCST Academic Festival and Science Fair 2016 at Prinsess Chulabhorn's College, Chaling, Mueang, Satun District, Satun, Thailand",
      "Ministry of Internal Affairs, Student Council (OSIS) (2017)",
      "Video Editor, SMAN 1 Momen Hunter (SMOTHER) (2017)",
      "Staff of Internal Affairs, Student Council (OSIS) (2016)"
    ],
    color: "from-purple-500 to-pink-500"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
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
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${edu.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex flex-col gap-4 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className={`p-2.5 bg-gradient-to-br ${edu.color} rounded-xl`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary mb-1">{edu.institution}</p>
                      <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Info badges */}
                  <div className="flex flex-wrap gap-2">
                    <motion.div 
                      className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg border border-primary/10"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {edu.period}
                    </motion.div>
                    <motion.div 
                      className={`flex items-center gap-1.5 text-xs bg-gradient-to-r ${edu.color} text-white px-3 py-1.5 rounded-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      GPA: {edu.gpa}
                    </motion.div>
                  </div>

                  {/* Achievements */}
                  {edu.achievements.length > 0 && (
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-primary" />
                        <h4 className="text-sm text-foreground">Achievements & Activities</h4>
                      </div>
                      <div className="space-y-2.5 flex-1">
                        {edu.achievements.map((achievement, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-3 group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                          >
                            <motion.div 
                              className={`w-2 h-2 bg-gradient-to-br ${edu.color} rounded-full mt-1.5 flex-shrink-0`}
                              whileHover={{ scale: 1.5 }}
                            />
                            <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}