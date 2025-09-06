const banners = document.querySelectorAll(".banner_item");
  const indicatorContainer = document.querySelector(".banner_indicators");

  let current = 0;

  // indicators auto create
  banners.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("banner_dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      current = index;
      showBanner(current);
    });
    indicatorContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".banner_dot");

  function showBanner(index) {
    // banner show
    banners.forEach((banner, i) => {
      banner.classList.toggle("active", i === index);
    });

    // indicator update
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // auto slide every 3s
  function nextBanner() {
    current = (current + 1) % banners.length;
    showBanner(current);
  }
  setInterval(nextBanner, 4000);

  // init
  showBanner(current);


  