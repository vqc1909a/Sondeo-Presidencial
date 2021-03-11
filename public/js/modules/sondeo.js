import ApexCharts from 'apexcharts'

//GRAFICO LINE O AREA
let optionsLine = {
  chart: {
    //!TIPO lINEAS
    type: 'line'
    //!TIPO AREA O SE PINTADO POR DEBAJO DE LA LINEA
    // type: 'area'
    //  height: 380,
    // width: "100%",
    // type: "line"
  },
  series: [{
    //ESTO ES EL NOMBRE QUE MUESTRA MIEBNTRAS NAVEGAS POR EL GRAFICO
    name: 'sales',
    // El grafico en yva aumentando de 30 en 30
    data: [30,40,35,50,49,60,70,91,125]

    //!Solo X Y Y, entonces ya no habria categoria y solamente en catgeoria se pondria numeric para considerar los decimales
    // data: [[1, 34], [3.8, 43], [5, 31] , [10, 43], [13, 33], [15, 43], [18, 33] , [20, 52]]
  
   //Otra forma de pasar los valores x y y es en objeto    
    // data: [{
    //     x: 20,
    //     y: 54
    // }, {
    //     x: 30,
    //     y: 66
    // }], 

    //y solamente por estos objetos se puede pasar como categoria Valor de cadena, pero su categoria sería (type: 'category)
    // data: [{
    //     x: 'Apple',
    //     y: 54
    // }, {
    //     x: 'Orange',
    //     y: 66
    // }],

    //!Marcas de Tiempo
    // El primero es el timepo de milisegundos en el eje x y luego eje y, pero el tipo de categoria en el xaxis debe ser (type: 'datetime')
    //  data: [[1324508400000, 34], [1324594800000, 54] , ... , [1326236400000, 43]]

    // ó más facil le podemos proporcionar fechas de la siguiente manera
    // data: [{ x: '05/06/2014', y: 54 }, { x: '05/07/2014', y: 17 } , { x: '05/08/2014', y: 17 } ... , { x: '05/28/2014', y: 26 }]
    
  }],
  //Categoria en el eje x
  xaxis: {
    // type: 'numeric'
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  },
  //pAR QUE TE MUESTRE LOS DEIMALES DEL EJE X CON UN SOLO DECIMAL
  tooltip: {
    x: {
      formatter: function(val) {
        return val.toFixed(1);
      }
    }
  },
  //!ANOTACIONES ESTATICAS
  annotations: {
    yaxis: [
        {
        y: 65,
        borderColor: '#00E396',
        label: {
            borderColor: '#00E396',
            style: {
                color: '#fff',
                background: '#00E396'
            },
            text: 'Y-axis annotation on 65'
        }
        }
    ],
    xaxis: [
        {
        // x: new Date('23 Nov 2017').getTime(),
        x: 1993,
        borderColor: '#775DD0',
        label: {
            borderColor: '#775DD0',
            orientation: 'horizontal',
            style: {
                color: '#fff',
                background: '#775DD0'
            },
            text: 'X-axis annotation - 22 Nov'
        }
        }
    ],

    //   ANOTACIONES CON RANGO
    //   yaxis: [
    //     {
    //       y: 50,
    //       y2: 80,
    //       borderColor: '#000',
    //       fillColor: '#FEB019',
    //       label: {
    //          style: {
    //           color: '#000',
    //           background: '#FEB019'
    //          },
    //         text: 'Y-axis range'
    //       }
    //     }
    //   ]

    // xaxis: [
    //     {
    //         x: new Date('26 Nov 2017').getTime(),
    //         x2: new Date('28 Nov 2017').getTime(),
    //         fillColor: '#B3F7CA',
    //         label: {
    //         text: 'X-axis range'
    //         }
    //     }
    // ]

    //! LO MEJOR son PUNTOS EN EL GRAFICO (PUNTO XY) CON ANOTACIONES
    // En lugar de una línea, se dibuja un marcador encima del punto que se puede personalizar de la siguiente manera
    points: [
        {
            //Este x solamente es el indice nmas
            x: 3,
            y: 35,
            marker: {
                size: 8,
            },
            label: {
                borderColor: '#FF4560',
                style: {
                    color: '#fff',
                    background: '#FF4560'
                },
                text: 'Point Annotation'
            }
        }
    ]
  }
}
//NOTA: Ciertos tipos de gráficos como Treemap solo aceptan este formato. Este formato también es útil para agregar información adicional junto con el punto de datos que se puede usar en otros lugares (por ejemplo, en información sobre herramientas, etiquetas de datos, etc.)

// let chartLine = new ApexCharts(document.querySelector("#chartLine"), optionsLine);

// chartLine.render();

//GRAFICO PIE /DONUTS / RADIALBARS

