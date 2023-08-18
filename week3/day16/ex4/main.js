//클래스
let sucId = document.querySelector(".suc_id");
let failId = document.querySelector(".fail_id");
let sucPw = document.querySelector(".suc_pw");
let failPw = document.querySelector(".fail_pw");
let failsPw = document.querySelector(".fails_pw");
//id
let inputId = document.getElementById("user-id");
let inputPw = document.getElementById("user-pw");
let inputPw2 = document.getElementById("user-pw2");
let loginId = document.getElementById("login-id");
let loginPw = document.getElementById("login-pw");

// id 조건문
inputId.onkeyup = function () {
  if (get4lengthId(inputId.value)) {
    sucId.classList.remove("hide");
    failId.classList.add("hide");
  } else {
    sucId.classList.add("hide");
    failId.classList.remove("hide");
  }
};
// 비밀번호 조건문
inputPw,
  (inputPw2.onkeyup = function () {
    if (pwMatchOr8(inputPw.value, inputPw2.value)) {
      sucPw.classList.remove("hide");
      failPw.classList.add("hide");
    } else {
      sucPw.classList.add("hide");
      failPw.classList.remove("hide");
    }
  });

inputPw.onkeydown = function () {
  if (get8lengthPw(inputPw.value)) {
    failsPw.classList.remove("hide");
  } else {
    failsPw.classList.add("hide");
  }
};

function get4lengthId(value) {
  if (value.length >= 4 && value.length < 15) {
    return true;
  } else false;
}
function get8lengthPw(value) {
  return value.length < 7 ? true : false;
}
function pwMatchOr8(pw1, pw2) {
  if (pw1 === pw2 && pw1.length >= 8) {
    return true;
  } else false;
}
inputPw.onkeyup = function () {
  if (inputId.value === inputPw.value) {
    return (
      (inputPw.value = ""), alert("비밀번호에 아이디가 들어가면 안됩니다.")
    );
  }
};

// 가입하기
fn_save = () => {
  if (!window.localStorage) {
    alert("로컬 스토리지를 지원하지 않음...");
    return;
  }

  if (
    pwMatchOr8(inputPw.value, inputPw2.value) &&
    get4lengthId(inputId.value)
  ) {
    localStorage.setItem(inputId.value, inputPw.value);
    window.close();
  } else {
    alert("아이디 비밀번호를 입력하시고 가입하기를 누르세요");
  }
};

// 로그인하기

function fn_login() {
  // 로그인 페이지 아이디의 입력값이 로컬키에 존재하지않으면 false가 나올거고 존재한다면 로컬에 저장된 값을
  // 로그인 페이지 비밀번호 값과 비교해서 일치하면 로그인성공 일치하지않으면 로그인실패
  let ID = loginId.value;
  let PASSWORD = loginPw.value;
  console.log("입력 아이디: ", ID);
  console.log("입력 패스워드: ", PASSWORD);
  if (localStorage.getItem(ID) === PASSWORD) {
    location.href = "ex_main.html";
  } else {
    alert("로그인 실패");
  }
}
