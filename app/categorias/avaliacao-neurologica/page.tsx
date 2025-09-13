"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Eye, MessageSquare, Activity, Zap } from "lucide-react"
import Link from "next/link"

export default function AvaliacaoNeurologicaPage() {
  const escalas = [
    {
      nome: "Escala de Coma de Glasgow",
      sigla: "ECG",
      descricao: "Escala padrão-ouro para avaliação do nível de consciência em pacientes com alterações neurológicas",
      parametros: "Abertura ocular, resposta verbal e resposta motora",
      pontuacao: "3 a 15 pontos",
      aplicacao: "Pacientes com traumatismo cranioencefálico, AVC, alterações de consciência",
      icon: Brain,
      href: "/escalas/glasgow",
      color: "bg-blue-50 border-blue-200 text-blue-800",
    },
    {
      nome: "Escala de Coma de Glasgow Pediátrica",
      sigla: "ECGP",
      descricao: "Adaptação da ECG para avaliação neurológica em crianças e lactentes",
      parametros: "Abertura ocular, resposta verbal adaptada e resposta motora",
      pontuacao: "3 a 15 pontos",
      aplicacao: "Crianças com alterações neurológicas, traumatismo craniano pediátrico",
      icon: Eye,
      href: "/escalas/glasgow-pediatrica",
      color: "bg-purple-50 border-purple-200 text-purple-800",
    },
    {
      nome: "Escala de Ramsay",
      sigla: "Ramsay",
      descricao: "Escala para avaliação do nível de sedação em pacientes críticos",
      parametros: "Nível de consciência e resposta a estímulos",
      pontuacao: "1 a 6 pontos",
      aplicacao: "Pacientes sedados em UTI, controle de sedação",
      icon: MessageSquare,
      href: "/escalas/ramsay",
      color: "bg-green-50 border-green-200 text-green-800",
    },
    {
      nome: "Escala de RASS",
      sigla: "RASS",
      descricao: "Richmond Agitation-Sedation Scale para avaliação de agitação e sedação",
      parametros: "Nível de agitação ou sedação",
      pontuacao: "-5 a +4 pontos",
      aplicacao: "Pacientes críticos, monitorização de sedação e agitação",
      icon: Activity,
      href: "/escalas/rass",
      color: "bg-orange-50 border-orange-200 text-orange-800",
    },
    {
      nome: "Escala de Hunt e Hess",
      sigla: "H&H",
      descricao: "Classificação da gravidade de hemorragia subaracnóidea",
      parametros: "Sintomas clínicos e estado neurológico",
      pontuacao: "Grau I a V",
      aplicacao: "Pacientes com hemorragia subaracnóidea, aneurismas cerebrais",
      icon: Zap,
      href: "/escalas/hunt-hess",
      color: "bg-red-50 border-red-200 text-red-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-nursing-sage/20 text-nursing-sage border-nursing-sage/30">
              Categoria de Escalas
            </Badge>
            <h1 className="text-4xl font-bold text-nursing-forest mb-6 text-balance">
              Escalas de Avaliação Neurológica
            </h1>
            <p className="text-lg text-nursing-sage leading-relaxed max-w-4xl mx-auto">
              As escalas de avaliação neurológica são ferramentas fundamentais para monitorização do estado de
              consciência, nível de sedação e função neurológica em pacientes críticos. Estas escalas permitem avaliação
              objetiva e padronizada de parâmetros neurológicos, facilitando a comunicação entre profissionais,
              orientando decisões terapêuticas e permitindo acompanhamento da evolução clínica. A aplicação adequada
              dessas escalas é essencial para identificação precoce de deterioração neurológica, ajuste de sedação em
              pacientes críticos e estratificação de risco em condições neurológicas graves como traumatismo
              cranioencefálico e hemorragia subaracnóidea.
            </p>
          </div>

          {/* Importância Clínica */}
          <Card className="mb-8 border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <Brain className="h-5 w-5 text-nursing-gold" />
                Importância na Prática Clínica
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed">
                A avaliação neurológica sistemática através de escalas padronizadas representa um pilar fundamental no
                cuidado de pacientes com alterações do sistema nervoso central. Estas ferramentas proporcionam uma
                linguagem comum entre profissionais de saúde, permitindo comunicação precisa sobre o estado neurológico
                do paciente e facilitando a continuidade do cuidado entre diferentes turnos e equipes. A aplicação
                regular dessas escalas permite detecção precoce de mudanças no estado neurológico, orientando
                intervenções terapêuticas oportunas que podem ser determinantes para o prognóstico do paciente. Além
                disso, essas escalas são essenciais para estratificação de risco, planejamento de cuidados, definição de
                prognóstico e tomada de decisões sobre intensidade de tratamento, especialmente em unidades de terapia
                intensiva onde a monitorização neurológica contínua é crucial para otimização dos resultados clínicos.
              </p>
            </CardContent>
          </Card>

          {/* Grid de Escalas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {escalas.map((escala, index) => {
              const IconComponent = escala.icon
              return (
                <Link key={index} href={escala.href}>
                  <Card className="h-full border-nursing-sage/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader className="bg-nursing-sage/5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${escala.color}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-nursing-forest">{escala.nome}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {escala.sigla}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-nursing-charcoal text-sm leading-relaxed mb-4">{escala.descricao}</p>
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-semibold text-nursing-forest">Parâmetros:</span>
                          <span className="text-nursing-sage ml-1">{escala.parametros}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-nursing-forest">Pontuação:</span>
                          <span className="text-nursing-sage ml-1">{escala.pontuacao}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-nursing-forest">Aplicação:</span>
                          <span className="text-nursing-sage ml-1">{escala.aplicacao}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Considerações Especiais */}
          <Card className="border-nursing-sage/20 shadow-lg">
            <CardHeader className="bg-nursing-sage/5">
              <CardTitle className="flex items-center gap-2 text-nursing-forest">
                <Activity className="h-5 w-5 text-nursing-gold" />
                Considerações Especiais na Avaliação Neurológica
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-nursing-charcoal leading-relaxed">
                A avaliação neurológica requer considerações especiais que influenciam diretamente na acurácia e
                interpretação dos resultados obtidos. Fatores como uso de sedativos, analgésicos, bloqueadores
                neuromusculares e outras medicações podem interferir significativamente na resposta neurológica, devendo
                ser considerados durante a avaliação e documentados adequadamente. A presença de intubação orotraqueal
                impede a avaliação adequada da resposta verbal, exigindo adaptações na aplicação das escalas. Condições
                como edema facial, hematomas periorbitários, fraturas faciais ou lesões oculares podem comprometer a
                avaliação da abertura ocular. É fundamental considerar também fatores como hipóxia, hipotensão,
                distúrbios metabólicos, hipoglicemia e alterações eletrolíticas que podem influenciar temporariamente o
                estado neurológico. A idade do paciente, especialmente em extremos etários, requer adaptações na
                interpretação dos resultados, assim como condições preexistentes como demência, deficiência intelectual
                ou alterações psiquiátricas que podem interferir na avaliação baseline do paciente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
