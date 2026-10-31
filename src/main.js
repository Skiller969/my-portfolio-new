import "./style.css";

document.querySelector("#app").innerHTML = `
  <main class="min-h-screen  bg-[#111318] flex flex-col items-center  px-6 py-6 text-center">
   <div class="w-full max-w-8xl bg-[#1D222B] flex rounded-lg text-[#F0F4F8] px-6 py-3 border border-[#A0A3AA]">
   <nav class="w-full max-w-6xl items-center justify-center flex ">
   <h1 class="justify-start text-2xl ml-3 font-serif">Sarthak</h1>
   <ul class="w-full max-w-6xl flex items-center justify-end gap-10 ">
   <li>Home</li>
   <li>About Me</li>
   <li>Skills</li>
   <li>Services</li>
   <li>Contact</li>
   </ul>
   </nav>
   </div>
    <!---hero section-->
   <section class="grid-cols-3 grid row-auto min-h-screen">
    <div class="col-span-2 flex"> 
   <!---left side--->
  <div class="flex flex-col  mt-20">
  <div class="w-full max-w-3xl items-center justify-center">
  <h3 class="text-[#B6E36A] mt-8 text-center flex items-center gap-1"> <span class="text-4xl">•</span> AVAILABLE FOR FREELANCE PROJECTS</h3>
  <h1 class="text-white text-5xl">TURNING IDEAS INTO REALITY.</h1>
  <p class="text-[#B6E36A] mt-4 text-center flex items-center">I help make vision come to life. </p>
  <p class=" text-[#6C7A91] mt-4">I'm <span class="text-white">Sarthak</span>, a developer exploring web technologies and data science. <br> I build responsive websites that help businesses establish their presence online.</p>
  </div>
   </div>
    <div class="col-span-1">
    <p class ="text-6xl text-white">right side</p></div>
   </section>
  </main>
`;
