

document.getElementById("Result_BT1").onclick = function ChanLeBT1() {
  var content = "";
  var contentt = "";
  var content1 = "";
  var content2 = "";
  for (var soChan = 0; soChan < 100; soChan++) {
    if (soChan % 2 == 0) {
      console.log(soChan);
      content += "  " + soChan;
      content1 = "Số chẵn :" + content;
    }
  }
  for (var soLe = 0; soLe < 100; soLe++) {
    if (soLe % 2 != 0) {
      console.log(soLe);
      contentt += "  " + soLe;
      content2 = " <BR> Số lẻ :" + contentt;
    }
  }
  //   content = "So chan"+n;
  // content = "So chan"+i;
  document.getElementById("divBT1").innerHTML = content1 + "" + content2;
  document.getElementById("divBT1").classList.add("divBT1");
}

document.getElementById("Result_BT2").onclick = function DemSoBT2() {
  var n = 0;
  var content = "";
  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
      n++;
      content = "Số chia hết cho 3 nhỏ hơn 1000 là: " + n + " số";
    }
  }
  document.getElementById("divBT2").innerHTML = content;
  document.getElementById("divBT2").classList.add("divBT2");
}

document.getElementById("Result_BT3").onclick = function NguyenDuongBT3() {
  var sum = 0;
  var content = "";
  for (var i = 1; sum < 10000; i++) {
    sum += i;
    content = "Số nguyên dương nhỏ nhất là: " + i;

  }
  document.getElementById("divBT3").innerHTML = content;
  document.getElementById("divBT3").classList.add("divBT3");
}


document.getElementById("Result_BT4").onclick = function tinhTongBT4() {
  let x1 = +document.getElementById("Num1").value,
    n1 = +document.getElementById("Num2").value,
    sum = 0;
  sumLoop(x1, n1, sum);
  document.getElementById("divBT4").innerHTML = sumLoop(x1, n1, sum);
  document.getElementById("divBT4").classList.add("divBT4");
}

function sumLoop(x, n, sum) {
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
    console.log(x + "^" + i + "+" + "=" + sum);
  }
  return ("Tổng: " + sum);
}

// sumLoop();

document.getElementById("Result_BT5").onclick = function GiaiThuaBT5() {
  let n = document.getElementById("Num").value * 1,
    m = 1;
  var content = "";

  for (let i = 1; i <= n; i++) {
    m = m * i;
    console.log(+m + " * " + i);
    content = "Giai thừa: " + m;
    // console.log(m);

  }
  document.getElementById("divBT5").innerHTML = content;
  document.getElementById("divBT5").classList.add("divBT5");
}


document.getElementById("Result_BT6").onclick = function TaoTheBT6() {
  let divchan = "", divle = "", content = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      content += "<div class = 'card-footer bg-danger text-white'>";
      content += "<p>Div chẵn</p>"
      content += "</div>";
    } else {
      content += "<div class = 'card-footer bg-primary text-white'>";
      content += "<p>Div lẻ</p>"
      content += "</div>";
    }
    document.getElementById("divBT6").innerHTML = content;
  }
}



document.getElementById("Result_BT7").onclick = function NguyenToBT7() {
  let n1 = document.getElementById("Num_NguyenTo").value * 1;
  var result = 0;
  var content = "";
  for (let i = 2; i < n1; i++) {
    checkNT(i);
    if (checkNT(i)) {
      content += i + " ";
    }
  }
  document.getElementById("divBT7").innerHTML = content;
  document.getElementById("divBT7").classList.add("divBT7");
}

function checkNT(x) {
  var Check_SNT;
  for (var i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return 0;
    }

  }
  return 1;

}



