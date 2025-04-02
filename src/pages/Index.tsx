
import { CheckIcon, XIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-nude-secondary">
      {/* Header Banner */}
      <div className="w-full bg-nude-primary py-3 px-4 text-white font-semibold text-center">
        🎊 Não Deixe Essa Chance Passar:
      </div>

      {/* Hero Section */}
      <div className="relative bg-nude-100 py-10 px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-3 text-center md:text-left">
          <div className="font-playfair italic text-nude-500 text-lg md:text-xl">
            Manual completo
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-nude-text">
            De filhos birrentos
          </h1>
          <div className="uppercase tracking-wider text-nude-text text-sm">
            A crianças tranquilas
          </div>
          <p className="text-nude-text italic text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
            "O método prático para transformar birras e lágrimas em ensino e superação. Lidar com
            2 seações de forma leve e divertida"
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/lovable-uploads/a0d85093-9256-41ab-b5fa-512743280825.png"
            alt="Criança brincando com peças"
            className="w-auto h-48 md:h-72 object-contain"
          />
        </div>
      </div>

      {/* Price Banner */}
      <div className="bg-nude-primary text-white py-5 px-4 text-center">
        <div className="text-xl md:text-2xl font-semibold mb-1">
          De: R$97,30 por apenas R$19,90
        </div>
        <div className="text-sm md:text-base uppercase tracking-wider mb-4">
          Essa é a sua chance de levar o seu casamento para o próximo nível!
        </div>
        <button className="btn-primary">EU QUERO O GUIA</button>
      </div>

      {/* Main Content Section */}
      <div className="py-10 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-nude-text uppercase mb-8">
          TRANSFORMANDO BIRRA EM CONEXÃO
        </h2>

        <div className="space-y-6 text-nude-text">
          <p className="text-center uppercase text-sm tracking-wide">
            Se sente frustrada porque seu filho não te escuta e as birras acontecem do nada?
          </p>

          <p className="text-center uppercase text-sm tracking-wide">
            Você não está sozinha. a boa notícia? existe um caminho mais simples, respeitoso e eficaz!
          </p>

          <div className="flex items-center justify-center space-x-2">
            <span className="text-amber-500">🔥</span>
            <p className="uppercase text-sm tracking-wide">
              O que ninguém te contou sobre as birras:
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center">
              <XIcon className="text-red-500 h-5 w-5 flex-shrink-0 mr-2" />
              <p className="uppercase text-sm tracking-wide">Não é falta de educação</p>
            </div>
            <div className="flex items-center">
              <XIcon className="text-red-500 h-5 w-5 flex-shrink-0 mr-2" />
              <p className="uppercase text-sm tracking-wide">Não é pirraça</p>
            </div>
            <div className="flex items-center">
              <XIcon className="text-red-500 h-5 w-5 flex-shrink-0 mr-2" />
              <p className="uppercase text-sm tracking-wide">Não é desobediência</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-amber-500 text-xl mr-2">🔹</span>
            <p className="text-sm">
              Birras são emoções intensas que seu filho ainda não sabe lidar.
              É a forma mais rápida e eficaz de ajudá-lo não é com gritos ou
              castigos, mas sim uma abordagem que ele mais entende: a
              brincadeira.
            </p>
          </div>

          <p className="font-medium">Imagine se seu filho...</p>

          <div className="space-y-1">
            <div className="flex items-center">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2" />
              <p className="text-sm">Te escutasse sem precisar repetir mil vezes</p>
            </div>
            <div className="flex items-center">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2" />
              <p className="text-sm">Se acalmasse mais rápido diante de frustrações</p>
            </div>
            <div className="flex items-center">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2" />
              <p className="text-sm">Aprendesse a expressar o que sente sem chorar ou gritar</p>
            </div>
            <div className="flex items-center">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2" />
              <p className="text-sm">Se sentisse mais seguro e conectado com você</p>
            </div>
          </div>

          <p className="text-center font-medium">
            Isso é possível – e mais fácil do que você imagina!
          </p>

          <p className="text-center font-medium mt-6">
            APRESENTAMOS O EBOOK "FILHOS BIRRENTOS A CRIANÇAS TRANQUILAS":
          </p>

          <div className="flex items-start">
            <span className="text-amber-500 text-xl mr-2">📝</span>
            <p className="text-sm">
              Um método prático, baseado em brincadeiras, para transformar a
              relação com seu filho e ensinar seu filho a lidar com emoções de
              forma natural e leve
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2 mt-0.5" />
              <p className="text-sm">
                <span className="font-semibold">O que você vai encontrar no ebook:</span>
              </p>
            </div>
            <div className="flex items-start">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2 mt-0.5" />
              <p className="text-sm">
                Brincadeiras para ensinar autocontrole – seu filho aprenderá a esperar e se acalmar sozinho
              </p>
            </div>
            <div className="flex items-start">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2 mt-0.5" />
              <p className="text-sm">
                Brincadeiras para expressar emoções – para que ele consiga dizer o que sente sem exploções emocionais
              </p>
            </div>
            <div className="flex items-start">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2 mt-0.5" />
              <p className="text-sm">
                Brincadeiras para estabelecer limites – adeus choro por qualquer "não"!
              </p>
            </div>
            <div className="flex items-start">
              <CheckIcon className="text-green-500 h-5 w-5 flex-shrink-0 mr-2 mt-0.5" />
              <p className="text-sm">
                Brincadeiras para fortalecer a conexão – seu filho mais seguro e cooperativo com você
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <span className="text-amber-500">🔥</span>
            <p className="text-sm font-medium">
              Mães que já aplicaram o método relatam mudanças incríveis em poucos dias!
            </p>
          </div>

          <p className="text-center font-medium">A ESCOLHA É SUA:</p>

          <div className="space-y-2">
            <div className="flex items-start">
              <XIcon className="text-red-500 h-5 w-5 flex-shrink-0 mr-2 mt-0.5" />
              <p className="text-sm">
                Continuar insistindo em métodos que só geram estresse
              </p>
            </div>
            <div className="flex items-start">
              <XIcon className="text-red-500 h-5 w-5 flex-shrink-0 mr-2 mt-0.5" />
              <p className="text-sm">
                Ou aprender um jeito prático e simples de transformar as birras em aprendizado
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-amber-500 mr-2">⚡</span>
            <p className="text-sm font-medium">
              Acesso vitalício + resultados rápidos e sem complicação!
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <button className="btn-primary">EU QUERO O GUIA</button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-10 px-4 bg-nude-secondary">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-nude-text mb-8">
          ESPERA! EU PREPAREI ALGO AINDA MELHOR PARA VOCÊ!
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Basic Product */}
          <div className="rounded-lg overflow-hidden bg-nude-accent shadow-md flex flex-col">
            <div className="p-4 text-center relative flex-1 flex flex-col">
              <div className="absolute top-2 right-2">
                <span className="text-nude-600 text-xl">👑</span>
              </div>
              <h3 className="text-xl font-medium text-nude-600 mb-3">E-book</h3>
              <div className="mb-2">
                <p className="text-sm">De:R$97,30 por</p>
                <p className="text-xl font-bold text-nude-600">R$19,90</p>
              </div>
              <div className="text-left space-y-2 my-4 flex-1">
                <p className="text-sm flex items-center">
                  <CheckIcon className="text-green-500 h-4 w-4 mr-2" />
                  Manual Completo: De filhos birrentos a Crianças Tranquilas
                </p>
              </div>
              <div className="mt-auto">
                <button className="btn-primary w-full">EU QUERO AGORA</button>
              </div>
            </div>
          </div>

          {/* Premium Product */}
          <div className="rounded-lg overflow-hidden bg-nude-accent shadow-md flex flex-col">
            <div className="p-4 text-center relative flex-1 flex flex-col">
              <div className="absolute top-2 right-2">
                <span className="text-nude-600 text-xl">👑</span>
              </div>
              <h3 className="text-xl font-medium text-nude-600 mb-3">E-book: PREMIUM</h3>
              <div className="mb-2">
                <p className="text-sm">De:R$197,30 por</p>
                <p className="text-xl font-bold text-nude-600">R$37,90</p>
              </div>
              <div className="text-left space-y-2 my-4 flex-1">
                <p className="text-sm flex items-center">
                  <CheckIcon className="text-green-500 h-4 w-4 mr-2" />
                  Manual Completo: De filhos birrentos a Crianças Tranquilas
                </p>
                <p className="text-sm flex items-center">
                  <CheckIcon className="text-green-500 h-4 w-4 mr-2" />
                  Guia Prematuro: Brincadeiras para desenvolvimento de 1 e 2 anos
                </p>
                <p className="text-sm flex items-center">
                  <CheckIcon className="text-green-500 h-4 w-4 mr-2" />
                  Checklist diário: Melhor forma de aplicar as brincadeiras
                </p>
                <p className="text-sm flex items-center">
                  <CheckIcon className="text-green-500 h-4 w-4 mr-2" />
                  Grupo fechado no WhatsApp para suporte exclusivo
                </p>
              </div>
              <div className="mt-auto">
                <button className="btn-primary w-full">EU QUERO AGORA</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-nude-primary text-white py-5 px-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI0ZCRDg4NSIvPjx0ZXh0IHg9IjQwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjQTE2RDVEIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj43PC90ZXh0Pjwvc3ZnPg==" 
               alt="7 dias de garantia" className="w-16 h-16" />
          <p className="font-medium">Essa compra tem garantia de 7 dias</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
