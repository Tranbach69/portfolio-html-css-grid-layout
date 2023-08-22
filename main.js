
window.addEventListener("DOMContentLoaded", (event) => {
  const DuAn = document.getElementById('scrollButtonDuAn');
  const ChungChi = document.getElementById('scrollButtonChungChi');
  const LyLich = document.getElementById('scrollButtonLyLich');
  const ThongTin = document.getElementById('scrollButtonThongTin');
  if (DuAn) {
    DuAn.addEventListener('click', scrollToDuAn, false);
  }
  if (ChungChi) {
    ChungChi.addEventListener('click', scrollToChungChi, false);
  }
  if (LyLich) {
    LyLich.addEventListener('click', scrollToLyLich, false);
  }
  if (ThongTin) {
    ThongTin.addEventListener('click', scrollToThongTin, false);
  }
});
function scrollToDuAn(){
  const targetDiv = document.getElementById('DuAn');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToChungChi(){
  const targetDiv = document.getElementById('ChungChi');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToLyLich(){
  const targetDiv = document.getElementById('LyLich');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToThongTin(){
  const targetDiv = document.getElementById('ThongTin');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}