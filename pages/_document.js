import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-N43VHLW" />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js",new Date);
              gtag("config","GTM-N43VHLW");
            `
          }}>
          </script>

          {/* SCHEMA NEWS ARTICLE */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": "https://schema.org",
                "@type": "NewsArticle",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                "@id": "https://data.larepublica.pe/"
                  },
                "headline": "LR Data: investigación social y periodismo de datos",
                "description": "Informes e investigaciones de temas sociales y políticos en Perú y el mundo. Publicaciones sobre salud, educación, viviendas, obras, infraestructura, elecciones, presidencia, entre otras noticias de último minuto. Interactivo | Mapas | Gráficos",
                "image": "https://larepublica.cronosmedia.glr.pe/original/2023/01/27/63d4568fb86e87136d14061a.jpg",
                "author": {
                  "@type": "Organization",
                "name": "La República",
                "url": "https://larepublica.pe/"
                  },
                "publisher": {
                  "@type": "Organization",
                "name": "La República",
                "logo": {
                  "@type": "ImageObject",
                "url": "https://larepublica.pe/static/lr/lr_author.png"
                    }
                  },
                "datePublished": "2021-09-01",
                "dateModified": "2023-01-31"
                }
              `
            }}
          >
          </script>

          {/* SCHEMA BREADCRUMB */}
          <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:`
              {
                "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
              "position": 1,
              "name": "Regiones que protestan registran altos índices de pobreza, trabajo informal y bajo progreso social",
              "item": "https://data.larepublica.pe/marcha-en-lima-regiones-que-protestan-en-paro-nacional-registran-alta-pobreza-trabajo-informal-y-bajo-progreso-social/"  
              },{
                "@type": "ListItem",
              "position": 2,
              "name": "Sonidos de lucha: opresión y resistencia en la Toma de Lima",
              "item": "https://data.larepublica.pe/paro-nacional-un-recuento-de-lo-que-se-vivio-en-las-manifestaciones-de-la-denominada-toma-de-lima-del-19-de-enero/"  
              },{
                "@type": "ListItem",
              "position": 3,
              "name": "'Nos duele que nos llamen terroristas': manifestantes alojados en UNMSM rechazan estigmatización",
              "item": "https://data.larepublica.pe/marcha-en-lima-testimonios-de-manifestantes-del-paro-nacional-alojados-en-la-universidad-san-marcos-unmsm-19-de-enero/"  
              },{
                "@type": "ListItem",
              "position": 4,
              "name": "Caso Freddy Díaz: Congreso retrocede en su blindaje, pero la denuncia penal avanza a paso lento",
              "item": "https://data.larepublica.pe/freddy-diaz-congresista-blindado-por-pleno-a-casi-seis-meses-de-denuncia-penal-en-fiscalia-por-violacion-sexual/"  
              },{
                "@type": "ListItem",
              "position": 5,
              "name": "Un país en vilo: el 68,2% de las mesas de diálogo por conflictos sociales se instaló después de algún hecho de violencia",
              "item": "https://data.larepublica.pe/pais-en-vilo-68-por-ciento-de-las-mesas-de-dialogo-por-conflictos-sociales-se-instalo-despues-de-algun-hecho-de-violencia/"  
              },{
                "@type": "ListItem",
              "position": 6,
              "name": "Hay 31 postas y hospitales inconclusos en el Perú, uno de ellos tiene cerca de 14 años en construcción",
              "item": "https://data.larepublica.pe/hay-31-postas-y-hospitales-inconclusos-en-el-peru-uno-de-ellos-tiene-cerca-de-14-anos-de-construccion/"  
              },{
                "@type": "ListItem",
              "position": 7,
              "name": "Pasivos ambientales, los residuos de la minería que nadie quiere asumir",
              "item": "https://data.larepublica.pe/pasivos-ambientales-los-residuos-de-la-mineria-que-nadie-quiere-asumir/"  
              },{
                "@type": "ListItem",
              "position": 8,
              "name": "Investigaciones pagadas por Repsol e indiferencia del Minsa, lo que dejó el ecocidio a un año del derrame",
              "item": "https://data.larepublica.pe/repsol-derrame-de-petroleo-en-peru-compania-pago-investigaciones-y-ministerio-de-salud-no-atiende-por-la-contaminacion-minsa/"  
              },{
                "@type": "ListItem",
              "position": 9,
              "name": "Entre el abuso y la mala fe: Repsol presiona a víctimas a firmar acuerdos extrajudiciales lesivos",
              "item": "https://data.larepublica.pe/derrame-de-petroleo-de-repsol-afectados-aseguran-que-firmaron-acuerdos-extrajudiciales-por-necesidad-ventanilla-ancon-minam/"  
              },{
                "@type": "ListItem",
              "position": 10,
              "name": "Mujeres y menores en peligro: 2022, el año en que el Congreso frenó el avance en la conquista de sus derechos",
              "item": "https://data.larepublica.pe/mujeres-y-menores-en-peligro-este-2022-el-ano-en-que-el-congreso-freno-el-avance-en-la-conquista-de-sus-derechos/"  
              },{
                "@type": "ListItem",
              "position": 11,
              "name": "Perú cierra el año escolar con casi 2.500 casos de bullying, la cifra más alta en 9 años",
              "item": "https://data.larepublica.pe/peru-cierra-el-ano-escolar-con-casi-2500-casos-de-bullying-la-cifra-mas-alta-en-9-anos/"  
              },{
                "@type": "ListItem",
              "position": 12,
              "name": "Historias del 2022: las tareas pendientes en salud, seguridad ciudadana y comunidades",
              "item": "https://data.larepublica.pe/historias-del-2022-tareas-pendientes-en-salud-seguridad-ciudadana-comunidades-peru-noticias/"  
              },{
                "@type": "ListItem",
              "position": 13,
              "name": "Perú cierra el año escolar con casi 2.500 casos de bullying, la cifra más alta en 9 años",
              "item": "https://data.larepublica.pe/peru-cierra-el-ano-escolar-con-casi-2500-casos-de-bullying-la-cifra-mas-alta-en-9-anos/"  
              },{
                "@type": "ListItem",
              "position": 14,
              "name": "Un país en vilo: el 68,2% de las mesas de diálogo por conflictos sociales se instaló después de algún hecho de violencia",
              "item": "https://data.larepublica.pe/pais-en-vilo-68-por-ciento-de-las-mesas-de-dialogo-por-conflictos-sociales-se-instalo-despues-de-algun-hecho-de-violencia/"  
              },{
                "@type": "ListItem",
              "position": 15,
              "name": "La caída de Pedro Castillo: los caminos que llevaron al exmandatario a intentar dar golpe de Estado",
              "item": "https://data.larepublica.pe/el-camino-que-llevo-a-pedro-castillo-a-dar-golpe-de-estado/"  
              },{
                "@type": "ListItem",
              "position": 16,
              "name": "Lo que le depara a Pedro Castillo, el nuevo expresidente peruano que se enfrenta a la cárcel",
              "item": "https://data.larepublica.pe/que-sucedera-con-pedro-castillo-tras-intentar-dar-golpe-de-estado-y-romper-el-orden-constitucional/"  
              },{
                "@type": "ListItem",
              "position": 17,
              "name": "Congresistas no justificaron sus 181 faltas en comisiones parlamentarias y no se les descontó",
              "item": "https://data.larepublica.pe/congresistas-no-justificaron-sus-181-faltas-en-comisiones-parlamentarias-y-no-se-les-desconto/"  
              },{
                "@type": "ListItem",
              "position": 18,
              "name": "Constitución en disputa: Congreso ha presentado 154 PL de reforma constitucional en menos de un año y medio",
              "item": "https://data.larepublica.pe/constitucion-en-disputa-congreso-ha-presentado-154-pl-de-reforma-constitucional-en-menos-de-un-ano-y-medio/"  
              },{
                "@type": "ListItem",
              "position": 19,
              "name": "Hay 31 postas y hospitales inconclusos en el Perú, uno de ellos tiene cerca de 14 años en construcción",
              "item": "https://data.larepublica.pe/hay-31-postas-y-hospitales-inconclusos-en-el-peru-uno-de-ellos-tiene-cerca-de-14-anos-de-construccion/"  
              },{
                "@type": "ListItem",
              "position": 20,
              "name": "Políticas habitacionales benefician a personas con más ingresos, mientras aumenta el déficit habitacional en sectores D/E",
              "item": "https://data.larepublica.pe/politicas-habitacionales-benefician-a-personas-con-mas-ingresos-mientras-aumenta-deficit-en-sectores-D-E-bonos-vivienda/"  
              },{
                "@type": "ListItem",
              "position": 21,
              "name": "Petroperú debe casi 22 millones de soles por infracciones en Oleoducto Norperuano",
              "item": "https://data.larepublica.pe/petroperu-debe-casi-22-millones-de-soles-por-infracciones-en-oleoducto-norperuano-que-deberan-pagarse-con-dinero-publico/"  
              },{
                "@type": "ListItem",
              "position": 22,
              "name": "Inversiones de infraestructura natural paralizadas en comunidades con déficit de agua",
              "item": "https://data.larepublica.pe/inversiones-de-infraestructura-natural-paralizadas-en-comunidades-con-deficit-del-agua-seguridad-hidrica/"  
              },{
                "@type": "ListItem",
              "position": 23,
              "name": "Informe del Congreso que investigó el caso Sodalicio permanece en el archivo tras 3 años listo para debatirse",
              "item": "https://data.larepublica.pe/informe-del-congreso-que-investigo-el-caso-sodalicio-permanece-en-el-archivo-tras-3-anos-listo-para-debatirse/"  
              },{
                "@type": "ListItem",
              "position": 24,
              "name": "Regiones ejecutaron solo un 31% del presupuesto para mejoramiento en infraestructura en salud",
              "item": "https://data.larepublica.pe/regiones-ejecutaron-solo-un-31-por-ciento-del-presupuesto-para-mejoramiento-en-infraestructura-en-salud/"  
              },{
                "@type": "ListItem",
              "position": 25,
              "name": "Siete candidatos distritales perdieron contra los votos en blanco y nulos pese a ser los únicos postulantes",
              "item": "https://data.larepublica.pe/siete-candidatos-distritales-perdieron-contra-los-votos-en-blanco-y-nulos-pese-a-ser-los-unicos-postulantes/"  
              },{
                "@type": "ListItem",
              "position": 26,
              "name": "Territorios del miedo: Lima y La Libertad sometidas por la extorsión",
              "item": "https://data.larepublica.pe/territorios-del-miedo-lima-y-la-libertad-sometidas-por-la-extorsion/"  
              },{
                "@type": "ListItem",
              "position": 27,
              "name": "13 gobernadores electos y al menos un candidato en siete regiones que irán a segunda vuelta tienen antecedentes con presunta corrupción",
              "item": "https://data.larepublica.pe/13-gobernadores-electos-y-al-menos-un-candidato-en-siete-regiones-que-iran-a-segunda-vuelta-estan-acusados-de-corrupcion/"  
              },{
                "@type": "ListItem",
              "position": 28,
              "name": "14 excongresistas con un historial de vacancias y blindajes postulan a las alcaldías distritales en Lima Metropolitana",
              "item": "https://data.larepublica.pe/14-excongresistas-con-un-historial-de-vacancias-y-blindajes-postulan-a-las-alcaldias-distritales-en-lima-metropolitana/"  
              },{
                "@type": "ListItem",
              "position": 29,
              "name": "Solo 16 de 51 propuestas son viables en torno al fenómeno de las drogas en los 4 distritos de Lima que registran mayor consumo",
              "item": "https://data.larepublica.pe/16-de-51-propuestas-son-viables-para-el-fenomeno-de-las-drogas-en-comas-rimac-san-martin-de-porres-y-villa-el-salvador/"  
              },{
                "@type": "ListItem",
              "position": 30,
              "name": "Más de un candidato con denuncias policiales se presenta en 41 de las 42 alcaldías distritales de Lima Metropolitana",
              "item": "https://data.larepublica.pe/mas-de-un-candidato-con-denuncias-policiales-se-presenta-en-41-de-las-42-alcaldias-distritales-de-lima-metropolitana/"  
              },{
                "@type": "ListItem",
              "position": 31,
              "name": "Devida afirma que creciente demanda de cocaína expone a la Amazonía y sus pueblos indígenas",
              "item": "https://data.larepublica.pe/devida-afirma-que-creciente-demanda-de-cocaina-expone-a-la-amazonia-y-sus-pueblos-indigenas/"  
              },{
                "@type": "ListItem",
              "position": 32,
              "name": "Ricardo Soberón, presidente de DEVIDA: “El narcotráfico puede desaparecer a los pueblos indígenas”",
              "item": "https://data.larepublica.pe/ricardo-soberon-presidente-de-devida-el-narcotrafico-puede-desaparecer-a-los-pueblos-indigenas-entrevista/"  
              },{
                "@type": "ListItem",
              "position": 33,
              "name": "89 candidatos con antecedentes de corrupción aspiran a los cargos regionales de gobernador y vicegobernador",
              "item": "https://data.larepublica.pe/89-candidatos-con-antecedentes-de-corrupcion-aspiran-a-los-cargos-regionales-de-gobernador-y-vicegobernador/"  
              },{
                "@type": "ListItem",
              "position": 34,
              "name": "Solo hay un resonador magnético operativo por cada 10.000 pacientes con cáncer",
              "item": "https://data.larepublica.pe/solo-hay-un-resonador-magnetico-operativo-por-cada-10000-pacientes-con-cancer/"  
              },{
                "@type": "ListItem",
              "position": 35,
              "name": "Viruela del mono en Perú: entre la homofobia y la lentitud de las autoridades",
              "item": "https://data.larepublica.pe/viruela-del-mono-en-peru-entre-la-discriminacion-y-las-acciones-lentas-de-las-autoridades/"  
              },{
                "@type": "ListItem",
              "position": 36,
              "name": "Del Congreso que votamos al Congreso que tenemos: renuncias, expulsiones, cambios y nuevas bancadas en el primer año del Legislativo",
              "item": "https://data.larepublica.pe/del-congreso-que-votamos-al-congreso-que-tenemos-renuncias-expulsiones-cambios-y-nuevas-bancadas/"  
              },{
                "@type": "ListItem",
              "position": 37,
              "name": "Un año de Gobierno de Pedro Castillo: un breve recuento de las promesas incumplidas",
              "item": "https://data.larepublica.pe/un-ano-de-gobierno-de-pedro-castillo-un-breve-recuento-de-las-promesas-incumplidas/"  
              },{
                "@type": "ListItem",
              "position": 38,
              "name": "Resistir sin agua y en desigualdad en Ventanilla",
              "item": "https://data.larepublica.pe/resistir-sin-agua-y-en-desigualdad-en-ventanilla/"  
              },{
                "@type": "ListItem",
              "position": 39,
              "name": "Los precandidatos de Lima que saltan de un partido a otro buscando ganar una elección",
              "item": "https://data.larepublica.pe/los-precandidatos-de-lima-que-saltan-de-un-partido-a-otro-buscando-ganar-una-eleccion/"  
              },{
                "@type": "ListItem",
              "position": 40,
              "name": "Metropolitano: las irregularidades y los motivos detrás del retraso de su ampliación hasta Carabayllo",
              "item": "https://data.larepublica.pe/metropolitano-irregularidades-y-motivos-detras-del-retraso-de-ampliacion-hasta-carabayllo/"  
              },{
                "@type": "ListItem",
              "position": 41,
              "name": "NARCOBENEFACTORES El tributo del narco en los márgenes de la Amazonía peruana",
              "item": "https://data.larepublica.pe/narcobenefactores-el-tributo-del-narcotrafico-en-los-margenes-de-la-amazonia-peruana/"  
              },{
                "@type": "ListItem",
              "position": 42,
              "name": "Pruebas rápidas serológicas contra la COVID-19 aún se registran a pesar de su cuestionamiento",
              "item": "https://data.larepublica.pe/pruebas-rapidas-serologicas-contra-la-covid-19-aun-se-registran-a-pesar-de-su-cuestionamiento/"  
              },{
                "@type": "ListItem",
              "position": 43,
              "name": "Procesamiento de pruebas COVID-19: una vigilancia deficiente antes de la tercera ola",
              "item": "https://data.larepublica.pe/procesamiento-de-pruebas-covid-19-una-vigilancia-deficiente-antes-de-la-tercera-ola/"  
              },{
                "@type": "ListItem",
              "position": 44,
              "name": "Agua potable, un derecho negado a medio Loreto",
              "item": "https://data.larepublica.pe/agua-potable-un-derecho-negado-a-medio-loreto/"  
              },{
                "@type": "ListItem",
              "position": 45,
              "name": "La vacunación contra la COVID-19, un proceso desigual y con deudas pendientes",
              "item": "https://data.larepublica.pe/vacunacion-contra-la-covid-19-un-proceso-desigual-y-con-deudas-pendientes/"  
              },{
                "@type": "ListItem",
              "position": 46,
              "name": "Ciudades ciegas: crecer y planificar sin saber lo que hay en el territorio",
              "item": "https://data.larepublica.pe/ciudades-ciegas-crecer-y-planificar-sin-saber-lo-que-hay-en-el-territorio/"  
              },{
                "@type": "ListItem",
              "position": 47,
              "name": "14N, una deuda sin saldar: recuento de heridas aún abiertas y una lenta justicia",
              "item": "https://data.larepublica.pe/14n-una-deuda-sin-saldar-recuento-heridas-aun-abiertas-y-lenta-justicia/"  
              },{
                "@type": "ListItem",
              "position": 48,
              "name": "Mariscal Ramón Castilla, la provincia peruana que enfrenta la pandemia en total abandono",
              "item": "https://data.larepublica.pe/mariscal-ramon-castilla-una-provincia-condenada-al-abandono/"  
              },{
                "@type": "ListItem",
              "position": 49,
              "name": "Ciudades peruanas: sin planificación, con documentos vacíos y crecimiento informal",
              "item": "https://data.larepublica.pe/ciudades-peruanas-sin-planificacion-con-documentos-vacios-y-crecimiento-informal/"  
              },{
                "@type": "ListItem",
              "position": 50,
              "name": "La niñez sin familia: menores con discapacidad a la cola de las adopciones",
              "item": "https://data.larepublica.pe/la-ninez-sin-familia-menores-con-discapacidad-a-la-cola-de-las-adopciones/"  
              },{
                "@type": "ListItem",
              "position": 51,
              "name": "Entre éxitos regionales y metas incumplidas: tras las cifras reales de la Vacunatón",
              "item": "https://data.larepublica.pe/entre-exitos-regionales-y-metas-incumplidas-tras-las-cifras-reales-de-la-vacunaton/"  
              },{
                "@type": "ListItem",
              "position": 52,
              "name": "Ollas comunes reciben migajas y las raciones no alcanzan",
              "item": "https://data.larepublica.pe/ollas-comunes-reciben-migajas-y-las-raciones-no-alcanzan/"  
              },{
                "@type": "ListItem",
              "position": 53,
              "name": "Despegue en el sur: las claves de Tacna para vacunar a un tercio de su población",
              "item": "https://data.larepublica.pe/despegue-en-el-sur-las-claves-de-tacna-para-vacunar-a-un-tercio-de-su-poblacion/"  
              },{
                "@type": "ListItem",
              "position": 54,
              "name": "Ollas comunes fantasmas, un golpe bajo a la emergencia alimentaria",
              "item": "https://data.larepublica.pe/ollas-comunes-fantasmas-un-golpe-bajo-a-la-emergencia-alimentaria/"  
              },{
                "@type": "ListItem",
              "position": 55,
              "name": "Iñapari, la otra frontera agresiva",
              "item": "https://data.larepublica.pe/exodo-haitiano-en-sudamerica-otra-tragedia-humanitaria/"  
              },{
                "@type": "ListItem",
              "position": 56,
              "name": "Menores adoptados ilegalmente, víctimas no reconocidas de la trata de personas",
              "item": "https://data.larepublica.pe/menores-adoptados-ilegalmente-victimas-no-reconocidas-de-la-trata-de-personas/"  
              },{
                "@type": "ListItem",
              "position": 57,
              "name": "El calvario de la pandemia en el extremo de la amazonía peruana",
              "item": "https://data.larepublica.pe/el-calvario-de-la-pandemia-en-el-extremo-de-la-amazonia-peruana/"  
              },{
                "@type": "ListItem",
              "position": 58,
              "name": "La búsqueda de una vivienda social, entre la falta de planificación y políticas sin vigencia",
              "item": "https://data.larepublica.pe/busqueda-de-una-vivienda-social-entre-la-falta-de-planificacion-y-politicas-sin-vigencia/"  
              },{
                "@type": "ListItem",
              "position": 59,
              "name": "Mosaico: el sueño de la vacuna contra el VIH se mantiene, pese a la cancelación del proyecto",
              "item": "https://data.larepublica.pe/vacuna-contra-el-vih-ensayo-clinico-mosaico-se-cancela-pero-mantiene-la-esperanza-de-cura-contra-la-its-sida/"  
              }]
            }
              `
            }}
          >
          </script>

          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}