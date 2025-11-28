"use client";

import { useState } from "react";
import { 
  BookOpen, 
  Trophy, 
  Flame, 
  Target, 
  Lock, 
  CheckCircle2, 
  Star,
  Crown,
  Zap,
  Award,
  TrendingUp,
  Calendar,
  Users,
  Heart,
  Gem,
  Shield,
  Swords,
  ChevronRight,
  Play,
  Book,
  Scroll,
  MessageCircle,
  Settings,
  Volume2,
  Image as ImageIcon,
  FileText,
  Sparkles,
  Gift,
  Medal,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

interface Lesson {
  id: number;
  title: string;
  description: string;
  progress: number;
  isLocked: boolean;
  isCompleted: boolean;
  xp: number;
  level: number;
  type: "lesson" | "practice" | "story" | "unit-review" | "chest" | "boss";
  position: "left" | "center" | "right";
}

interface Unit {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  color: string;
}

export default function Home() {
  const [streak, setStreak] = useState(7);
  const [totalXP, setTotalXP] = useState(1250);
  const [level, setLevel] = useState(5);
  const [hearts, setHearts] = useState(5);
  const [gems, setGems] = useState(450);
  const [selectedTab, setSelectedTab] = useState<"learn" | "practice" | "leaderboard" | "profile">("learn");

  // Unidades com trilhas múltiplas - TÍTULOS BÍBLICOS
  const units: Unit[] = [
    {
      id: 1,
      title: "A Criação",
      description: "Gênesis - No Princípio",
      color: "#58CC02",
      lessons: [
        {
          id: 1,
          title: "A Criação",
          description: "Aprenda sobre os 7 dias da criação",
          progress: 100,
          isLocked: false,
          isCompleted: true,
          xp: 50,
          level: 1,
          type: "lesson",
          position: "center"
        },
        {
          id: 2,
          title: "Adão e Eva",
          description: "O primeiro casal",
          progress: 100,
          isLocked: false,
          isCompleted: true,
          xp: 40,
          level: 1,
          type: "lesson",
          position: "left"
        },
        {
          id: 3,
          title: "História",
          description: "O Jardim do Éden",
          progress: 100,
          isLocked: false,
          isCompleted: true,
          xp: 25,
          level: 1,
          type: "story",
          position: "right"
        },
        {
          id: 4,
          title: "Prática",
          description: "Revise o que aprendeu",
          progress: 100,
          isLocked: false,
          isCompleted: true,
          xp: 20,
          level: 1,
          type: "practice",
          position: "center"
        },
        {
          id: 5,
          title: "Revisão",
          description: "Teste da Criação",
          progress: 100,
          isLocked: false,
          isCompleted: true,
          xp: 50,
          level: 1,
          type: "unit-review",
          position: "center"
        }
      ]
    },
    {
      id: 2,
      title: "O Dilúvio",
      description: "Noé e a Arca",
      color: "#1CB0F6",
      lessons: [
        {
          id: 6,
          title: "Baú de Progresso",
          description: "Desbloqueie recompensas!",
          progress: 0,
          isLocked: false,
          isCompleted: false,
          xp: 100,
          level: 2,
          type: "chest",
          position: "center"
        },
        {
          id: 7,
          title: "Noé",
          description: "A construção da arca",
          progress: 60,
          isLocked: false,
          isCompleted: false,
          xp: 50,
          level: 2,
          type: "lesson",
          position: "left"
        },
        {
          id: 8,
          title: "O Dilúvio",
          description: "40 dias e 40 noites",
          progress: 30,
          isLocked: false,
          isCompleted: false,
          xp: 50,
          level: 2,
          type: "lesson",
          position: "right"
        },
        {
          id: 9,
          title: "História",
          description: "A Aliança do Arco-Íris",
          progress: 0,
          isLocked: false,
          isCompleted: false,
          xp: 25,
          level: 2,
          type: "story",
          position: "center"
        },
        {
          id: 10,
          title: "Prática",
          description: "Revise Noé e o Dilúvio",
          progress: 0,
          isLocked: false,
          isCompleted: false,
          xp: 20,
          level: 2,
          type: "practice",
          position: "left"
        },
        {
          id: 11,
          title: "Revisão",
          description: "Teste do Dilúvio",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 50,
          level: 2,
          type: "unit-review",
          position: "center"
        }
      ]
    },
    {
      id: 3,
      title: "Abraão",
      description: "O Pai da Fé",
      color: "#FFD700",
      lessons: [
        {
          id: 12,
          title: "Baú de Progresso",
          description: "Recompensas especiais",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 100,
          level: 3,
          type: "chest",
          position: "center"
        },
        {
          id: 13,
          title: "O Chamado",
          description: "Abraão deixa sua terra",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 50,
          level: 3,
          type: "lesson",
          position: "right"
        },
        {
          id: 14,
          title: "A Promessa",
          description: "Descendentes como estrelas",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 50,
          level: 3,
          type: "lesson",
          position: "left"
        },
        {
          id: 15,
          title: "História",
          description: "Isaque - O filho prometido",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 25,
          level: 3,
          type: "story",
          position: "center"
        },
        {
          id: 16,
          title: "Desafio Boss",
          description: "Teste final de Abraão",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 100,
          level: 3,
          type: "boss",
          position: "center"
        }
      ]
    },
    {
      id: 4,
      title: "José no Egito",
      description: "Dos Sonhos ao Trono",
      color: "#CE82FF",
      lessons: [
        {
          id: 17,
          title: "Baú Especial",
          description: "Recompensas lendárias",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 150,
          level: 4,
          type: "chest",
          position: "center"
        },
        {
          id: 18,
          title: "Os Sonhos",
          description: "José e seus irmãos",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 50,
          level: 4,
          type: "lesson",
          position: "left"
        },
        {
          id: 19,
          title: "No Egito",
          description: "Da prisão ao palácio",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 50,
          level: 4,
          type: "lesson",
          position: "right"
        },
        {
          id: 20,
          title: "História",
          description: "O reencontro",
          progress: 0,
          isLocked: true,
          isCompleted: false,
          xp: 25,
          level: 4,
          type: "story",
          position: "center"
        }
      ]
    }
  ];

  const dailyQuests = [
    { 
      title: "Ganhe 10 XP", 
      progress: 75, 
      current: 7.5,
      target: 10,
      reward: "1",
      icon: Flame,
      color: "#FF9600"
    },
    { 
      title: "Complete 2 lições", 
      progress: 50,
      current: 1,
      target: 2, 
      reward: "1",
      icon: Target,
      color: "#58CC02"
    },
    { 
      title: "Use o app por 5 minutos", 
      progress: 100,
      current: 5,
      target: 5, 
      reward: "1",
      icon: Zap,
      color: "#FFD700"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "João Silva", xp: 2450, avatar: "👨", league: "Diamante", change: "+2" },
    { rank: 2, name: "Maria Santos", xp: 2100, avatar: "👩", league: "Diamante", change: "0" },
    { rank: 3, name: "Pedro Costa", xp: 1890, avatar: "👨‍🦱", league: "Diamante", change: "-1" },
    { rank: 4, name: "Ana Paula", xp: 1650, avatar: "👩‍🦰", league: "Diamante", change: "+3" },
    { rank: 5, name: "Você", xp: totalXP, avatar: "🙋", isCurrentUser: true, league: "Ouro", change: "+1" },
    { rank: 6, name: "Carlos Mendes", xp: 1100, avatar: "👨‍💼", league: "Ouro", change: "-2" },
    { rank: 7, name: "Juliana Lima", xp: 980, avatar: "👩‍🎓", league: "Ouro", change: "0" },
  ];

  const practiceTopics = [
    {
      title: "Revisão Geral",
      description: "Pratique tudo que você aprendeu",
      icon: Target,
      color: "#58CC02",
      progress: 65,
      lessons: 12
    },
    {
      title: "Personagens Bíblicos",
      description: "Teste seu conhecimento sobre figuras importantes",
      icon: Users,
      color: "#1CB0F6",
      progress: 40,
      lessons: 8
    },
    {
      title: "Eventos Importantes",
      description: "Revise os principais acontecimentos",
      icon: Calendar,
      color: "#FFD700",
      progress: 80,
      lessons: 15
    },
    {
      title: "Versículos Chave",
      description: "Memorize passagens importantes",
      icon: Book,
      color: "#FF69B4",
      progress: 30,
      lessons: 20
    }
  ];

  const achievements = [
    { title: "Primeira Lição", description: "Complete sua primeira lição", icon: Star, unlocked: true, color: "#FFD700" },
    { title: "Sequência de 7 dias", description: "Mantenha uma sequência de 7 dias", icon: Flame, unlocked: true, color: "#FF9600" },
    { title: "Mestre do Gênesis", description: "Complete todas as lições de Gênesis", icon: Crown, unlocked: false, color: "#CE82FF" },
    { title: "100 Lições", description: "Complete 100 lições", icon: Trophy, unlocked: false, color: "#FFD700" },
    { title: "Estudioso", description: "Estude por 30 dias seguidos", icon: Award, unlocked: false, color: "#58CC02" },
    { title: "Top 3", description: "Fique entre os 3 primeiros do ranking", icon: Medal, unlocked: false, color: "#FF8C00" },
  ];

  const getIconForType = (type: string) => {
    switch(type) {
      case "lesson": return BookOpen;
      case "practice": return Target;
      case "story": return Scroll;
      case "unit-review": return Trophy;
      case "chest": return Gift;
      case "boss": return Crown;
      default: return BookOpen;
    }
  };

  const getColorForType = (type: string, isCompleted: boolean, isLocked: boolean) => {
    if (isLocked) return "#E5E5E5";
    if (isCompleted) return "#FFD700";
    
    switch(type) {
      case "lesson": return "#58CC02";
      case "practice": return "#1CB0F6";
      case "story": return "#FF69B4";
      case "unit-review": return "#CE82FF";
      case "chest": return "#FFD700";
      case "boss": return "#FF4500";
      default: return "#58CC02";
    }
  };

  const getPositionClass = (position: string) => {
    switch(position) {
      case "left": return "sm:translate-x-[-60px]";
      case "right": return "sm:translate-x-[60px]";
      default: return "";
    }
  };

  // Função para calcular posição X no mobile (caminho em S suave - MENOS CURVADO)
  const getMobilePositionX = (index: number, total: number) => {
    // Cria um caminho em S mais suave e menos curvado
    const progress = index / (total - 1);
    const amplitude = 50; // Reduzido de 60 para 50 (menos amplitude)
    
    // Fórmula para criar S suave: usa seno com frequência REDUZIDA para menos curvatura
    // Mudado de Math.PI * 2 para Math.PI * 1.2 (muito menos curvado)
    const x = Math.sin(progress * Math.PI * 1.2) * amplitude;
    
    return x;
  };

  const renderLearnTab = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - Quests (Desktop) */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-4">
            {/* Daily Quests */}
            <div className="bg-white rounded-2xl p-4 border-2 border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-[#58CC02]" />
                <h3 className="font-bold text-gray-800">Missões Diárias</h3>
              </div>
              <div className="space-y-3">
                {dailyQuests.map((quest, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <quest.icon className="w-4 h-4" style={{ color: quest.color }} />
                        <span className="text-sm text-gray-700">{quest.title}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gem className="w-3 h-3 text-[#1CB0F6]" />
                        <span className="text-xs font-bold text-gray-700">{quest.reward}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all"
                          style={{ 
                            width: `${quest.progress}%`,
                            backgroundColor: quest.color
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">{quest.current}/{quest.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* XP Progress */}
            <div className="bg-gradient-to-br from-[#58CC02]/10 to-[#58CC02]/5 rounded-2xl p-4 border-2 border-[#58CC02]/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">Meta Diária de XP</span>
                <span className="text-sm font-bold text-[#58CC02]">15/20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div className="bg-[#58CC02] h-3 rounded-full" style={{ width: "75%" }} />
              </div>
              <p className="text-xs text-gray-600">Faltam apenas 5 XP para completar sua meta!</p>
            </div>
          </div>
        </div>

        {/* Center - Learning Path */}
        <div className="lg:col-span-6">
          <div className="space-y-12">
            {units.map((unit, unitIndex) => (
              <div key={unit.id} className="relative">
                {/* Unit Header */}
                <div className="mb-8 bg-white rounded-2xl p-6 border-l-4 shadow-sm" style={{ borderColor: unit.color }}>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-800">{unit.title}</h2>
                    <button className="text-sm hover:underline flex items-center gap-1 text-gray-600">
                      Guia da Unidade
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600">{unit.description}</p>
                </div>

                {/* Learning Path */}
                <div className="relative space-y-6">
                  {/* Linha conectora - Desktop (caminho com curvas) */}
                  <svg 
                    className="absolute left-1/2 top-0 -translate-x-1/2 hidden sm:block pointer-events-none"
                    style={{ 
                      height: `${unit.lessons.length * 120}px`,
                      width: '200px'
                    }}
                  >
                    <defs>
                      <linearGradient id={`gradient-${unit.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: unit.color, stopOpacity: 0.3 }} />
                        <stop offset="50%" style={{ stopColor: unit.color, stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: unit.color, stopOpacity: 0.3 }} />
                      </linearGradient>
                    </defs>
                    
                    {unit.lessons.map((lesson, index) => {
                      if (index === unit.lessons.length - 1) return null;
                      
                      const startX = lesson.position === "left" ? 40 : lesson.position === "right" ? 160 : 100;
                      const nextLesson = unit.lessons[index + 1];
                      const endX = nextLesson.position === "left" ? 40 : nextLesson.position === "right" ? 160 : 100;
                      
                      const startY = index * 120 + 60;
                      const endY = (index + 1) * 120 + 60;
                      
                      const midY = (startY + endY) / 2;
                      
                      return (
                        <path
                          key={`path-${lesson.id}`}
                          d={`M ${startX} ${startY} Q ${startX} ${midY}, ${(startX + endX) / 2} ${midY} T ${endX} ${endY}`}
                          stroke={`url(#gradient-${unit.id})`}
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </svg>

                  {/* Linha conectora - Mobile (caminho em S SUAVE) */}
                  <svg 
                    className="absolute left-1/2 top-0 -translate-x-1/2 sm:hidden pointer-events-none"
                    style={{ 
                      height: `${unit.lessons.length * 120}px`,
                      width: '200px'
                    }}
                  >
                    <defs>
                      <linearGradient id={`gradient-mobile-${unit.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: unit.color, stopOpacity: 0.3 }} />
                        <stop offset="50%" style={{ stopColor: unit.color, stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: unit.color, stopOpacity: 0.3 }} />
                      </linearGradient>
                    </defs>
                    
                    {unit.lessons.map((lesson, index) => {
                      if (index === unit.lessons.length - 1) return null;
                      
                      const startX = 100 + getMobilePositionX(index, unit.lessons.length);
                      const endX = 100 + getMobilePositionX(index + 1, unit.lessons.length);
                      
                      const startY = index * 120 + 60;
                      const endY = (index + 1) * 120 + 60;
                      
                      const midY = (startY + endY) / 2;
                      const controlX = (startX + endX) / 2;
                      
                      return (
                        <path
                          key={`path-mobile-${lesson.id}`}
                          d={`M ${startX} ${startY} Q ${controlX} ${midY}, ${endX} ${endY}`}
                          stroke={`url(#gradient-mobile-${unit.id})`}
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </svg>

                  {unit.lessons.map((lesson, index) => {
                    const Icon = getIconForType(lesson.type);
                    const color = getColorForType(lesson.type, lesson.isCompleted, lesson.isLocked);
                    const positionClass = getPositionClass(lesson.position);
                    
                    // Posição mobile em S suave
                    const mobileX = getMobilePositionX(index, unit.lessons.length);

                    return (
                      <div 
                        key={lesson.id}
                        className="relative flex justify-center"
                        style={{ minHeight: '120px' }}
                      >
                        {/* Lesson Node */}
                        <div 
                          className={`relative transition-all duration-300 ${positionClass}`}
                          style={{
                            transform: window.innerWidth < 640 ? `translateX(${mobileX}px)` : undefined
                          }}
                        >
                          <button
                            disabled={lesson.isLocked}
                            className={`relative group ${lesson.isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110'} transition-all duration-300`}
                          >
                            {/* Icon Circle - Menor e mais clean */}
                            <div 
                              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg relative z-10 transition-all duration-300 border-4 border-white ${!lesson.isLocked && 'group-hover:shadow-xl'}`}
                              style={{ 
                                backgroundColor: color,
                                boxShadow: lesson.isLocked ? '0 4px 6px rgba(0,0,0,0.1)' : `0 4px 12px ${color}40`
                              }}
                            >
                              {lesson.isLocked ? (
                                <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
                              ) : lesson.isCompleted ? (
                                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                              ) : lesson.type === "chest" ? (
                                <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                              ) : lesson.type === "boss" ? (
                                <Crown className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                              ) : (
                                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                              )}
                            </div>

                            {/* Progress Ring */}
                            {!lesson.isLocked && lesson.progress > 0 && lesson.progress < 100 && (
                              <svg className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 -rotate-90">
                                <circle
                                  cx="50%"
                                  cy="50%"
                                  r="28"
                                  stroke={color}
                                  strokeWidth="3"
                                  fill="none"
                                  strokeDasharray={`${lesson.progress * 1.76} 176`}
                                  className="transition-all duration-500"
                                  opacity="0.8"
                                />
                              </svg>
                            )}

                            {/* Stars for completed */}
                            {lesson.isCompleted && (
                              <div className="absolute -top-1 -right-1 bg-[#FFD700] rounded-full p-1 border-2 border-white shadow-sm">
                                <Star className="w-3 h-3 text-white fill-white" />
                              </div>
                            )}
                          </button>

                          {/* Label */}
                          <div className="mt-3 text-center">
                            <p className="text-sm font-semibold text-gray-800">{lesson.title}</p>
                            {!lesson.isLocked && (
                              <div className="flex items-center justify-center gap-1 mt-1">
                                <Star className="w-3 h-3 text-[#FFD700]" />
                                <span className="text-xs text-gray-500">+{lesson.xp} XP</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Unit Separator */}
                {unitIndex < units.length - 1 && (
                  <div className="mt-12 flex items-center justify-center">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-gradient-to-r from-[#58CC02]/10 to-[#58CC02]/5 rounded-2xl p-6 border-2 border-[#58CC02]/30 text-center">
            <Trophy className="w-12 h-12 text-[#FFD700] mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Continue sua jornada!</h3>
            <p className="text-gray-600 mb-4">Você está progredindo muito bem. Continue assim!</p>
            <button className="bg-[#58CC02] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#4CAF00] transition-all hover:scale-105 shadow-lg">
              Continuar Lição
            </button>
          </div>
        </div>

        {/* Right Sidebar - Leaderboard (Desktop) */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-4">
            {/* League Info */}
            <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 rounded-2xl p-4 border-2 border-[#FFD700]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Sua Liga</p>
                  <p className="font-bold text-gray-800">Liga Ouro</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Posição</span>
                <span className="font-bold text-[#FFD700]">#5</span>
              </div>
            </div>

            {/* Mini Leaderboard */}
            <div className="bg-white rounded-2xl p-4 border-2 border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800">Ranking Semanal</h3>
                <Swords className="w-5 h-5 text-[#58CC02]" />
              </div>
              <div className="space-y-2">
                {leaderboard.slice(0, 7).map((user) => (
                  <div 
                    key={user.rank}
                    className={`flex items-center gap-2 p-2 rounded-lg ${user.isCurrentUser ? 'bg-[#58CC02]/10 border-2 border-[#58CC02]/30' : 'hover:bg-gray-50'} transition-all`}
                  >
                    <span className={`text-xs font-bold w-5 ${user.rank <= 3 ? 'text-[#FFD700]' : 'text-gray-500'}`}>
                      {user.rank}
                    </span>
                    <span className="text-lg">{user.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-semibold truncate ${user.isCurrentUser ? 'text-[#58CC02]' : 'text-gray-700'}`}>
                        {user.name}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#58CC02]">{user.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPracticeTab = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Prática</h2>
        <p className="text-gray-600">Revise e fortaleça seu conhecimento</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {practiceTopics.map((topic, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#58CC02]/50 transition-all cursor-pointer group shadow-sm"
          >
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${topic.color}20` }}
              >
                <topic.icon className="w-6 h-6" style={{ color: topic.color }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1 group-hover:text-[#58CC02] transition-colors text-gray-800">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{topic.lessons} lições</span>
                <span className="font-bold" style={{ color: topic.color }}>{topic.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all"
                  style={{ 
                    width: `${topic.progress}%`,
                    backgroundColor: topic.color
                  }}
                />
              </div>
            </div>

            <button 
              className="w-full mt-4 py-2 rounded-xl font-semibold transition-all"
              style={{ 
                backgroundColor: `${topic.color}20`,
                color: topic.color
              }}
            >
              Praticar Agora
            </button>
          </div>
        ))}
      </div>

      {/* Quick Practice */}
      <div className="mt-8 bg-gradient-to-r from-[#58CC02]/10 to-[#58CC02]/5 rounded-2xl p-6 border-2 border-[#58CC02]/30">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#58CC02] rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1 text-gray-800">Prática Rápida</h3>
            <p className="text-gray-600">5 perguntas aleatórias em 2 minutos</p>
          </div>
          <button className="bg-[#58CC02] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4CAF00] transition-all hover:scale-105 shadow-lg">
            Começar
          </button>
        </div>
      </div>
    </div>
  );

  const renderLeaderboardTab = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* League Header */}
      <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 rounded-2xl p-6 border-2 border-[#FFD700]/30 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Você está na</p>
              <h2 className="text-2xl font-bold text-[#FFD700]">Liga Ouro</h2>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Sua posição</p>
            <p className="text-3xl font-bold text-[#FFD700]">#5</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>A liga termina em 3 dias</span>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="flex items-end justify-center gap-4 mb-8">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center mb-2 border-4 border-white shadow-lg">
            <span className="text-2xl">{leaderboard[1].avatar}</span>
          </div>
          <div className="bg-white rounded-xl p-3 border-2 border-gray-300 text-center w-24 shadow-sm">
            <p className="text-2xl font-bold text-gray-500 mb-1">2</p>
            <p className="text-xs font-semibold truncate text-gray-700">{leaderboard[1].name}</p>
            <p className="text-xs text-[#58CC02] font-bold">{leaderboard[1].xp}</p>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center -mt-4">
          <Crown className="w-8 h-8 text-[#FFD700] mb-2" />
          <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center mb-2 border-4 border-white shadow-lg">
            <span className="text-3xl">{leaderboard[0].avatar}</span>
          </div>
          <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 rounded-xl p-3 border-2 border-[#FFD700]/50 text-center w-28 shadow-sm">
            <p className="text-3xl font-bold text-[#FFD700] mb-1">1</p>
            <p className="text-xs font-semibold truncate text-gray-700">{leaderboard[0].name}</p>
            <p className="text-xs text-[#58CC02] font-bold">{leaderboard[0].xp}</p>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mb-2 border-4 border-white shadow-lg">
            <span className="text-2xl">{leaderboard[2].avatar}</span>
          </div>
          <div className="bg-white rounded-xl p-3 border-2 border-orange-400 text-center w-24 shadow-sm">
            <p className="text-2xl font-bold text-orange-500 mb-1">3</p>
            <p className="text-xs font-semibold truncate text-gray-700">{leaderboard[2].name}</p>
            <p className="text-xs text-[#58CC02] font-bold">{leaderboard[2].xp}</p>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-sm">
        <div className="p-4 border-b-2 border-gray-200">
          <h3 className="font-bold text-gray-800">Ranking Completo</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {leaderboard.map((user) => (
            <div 
              key={user.rank}
              className={`flex items-center gap-4 p-4 ${user.isCurrentUser ? 'bg-[#58CC02]/10' : 'hover:bg-gray-50'} transition-all`}
            >
              <span className={`text-lg font-bold w-8 text-center ${user.rank <= 3 ? 'text-[#FFD700]' : 'text-gray-500'}`}>
                {user.rank}
              </span>
              <div className="w-12 h-12 bg-gradient-to-br from-[#58CC02]/20 to-[#58CC02]/10 rounded-xl flex items-center justify-center text-2xl">
                {user.avatar}
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${user.isCurrentUser ? 'text-[#58CC02]' : 'text-gray-800'}`}>
                  {user.name}
                </p>
                <p className="text-xs text-gray-500">{user.league}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#58CC02]">{user.xp} XP</p>
                <p className={`text-xs ${user.change.startsWith('+') ? 'text-green-500' : user.change.startsWith('-') ? 'text-red-500' : 'text-gray-500'}`}>
                  {user.change !== '0' && user.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-[#58CC02]/10 to-[#58CC02]/5 rounded-2xl p-6 border-2 border-[#58CC02]/30 mb-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#58CC02] to-[#4CAF00] rounded-2xl flex items-center justify-center text-4xl shadow-lg">
            🙋
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1 text-gray-800">Seu Perfil</h2>
            <p className="text-gray-600 mb-3">Estudante dedicado desde Janeiro 2025</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#FFD700]" />
                <span className="font-bold text-gray-700">Nível {level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#58CC02]" />
                <span className="font-bold text-gray-700">{totalXP} XP</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#FF9600]" />
                <span className="font-bold text-gray-700">{streak} dias</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 text-center border-2 border-gray-200">
            <BookOpen className="w-6 h-6 text-[#58CC02] mx-auto mb-2" />
            <p className="text-2xl font-bold mb-1 text-gray-800">24</p>
            <p className="text-xs text-gray-600">Lições Completas</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border-2 border-gray-200">
            <Target className="w-6 h-6 text-[#1CB0F6] mx-auto mb-2" />
            <p className="text-2xl font-bold mb-1 text-gray-800">18</p>
            <p className="text-xs text-gray-600">Práticas Feitas</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border-2 border-gray-200">
            <Calendar className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
            <p className="text-2xl font-bold mb-1 text-gray-800">7</p>
            <p className="text-xs text-gray-600">Dias de Estudo</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border-2 border-gray-200">
            <Clock className="w-6 h-6 text-[#FF69B4] mx-auto mb-2" />
            <p className="text-2xl font-bold mb-1 text-gray-800">3h</p>
            <p className="text-xs text-gray-600">Tempo Total</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Conquistas</h3>
          <span className="text-sm text-gray-600">2/6 desbloqueadas</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`rounded-xl p-4 border-2 text-center transition-all ${
                achievement.unlocked 
                  ? 'bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 border-[#FFD700]/30' 
                  : 'bg-gray-50 border-gray-200 opacity-50'
              }`}
            >
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                  achievement.unlocked ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]' : 'bg-gray-300'
                }`}
              >
                <achievement.icon 
                  className="w-6 h-6" 
                  style={{ color: achievement.unlocked ? 'white' : '#999' }}
                />
              </div>
              <p className="text-sm font-semibold mb-1 text-gray-800">{achievement.title}</p>
              <p className="text-xs text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Configurações</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border-2 border-gray-200">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-[#58CC02]" />
              <span className="text-gray-700">Efeitos Sonoros</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border-2 border-gray-200">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-[#58CC02]" />
              <span className="text-gray-700">Meta Diária</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border-2 border-gray-200">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-[#58CC02]" />
              <span className="text-gray-700">Preferências</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-20 sm:pb-0">
      {/* Header - Estilo Duolingo */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#58CC02] to-[#4CAF00] rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="hidden sm:block text-xl font-bold text-gray-800">Bíblia Linguagem</h1>
            </div>

            {/* Stats - Estilo Duolingo */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Streak */}
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border-2 border-[#FF9600]/30 hover:border-[#FF9600]/60 transition-all cursor-pointer shadow-sm">
                <Flame className="w-4 h-4 text-[#FF9600]" />
                <span className="text-sm font-bold text-[#FF9600]">{streak}</span>
              </div>

              {/* Gems */}
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border-2 border-[#1CB0F6]/30 hover:border-[#1CB0F6]/60 transition-all cursor-pointer shadow-sm">
                <Gem className="w-4 h-4 text-[#1CB0F6]" />
                <span className="text-sm font-bold text-[#1CB0F6]">{gems}</span>
              </div>

              {/* Hearts */}
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border-2 border-[#FF1493]/30 hover:border-[#FF1493]/60 transition-all cursor-pointer shadow-sm">
                <Heart className="w-4 h-4 text-[#FF1493] fill-[#FF1493]" />
                <span className="text-sm font-bold text-[#FF1493]">{hearts}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-50">
        {selectedTab === "learn" && renderLearnTab()}
        {selectedTab === "practice" && renderPracticeTab()}
        {selectedTab === "leaderboard" && renderLeaderboardTab()}
        {selectedTab === "profile" && renderProfileTab()}
      </main>

      {/* Bottom Navigation - Estilo Duolingo */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur-md border-t-2 border-gray-200 lg:hidden z-50 shadow-lg">
        <div className="flex justify-around items-center h-16 px-2">
          <button
            onClick={() => setSelectedTab("learn")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              selectedTab === "learn" 
                ? "text-[#58CC02]" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-semibold">Aprender</span>
          </button>
          
          <button
            onClick={() => setSelectedTab("practice")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              selectedTab === "practice" 
                ? "text-[#58CC02]" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Target className="w-6 h-6" />
            <span className="text-xs font-semibold">Praticar</span>
          </button>
          
          <button
            onClick={() => setSelectedTab("leaderboard")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              selectedTab === "leaderboard" 
                ? "text-[#58CC02]" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Trophy className="w-6 h-6" />
            <span className="text-xs font-semibold">Ranking</span>
          </button>
          
          <button
            onClick={() => setSelectedTab("profile")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              selectedTab === "profile" 
                ? "text-[#58CC02]" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Users className="w-6 h-6" />
            <span className="text-xs font-semibold">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
