$('input[value="coin"]').on("change", function () {
  if (!this.checked) {
    $(".coin").hide();
    $('input[name="coin"').attr("value", "");
  } else if (this.checked) {
    $(".coin").show();
  }
});
$('input[value="crin"]').on("change", function () {
  if (!this.checked) {
    $(".crin").hide();
    $('input[name="crin"').attr("value", "");
  } else if (this.checked) {
    $(".crin").show();
  }
});
$('input[value="prog"]').on("change", function () {
  if (!this.checked) {
    $(".prog").hide();
    $('input[name="pp"').attr("value", "");
  } else if (this.checked) {
    $(".prog").show();
  }
});
$('input[value="quiz"]').on("change", function () {
  if (!this.checked) {
    $(".quiz").hide();
    $('input[name="quiz"').attr("value", "");
  } else if (this.checked) {
    $(".quiz").show();
  }
});
$(".crinbox").click(function () {
  var cbox = $('input[value="crin"]');
  if (!cbox.checked) {
    cbox.attr("checked", true);
  } else if (cbox.checked) {
    cbox.attr("checked", false);
  }
});
