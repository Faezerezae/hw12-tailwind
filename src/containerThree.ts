const container3 = <HTMLDivElement>document.getElementById("con3");
console.log(container3);

type User = {
  forEach(arg0: (us: any) => void): unknown;
  image?: string;
  title?: string;
  mame?: string;

};

const users = [
  {
    id: 1,
    name: "Musharof Chowdhury",
    title: "Web Entrepreneur",
    image:"./images/testimonial/image-1.png"
  },
  {
    id: 2,
    name: "Alex Glorio",
    title: "Graphics Designer",
    image:"./images/testimonial/image-2.png"
  },
  {
    id: 3,
    name: "Jonathon Smith",
    title: "UI/UX Designer",
    image:"./images/testimonial/image-3.png"
  },
  {
    id: 4,
    name: "Devid Miller",
    title: "Product Designer",
    image:"./images/testimonial/image-4.png"
  },
  {
    id: 5,
    name: "Adam Wilsmith",
    title: "App Developer",
    image:"./images/testimonial/image-5.png"
  },
  {
    id: 6,
    name: "Justin Farnandes",
    title: "Seo Expert",
    image:"./images/testimonial/image-6.png"
  },
  
];



function cardBilder2(users:User) {
    users.forEach((user:any) => {
        const {id,name,title,image}=user;
        container3.insertAdjacentHTML("beforeend",`
        <div
        class="bg-white hover:bg-violet-500 dark:bg-indigo-950 dark:hover:bg-indigo-950 dark:text-white rounded-r-3xl rounded-b-3xl py-10 px-10 md:px-6 lg:px-10 group relative overflow-hidden"
      >
        <svg
          width="63"
          height="30"
          viewBox="0 0 63 30"
          class="ff absolute top-0 right-0 fill-violet-500 group-hover:fill-gray-100"
        >
          <circle
            cx="7.21563"
            cy="10.1013"
            r="1.14106"
            transform="rotate(-118.771 7.21563 10.1013)"
          ></circle>
          <circle
            cx="24.8191"
            cy="0.43515"
            r="1.14106"
            transform="rotate(-118.771 24.8191 0.43515)"
          ></circle>
          <circle
            cx="16.7716"
            cy="27.5037"
            r="1.14106"
            transform="rotate(-118.771 16.7716 27.5037)"
          ></circle>
          <circle
            cx="2.38256"
            cy="1.2995"
            r="1.14106"
            transform="rotate(-118.771 2.38256 1.2995)"
          ></circle>
          <circle
            cx="25.5737"
            cy="22.6717"
            r="1.14106"
            transform="rotate(-118.771 25.5737 22.6717)"
          ></circle>
          <circle
            cx="34.3754"
            cy="17.8386"
            r="1.14106"
            transform="rotate(-118.771 34.3754 17.8386)"
          ></circle>
          <circle
            cx="43.1771"
            cy="13.0056"
            r="1.14106"
            transform="rotate(-118.771 43.1771 13.0056)"
          ></circle>
          <circle
            cx="51.9788"
            cy="8.17249"
            r="1.14106"
            transform="rotate(-118.771 51.9788 8.17249)"
          ></circle>
          <circle
            cx="60.5805"
            cy="3.44925"
            r="1.14106"
            transform="rotate(-118.771 60.5805 3.44925)"
          ></circle>
          <circle
            cx="11.9389"
            cy="18.7029"
            r="1.14106"
            transform="rotate(-118.771 11.9389 18.7029)"
          ></circle>
          <circle
            cx="20.7405"
            cy="13.8698"
            r="1.14106"
            transform="rotate(-118.771 20.7405 13.8698)"
          ></circle>
          <circle
            cx="29.5423"
            cy="9.0368"
            r="1.14106"
            transform="rotate(-118.771 29.5423 9.0368)"
          ></circle>
          <circle
            cx="38.344"
            cy="4.2038"
            r="1.14106"
            transform="rotate(-118.771 38.344 4.2038)"
          ></circle>
          <circle
            cx="47.1458"
            cy="-0.62915"
            r="1.14106"
            transform="rotate(-118.771 47.1458 -0.62915)"
          ></circle>
        </svg>
        <p class="font-bold group-hover:text-gray-100">
          Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque
          dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.
        </p>
        <div class="flex gap-x-3 mt-8 items-center">
          <img class="w-12 h-12" src="${image}" />
          <div>
            <p class="text-sm font-bold group-hover:text-gray-100">${name}</p>
            <p
              class="text-xs font-semibold text-gray-400 group-hover:text-gray-300"
            >
              ${title}
            </p>
          </div>
        </div>
      </div>
        `)
    });
}

cardBilder2(users)
