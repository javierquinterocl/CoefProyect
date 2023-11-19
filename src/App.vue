<script setup>
import { ref } from 'vue'

const masaOne = ref()
const masTwo = ref()
const anguloOne = ref()
</script>

<template>
  <div class="flex max-w-5xl mx-auto bg-[#EFF1FF] font-Haken">
    <div class="mx-auto flex flex-col w-full">
      <div class="h-16 bg-[#FD5720]">
        <menu class="flex mt-3">
          <ul class="space-x-8 text-sm flex pl-9">
            <li class="text-white inline text-xl mx-auto">
              <img class="w-10 h-9 rounded-[5px]" src="./assets/icon.png" alt="" />
            </li>
            <li class="inline text-white"><a href="">Caso 1</a></li>
            <li class="inline text-white"><a href="">Mas informacion</a></li>
            <li class="inline text-white"><a href="">Uso</a></li>
          </ul>
        </menu>
      </div>

      <div class="flex flex-col w-full mx-auto relative">
        <div class="mx-auto">
          <img class="mx-auto w-[460px]  h-[360px]" src="./assets/enacim.png" alt="" />
        </div>
        <div class="absolute right-[20rem] top-[10rem] flex flex-col">
          <span class=" text-gray-400 pr-2 text-xs mx-auto">Masa 2 (kg)</span>
          <span
            class="pr-16 h-8 w-8 border-bg-[#5168FD] outline-none border-2 rounded-[6px] bg-slate-400 text-sm relative overflow-hidden"
            >{{ masTwo }}</span
          >
          
        </div>
        <div class=" absolute left-[32rem] rotate-[10deg] top-[17.6rem] flex">
          <span class=" text-slate-300 pr-2 text-sm">θ</span>
          <span
            class="pr-16 h-8 w-8 border-bg-[#5168FD] outline-none border-2 rounded-[6px] bg-slate-400 text-sm relative overflow-hidden"
            >{{ anguloOne }}</span
          >
        </div>
        <div class="absolute left-[17rem] top-48 flex flex-col">
          <span class=" text-gray-400 pr-2 text-xs mx-auto">Masa 1 (kg)</span>
           <span
            class="pr-16 h-8 w-8 border-bg-[#5168FD] outline-none border-2 rounded-[6px] bg-slate-400 text-sm relative overflow-hidden"
            >{{ masaOne }}</span
          >
        </div>
      </div>

      <div class="bg-[#FD5720] w-full pt-20 px-24 mx-auto">
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
          <div class="flex mx-auto mt-10 mb-10">
            <button
              class="px-12 py-4 bg-white rounded-[6px] text-slate-400 mx-auto"
              aria-placeholder="Ir"
            >
              IR
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
