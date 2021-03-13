import axios from 'axios';
import Swal from 'sweetalert2';
import {quitarAcentos} from '../../../helpers';
const btns_realizar = document.querySelectorAll(".btn-realizar");
const field_dni = document.querySelector('.field-dni');
const field_nombres = document.querySelector('.field-nombres');
const field_apellidos = document.querySelector('.field-apellidos');
const field_direccion = document.querySelector('.field-direccion');
const btn_votar = document.querySelector('.btn-votar');
let candidato;

if(btns_realizar.length !== 0){
  btns_realizar.forEach((button)=>{
    button.addEventListener('click', function(e){
      candidato = e.target.dataset.participante
      field_dni.value = '';
      field_nombres.value = '';
      field_apellidos.value = '';
    })
  })
}


if(btn_votar){
    btn_votar.addEventListener('click', function(e){
    e.preventDefault();
    
    if(new Date(2021, 4, 31).getTime() < new Date().getTime()){
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'VOTACION CONCLUIDA! VEA RESULTADOS',
      })
      return null;
    }

    if(field_dni.value.trim().length !== 8 || field_dni.value.trim().search(/[^0-9]/) !== -1){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese un DNI válido!',
      })
      return null;
    } 

    if(field_apellidos.value.trim().length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por Favor Ingrese sus Apellidos',
      })
      return null;
    } 

    if(field_nombres.value.trim().length === 0 ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por Favor Ingrese sus Nombres',
      })
      return null;
    }
    if(field_direccion.value.trim().length === 0 ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por Favor Ingrese Provincia / Distrito',
      })
      return null;
    }



    
  
    let valor_dni = field_dni.value.trim();
    let direccion = field_direccion.value.trim();
    let valor_nombres =  quitarAcentos(field_nombres.value.trim());
    let valor_apellidos = quitarAcentos(field_apellidos.value.trim());

    axios.get(`https://dniruc.apisperu.com/api/v1/dni/${valor_dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InZxYzE5MDlhQGdtYWlsLmNvbSJ9.aa1v3PWJrN9UTkw195QgQYTVlmOd70KBor9LRLadEig`).then((response)=>{
      const {data} = response;
      const {nombres, apellidoPaterno, apellidoMaterno} = data;

      let path_apellidos = new RegExp(valor_apellidos, "ig");
      let path_nombres = new RegExp(valor_nombres, "ig");
      
      if(`${apellidoPaterno} ${apellidoMaterno}`.search(path_apellidos) === -1 || nombres.search(path_nombres) === -1){
        field_dni.value = "";
        field_nombres.value = "";
        field_apellidos.value = "";
        field_direccion.value = "";
        Swal.fire({
          icon: 'error',
          title: 'Datos erróneos!',
          text: 'Ingrese Nuevamente sus Datos',
        })
        return null;
      }

      let body = {...data, candidato, direccion}
      axios.post('/enviar-datos', body).then((response)=>{
        const {data} = response;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: data,
            showConfirmButton: false,
            timer: 1500
          })
        setTimeout(()=>{
          window.location.href= "/sondeo"
        }, 1500)
      }).catch((err)=>{
        const {data} = err.response;
        field_dni.value = "";
        field_nombres.value = "";
        field_apellidos.value = "";
        field_direccion.value = "";
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un error!',
          text: data,
        })
      })
    }).catch((err)=>{
      console.log(err.message);
      field_dni.value = "";
      field_nombres.value = "";
      field_apellidos.value = "";
      field_direccion.value = "";
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error!',
        text: 'INTENTELO DE NUEVO',
      })
    })
  })
}




