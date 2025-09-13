"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight, Users, AlertTriangle, Shield } from "lucide-react"

const pressureUlcerScales = [
  {
    id: "braden",
    name: "Escala de Braden",
    fullName: "Braden Scale for Predicting Pressure Sore Risk",
    description:
      "Escala amplamente utilizada para avaliação do risco de desenvolvimento de úlceras por pressão, considerando seis fatores: percepção sensorial, umidade, atividade, mobilidade, nutrição e fricção/cisalhamento.",
    category: "Risco de Úlcera por Pressão",
    population: "Adultos hospitalizados",
    scoring: "6-23 pontos",
    riskLevels: "Alto (≤9), Moderado (10-12), Baixo (13-14), Sem risco (15-23)",
    href: "/escalas/braden",
  },
  {
    id: "norton",
    name: "Escala de Norton",
    fullName: "Norton Scale for Pressure Ulcer Risk Assessment",
    description:
      "Uma das primeiras escalas desenvolvidas para avaliação do risco de úlceras por pressão, considerando condição física, estado mental, atividade, mobilidade e incontinência.",
    category: "Risco de Úlcera por Pressão",
    population: "Adultos e idosos",
    scoring: "5-20 pontos",
    riskLevels: "Alto (≤11), Moderado (12-14), Baixo (≥15)",
    href: "/escalas/norton",
  },
  {
    id: "waterlow",
    name: "Escala de Waterlow",
    fullName: "Waterlow Pressure Ulcer Prevention/Treatment Policy",
    description:
      "Escala abrangente que considera múltiplos fatores de risco incluindo idade, sexo, tipo de pele, continência, mobilidade, apetite, medicações e fatores especiais de risco.",
    category: "Risco de Úlcera por Pressão",
    population: "Adultos e idosos",
    scoring: "≥10 pontos indica risco",
    riskLevels: "Baixo (10-14), Moderado (15-19), Alto (≥20)",
    href: "/escalas/waterlow",
  },
  {
    id: "braden-q",
    name: "Escala de Braden Q",
    fullName: "Braden Q Scale for Predicting Pediatric Pressure Ulcer Risk",
    description:
      "Versão pediátrica da Escala de Braden, adaptada especificamente para crianças e adolescentes, considerando mobilidade, atividade, percepção sensorial, umidade, fricção/cisalhamento, nutrição e perfusão tecidual.",
    category: "Risco de Úlcera por Pressão",
    population: "Crianças e adolescentes",
    scoring: "7-28 pontos",
    riskLevels: "Alto (≤16), Moderado (17-22), Baixo (≥23)",
    href: "/escalas/braden-q",
  },
  {
    id: "pusap",
    name: "Escala de PUSAP",
    fullName: "Pressure Ulcer Scale for Healing (PUSH) - Adaptada",
    description:
      "Escala brasileira adaptada para avaliação do risco de úlceras por pressão, considerando fatores específicos da população brasileira e condições locais de cuidado.",
    category: "Risco de Úlcera por Pressão",
    population: "Adultos brasileiros",
    scoring: "Variável conforme fatores",
    riskLevels: "Estratificação por pontuação total",
    href: "/escalas/pusap",
  },
]

