function ServiceWorker() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(swUrl)
        .then((res) => {
          console.log(res,'sucess');
        })
        .catch((err) => {
          console.log(err,'failed');
        });
    });
  }
}

export default ServiceWorker;
