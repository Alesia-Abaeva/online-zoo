export function addTestimonials(count = 11, arraysOrigin, node) {
  const section = document.querySelector(".section__testimonials");
  const modalTestimonials = document.querySelector(".testimonials-modal");
  const shadow = document.getElementById("shadow-overlay-feed");
  const header = document.querySelector(".header");
  const xClose = document.querySelector(".testimonials__modal_close");

  for (let i = 0; i < count; i++) {
    const modalTestimonials = document.querySelector(".testimonials-modal");
    const containerTestimonials = document.createElement("div");
    containerTestimonials.classList.add("feedback__wrapper");
    containerTestimonials.innerHTML = `<div class="feedback__container" id="${arraysOrigin[i].id}">
      <div class="feedback__descriptions">
          <div class="feedback_avatar">
              <img src="${arraysOrigin[i].foto}" alt="user_icon">
          </div>
  
          <div class="feadback_information">
              <p class="feedback_name">${arraysOrigin[i].name}</p>
              <div class="feedback_details">
                  <p>Local Austria</p>
                  <p>•</p>
                  <p>Today</p>
              </div>
          </div>
  
      </div>
  
      <div class="feedback">
          <p class="feedback-text">${arraysOrigin[i].feedback}</p>
  
      </div>
  </div>`;

    containerTestimonials.onclick = () => {
      let containerFeedbackId =
        containerTestimonials.childNodes[0].getAttribute("id");
      let number = containerFeedbackId.split("_")[1];
      modalTestimonials.innerHTML = `<div class="feedback__container" id="${arraysOrigin[number].id}">
      <div class="feedback__descriptions">
          <div class="feedback_avatar">
              <img src="${arraysOrigin[number].foto}" alt="user_icon">
          </div>

          <div class="feadback_information">
              <p class="feedback_name">${arraysOrigin[number].name}</p>
              <div class="feedback_details">
                  <p>Local Austria</p>
                  <p>•</p>
                  <p>Today</p>
              </div>
          </div>

      </div>

      <div class="feedback" id = "feedback-text">
          <p class="feedback-text">${arraysOrigin[number].feedback}</p>
      </div>
      </div>`;

      shadow.classList.toggle("shadow__overlay");
      section.classList.toggle("active-modal");
      header.classList.toggle("testimonials-head");
    };
    node.appendChild(containerTestimonials);
  }

  shadow.onclick = function closeModalTestimonials() {
    modalTestimonials.innerHTML = " ";
    shadow.classList.remove("shadow__overlay");
    section.classList.remove("active-modal");
    header.classList.remove("testimonials-head");
  };

  xClose.onclick = function closeModalTestimonials() {
    modalTestimonials.innerHTML = " ";
    shadow.classList.remove("shadow__overlay");
    section.classList.remove("active-modal");
    header.classList.remove("testimonials-head");
  };
}
