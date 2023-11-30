const container1 = <HTMLDivElement>document.getElementById("con1");
console.log(container1);

type T = {
  forEach(arg0: (work: any) => void): unknown;
  image?: string;
  title?: string;
};

const works = [
  {
    id: 1,
    iconClass: "bi bi-download",
    title: "Download for Free",
  },
  {
    id: 2,
    iconClass: "bi bi-person-fill",
    title: "Open an Account",
  },
  {
    id: 3,
    iconClass: "bi bi-hand-thumbs-up-fill",
    title: "Enjoy our App",
  },
  
];



function cardBilder(works:T) {
    works.forEach((work:any) => {
        const {id,iconClass,title}=work;
        container1.insertAdjacentHTML("beforeend",`
        <div class="p-10 grid w-[350px] h-auto gap-3 mx-auto text-center justify-items-center">
            <div class="bg-violet-100 hover:bg-violet-600 dark:hover:bg-violet-600 w-14 h-14 rounded-xl flex items-center justify-center dark:bg-opacity-10"
            ><i class="${iconClass} text-3xl text-violet-600 hover:text-slate-100 flex items-center gap-1 justify-center"></i>
            </div>
            
            <h2 class="text-darkBlue dark:text-white">${title}</h2>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus nonipsum.
            </p>
          </div> 
        `)
    });
}

cardBilder(works)
