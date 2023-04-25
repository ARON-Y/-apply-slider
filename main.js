let panel = document.querySelector(".panel");
let btns = document.querySelectorAll(".btns li");
let ring = document.querySelector("#ring");

/* 해야 하는 효과
1. 버튼에 반복을 돌면서 각 버튼에 클릭이벤트를 입혀주기
2. a태그 이전 이벤트 막아주기
3. 패널을 움직이게 하기
4. 모든 버튼을 비활성화 한 뒤 클릭한 대상의 버튼만 활성화 하기 */

btns.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    panel.style.marginLeft = "-100" * index + "%";
    panel.style.transition = "0.5s";

    for (let el of btns) el.classList.remove("on");

    btns[index].classList.add("on");

    ring.className = "";
    ring.classList.add("rot" + index);
  });
});
