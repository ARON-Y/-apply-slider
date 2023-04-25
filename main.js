let panel = document.querySelector(".panel");
let btns = document.querySelectorAll(".btns li");
let ring = document.querySelector("#ring");

/* 해야 하는 효과
1. 버튼에 반복을 돌면서 각 버튼에 클릭이벤트를 입혀주기
2. a태그 기본 이벤트 막아주기
3. 패널을 움직이게 하기
4. 모든 버튼을 비활성화 한 뒤 클릭한 대상의 버튼만 활성화 하기 */

btns.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    movePanel(index);

    actClass(index);

    rotRing(index);

    //active(index);

    /* 재이벤트 방지 :
    1. 활성화 클래스가 있다면 return으로 중지시키는 방법
    2. 활성화 되어 이벤트가 발생하면, 이벤트 지속시간동안 클릭자체를 불가능하게 하여 재이벤트가 부여되지 않도록 하는 방법, 이벤트 지속 시간이 끝날 경우 클릭 가능하도록 복구.(동기적 수행 필요) */

    let isOn = e.currentTarget.classList.contains("on");
    if (isOn) return;
  });
});

/* 함수패키징 : 기능단위로 함수를 만드는 방법 */

function movePanel(idx) {
  panel.style.marginLeft = "-100" * idx + "%";
  panel.style.transition = "0.5s";
}

function actClass(idx) {
  for (let el of btns) el.classList.remove("on");
  btns[idx].classList.add("on");
}

function rotRing(idx) {
  ring.className = "";
  ring.classList.add("rot" + idx);
}

/* 단점 : 기능이 세부적으로 나누어지는 경우 기능단위의 함수 패키징을 하게되면 너무 많은 함수로 쪼개어져서 오히려 코드가 번잡스러워 지는 경향이 있다.
그렇다고

function active(idx) {
  panel.style.marginLeft = "-100" * idx + "%";
  panel.style.transition = "0.5s";

  for (let el of btns) el.classList.remove("on");
  btns[idx].classList.add("on");

  ring.className = "";
  ring.classList.add("rot" + idx);
}

처럼 세부적이 아니라 매개변수별, 혹은 다른방법 중에 좀 더 큰 덩어리로 쪼개지는 함수 패키징을 하게되면 패키징의 의미가 없다. (의미가 퇴색)

따라서, 함수패키징은 함수 자체가 복잡한 경우 기능이 뒤섞여서 가독성이 좋지않은 경우에만 하는 것이 일반적이다.
혹은, 유지보수 차원에서 패키징을 하게 되면 이득을 보는 경우 번잡한 코드가 되더라도 패키징을 하기도 한다. 결국은 함수패키징은 단점이 존재하고 이것을 극복하려면 객체지향을 해야한다.
*/
