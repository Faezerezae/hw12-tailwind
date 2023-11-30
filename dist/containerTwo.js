"use strict";
const container2 = document.getElementById("con2");
console.log(container2);
const plans = [
    {
        id: 1,
        plann: "Basic",
        price: 35,
        time: "1 year",
        mun: "dark:border-black",
        sun: "border-violet-200 ",
    },
    {
        id: 2,
        plann: "Popular",
        price: 99,
        time: "2 year",
        mun: "dark:border-violet-600",
        sun: "border-violet-600",
    },
    {
        id: 3,
        plann: "Golden",
        price: 159,
        time: "Lifetime",
        mun: "dark:border-gray-400",
        sun: "border-violet-200 ",
    },
];
function cardBilders(plans) {
    plans.forEach((plan) => {
        const { id, plann, price, time, mun, sun } = plan;
        container2.insertAdjacentHTML("beforeend", `
      <div
      class="p-10 grid w-full h-[550px] rounded-2xl dark:bg-transparent overflow-hidden gap-3 mx-auto border-2 ${sun} ${mun} text-darkBlue dark:text-white"
    >
      <div
        class="w-[355px] h-[355px] bg-lightCyan bg-opacity-50 rounded-full relative z-0 top-[-200px] left-[-85px]"
      ></div>
      <div
        class="w-[150px] h-[150px] bg-lightPink bg-opacity-60 rounded-full relative z-10 top-[-450px] right-[-260px] md:right-[-200px] lg:right-[-180px] xl:right-[-250px]"
      ></div>

      <svg
        width="63"
        height="30"
        viewBox="0 0 63 30"
        class="relative fill-violet-500 z-40 top-[-568px] right-[-120px]"
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

      <div class="relative z-20 top-[-530px] left-[-20px] grid gap-2">
        <strong class="">${plann} Plan</strong>
        <strong
          ><span class="font-bold">$${price}</span>
          <span class="text-gray-400">/month</span></strong
        >
      </div>

      <div class="grid text-gray-400 gap-4 relative top-[-450px]">
        <strong><span class="pr-4">✓</span> Life time free updates!</strong>
        <strong><span class="pr-4">✓</span> Unlimited transactions</strong>
        <strong><span class="pr-4">✓</span> Free credit-card</strong>
        <strong><span class="pr-4">✓</span> ${time} premium support</strong>
      </div>

      <div class="bg-violet-600 p-4 rounded-xl mx-auto relative left-[-70px] top-[-400px]">
        <a class="text-slate-50 whitespace-nowrap" href="#"
          >Choose ${plann} Plan</a
        >
      </div>
    </div>
        `);
    });
}
cardBilders(plans);