export default function UlceraPressaoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const filteredScales = pressureUlcerScales.filter(
    (scale) =>
      scale.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scale.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scale.population.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-nursing-mint via-white to-nursing-sage/10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-nursing-forest mr-4" />
            <h1 className="text-4xl font-bold text-nursing-forest">Escalas de Risco de Úlcera por Pressão</h1>
          </div>
          <p className="text-lg text-nursing-forest/80 max-w-4xl mx-auto leading-relaxed">
            As escalas de avaliação do risco de úlceras por pressão são instrumentos fundamentais na prática de
            enfermagem para identificar pacientes com maior probabilidade de desenvolver lesões por pressão durante a
            hospitalização ou em outros ambientes de cuidado. Estas ferramentas permitem a implementação de medidas
            preventivas específicas e individualizadas, contribuindo significativamente para a manutenção da integridade
            da pele e a prevenção de complicações graves. A avaliação sistemática do risco de úlceras por pressão deve
            ser realizada na admissão do paciente e reavaliada periodicamente, especialmente após mudanças no estado
            clínico, alterações na mobilidade, ou modificações no estado nutricional, permitindo ajustes nas
            intervenções preventivas conforme necessário.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nursing-forest/60 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar escalas de úlcera por pressão..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-nursing-sage/30 focus:border-nursing-forest"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-nursing-sage/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-nursing-forest mx-auto mb-2" />
              <div className="text-2xl font-bold text-nursing-forest">5</div>
              <div className="text-sm text-nursing-forest/70">Escalas Disponíveis</div>
            </CardContent>
          </Card>
          <Card className="border-nursing-sage/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-8 w-8 text-nursing-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-nursing-forest">100%</div>
              <div className="text-sm text-nursing-forest/70">Validadas Cientificamente</div>
            </CardContent>
          </Card>
          <Card className="border-nursing-sage/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-nursing-forest mx-auto mb-2" />
              <div className="text-2xl font-bold text-nursing-forest">Alta</div>
              <div className="text-sm text-nursing-forest/70">Confiabilidade</div>
            </CardContent>
          </Card>
        </div>

        {/* Scales Grid */}
        <div className="grid gap-6">
          {filteredScales.map((scale) => (
            <Card
              key={scale.id}
              className="border-nursing-sage/20 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-nursing-forest mb-2">{scale.name}</CardTitle>
                    <CardDescription className="text-nursing-forest/70 mb-3">{scale.fullName}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="bg-nursing-mint text-nursing-forest">
                        {scale.category}
                      </Badge>
                      <Badge variant="outline" className="border-nursing-sage text-nursing-forest">
                        {scale.population}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedCard(expandedCard === scale.id ? null : scale.id)}
                    className="text-nursing-forest hover:bg-nursing-mint/20"
                  >
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${expandedCard === scale.id ? "rotate-90" : ""}`}
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-nursing-forest/80 mb-4 leading-relaxed">{scale.description}</p>

                {expandedCard === scale.id && (
                  <div className="space-y-4 border-t border-nursing-sage/20 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-nursing-forest mb-2">Pontuação</h4>
                        <p className="text-nursing-forest/80">{scale.scoring}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nursing-forest mb-2">Níveis de Risco</h4>
                        <p className="text-nursing-forest/80">{scale.riskLevels}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button asChild className="bg-nursing-forest hover:bg-nursing-forest/90">
                        <Link href={scale.href}>
                          Ver Detalhes Completos
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredScales.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="h-12 w-12 text-nursing-forest/40 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-nursing-forest mb-2">Nenhuma escala encontrada</h3>
            <p className="text-nursing-forest/60">
              Tente ajustar os termos de busca para encontrar as escalas desejadas.
            </p>
          </div>
        )}

        {/* Clinical Importance */}
        <Card className="mt-12 border-nursing-sage/20 bg-gradient-to-r from-nursing-mint/20 to-nursing-sage/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-nursing-forest mb-4">
              Importância Clínica da Avaliação do Risco de Úlceras por Pressão
            </h2>
            <div className="prose prose-lg text-nursing-forest/80 max-w-none">
              <p className="leading-relaxed mb-4">
                A avaliação sistemática do risco de úlceras por pressão representa uma das principais estratégias de
                prevenção de eventos adversos em ambientes hospitalares e de cuidados de longa duração. As úlceras por
                pressão constituem um problema de saúde pública significativo, podendo resultar em complicações graves,
                aumento do tempo de internação, elevação dos custos assistenciais, impacto negativo na qualidade de vida
                dos pacientes e, em casos extremos, risco de morte. A implementação de escalas de avaliação padronizadas
                permite identificar precocemente os pacientes em risco, possibilitando a adoção de medidas preventivas
                específicas, eficazes e baseadas em evidências científicas.
              </p>
              <p className="leading-relaxed mb-4">
                O processo de avaliação do risco de úlceras por pressão deve ser integrado à rotina assistencial de
                enfermagem, sendo realizado de forma sistemática e documentado adequadamente no prontuário do paciente.
                A escolha da escala mais apropriada deve considerar as características da população atendida, o ambiente
                de cuidado, a faixa etária dos pacientes e a facilidade de aplicação pelos profissionais. É fundamental
                que toda a equipe de enfermagem seja capacitada para a aplicação correta das escalas, para a
                interpretação adequada dos resultados e para a implementação de intervenções preventivas baseadas em
                evidências científicas, garantindo a manutenção da integridade da pele e a prevenção de lesões por
                pressão.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
