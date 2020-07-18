$(".crinbox").click(function () {
  var cbox = $('input[value="crin"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".crin").hide();
    $('input[name="crin"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".crin").show();
  }
});
$(".quizbox").click(function () {
  var cbox = $('input[value="quiz"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".quiz").hide();
    $('input[name="quiz"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".quiz").show();
  }
});
$(".gamebox").click(function () {
  var cbox = $('input[value="game"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".game").hide();
    $('input[name="game"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".game").show();
  }
});
$(".ppbox").click(function () {
  var cbox = $('input[value="prog"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".prog").hide();
    $('input[name="pp"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".prog").show();
  }
});
$(".hider").click(function () {
  $(".firstpart").toggle();
  if ($(".firstpart").is(":hidden")) {
    $(this).html("Show School Details");
  } else if ($(".firstpart").is(":visible")) {
    $(this).html("Hide School Details");
  }
});
