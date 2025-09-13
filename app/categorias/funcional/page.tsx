"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight, Users, Activity, Heart } from "lucide-react"

const functionalScales = [
  {
    id: "katz",
    name: "Índice de Katz",
    fullName: "Katz Index of Independence in Activities of Daily Living",
    description:
      "Instrumento amplamente utilizado para avaliação da capacidade funcional em atividades básicas de vida diária, incluindo banho, vestir-se, uso do banheiro, transferência, continência e alimentação.",
    category: "Avaliação Funcional",
    population: "Idosos e adultos",
    scoring: "0-6 pontos",
    riskLevels: "Independente (6), Dependência parcial (3-5), Dependência total (0-2)",
    href: "/escalas/katz",
  },
  {
    id: "barthel",
    name: "Índice de Barthel",
    fullName: "Barthel Index for Activities of Daily Living",
    description:
      "Escala que avalia a independência funcional em dez atividades básicas de vida diária, fornecendo uma medida quantitativa do grau de dependência do paciente.",
    category: "Avaliação Funcional",
    population: "Adultos e idosos",
    scoring: "0-100 pontos",
    riskLevels:
      "Independente (≥95), Dependência leve (60-94), Dependência moderada (40-59), Dependência grave (20-39), Dependência total (<20)",
    href: "/escalas/barthel",
  },
  {
    id: "mif",
    name: "Medida de Independência Funcional",
    fullName: "Functional Independence Measure (FIM)",
    description:
      "Instrumento abrangente que avalia a independência funcional em atividades motoras e cognitivas, amplamente utilizado em reabilitação para monitorar progresso e planejar cuidados.",
    category: "Avaliação Funcional",
    population: "Pacientes em reabilitação",
    scoring: "18-126 pontos",
    riskLevels:
      "Independência completa (126), Independência modificada (108-125), Supervisão (90-107), Assistência mínima (72-89), Assistência moderada (54-71), Assistência máxima (36-53), Assistência total (18-35)",
    href: "/escalas/mif",
  },
]

export default function FuncionalPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const filteredScales = functionalScales.filter(
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
            <Activity className="h-12 w-12 text-nursing-forest mr-4" />
            <h1 className="text-4xl font-bold text-nursing-forest">Escalas de Avaliação Funcional</h1>
          </div>
          <p className="text-lg text-nursing-forest/80 max-w-4xl mx-auto leading-relaxed">
            As escalas de avaliação funcional são instrumentos fundamentais na prática de enfermagem para mensurar a
            capacidade de independência dos pacientes nas atividades de vida diária. Estas ferramentas permitem uma
            avaliação objetiva e padronizada do grau de dependência, orientando o planejamento de cuidados
            individualizados, a definição de metas terapêuticas e o monitoramento da evolução funcional ao longo do
            tempo. A avaliação funcional é especialmente importante em pacientes idosos, em processo de reabilitação ou
            com condições crônicas que possam impactar a autonomia e independência nas atividades cotidianas.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nursing-forest/60 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar escalas funcionais..."
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
              <Activity className="h-8 w-8 text-nursing-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-nursing-forest">100%</div>
              <div className="text-sm text-nursing-forest/70">Validadas Cientificamente</div>
            </CardContent>
          </Card>
          <Card className="border-nursing-sage/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-nursing-forest mx-auto mb-2" />
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
                        <h4 className="font-semibold text-nursing-forest mb-2">Níveis de Dependência</h4>
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

        {/* Clinical Importance */}
        <Card className="mt-12 border-nursing-sage/20 bg-gradient-to-r from-nursing-mint/20 to-nursing-sage/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-nursing-forest mb-4">Importância Clínica da Avaliação Funcional</h2>
            <div className="prose prose-lg text-nursing-forest/80 max-w-none">
              <p className="leading-relaxed mb-4">
                A avaliação funcional sistemática representa um componente essencial do cuidado de enfermagem,
                especialmente em populações vulneráveis como idosos, pacientes em reabilitação e portadores de condições
                crônicas. Estas escalas fornecem uma medida objetiva e padronizada da capacidade de independência nas
                atividades de vida diária, permitindo identificar áreas de déficit funcional, monitorar a evolução do
                paciente ao longo do tempo e avaliar a eficácia das intervenções implementadas. A documentação adequada
                do estado funcional é fundamental para o planejamento de alta hospitalar, definição de necessidades de
                cuidados domiciliares e estabelecimento de metas terapêuticas realistas e individualizadas.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
