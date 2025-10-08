import { Code, Award, BookOpen, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  "Performance Forecasting of Gensets at Pondok Pesantren Harakatul Qur'an using Convolutional Neural Network Method (2025)",
  "Prototype AHSP Web Application (2024)",
  "Delivery Management System Application (2023)",
  "Photovoltaic (PV) Monitoring System (2021)"
];

const modules = [
  "Development of a Predictive Maintenance Device for Production Machines (2025)",
  "Prompt Engineering for Software Developers (2025)",
  "Getting Started with Python Programming (2025)",
  "Learning the Basics of Artificial Intelligence (2025)",
  "Learning SOLID Programming Principles (2025)"
];

const webinars = [
  "First Step to Start the Career (2022)",
  "Building Business Mentality for Young Entrepreneur (2021)",
  "Building a Business Mentality for Millenial Generation (2020)",
  "Breaking Boundaries, Reaching for Strands of Dreams (2019)",
  "Millennial Leadership Strategies in the Millennial Era (2019)",
  "Unleashing Your Potential for a More Meaningful Life (2019)",
  "Choosing Quality Broadcasts (2018)",
  "Achieve Success at A Young Age (2018)"
];

const achievements = [
  {
    title: "PKM-GT Recipient",
    description: "Recipient of Incentive – Student Creativity Program (PKM) under the PKMGT scheme for the project 'SARAN (Smart Hybrid Powerplant)', a futuristic concept for a hybrid wind and solar power plant off the coast of West Sumatra.",
    year: "2021",
    color: "from-yellow-500 to-amber-500"
  },
  {
    title: "English Proficiency Award",
    description: "Bronze Medal Certificate for English Proficiency Competition Grade 10 - 12 in the PCCST ACADEMIC FESTIVAL AND SCIENCE FAIR at Princess Chulabhorn's College, Satun",
    year: "2017",
    color: "from-orange-500 to-red-500"
  }
];

export function Skills() {
  const [activeTab, setActiveTab] = useState("projects");

  const tabConfig = [
    { value: "projects", icon: Briefcase, label: "Projects", color: "from-blue-500 to-cyan-500" },
    { value: "modules", icon: Code, label: "Modules", color: "from-purple-500 to-pink-500" },
    { value: "webinars", icon: BookOpen, label: "Webinars", color: "from-green-500 to-emerald-500" },
    { value: "achievements", icon: Award, label: "Achievements", color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
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
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
            Skills, Achievements & Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <Tabs defaultValue="projects" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm border border-border p-1">
            {tabConfig.map((tab, index) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value} 
                className="relative data-[state=active]:bg-primary/10 data-[state=active]:text-primary transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.div>
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tab.color}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl text-foreground">Project Portfolio</h3>
                </div>
                <div className="space-y-3">
                  {projects.map((project, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-primary/20 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">{project}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="modules" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl text-foreground">Completed Modules & Courses</h3>
                </div>
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-primary/20 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">{module}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="webinars" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl text-foreground">Webinars Attended</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {webinars.map((webinar, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-primary/20 group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{webinar}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <motion.div 
                        className={`p-3 bg-gradient-to-br ${achievement.color} rounded-2xl`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                          <h3 className="text-lg text-foreground group-hover:text-primary transition-colors">
                            {achievement.title}
                          </h3>
                          <motion.span 
                            className={`text-sm bg-gradient-to-r ${achievement.color} text-white px-4 py-1.5 rounded-full inline-block`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {achievement.year}
                          </motion.span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}