// La serie espera una matriz única para gráficos circulares / de anillos y de barras radiales. Los nombres de los valores de la serie se deben proporcionar en la propiedad de las Lables.

// series: [23, 11, 54, 72, 12],
// labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"]

let optionsDonut = {
    series: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    labels: ["Cesar Acuña", "George Forsyth", "Hernando de Soto", "Ollanta Humala", "Yonhy  Lescano", "Julio Guzman", "Keiko Fujimori", "Marco Arana", "Pedro Castillo", "Rafael Lopez", "Daniel Urresti", "Veronica Mendoza"],
    chart: {
        type: 'donut',
        height: "100%",
        width: "100%"
    },
    //Estos son los colores de los tooltips que vuelan de cada grafico
    colors: ["#17509B", "#EB1C24", "#153F93", "#DA251C", "#CD3333", "#4F1B7F", "#EC6E00", "#4E6604", "#FAB500", "#61ABD8", "#0B4E9D", "#61BD10"],
    fill: {
        colors: ["#17509B", "#EB1C24", "#153F93", "#DA251C", "#CD3333", "#4F1B7F", "#EC6E00", "#4E6604", "#FAB500", "#61ABD8", "#0B4E9D", "#61BD10"],
        opacity: 0.9,
        type: 'solid',
         gradient: {
            shade: 'dark',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
        },
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
             size: '60%',
             labels: {
                show: true,
                name: {
                    show: true,
                    fontSize: '22px',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                    formatter: function (val) {
                        return val
                    }
                },
                value: {
                    show: true,
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 700,
                    color: undefined,
                    offsetY: 16,
                    formatter: function (val) {
                        return `N° DE VOTOS: ${val}`
                    }
                }
            }
            }
        }
    },
    legend: {
        fontSize: '12px',
        fontFamily: 'Arial, Helvetica',
        fontWeight: 700,
         markers: {
            width: 20,
            height: 20,
            strokeWidth: 5,
            strokeColor: '#fff',
            fillColors: ["#17509B", "#EB1C24", "#153F93", "#DA251C", "#CD3333", "#4F1B7F", "#EC6E00", "#4E6604", "#FAB500", "#61ABD8", "#0B4E9D", "#61BD10"],
            radius: 20,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
            
        },
        itemMargin: {
            horizontal: 50,
            vertical: 5
        },
        onItemClick: {
          toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },  
    },
    responsive: [{
        breakpoint: 768,
        options: {
            // chart: {
            //     width: 200
            // },
            legend: {
                position: 'bottom'
            }
        }
    }
    // , 
    // {
    //     breakpoint: 576,
    //     options: {
    //         // chart: {
    //         //     width: 200
    //         // },
    //         legend: {
    //             show: false,
    //         }
    //     }
    // }
    ],
    dataLabels: {
        
        style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'normal',
            colors: ['#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000']
        },
        background: {
            enabled: true,
            foreColor: '#fff',
            padding: 5,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.6,
            dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#000',
                opacity: 0.45
            }
        }
    },
    title: {
        text: 'Distribución Porcentual de Votos',
        align: 'center',
        margin: 50,
        floating: true,
        style: {
            fontSize:  '16px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  'rgb(218, 37, 28)'
        }
    }
};



let optionsBar = {
    series: [{
          name: 'N° de Votos',
          data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20]
    }],
    chart: {
        type: 'bar',
        height: "100%"
    },
    plotOptions: {
        bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
            colors: {
              backgroundBarColors: ["#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa ", "#f8f9fa "],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 0,
          },
        }
    },
    colors: ["#17509B", "#EB1C24", "#153F93", "#DA251C", "#CD3333", "#4F1B7F", "#EC6E00", "#4E6604", "#FAB500", "#61ABD8", "#0B4E9D", "#61BD10"],

    dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff'],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'light',
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
    stroke: {
          width: 1,
          colors: ['#fff']
    },
    xaxis: {
        categories: ['Cesar Acuña', 'George Forsyth', 'Hernando de Soto', 'Ollanta Humala', 'Yonhy  Lescano', 'Julio Guzman', 'Keiko Fujimori', 'Marco Arana', 'Pedro Castillo', "Rafael Lopez", "Daniel Urresti", "Veronica Mendoza"],
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    title: {
        text: 'Distribución por Cantidad de Votos',
        align: 'center',
        margin: 20,
        floating: true,
        style: {
            fontSize:  '16px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  'rgb(218, 37, 28)'
        }
    },
    tooltip: {
        theme: 'dark',
        x: {
        show: false
        },
        y: {
        title: {
            formatter: function () {
            return ''
            }
        }
        }
    },
    
};

let chartDonut = new ApexCharts(document.querySelector("#chartDonut"), optionsDonut);
    chartDonut.render();
let chartBar = new ApexCharts(document.querySelector("#chartBar"), optionsBar);
chartBar.render();
