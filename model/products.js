const products = [
    {
        id: 1,
        nombre: "Guitarra Electrica SX Les Paul",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_700461-MLA48123320539_112021-F.webp",
        precio: 62000,
        descr: "Fabricada en aliso con acabado brillante. Con 6 cuerdas y 22 trastes de tamaño medium jumbo. El largo de escala es de 625 mm. El puente es fijo. Incluye 2 micrófonos humbucker. Controles de selector de micrófonos, tono y volumen. Sonidos fuertes y firmes con un estilo propio."
    },

    {
        id: 2,
        nombre: "Guitarra Acustica EpiPhone",
        picture:"https://http2.mlstatic.com/D_NQ_NP_2X_669783-MLA40822415885_022020-F.webp",
        precio: 70000,
        descr: "Epiphone DR-100 Guitarra acústica EA10VSCH1 El modelo DR-100 ha sido durante mucho tiempo la guitarra acústica más vendida de Epiphone. El DR-100 tiene la apariencia, el sonido y la calidad de construcción que los principiantes y profesionales por primera vez esperan encontrar cuando recogen un Epiphone. El dreadnought (formato de cuerpo de la guitarra) se considera la forma clásica para bluegrass, folk, rock, country y todo lo demás. El sonido de dreadnought es dominante cuando se requiere, pero su sonido equilibrado significa que a cualquier volumen, puede ser escuchado bien."
    },

    {
        id: 3,
        nombre: "Guitarra Acustica Fender",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_771060-MLA46250076960_062021-F.webp",
        precio: 60000,
        descr: "Guitarras prácticas y funcionales, para aficionados y profesionales. Fender es una empresa que transforma la música en todo el mundo y atraviesa una gran variedad de géneros. Es el mayor fabricante internacional y sus productos representan un ícono cultural, Un modelo para cada guitarrista La tapa de abeto genera un tono brillante y claro, incluso en los registros más agudos. Calidad que se hace notar Las cuerdas de metal se caracterizan por su bajo estiramiento y resistencia a la corrosión y abrasión. Son más duraderas, sólidas y generan un sonido brillante y claro"
    },

    {
        id: 4,
        nombre: "Guitarra Electrica Squier",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_942495-MLA40735278247_022020-F.webp",
        precio: 100000,
        descr: "Con el mejor valor añadido en diseño actual de guitarra eléctrica, la Squier Affinity Series™ Telecaster® es una Squier sólida y fiable con estética tradicional y características clásicas. Esta Telecaster combina los acabados atractivos con un sonido versátil y gran comodidad, que la hacen el instrumento ideal para entrar en el mundo de la guitarra eléctrica."
    },

    {
        id: 5,
        nombre: "Guitarra eléctrica Epiphone",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_658983-MLA47683203054_092021-F.webp",
        precio: 150000,
        descr: "Epiphone fabrica instrumentos para todos los estilos de música popular, con espíritu pionero y de invención. El valor de sus productos resalta por su calidad e innovación. Una forma para cada estilo musical Esta guitarra SG es una variación de la Les Pauls que popularizó Angus Young de AC/DC. A diferencia de la Les Paul y Stratocaster, es bastante ligera de peso, con menos graves, pero muy dinámica y viva, lo que la hace perfecta para el blues y el rock. Material versátil Su madera de caoba la hace un producto versátil y popular. El tono viene marcado por la calidez y equilibrio, con agudos suaves y cargados matices armónicos."
    },


    {
        id: 6,
        nombre: "Bajo Eléctrico Precision Leonard",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_710303-MLA41765392355_052020-F.webp",
        precio: 42000,
        descr: "Bajo Leonard Precision Madera de Pino Diapasón de Caoba Acabado Laqueado Pickguard Tricapa 21 trastes Mástil atornillado 1 Tono, 1 Volumen"
    },

    {
        id: 7,
        nombre: "Bajo Electrico Red Wood Precision Bass",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_694538-MLA49634267202_042022-F.webp",
        precio: 40000,
        descr: "Bajo Onas Construccion: Bolt On - Cuerpo: Madera maciza (no laminada) - Mango: Maple con trastera de simil Rosewood, alma doble accion - Clavijero: Chrome Die Cast - Pickguard: Blanco con cenefa negra - Microfonos: Paradynamic custom S/S - Controles: 1 Vol, 1 Tono, Switch 3 posiciones - Cuerdas: Importadas - Terminacion: Madera lustrada y laqueada con pouliretano."
    },

    {
        id: 8,
        nombre: "Bajo Eléctrico Warwick",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_666289-MLA43568292304_092020-F.webp",
        precio: 900000,
        descr: "Este increíble bajo cuenta con las siguientes características: Cabezal combinado: Burl de alcanfor y satén natural Nuez: ust-A-Nut III Latón Mechineheads: Cabeza Warwick con pomos de madera Madera del cuello: Cuello de wengué, 4 laminaciones Diapasón: Diapasón de wengué Puntos laterales LED o fluorescentes: Puntos laterales iluminados Radio del diapasón: 26  Longitud de la escala: 34 (escala larga) Tuerca de ancho: 45,0 mm / 1,8  Ancho traste 12: 60,8 mm / 2,4  Material y tamaño de la calidad del traste: 24 trastes Jumbo Bronze (extraduros) (ancho: 2,9 mm / alto: 1,3 mm) Trastes: IFT - Tecnología de calado invisible Forma del cuerpo: Forma del cuerpo curvo Bodywood (Topwood / Backwood): 1 Camphor Burl top / cuerpo de Bubinga Pastillas: Pastillas activas MEC J / J Electrónica: Electrónica activa Warwick de 2 vías con batería de litio recargable Diseño de maceta: Volumen P / P / Balance / Agudos y graves apilados Sistema de puente: Puente Warwick de latón macizo de 2 piezas Sistema de correas: Cerraduras de seguridad Warwick Construcción: Atornillado Posibilidades de color: Satén natural Color de hardware: Oro Etiqueta de cadena / Gaues de cadena: Cuerdas Warwick EMP 045 - 135 (38301M) Peso: 4,4 kg Accesorios incluidos: Kit de usuario de Warwick + Estuche Rígido."
    },

    {
        id: 9,
        nombre: "Bajo Electrico Activo Ibanez",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_600093-MLA31633914311_072019-F.webp",
        precio: 80000,
        descr: "Bajo de 4 cuerdas GSR perteneciente a la serie GIO basada en los Soundgears, estos bajos no solo se tocan y se ven mejor que cualquier otro en su rango de precio, sino que también cada bajo GSR recibe el ajuste e inspección de su contraparte más cara. Los bajos GSR ofrecen la famosa sofisticación, comodidad, tono y facilidad de tocar de los Soundgear, pero a un precio más económico."
    },

    {
        id: 10,
        nombre: "Bajo Eléctrico Schecter",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_711558-MLA42554904591_072020-F.webp",
        precio: 185000,
        descr: "Cuerpo & puente Top: Flamed Maple con nuez Cuerpo: Caoba Contorno: Tapa plana Puente: S-Tek Construcción: 6 Atornillable Acabado: Natural satinado Mástil y diapasón Mástil: Varias capas de Maple y nogal Diapasón: Palisandro Trastes: 24 X-Jumbo Incrustaciones: Puntos de desvío de perlado Escala: 35 Electrónica & Hardware Pastilla del puente: EMG 40HZ La pastilla del Mástil: EMG 40HZ Controles: Volumen/mezcla/2-banda Active EMG EQ Clavijas: Schecter Hardware: oro satinado"
    },


    {
        id: 11,
        nombre: "Piano Electrico Digital Yamaha P45",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_958158-MLA48894831239_012022-F.webp",
        precio: 160000,
        descr: "88 Teclas con GHS (martillo graduado standard). PolifonÍa de 64 . 10 Voces. 10 preset songs. 4 tipos de Reveb. Función Dual / layer. Metrónomo, Transpose, Tuning, USB to host. Amplificación 6W x 2. speakers de 12cm x 2 . Pedal de sustain"
    },

    {
        id: 12,
        nombre: "Piano Digital Casio Cdp-s110",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_808135-MLA48591788177_122021-F.webp",
        precio: 150000,
        descr: "Un instrumento que es perfecto para todos, centrado en el sonido y la sensación de un piano. Cuerpo delgado de apenas 232 mm de profundidad. Teclado con acción de martillo a escala II. Respuesta táctil: 3 niveles de sensibilidad. Una excelente opción por todos lados, el Casio CDP-S110"
    },

    {
        id: 13,
        nombre: "Piano Digital Roland",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_935879-MLA49786751059_042022-F.webp",
        precio: 110000,
        descr: "Teclado Sintetizador Roland Go-61KL. Divertido teclado inspiracional para músicos debutantes. Función Loop Mix permitiéndote construir canciones al simplemente ejecutar notas en el teclado. Manipula los sonidos de tus Loops con intuitivo control one-touch. Compatibilidad Bluetooth audio/MIDI para conectarse con tu tableta o teléfono inteligente. Mas de 500 sonidos con calidad-profesional: pianos, synths, strings, bass, brass, y mas. Grabadora de canciones integrada a bordo con respaldo USB. Interprétalo a toda hora con sus parlantes integrados o con auriculares. Peso liviano, listo para el viaje. 61 Teclas, 128 voces de polifonia, 10 Pads, Parlantes de 2.5 W x 2. Medidas 87,7x27,1x82 cm. Peso 3.9kg."
    },

    {
        id: 14,
        nombre: "Piano Digital Casio",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_870468-MLA48537995227_122021-F.webp",
        precio: 180000,
        descr: "El piano digital con acción de martillo más delgado del mundo  Dado que aprovecha al máximo las tecnologías de construcción compacta de Casio, el nuevo Privia es significativamente más delgado (profundidad un 20 % más delgada que el modelo anterior). El lado de la carcasa en forma de cuña resalta el diseño compacto. Diseño sencillo y elegante para una reproducción superior Fuente de sonido Morphing AiR multidimensional para sonidos hermosos y ricos que hacen recordar a un piano de cola. Masmusica218 te lo recomienda Sonido de piano rico y expresivo para un rendimiento natural El simulador acústico expresa el verdadero sonido de un piano de cola El recientemente desarrollado teclado con acción de martillo en escala inteligente reduce drásticamente el tamaño sin comprometer la sensación mientras toca. La respuesta al sacar el dedo de una tecla permite una rápida repetición de las notas Teclas simuladas de ébano y marfil con ajuste en la punta del dedo para tocar con facilidad Conectarse a través de Bluetooth® con los dispositivos: La conectividad de audio Bluetooth facilita el uso del sistema de altavoces del Privia PX-S1100 como altavoz inalámbrico para su teléfono inteligente, tableta u otro dispositivo con audio Bluetooth. Active el efecto envolvente para conseguir un sonido que realmente rodee la sala. Además, como puede tocar el Privia PX-S1100 al mismo tiempo, puede tocar en vivo junto a sus canciones favoritas. El Privia PX-S1100 se puede controlar de forma inalámbrica desde su teléfono inteligente o tableta mediante la aplicación gratuita Chordana Play para piano. Cambie la configuración, como tono, respuesta táctil, resonancia y metrónomo, y seleccione canciones desde la biblioteca de música incorporada. La aplicación para piano Chordana Play les proporciona a los usuarios una manera fácil e inteligente de usar la operación Medidas: 132,2 (ancho) x 23,2 (profundidad) x 10,2 cm (alto)"
    },

    {
        id: 15,
        nombre: "Piano Nord",
        picture: "https://http2.mlstatic.com/D_NQ_NP_2X_808063-MLA44860963831_022021-F.webp",
        precio: 1300000,
        descr: "Pantalla OLED Transiciones perfectas Fundidos cruzados de puntos de división 16 bancos con 25 programas - 400 ubicaciones Organizar la funcionalidad de los programas Modo en vivo: 5 programas en vivo Transposición global: +/- 6 semitonos Transposición de programa: +/- 6 semitonos Ajuste fino: +/- 50 centavos Kbd Touch: 3 curvas de respuesta de velocidad Teclado de martillo sensible Kawai de 88 notas con sensores triples avanzados Funcionalidad dividida con punto de división seleccionable e indicación LED Crossfade dividido opcional Funcionalidad de capa Opción de bloqueo del panel Opción de salida mono Acción dinámica del pedal Sustain con el Nord Triple Pedal incluido USB-MIDI Actualizaciones gratuitas del sistema operativo SECCIÓN DE PIANO 6 tipos: Grand, Upright, Electric Pianos, Clavinet, Digital y Misc. Cada categoría puede contener hasta 20 modelos diferentes. Polifonía de 120 voces (pianos estéreo / mono) Ajustes de timbre de piano / ecualizador (suave, medio, brillante) con filtros de piano eléctrico dedicados (suave, medio, brillante, Dyno 1 y Dyno 2). Resonancia de cuerdas avanzada (generación 2) - cantidad ajustable Lanzamiento suave seleccionable para pianos de cola, verticales, eléctricos y clavicémbalo Ruido de pedal seleccionable para pianos de cola, verticales y eléctricos 1 - cantidad ajustable Transposición de octava: -1 / + 1 (-6 / + 6 en modo Split, dependiendo de la posición Split) SECCIÓN DE SINTETIZACIÓN DE MUESTRA Polifonía de 46 voces Envolvente de amplificador con ataque y caída / liberación Filtro de paso bajo sensible a la velocidad seleccionable y rango dinámico Transposición de octava: -1 / + 1 (-6 / + 6 en modo Split, dependiendo de la posición Split) Volumen controlable con pedal de volumen (no incluido) MEMORIA Aprox. 2 GB dedicados a la Nord Piano Library Aprox. 512 MB dedicados a la Nord Sample Library 3.0 SECCIÓN DE EFECTOS Efecto 1 Modulador Pan, Tremolo, Wah y Ring Tres profundidades seleccionables para Pan y Tremolo, frecuencia controlada con la perilla Effect 1 Rate Tremolo, Pan, Ring-Mod y Wah se pueden controlar con el pedal de control Efecto 2 Phaser 1, Phaser 2, Flanger, Chorus 1, Chorus 2 y Vibe Dos profundidades seleccionables para cada efecto Simulaciones de amplificador, Comp y EQ Comp / Amp: tres simulaciones de amplificador / altavoz, Tube Overdrive Cantidad de Drive / Compression controlada con la perilla Drive Ecualizador de tres bandas, con medios de barrido. +/- 15 dB de ganancia"
    }
]

class Products {

    static lastProductId = products[products.length - 1].id;
    constructor() {
        this.list = products;
    }

    save(product) {
        const { nombre, precio, picture, descr } = product;
        if (!nombre || !precio || !picture || !descr) {
            return null;
        }
        Products.lastProductId+=1;
        const newProduct = {
            id:Products.lastProductId,
            nombre,
            precio,
            picture,
            descr
        };
        this.list.push(newProduct);
        return newProduct;
    }

    getById(number) {
        return this.list.find(product => product.id === +(number))
    }

    updateById(number, product) {
        const productIndex = this.list.findIndex((product) => product.id === +(number));
        if (productIndex < 0) return null;
        const {
            nombre,
            precio,
            picture,
            descr
        } = product;
        const updatedProduct = {
            id: this.list[productIndex].id,
            nombre,
            precio,
            picture,
            descr
        };
        this.list[productIndex] = updatedProduct;
        return updatedProduct;
    }

    getAll() {
        return this.list;
    }

    deleteById(number) {
        const productIndex = this.list.findIndex((product) => product.id === +(number));
        if (productIndex < 0) return null;
        return this.list.splice(productIndex, 1);
    }
}

module.exports = Products;
