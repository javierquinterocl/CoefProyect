<script setup>
import { ref } from 'vue'

const masaOne = ref()
const masTwo = ref()
const anguloOne = ref()
let coefRozamiento = ref('')
function calcular() {
  const anguloRadianes = anguloOne.value * (Math.PI / 180)
  const wDos = masTwo.value * 9.8
  const wOne = masaOne.value * 9.8
  console.log('wOne es ' + wOne + 'Wdos es :' + wDos)
  const tension = wDos * Math.sin(anguloRadianes)
  console.log('La tension es' + tension)
  const fuerzaRozamiento = -(wOne * Math.sin(anguloRadianes)) + tension

  const normal = wOne * Math.cos(anguloRadianes)
  console.log('Normal ' + normal)
  console.log('Fuerza de rozamiento ' + fuerzaRozamiento)
  coefRozamiento.value = 'El coeficiente de rozamiento es: ' + fuerzaRozamiento / normal
}
</script>

<template>
  <div class="h-[100vh] w-full bg-[#FD5720] absolute z-10 items-center mx-auto flex fade-out ">
    <img class="w-[20.5rem] rounded-[20px] mx-auto scale-out-center" src="./assets/icon2.png" alt="" />
  </div>
  <div class="flex mx-auto bg-[#efefef] font-Haken">
    <div class="mx-auto flex flex-col w-full">
      <div class="h-20 bg-[#FD5720]">
        <menu class="flex mt-5">
          <ul class="space-x-8 text-sm flex pl-9 items-center">
            <li class="text-white inline text-xl mx-auto">
              <img class="w-12 h-10 rounded-[5px]" src="./assets/icon2.png" alt="" />
            </li>
            <li class="inline text-white text-base border-b-2 border-white"><a href="">Caso 1</a></li>
            <li class="inline text-white text-base"><a href="">Mas informacion</a></li>
            <li class="inline text-white text-base"><a href="">Uso</a></li>
          </ul>
        </menu>
      </div>

      <div class="flex flex-col max-w-5xl mx-auto relative">
        <div class="mx-auto">
          <img class="mx-auto w-[760px] h-[450px]" src="./assets/base2.png" alt="" />
        </div>
        <div class="absolute right-[9rem] top-[10rem] flex flex-col">
          <span class="text-gray-400 pr-2 text-xs mx-auto">Masa 2 (kg)</span>
          <span
            class="pr-16 h-8 w-8 border-bg-[#5168FD] outline-none border-2 rounded-[6px] bg-slate-400 text-sm relative overflow-hidden text-white"
            >{{ masTwo }}</span
          >
        </div>
        <div class="absolute left-[19rem] rotate-[29deg] top-[20rem] flex">
          <span class="text-white pr-2 text-sm">θ</span>
          <span
            class="pr-16 h-8 w-8 border-bg-[#5168FD] outline-none border-2 rounded-[6px] bg-slate-400 text-sm relative overflow-hidden text-white"
            >{{ anguloOne }}</span
          >
        </div>
        <div class="absolute left-[8rem] top-[4rem] flex flex-col">
          <span class="text-gray-400 pr-2 text-xs mx-auto">Masa 1 (kg)</span>
          <span
            class="pr-16 h-8 w-8 border-bg-[#5168FD] outline-none border-2 rounded-[6px] bg-slate-400 text-sm relative overflow-hidden text-white"
            >{{ masaOne }}</span
          >
          <div class=" absolute right-0 flex flex-col top-[4rem]">
            <div class="bg-[#FD5720]">
              
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#FD5720] w-full rounded-[20px] pt-12 px-24 mx-auto">
        <div class="mx-auto">
          <div class="flex mx-auto space-x-10 justify-center">
            <input
              class="pt-[22px] pl-[24px] pb-[8px] border-bg-[#5168FD] outline-none border-2 rounded-[6px]"
              type=" text"
              placeholder="Masa 1"
              v-model="masaOne"
            />
            <input
              class="pt-[22px] pl-[24px] pb-[8px] border-bg-[#5168FD] outline-none border-2 rounded-[6px]"
              type=" text"
              placeholder="Masa 2"
              v-model="masTwo"
            />
            <input
              class="pt-[22px] pl-[24px] pb-[8px] border-bg-[#5168FD] outline-none border-2 rounded-[6px]"
              type=" text"
              v-model="anguloOne"
              placeholder="Angulo"
            />
          </div>
          <div class="flex mx-auto mt-10 flex-col">
            <button
              class="px-12 py-4 bg-white rounded-[6px] text-[#FD5720] font-bold mx-auto"
              aria-placeholder="Ir"
              @click="calcular()"
            >
              IR
            </button>

            <span class="mt-7 text-white mx-auto">{{ coefRozamiento }}</span>
          </div>
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>

<style scoped>
.scale-out-center {
  -webkit-animation: scale-out-center 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: scale-out-center 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  
}
/* ----------------------------------------------
 * Generated by Animista on 2023-11-23 3:39:50
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-out-center
 * ----------------------------------------
 */
@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
    display: none;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
    display: none;
  }
}
.fade-out {
	-webkit-animation: fade-out 4s ease-out both;
	        animation: fade-out 4s ease-out both;
}

/* ----------------------------------------------
 * Generated by Animista on 2023-11-23 3:41:41
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-out
 * ----------------------------------------
 */
@-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}


</style>
