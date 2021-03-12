import axios from 'axios';
import Swal from 'sweetalert2';
const btns_realizar = document.querySelectorAll(".btn-realizar");
const field_dni = document.querySelector('.field-dni');
const field_nombres = document.querySelector('.field-nombres');
const field_apellidos = document.querySelector('.field-apellidos');
const btn_votar = document.querySelector('.btn-votar');
const btn_validar = document.querySelector('.btn-validar');
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

if(btn_validar){
  btn_validar.addEventListener('click', () => {
    if(field_dni.value.trim().length !== 8 || field_dni.value.trim().search(/[^0-9]/) !== -1){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese un DNI válido!',
      })
      return null;
    } 
  
    let valor_dni = field_dni.value.trim();
    axios.get(`https://dniruc.apisperu.com/api/v1/dni/${valor_dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InZxYzE5MDlhQGdtYWlsLmNvbSJ9.aa1v3PWJrN9UTkw195QgQYTVlmOd70KBor9LRLadEig`).then((response)=>{
      const {data} = response;
      const {nombres, apellidoPaterno, apellidoMaterno} = data;
      field_nombres.value = nombres;
      field_apellidos.value = apellidoPaterno + " " + apellidoMaterno;
    }).catch((err) => {
        console.log(err.message);
        field_dni.value = "";
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un error!',
          text: 'INTENTELO DE NUEVO',
        })
    })
  })
}


if(btn_votar){
    btn_votar.addEventListener('click', function(e){
    e.preventDefault();
    console.log(field_dni.value);
    
    if(new Date(2021, 4, 31).getTime() < new Date().getTime()){
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'VOTACION CONCLUIDA! VEA RESULTADOS',
      })
      return null;
    }
    if(field_nombres.value.trim().length === 0 || field_apellidos.value.trim().length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por Favor Valide Sus Datos!',
      })
      return null;
    }
  
    let valor_dni = field_dni.value.trim();
    axios.get(`https://dniruc.apisperu.com/api/v1/dni/${valor_dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InZxYzE5MDlhQGdtYWlsLmNvbSJ9.aa1v3PWJrN9UTkw195QgQYTVlmOd70KBor9LRLadEig`).then((response)=>{
      const {data} = response;
      const {dni, nombres, apellidoPaterno, apellidoMaterno} = data;

      const body = {dni, nombres, apellidoPaterno, apellidoMaterno, candidato}
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
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error!',
        text: 'INTENTELO DE NUEVO',
      })
    })
  })
}




