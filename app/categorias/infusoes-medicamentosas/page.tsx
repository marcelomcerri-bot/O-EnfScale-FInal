import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Syringe, Clock, AlertTriangle, Sun, Shield, ChevronLeft, Heart, Zap, Timer } from "lucide-react"
import Link from "next/link"

export default function InfusoesMedicamentosasPage() {
  const medications = [
    {
      name: "Asparaginase",
      brand: "ELSPAR®",
      route: "IM/EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "30 a 60 min",
      category: "outros",
    },
    {
      name: "Bleomicina",
      brand: "BLEO",
      route: "SC/IM/EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "30 min",
      category: "irritante",
    },
    {
      name: "Bortezomib",
      brand: "VELCADE®",
      route: "SC/EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "30 min",
      category: "irritante",
    },
    {
      name: "Carboplatina",
      brand: "CBP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Ciclofosfamida",
      brand: "CTX",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "30 min",
      category: "irritante",
    },
    {
      name: "Cisplatina",
      brand: "CDDP",
      route: "EV",
      irritant: "Irritante/Vesicante",
      photosensitive: true,
      infusionTime: "1 mg/min",
      category: "vesicante",
    },
    {
      name: "Citarabina",
      brand: "ARA-C",
      route: "SC/IM/IT/EV",
      irritant: "Não consta",
      photosensitive: true,
      infusionTime: "60 a 180 min",
      category: "outros",
    },
    {
      name: "Dacarbazina",
      brand: "DTIC",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Daunorrubicina",
      brand: "DAUNO®",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: false,
      infusionTime: "30 a 45 min",
      category: "vesicante",
    },
    {
      name: "Decitabina",
      brand: "DACOGEN®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "60 min",
      category: "outros",
    },
    {
      name: "Docetaxel",
      brand: "DOC",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Doxorrubicina",
      brand: "DOXO",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "15 min",
      category: "vesicante",
    },
    {
      name: "Doxorrubicina lipossomal",
      brand: "",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "1 mg/min",
      category: "irritante",
    },
    {
      name: "Etoposídeo",
      brand: "VP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Fludarabina",
      brand: "FLUDARA",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "30 min",
      category: "outros",
    },
    {
      name: "Fluorouracila",
      brand: "5-FU",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "30 min",
      category: "irritante",
    },
    {
      name: "Gemcitabina",
      brand: "GEMZAR®",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Ifosfamida",
      brand: "IFO",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Irinotecano",
      brand: "IRINO",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "90 min",
      category: "irritante",
    },
    {
      name: "Metotrexato",
      brand: "MTX",
      route: "SC/IM/EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "60 min",
      category: "outros",
    },
    {
      name: "Mitomicina",
      brand: "MMC",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: false,
      infusionTime: "30 min",
      category: "vesicante",
    },
    {
      name: "Mitoxantrona",
      brand: "MTZ",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: false,
      infusionTime: "120 min",
      category: "vesicante",
    },
    {
      name: "Oxaliplatina",
      brand: "L-OHP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "120 min",
      category: "irritante",
    },
    {
      name: "Paclitaxel",
      brand: "TAXOL®",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "180 min",
      category: "irritante",
    },
    {
      name: "Vimblastina",
      brand: "VB",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: "vesicante",
    },
    {
      name: "Vincristina",
      brand: "VCR",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: "vesicante",
    },
    {
      name: "Vinorelbina",
      brand: "NAVELBINE®",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: "vesicante",
    },
    {
      name: "Ácido folínico",
      brand: "LEUCOVORIN®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: true,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Ácido zoledrônico",
      brand: "ZOMETA®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "40-60 min",
      category: "outros",
    },
    {
      name: "Dexametasona",
      brand: "DXT",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Mesna",
      brand: "MITEXAN®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Ranitidina",
      brand: "ANTAK®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "15 min",
      category: "outros",
    },
  ]

  const vesicantes = medications.filter((med) => med.category === "vesicante")
  const irritantes = medications.filter((med) => med.category === "irritante")
  const fotossensiveis = medications.filter((med) => med.photosensitive)
  const infusaoRapida = medications.filter(
    (med) =>
      med.infusionTime.includes("15 min") || med.infusionTime.includes("30 min") || med.infusionTime.includes("Bolus"),
  )

  const getCuidadosEnfermagem = (medication: any) => {
    const cuidados = []

    if (medication.category === "vesicante") {
      cuidados.push("Verificar permeabilidade do acesso venoso antes da infusão")
      cuidados.push("Monitorar sinais de extravasamento durante toda a infusão")
      cuidados.push("Manter kit de extravasamento disponível")
      cuidados.push("Orientar paciente sobre sinais de extravasamento")
    }

    if (medication.category === "irritante") {
      cuidados.push("Verificar acesso venoso calibroso")
      cuidados.push("Diluir adequadamente conforme protocolo")
      cuidados.push("Monitorar local de punção durante infusão")
    }

    if (medication.photosensitive) {
      cuidados.push("Proteger da luz durante preparo e infusão")
      cuidados.push("Orientar paciente sobre fotoproteção")
      cuidados.push("Utilizar equipos âmbar ou proteger com papel alumínio")
    }

    if (medication.infusionTime.includes("120 min") || medication.infusionTime.includes("180 min")) {
      cuidados.push("Monitorar sinais vitais durante infusão prolongada")
      cuidados.push("Verificar conforto do paciente periodicamente")
    }

    // Cuidados gerais
    cuidados.push("Verificar prescrição médica e identificação do paciente")
    cuidados.push("Monitorar reações adversas durante e após infusão")
    cuidados.push("Registrar horário de início e término da infusão")
    cuidados.push("Orientar paciente sobre possíveis efeitos colaterais")

    return cuidados
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/categorias">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Voltar às Categorias
              </Link>
            </Button>

            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Syringe className="h-10 w-10 text-cyan-600" />
                Infusões Medicamentosas - Oncologia HUAP
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Protocolos de quimioterapia e medicamentos oncológicos do Hospital Universitário Antonio Pedro
              </p>
            </div>
          </div>

          {/* Alert */}
          <Alert className="mb-8 border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              <strong>Importante:</strong> Estas informações são baseadas nos protocolos do Setor de Oncologia do HUAP.
              Sempre consulte as diretrizes institucionais e prescrições médicas específicas antes da administração.
            </AlertDescription>
          </Alert>

          {/* Tabs */}
          <Tabs defaultValue="todos" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="todos">Todos ({medications.length})</TabsTrigger>
              <TabsTrigger value="vesicantes" className="text-red-600">
                <AlertTriangle className="w-4 h-4 mr-1" />
                Vesicantes ({vesicantes.length})
              </TabsTrigger>
              <TabsTrigger value="irritantes" className="text-orange-600">
                <Shield className="w-4 h-4 mr-1" />
                Irritantes ({irritantes.length})
              </TabsTrigger>
              <TabsTrigger value="fotossensiveis" className="text-yellow-600">
                <Sun className="w-4 h-4 mr-1" />
                Fotossensíveis ({fotossensiveis.length})
              </TabsTrigger>
              <TabsTrigger value="infusao-rapida" className="text-green-600">
                <Zap className="w-4 h-4 mr-1" />
                Infusão Rápida ({infusaoRapida.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="space-y-4">
              <div className="grid gap-6">
                {medications.map((medication, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            {medication.name}
                            {medication.brand && (
                              <Badge variant="outline" className="text-sm">
                                {medication.brand}
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-2 flex flex-wrap gap-2">
                            <Badge variant="secondary">Via: {medication.route}</Badge>
                            <Badge
                              variant={
                                medication.category === "vesicante"
                                  ? "destructive"
                                  : medication.category === "irritante"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {medication.irritant}
                            </Badge>
                            {medication.photosensitive && (
                              <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                                <Sun className="w-3 h-3 mr-1" />
                                Fotossensível
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-blue-600 border-blue-600">
                              <Clock className="w-3 h-3 mr-1" />
                              {medication.infusionTime}
                            </Badge>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2 border-t">
                          <p className="text-xs text-gray-500">
                            <strong>Referências:</strong> Protocolos do Setor de Oncologia - Hospital Universitário
                            Antonio Pedro (HUAP)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vesicantes" className="space-y-4">
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Medicamentos Vesicantes:</strong> Podem causar necrose tecidual se extravasarem. Requerem
                  cuidados especiais e monitoramento contínuo durante a infusão.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6">
                {vesicantes.map((medication, index) => (
                  <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-red-700">
                        <AlertTriangle className="w-5 h-5" />
                        {medication.name}
                        {medication.brand && (
                          <Badge variant="outline" className="text-sm">
                            {medication.brand}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Via: {medication.route}</Badge>
                        <Badge variant="destructive">{medication.irritant}</Badge>
                        {medication.photosensitive && (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            <Sun className="w-3 h-3 mr-1" />
                            Fotossensível
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Clock className="w-3 h-3 mr-1" />
                          {medication.infusionTime}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem Específicos:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="irritantes" className="space-y-4">
              <Alert className="border-orange-200 bg-orange-50">
                <Shield className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  <strong>Medicamentos Irritantes:</strong> Podem causar dor e inflamação local. Requerem acesso venoso
                  adequado e monitoramento durante a infusão.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6">
                {irritantes.map((medication, index) => (
                  <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-orange-700">
                        <Shield className="w-5 h-5" />
                        {medication.name}
                        {medication.brand && (
                          <Badge variant="outline" className="text-sm">
                            {medication.brand}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Via: {medication.route}</Badge>
                        <Badge variant="default">{medication.irritant}</Badge>
                        {medication.photosensitive && (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            <Sun className="w-3 h-3 mr-1" />
                            Fotossensível
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Clock className="w-3 h-3 mr-1" />
                          {medication.infusionTime}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fotossensiveis" className="space-y-4">
              <Alert className="border-yellow-200 bg-yellow-50">
                <Sun className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <strong>Medicamentos Fotossensíveis:</strong> Devem ser protegidos da luz durante preparo, transporte
                  e infusão. Pacientes devem evitar exposição solar.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6">
                {fotossensiveis.map((medication, index) => (
                  <Card key={index} className="border-yellow-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-yellow-700">
                        <Sun className="w-5 h-5" />
                        {medication.name}
                        {medication.brand && (
                          <Badge variant="outline" className="text-sm">
                            {medication.brand}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Via: {medication.route}</Badge>
                        <Badge
                          variant={
                            medication.category === "vesicante"
                              ? "destructive"
                              : medication.category === "irritante"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {medication.irritant}
                        </Badge>
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                          <Sun className="w-3 h-3 mr-1" />
                          Fotossensível
                        </Badge>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Clock className="w-3 h-3 mr-1" />
                          {medication.infusionTime}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="infusao-rapida" className="space-y-4">
              <Alert className="border-green-200 bg-green-50">
                <Timer className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Infusão Rápida (≤30 min):</strong> Medicamentos com tempo de infusão reduzido. Monitorar
                  reações imediatas e garantir acesso venoso adequado.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6">
                {infusaoRapida.map((medication, index) => (
                  <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-green-700">
                        <Zap className="w-5 h-5" />
                        {medication.name}
                        {medication.brand && (
                          <Badge variant="outline" className="text-sm">
                            {medication.brand}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Via: {medication.route}</Badge>
                        <Badge
                          variant={
                            medication.category === "vesicante"
                              ? "destructive"
                              : medication.category === "irritante"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {medication.irritant}
                        </Badge>
                        {medication.photosensitive && (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            <Sun className="w-3 h-3 mr-1" />
                            Fotossensível
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <Timer className="w-3 h-3 mr-1" />
                          {medication.infusionTime}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
