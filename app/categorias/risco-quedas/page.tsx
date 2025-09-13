"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight, Users, AlertTriangle, Shield } from "lucide-react"

const fallRiskScales = [
  {
    id: "morse",
    name: "Escala de Morse",
    fullName: "Morse Fall Scale (MFS)",
    description:
      "Escala amplamente utilizada para avaliação do risco de quedas em pacientes hospitalizados, considerando fatores como histórico de quedas, diagnóstico secundário, auxílio na deambulação, terapia endovenosa, marcha e estado mental.",
    category: "Risco de Quedas",
    population: "Adultos hospitalizados",
    scoring: "0-125 pontos",
    riskLevels: "Baixo (0-24), Moderado (25-50), Alto (≥51)",
    href: "/escalas/morse",
  },
  {
    id: "downton",
    name: "Escala de Downton",
    fullName: "Downton Fall Risk Index (DFRI)",
    description:
      "Instrumento de avaliação do risco de quedas que considera quedas prévias, medicamentos, déficits sensoriais, estado mental e capacidade de deambulação, sendo especialmente útil em pacientes idosos.",
    category: "Risco de Quedas",
    population: "Idosos e adultos",
    scoring: "0-11 pontos",
    riskLevels: "Baixo (0-2), Alto (≥3)",
    href: "/escalas/downton",
  },
  {
    id: "hendrich",
    name: "Escala de Hendrich II",
    fullName: "Hendrich II Fall Risk Model",
    description:
      "Modelo de avaliação de risco de quedas que utiliza oito fatores de risco independentes, incluindo confusão, depressão, alteração da eliminação, tontura, sexo masculino, medicamentos antiepilépticos, benzodiazepínicos e capacidade de se levantar.",
    category: "Risco de Quedas",
    population: "Adultos hospitalizados",
    scoring: "0-16 pontos",
    riskLevels: "Baixo (0-4), Alto (≥5)",
    href: "/escalas/hendrich",
  },
]

export default function RiscoQuedasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const filteredScales = fallRiskScales.filter(
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
            <h1 className="text-4xl font-bold text-nursing-forest">Escalas de Risco de Quedas</h1>
          </div>
          <p className="text-lg text-nursing-forest/80 max-w-4xl mx-auto leading-relaxed">
            As escalas de avaliação do risco de quedas são instrumentos fundamentais na prática de enfermagem para
            identificar pacientes com maior probabilidade de sofrer quedas durante a hospitalização ou em outros
            ambientes de cuidado. Estas ferramentas permitem a implementação de medidas preventivas específicas e
            individualizadas, contribuindo significativamente para a segurança do paciente e a redução de eventos
            adversos. A avaliação sistemática do risco de quedas deve ser realizada na admissão do paciente e reavaliada
            periodicamente ou sempre que houver mudanças no estado clínico, permitindo ajustes nas intervenções
            preventivas conforme necessário.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nursing-forest/60 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar escalas de risco de quedas..."
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
              <div className="text-2xl font-bold text-nursing-forest">3</div>
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
              Importância Clínica da Avaliação do Risco de Quedas
            </h2>
            <div className="prose prose-lg text-nursing-forest/80 max-w-none">
              <p className="leading-relaxed mb-4">
                A avaliação sistemática do risco de quedas representa uma das principais estratégias de segurança do
                paciente em ambientes hospitalares e de cuidados de longa duração. As quedas constituem um dos eventos
                adversos mais frequentes em instituições de saúde, podendo resultar em lesões graves, aumento do tempo
                de internação, elevação dos custos assistenciais e impacto negativo na qualidade de vida dos pacientes.
                A implementação de escalas de avaliação padronizadas permite identificar precocemente os pacientes em
                risco, possibilitando a adoção de medidas preventivas específicas e eficazes.
              </p>
              <p className="leading-relaxed mb-4">
                O processo de avaliação do risco de quedas deve ser integrado à rotina assistencial de enfermagem, sendo
                realizado de forma sistemática e documentado adequadamente no prontuário do paciente. A escolha da
                escala mais apropriada deve considerar as características da população atendida, o ambiente de cuidado e
                a facilidade de aplicação pelos profissionais. É fundamental que toda a equipe de enfermagem seja
                capacitada para a aplicação correta das escalas e para a interpretação adequada dos resultados,
                garantindo a implementação de intervenções preventivas baseadas em evidências científicas.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
