let skillsSection = document.querySelector(".languages");
window.onscroll = function () {
  let windowScrollTop = this.pageYOffset;
  let skillsOfssetTop = skillsSection.offsetTop;
  let skillsOfssetHeight = skillsSection.offsetHeight;
  let windowHeight = this.innerHeight;


  if (windowScrollTop >= skillsOfssetTop + skillsOfssetHeight - windowHeight) {
    let allskills = document.querySelectorAll(".skill .progress span");
    allskills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};



