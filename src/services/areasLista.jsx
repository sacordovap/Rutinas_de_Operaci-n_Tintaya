export let areasBd = [

    {
        id: '0',
        name: 'Chancador Primario',
        image: require('../../assets/areas_photos/Chancado.png'),

    },
    {
        id: '1',
        name: 'Flotación',
        image: require('../../assets/areas_photos/Chancado.png'),
    },
    {
        id: '2',
        name: 'Molienda',
        image: require('../../assets/areas_photos/Chancado.png'),
    },
    {
        id: '3',
        name: 'Relaves',
        image: require('../../assets/areas_photos/Chancado.png'),
    },
    {
        id: '4',
        name: 'Espesamiento',
        image: require('../../assets/areas_photos/Chancado.png'),
    },
]

export let subProcesosBd = [
    {
        idArea: '0',
        subProcess: ['subProceso1Chanc', 'subProceso2Chanc', 'subProceso3Chanc', 'subProceso4Chanc', 'subProceso5Chanc']
    },
    {
        idArea: '1',
        subProcess: ['subProceso1Flot', 'subProceso2Flot', 'subProceso3Flot', 'subProceso4Flot', 'subProceso5Flot']
    },
    {
        idArea: '2',
        subProcess: ['subProceso1Molie', 'subProceso2Molie', 'subProceso3Molie', 'subProceso4Molie', 'subProceso5Molie']
    },
    {
        idArea: '3',
        subProcess: ['subProceso1Relav', 'subProceso2Relav', 'subProceso3Relav', 'subProceso4Relav', 'subProceso5Relav']
    },
    {
        idArea: '4',
        subProcess: ['subProceso1Esp', 'subProceso2Esp', 'subProceso3Esp', 'subProceso4Esp', 'subProceso5Esp']
    },
]

export let tareaRutinariasBD = [
    {
        idArea: '0',
        idSubProcess: 0,
        tareasAll: [
            {
                idTarea: '0',
                description: 'Esta tarea es la primera del SubProceso1'
            },
            {
                idTarea: '1',
                description: 'Esta tarea es la segunda del SubProceso1'
            },
            {
                idTarea: '2',
                description: 'Esta tarea es la tercera del SubProceso1'
            }
        ]
    },
    {
        idArea: '0',
        idSubProcess: 1,
        tareasAll: [
            {
                idTarea: '0',
                description: 'Esta tarea es la primera del SubProceso2'
            },
            {
                idTarea: '1',
                description: 'Esta tarea es la segunda del SubProceso2'
            },
            {
                idTarea: '2',
                description: 'Esta tarea es la tercera del SubProceso2'
            }
        ]
    }
]

export let tareaRutinariasOpcionesBd= [
    {
        idTareOpciones:1,
        actPersona: '1',
        personalAnta: '2',
        contratistas: '33',
        ambasPersonas: true,
        frecuencia: [
            {
                idFreq: '0',
                description: 'dia',
            },
            {
                idFreq: '1',
                description: 'mes',
            }
        ],
        vecesPorDia: '',
        vecesSemana: '',
        vecesMes: '',
        tiempoAccion: '',
        horasTurno: ''
    }

]