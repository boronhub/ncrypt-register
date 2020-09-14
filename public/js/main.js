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
$(".coinbox").click(function () {
  var cbox = $('input[value="coin"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".coin").hide();
    $('input[name="coin"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".coin").show();
  }
});
$(".ambox").click(function () {
  var cbox = $('input[value="am"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".am").hide();
    $('input[name="am"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".am").show();
  }
});
$(".surpbox").click(function () {
  var cbox = $('input[value="surp"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".surp").hide();
    $('input[name="surp"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".surp").show();
  }
});
$(".filmbox").click(function () {
  var cbox = $('input[value="film"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".film").hide();
    $('input[name="film"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".film").show();
  }
});
$(".photobox").click(function () {
  var cbox = $('input[value="photo"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".photo").hide();
    $('input[name="photo"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".photo").show();
  }
});
$(".ardubox").click(function () {
  var cbox = $('input[value="ardu"]');
  cbox.prop("checked", !cbox.prop("checked"));
  if (!cbox.prop("checked")) {
    $(".ardu").hide();
    $('input[name="ardu"').attr("value", "");
  } else if (cbox.prop("checked")) {
    $(".ardu").show();
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
